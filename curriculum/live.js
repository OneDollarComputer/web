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
  escapeHtml,
  FIREBASE,
  getDb,
  joinUrl,
  renderLessonBody
} from "./session-shared.js";

const app = initializeApp(FIREBASE);
const auth = getAuth(app);
const db = getDb();
const google = new GoogleAuthProvider();

const loadStatus = document.getElementById("loadStatus");
const liveView = document.getElementById("liveView");
const liveTitle = document.getElementById("liveTitle");
const liveMeta = document.getElementById("liveMeta");
const pinCode = document.getElementById("pinCode");
const joinLink = document.getElementById("joinLink");
const qrImg = document.getElementById("qrImg");
const studentCount = document.getElementById("studentCount");
const lessonPreview = document.getElementById("lessonPreview");
const quizResults = document.getElementById("quizResults");
const photoWall = document.getElementById("photoWall");
const btnEnd = document.getElementById("btnEnd");

const sessionId = new URLSearchParams(location.search).get("session");
let me = null;
let sessionData = null;
let lastAnswers = {};
let unsubs = [];

function cleanup() {
  unsubs.forEach((fn) => fn());
  unsubs = [];
}

function setLoadStatus(msg, isError = false) {
  loadStatus.textContent = msg || "";
  loadStatus.classList.toggle("error", isError);
}

function isOwner() {
  return me && sessionData && sessionData.ownerUid === me.uid;
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

function attachListeners(sid) {
  cleanup();
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}`), (snap) => {
    if (!snap.exists()) return;
    const session = snap.val();
    sessionData = session;
    liveTitle.textContent = session.title || "Live workshop";
    renderLessonBody(lessonPreview, session.body || {});
    renderQuizResults(session.body?.quizzes || [], lastAnswers);
  }));
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}/students`), (snap) => {
    const count = snap.exists() ? Object.keys(snap.val()).length : 0;
    studentCount.textContent = `👥 ${count} student${count === 1 ? "" : "s"}`;
  }));
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}/answers`), (snap) => {
    lastAnswers = snap.val() || {};
    renderQuizResults(sessionData?.body?.quizzes || [], lastAnswers);
  }));
  unsubs.push(onValue(ref(db, `curriculum/live/${sid}/photos`), (snap) => {
    renderPhotos(snap.val() || {});
  }));
}

function showSession(session) {
  sessionData = session;
  const url = joinUrl(session.pin);
  liveTitle.textContent = session.title || "Live workshop";
  liveMeta.textContent = "Students see a copy of this lesson — no sign-in.";
  pinCode.textContent = session.pin;
  joinLink.href = url;
  joinLink.textContent = url.replace(/^https?:\/\//, "");
  qrImg.src =
    `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`;
  renderLessonBody(lessonPreview, session.body || {});
  renderQuizResults(session.body?.quizzes || [], {});
  renderPhotos({});
  loadStatus.hidden = true;
  liveView.hidden = false;
  btnEnd.hidden = !isOwner();
}

async function loadSession() {
  if (!sessionId) {
    setLoadStatus("Missing session. Start a workshop from the lesson editor.", true);
    return;
  }
  const snap = await get(ref(db, `curriculum/live/${sessionId}`));
  if (!snap.exists()) {
    setLoadStatus("Workshop not found.", true);
    return;
  }
  const session = snap.val();
  if (session.status !== "active") {
    setLoadStatus("This workshop has ended.", true);
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
    setLoadStatus("Only the lesson owner can end this workshop.", true);
    loadStatus.hidden = false;
    return;
  }
  if (!confirm("End this workshop? Students will no longer be able to join.")) return;
  btnEnd.disabled = true;
  const now = Date.now();
  try {
    const updates = {
      [`curriculum/live/${sessionId}/status`]: "ended",
      [`curriculum/live/${sessionId}/endedAt`]: now,
      [`curriculum/liveByPin/${sessionData.pin}/status`]: "ended"
    };
    if (sessionData.lessonId) {
      updates[`curriculum/lessons/${sessionData.lessonId}/liveRoom`] = null;
    }
    await update(ref(db), updates);
    setLoadStatus("Workshop ended.");
    liveView.hidden = true;
    loadStatus.hidden = false;
    cleanup();
  } catch (err) {
    console.error(err);
    btnEnd.disabled = false;
    setLoadStatus("Could not end workshop.", true);
    loadStatus.hidden = false;
  }
}

btnEnd?.addEventListener("click", () => endWorkshop());

onAuthStateChanged(auth, async (user) => {
  me = user;
  if (sessionData) btnEnd.hidden = !isOwner();
});

if (!sessionId) {
  setLoadStatus("Missing session. Start a workshop from the lesson editor.", true);
} else {
  loadSession().catch((err) => {
    console.error(err);
    setLoadStatus("Could not load workshop.", true);
  });
}
