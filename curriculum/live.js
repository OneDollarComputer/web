import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  get,
  onValue,
  ref,
  update
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import {
  countStudents,
  escapeHtml,
  FIREBASE,
  formatTimeLeft,
  getDb,
  joinUrl,
  lessonSlides,
  renderSlide
} from "./session-shared.js";

const app = initializeApp(FIREBASE);
const auth = getAuth(app);
const db = getDb();
const google = new GoogleAuthProvider();

const loadStatus = document.getElementById("loadStatus");
const liveView = document.getElementById("liveView");
const liveTitle = document.getElementById("liveTitle");
const joinLink = document.getElementById("joinLink");
const timeLeft = document.getElementById("timeLeft");
const studentCount = document.getElementById("studentCount");
const viewedCount = document.getElementById("viewedCount");
const activeCount = document.getElementById("activeCount");
const slideIndicator = document.getElementById("slideIndicator");
const btnPrevSlide = document.getElementById("btnPrevSlide");
const btnNextSlide = document.getElementById("btnNextSlide");
const lessonPreview = document.getElementById("lessonPreview");
const quizResults = document.getElementById("quizResults");
const photoWall = document.getElementById("photoWall");
const sessionHistory = document.getElementById("sessionHistory");
const btnEnd = document.getElementById("btnEnd");

const sessionId = new URLSearchParams(location.search).get("session");
let me = null;
let sessionData = null;
let lastAnswers = {};
let slides = [];
let currentSlide = 0;
let unsubs = [];
let expiryTimer = null;

function cleanup() {
  unsubs.forEach((fn) => fn());
  unsubs = [];
  clearInterval(expiryTimer);
}

function setLoadStatus(msg, isError = false) {
  loadStatus.textContent = msg || "";
  loadStatus.classList.toggle("error", isError);
}

function isOwner() {
  return me && sessionData && sessionData.ownerUid === me.uid;
}

function renderTeacherSlide(session) {
  slides = lessonSlides(session.body || {});
  if (!slides.length) {
    lessonPreview.innerHTML = `<p class="empty-wall">Add content to the lesson to build slides.</p>`;
    slideIndicator.textContent = "0 / 0";
    btnPrevSlide.disabled = true;
    btnNextSlide.disabled = true;
    return;
  }
  const idx = Math.min(Math.max(0, currentSlide), slides.length - 1);
  currentSlide = idx;
  slideIndicator.textContent = `${idx + 1} / ${slides.length}`;
  btnPrevSlide.disabled = idx <= 0;
  btnNextSlide.disabled = idx >= slides.length - 1;
  renderSlide(lessonPreview, session.body || {}, slides[idx]);
}

async function setSlide(next) {
  if (!sessionId || !sessionData || !isOwner()) return;
  const max = Math.max(0, slides.length - 1);
  currentSlide = Math.min(Math.max(0, next), max);
  try {
    await update(ref(db, `curriculum/live/${sessionId}`), { currentSlide });
  } catch (err) {
    console.error(err);
  }
}

function renderQuizResults(quizzes, answersMap) {
  if (!quizzes?.length) {
    quizResults.innerHTML = `<p class="empty-wall">No quizzes in this lesson.</p>`;
    return;
  }
  quizResults.replaceChildren();
  quizzes.forEach((quiz, qi) => {
    const counts = new Array(quiz.choices.length).fill(0);
    Object.values(answersMap || {}).forEach((studentAnswers) => {
      const row = studentAnswers?.[qi] ?? studentAnswers?.[String(qi)];
      const idx = typeof row === "object" ? row.choiceIndex : row;
      if (typeof idx === "number" && idx >= 0 && idx < counts.length) counts[idx]++;
    });
    const total = counts.reduce((a, b) => a + b, 0) || 1;
    const section = document.createElement("div");
    section.className = "quiz-result";
    const bars = quiz.choices.map((choice, ci) => {
      const pct = Math.round((counts[ci] / total) * 100);
      return (
        `<div class="quiz-bar-row">` +
        `<div><div>${escapeHtml(choice)}</div>` +
        `<div class="quiz-bar-track"><div class="quiz-bar-fill" style="width:${pct}%"></div></div></div>` +
        `<span>${counts[ci]} · ${pct}%</span></div>`
      );
    }).join("");
    section.innerHTML = `<h3>${escapeHtml(quiz.question)}</h3><div class="quiz-bars">${bars}</div>`;
    quizResults.appendChild(section);
  });
}

function renderPhotos(photosMap) {
  const items = Object.values(photosMap || {})
    .filter((p) => p?.dataUrl)
    .sort((a, b) => (b.at || 0) - (a.at || 0));
  if (!items.length) {
    photoWall.innerHTML = `<p class="empty-wall">Photos appear when students tap Done.</p>`;
    return;
  }
  photoWall.replaceChildren();
  items.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.dataUrl;
    img.alt = "Student build";
    img.loading = "lazy";
    photoWall.appendChild(img);
  });
}

function updateStats(studentsMap) {
  const stats = countStudents(studentsMap);
  studentCount.textContent = `${stats.joined} joined`;
  viewedCount.textContent = `${stats.viewed} viewed`;
  activeCount.textContent = `${stats.active} active now`;
}

function updateExpiry() {
  if (!sessionData?.expiresAt) return;
  timeLeft.textContent = formatTimeLeft(sessionData.expiresAt);
}

async function loadSessionHistory(lessonId) {
  if (!lessonId || !sessionHistory) return;
  const snap = await get(ref(db, `curriculum/lessons/${lessonId}/sessions`));
  const items = snap.exists()
    ? Object.entries(snap.val())
      .map(([id, row]) => ({ id, ...row }))
      .sort((a, b) => (b.endedAt || b.startedAt || 0) - (a.endedAt || a.startedAt || 0))
      .slice(0, 8)
    : [];
  if (!items.length) {
    sessionHistory.innerHTML = `<p class="empty-wall">Past classes will appear here.</p>`;
    return;
  }
  sessionHistory.replaceChildren();
  items.forEach((row) => {
    const li = document.createElement("li");
    const when = row.endedAt || row.startedAt;
    const date = when ? new Date(when).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) : "";
    li.innerHTML =
      `<strong>${escapeHtml(row.title || "Class")}</strong>` +
      `<span>${escapeHtml(date)} · code ${escapeHtml(row.pin || "—")} · ${row.studentCount || 0} joined · ${row.viewedCount || 0} viewed</span>`;
    sessionHistory.appendChild(li);
  });
}

function attachListeners(sid) {
  cleanup();
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}`), (snap) => {
    if (!snap.exists()) return;
    const session = snap.val();
    sessionData = session;
    liveTitle.textContent = session.title || "Live class";
    currentSlide = typeof session.currentSlide === "number" ? session.currentSlide : 0;
    renderTeacherSlide(session);
    renderQuizResults(session.body?.quizzes || [], lastAnswers);
    updateExpiry();
  }));
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}/students`), (snap) => {
    updateStats(snap.val() || {});
  }));
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}/answers`), (snap) => {
    lastAnswers = snap.val() || {};
    renderQuizResults(sessionData?.body?.quizzes || [], lastAnswers);
  }));
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}/photos`), (snap) => {
    renderPhotos(snap.val() || {});
  }));
  expiryTimer = setInterval(updateExpiry, 30000);
}

function showSession(session) {
  sessionData = session;
  currentSlide = typeof session.currentSlide === "number" ? session.currentSlide : 0;
  liveTitle.textContent = session.title || "Live class";
  const short = joinUrl(session.pin).replace(/^https?:\/\//, "");
  joinLink.href = joinUrl(session.pin);
  joinLink.textContent = short;
  if (session.durationMs) {
    timeLeft.textContent = formatTimeLeft(session.expiresAt);
  }
  renderTeacherSlide(session);
  renderQuizResults(session.body?.quizzes || [], {});
  renderPhotos({});
  loadSessionHistory(session.lessonId);
  loadStatus.hidden = true;
  liveView.hidden = false;
  btnEnd.hidden = !isOwner();
}

async function loadSession() {
  if (!sessionId) {
    setLoadStatus("Missing session. Start a class from the lesson editor.", true);
    return;
  }
  const snap = await get(ref(db, `curriculum/live/${sessionId}`));
  if (!snap.exists()) {
    setLoadStatus("Class not found.", true);
    return;
  }
  const session = snap.val();
  if (session.status !== "active") {
    setLoadStatus("This class has ended.", true);
    await loadSessionHistory(session.lessonId);
    return;
  }
  showSession(session);
  attachListeners(sessionId);
}

async function endWorkshop() {
  if (!sessionId || !sessionData) return;
  if (!me) {
    try {
      await signInWithPopup(auth, google);
    } catch {
      return;
    }
  }
  if (!isOwner()) {
    setLoadStatus("Only the lesson owner can end this class.", true);
    loadStatus.hidden = false;
    return;
  }
  if (!confirm("End this class? Students will no longer be able to join.")) return;
  btnEnd.disabled = true;
  const now = Date.now();
  const studentsSnap = await get(ref(db, `curriculum/live/${sessionId}/students`));
  const stats = countStudents(studentsSnap.val() || {});
  const summary = {
    sessionId,
    pin: sessionData.pin,
    lessonId: sessionData.lessonId,
    title: sessionData.title || "Class",
    startedAt: sessionData.createdAt || now,
    endedAt: now,
    durationMs: sessionData.durationMs || null,
    expiresAt: sessionData.expiresAt || null,
    studentCount: stats.joined,
    viewedCount: stats.viewed
  };
  try {
    const updates = {
      [`curriculum/live/${sessionId}/status`]: "ended",
      [`curriculum/live/${sessionId}/endedAt`]: now,
      [`curriculum/liveByPin/${sessionData.pin}/status`]: "ended"
    };
    if (sessionData.lessonId) {
      updates[`curriculum/lessons/${sessionData.lessonId}/liveRoom`] = null;
      updates[`curriculum/lessons/${sessionData.lessonId}/sessions/${sessionId}`] = summary;
      if (sessionData.ownerUid) {
        updates[`curriculum/byUser/${sessionData.ownerUid}/sessions/${sessionId}`] = {
          lessonId: sessionData.lessonId,
          pin: sessionData.pin,
          title: summary.title,
          endedAt: now,
          studentCount: stats.joined,
          viewedCount: stats.viewed
        };
      }
    }
    await update(ref(db), updates);
    setLoadStatus("Class ended.");
    liveView.hidden = true;
    loadStatus.hidden = false;
    cleanup();
    await loadSessionHistory(sessionData.lessonId);
  } catch (err) {
    console.error(err);
    btnEnd.disabled = false;
    setLoadStatus("Could not end class.", true);
    loadStatus.hidden = false;
  }
}

btnPrevSlide?.addEventListener("click", () => setSlide(currentSlide - 1));
btnNextSlide?.addEventListener("click", () => setSlide(currentSlide + 1));
btnEnd?.addEventListener("click", () => endWorkshop());

onAuthStateChanged(auth, async (user) => {
  me = user;
  if (sessionData) btnEnd.hidden = !isOwner();
});

if (!sessionId) {
  setLoadStatus("Missing session. Start a class from the lesson editor.", true);
} else {
  loadSession().catch((err) => {
    console.error(err);
    setLoadStatus("Could not load class.", true);
  });
}
