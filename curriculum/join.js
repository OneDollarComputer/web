import {
  get,
  onValue,
  ref,
  set,
  push,
  update
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import {
  getDb,
  joinCodeFromLocation,
  lessonSlides,
  MAX_PHOTO_BYTES,
  normalizeLessonBody,
  renderHtmlActivities,
  renderSlide,
  studentId
} from "./session-shared.js?v=20260905c";

const db = getDb();
const pinGate = document.getElementById("pinGate");
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const pinStatus = document.getElementById("pinStatus");
const lessonView = document.getElementById("lessonView");
const lessonTitle = document.getElementById("lessonTitle");
const teacherHint = document.getElementById("teacherHint");
const tabActivity = document.getElementById("tabActivity");
const tabFollow = document.getElementById("tabFollow");
const viewActivity = document.getElementById("viewActivity");
const viewFollow = document.getElementById("viewFollow");
const activityBody = document.getElementById("activityBody");
const activityEmpty = document.getElementById("activityEmpty");
const slideProgress = document.getElementById("slideProgress");
const lessonBody = document.getElementById("lessonBody");
const btnPrevSlide = document.getElementById("btnPrevSlide");
const btnNextSlide = document.getElementById("btnNextSlide");
const btnJumpTeacher = document.getElementById("btnJumpTeacher");
const photoInput = document.getElementById("photoInput");
const btnCamera = document.getElementById("btnCamera");
const btnUpload = document.getElementById("btnUpload");
const btnDone = document.getElementById("btnDone");
const btnClearPhoto = document.getElementById("btnClearPhoto");
const photoPreview = document.getElementById("photoPreview");
const photoPreviewImg = document.getElementById("photoPreviewImg");
const cameraDialog = document.getElementById("cameraDialog");
const cameraVideo = document.getElementById("cameraVideo");
const btnCapture = document.getElementById("btnCapture");
const btnCancelCamera = document.getElementById("btnCancelCamera");
const doneStatus = document.getElementById("doneStatus");

let sessionId = null;
let sessionPin = null;
let myId = studentId();
let pendingPhoto = null;
let cameraStream = null;
let unsubSession = null;
let heartbeatTimer = null;
let slides = [];
let teacherSlide = 0;
let followSlide = 0;
let followTeacher = true;
let activeTab = "activity";
let lastSession = null;
let hasActivity = false;

function setPinStatus(msg, isError = false) {
  pinStatus.textContent = msg || "";
  pinStatus.classList.toggle("error", isError);
}

function setDoneStatus(msg, isError = false) {
  doneStatus.textContent = msg || "";
  doneStatus.classList.toggle("error", isError);
}

function photoBytes(dataUrl) {
  const comma = dataUrl.indexOf(",");
  if (comma < 0) return 0;
  return Math.ceil((dataUrl.length - comma - 1) * 3 / 4);
}

function showPhotoPreview(dataUrl) {
  photoPreviewImg.src = dataUrl;
  photoPreview.hidden = false;
  btnDone.hidden = false;
}

function clearPhoto() {
  pendingPhoto = null;
  photoInput.value = "";
  photoPreview.hidden = true;
  photoPreviewImg.removeAttribute("src");
  btnDone.hidden = true;
}

function setPhotoFromDataUrl(dataUrl) {
  if (!dataUrl.startsWith("data:image/")) {
    setDoneStatus("Choose an image file.", true);
    return;
  }
  if (photoBytes(dataUrl) > MAX_PHOTO_BYTES) {
    setDoneStatus("Photo is too large. Try a smaller image.", true);
    clearPhoto();
    return;
  }
  pendingPhoto = dataUrl;
  showPhotoPreview(dataUrl);
  setDoneStatus("Ready to send.");
}

async function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((t) => t.stop());
    cameraStream = null;
  }
  cameraVideo.srcObject = null;
}

async function openCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    setDoneStatus("Camera not available in this browser.", true);
    return;
  }
  setDoneStatus("");
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false
    });
    cameraVideo.srcObject = cameraStream;
    cameraDialog.showModal();
  } catch (err) {
    console.error(err);
    setDoneStatus("Could not open camera.", true);
    await stopCamera();
  }
}

function captureFromCamera() {
  const video = cameraVideo;
  if (!video.videoWidth) return;
  const maxW = 1600;
  const scale = Math.min(1, maxW / video.videoWidth);
  const w = Math.round(video.videoWidth * scale);
  const h = Math.round(video.videoHeight * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.getContext("2d").drawImage(video, 0, 0, w, h);
  let quality = 0.88;
  let dataUrl = canvas.toDataURL("image/jpeg", quality);
  while (photoBytes(dataUrl) > MAX_PHOTO_BYTES && quality > 0.4) {
    quality -= 0.1;
    dataUrl = canvas.toDataURL("image/jpeg", quality);
  }
  stopCamera();
  cameraDialog.close();
  setPhotoFromDataUrl(dataUrl);
}

async function loadSessionByPin(pin) {
  const pinSnap = await get(ref(db, `curriculum/liveByPin/${pin}`));
  if (!pinSnap.exists()) {
    throw new Error("Room not found. Check the code with your teacher.");
  }
  const pinRow = pinSnap.val();
  if (pinRow.status !== "active") {
    throw new Error("This class has ended.");
  }
  if (pinRow.expiresAt && pinRow.expiresAt < Date.now()) {
    throw new Error("This class has expired.");
  }
  const sid = pinRow.sessionId;
  const sessionSnap = await get(ref(db, `curriculum/live/${sid}`));
  if (!sessionSnap.exists()) {
    throw new Error("Class not found.");
  }
  const session = sessionSnap.val();
  if (session.status !== "active") {
    throw new Error("This class has ended.");
  }
  return { sid, session, pin };
}

async function registerStudent(sid) {
  const path = `curriculum/live/${sid}/students/${myId}`;
  const snap = await get(ref(db, path));
  const now = Date.now();
  if (!snap.exists()) {
    await set(ref(db, path), { joinedAt: now, viewed: true, lastSeen: now });
    return;
  }
  await update(ref(db, path), { viewed: true, lastSeen: now });
}

async function heartbeat(sid) {
  try {
    await update(ref(db, `curriculum/live/${sid}/students/${myId}`), {
      lastSeen: Date.now(),
      viewed: true
    });
  } catch {
    /* ignore */
  }
}

async function restoreMyAnswers(sid) {
  const snap = await get(ref(db, `curriculum/live/${sid}/answers/${myId}`));
  if (!snap.exists()) return;
  const answers = snap.val() || {};
  Object.entries(answers).forEach(([qi, row]) => {
    const choiceIndex = typeof row === "object" ? row.choiceIndex : row;
    if (typeof choiceIndex !== "number") return;
    const section = lessonBody.querySelector(`[data-quiz-index="${qi}"]`);
    if (!section) return;
    section.querySelectorAll(".ws-quiz-choice").forEach((el) => {
      el.disabled = true;
      el.classList.toggle("is-selected", el.dataset.choiceIndex === String(choiceIndex));
    });
  });
}

function setTab(tab) {
  activeTab = tab === "follow" ? "follow" : "activity";
  const onActivity = activeTab === "activity";
  tabActivity?.classList.toggle("is-active", onActivity);
  tabFollow?.classList.toggle("is-active", !onActivity);
  tabActivity?.setAttribute("aria-selected", onActivity ? "true" : "false");
  tabFollow?.setAttribute("aria-selected", onActivity ? "false" : "true");
  if (viewActivity) viewActivity.hidden = !onActivity;
  if (viewFollow) viewFollow.hidden = onActivity;
  if (!onActivity && lastSession) renderFollowSlide(lastSession);
}

function renderActivity(session) {
  const body = normalizeLessonBody(session.body || {});
  const count = renderHtmlActivities(activityBody, body);
  hasActivity = count > 0;
  if (activityEmpty) activityEmpty.hidden = hasActivity;
  if (viewActivity) viewActivity.classList.toggle("is-empty", !hasActivity);
}

function updateTeacherHint() {
  if (!teacherHint) return;
  if (!slides.length) {
    teacherHint.textContent = "";
    return;
  }
  const idx = Math.min(Math.max(0, teacherSlide), slides.length - 1);
  const slide = slides[idx];
  const label = slide?.title || `Slide ${idx + 1}`;
  teacherHint.textContent = `Teacher is on: ${label} (${idx + 1}/${slides.length})`;
}

function renderFollowSlide(session) {
  slides = lessonSlides(session.body || {});
  if (!slides.length) {
    lessonBody.innerHTML = `<p class="empty-wall">Waiting for your teacher…</p>`;
    slideProgress.textContent = "";
    btnPrevSlide.disabled = true;
    btnNextSlide.disabled = true;
    return;
  }

  if (followTeacher) followSlide = teacherSlide;
  const idx = Math.min(Math.max(0, followSlide), slides.length - 1);
  followSlide = idx;
  slideProgress.textContent = `Slide ${idx + 1} of ${slides.length}`;
  btnPrevSlide.disabled = idx <= 0;
  btnNextSlide.disabled = idx >= slides.length - 1;
  btnJumpTeacher.hidden = followTeacher || followSlide === teacherSlide;

  renderSlide(lessonBody, session.body || {}, slides[idx], {
    onAnswer: async (quizIndex, choiceIndex, section, btn) => {
      if (!sessionId) return;
      section.querySelectorAll(".ws-quiz-choice").forEach((el) => {
        el.classList.remove("is-selected");
        el.disabled = true;
      });
      btn.classList.add("is-selected");
      try {
        await set(ref(db, `curriculum/live/${sessionId}/answers/${myId}/${quizIndex}`), {
          choiceIndex,
          at: Date.now()
        });
      } catch (err) {
        console.error(err);
        setDoneStatus("Could not save answer.", true);
      }
    }
  });
}

function renderSession(session) {
  lastSession = session;
  lessonTitle.textContent = session.title || "Class";
  slides = lessonSlides(session.body || {});
  teacherSlide = typeof session.currentSlide === "number" ? session.currentSlide : 0;
  if (followTeacher) followSlide = teacherSlide;
  updateTeacherHint();
  renderActivity(session);

  if (!hasActivity && activeTab === "activity") setTab("follow");
  else if (activeTab === "follow") renderFollowSlide(session);
  else if (viewFollow && !viewFollow.hidden) renderFollowSlide(session);
}

function watchSession(sid) {
  if (unsubSession) unsubSession();
  const sessionRef = ref(db, `curriculum/live/${sid}`);
  unsubSession = onValue(sessionRef, async (snap) => {
    if (!snap.exists() || snap.val().status !== "active") {
      setDoneStatus("This class has ended.", true);
      btnCamera.disabled = true;
      btnUpload.disabled = true;
      btnDone.disabled = true;
      clearInterval(heartbeatTimer);
      return;
    }
    const session = snap.val();
    const prevTeacher = teacherSlide;
    renderSession(session);
    if (followTeacher && session.currentSlide !== prevTeacher && activeTab === "follow") {
      renderFollowSlide(session);
    }
    await restoreMyAnswers(sid);
  });
}

async function enterWorkshop(pin) {
  setPinStatus("Joining…");
  const { sid, pin: normalizedPin } = await loadSessionByPin(pin);
  sessionId = sid;
  sessionPin = normalizedPin;
  pinGate.hidden = true;
  lessonView.hidden = false;
  setPinStatus("");
  // Keep /curriculum/join/?pin= — do not replaceState to /NNNN (404 SPA is dark and confusing).
  const joinPath = `/curriculum/join/?pin=${encodeURIComponent(normalizedPin)}`;
  if (location.pathname + location.search !== joinPath) {
    history.replaceState(null, "", joinPath);
  }
  watchSession(sid);
  try {
    await registerStudent(sid);
  } catch (err) {
    console.error(err);
  }
  clearInterval(heartbeatTimer);
  heartbeatTimer = setInterval(() => heartbeat(sid), 30000);
}

function joinErrorMessage(err) {
  const msg = String(err?.message || err || "");
  if (msg.includes("PERMISSION_DENIED") || err?.code === "PERMISSION_DENIED") {
    return "Room not open yet. Ask your teacher to tap Go live.";
  }
  return err?.message || "Could not join.";
}

tabActivity?.addEventListener("click", () => setTab("activity"));
tabFollow?.addEventListener("click", () => setTab("follow"));

btnPrevSlide?.addEventListener("click", () => {
  followTeacher = false;
  followSlide = Math.max(0, followSlide - 1);
  if (lastSession) renderFollowSlide(lastSession);
});

btnNextSlide?.addEventListener("click", () => {
  followTeacher = false;
  followSlide = Math.min(slides.length - 1, followSlide + 1);
  if (lastSession) renderFollowSlide(lastSession);
});

btnJumpTeacher?.addEventListener("click", () => {
  followTeacher = true;
  followSlide = teacherSlide;
  if (lastSession) renderFollowSlide(lastSession);
});

pinForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pin = pinInput.value.replace(/\D/g, "").slice(0, 4);
  if (pin.length !== 4) {
    setPinStatus("Enter the 4-digit room code.", true);
    return;
  }
  try {
    await enterWorkshop(pin);
  } catch (err) {
    console.error(err);
    setPinStatus(joinErrorMessage(err), true);
  }
});

btnUpload?.addEventListener("click", () => photoInput.click());
btnCamera?.addEventListener("click", () => openCamera());
btnCancelCamera?.addEventListener("click", async () => {
  await stopCamera();
  cameraDialog.close();
});
btnCapture?.addEventListener("click", () => captureFromCamera());
cameraDialog?.addEventListener("close", () => stopCamera());
btnClearPhoto?.addEventListener("click", () => {
  clearPhoto();
  setDoneStatus("");
});

photoInput?.addEventListener("change", () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => setPhotoFromDataUrl(String(reader.result || ""));
  reader.onerror = () => setDoneStatus("Could not read that file.", true);
  reader.readAsDataURL(file);
});

btnDone?.addEventListener("click", async () => {
  if (!sessionId || !pendingPhoto) return;
  btnDone.disabled = true;
  setDoneStatus("Sending…");
  try {
    const photoRef = push(ref(db, `curriculum/live/${sessionId}/photos`));
    await set(photoRef, {
      studentId: myId,
      dataUrl: pendingPhoto,
      at: Date.now()
    });
    clearPhoto();
    setDoneStatus("Sent — nice work!");
  } catch (err) {
    console.error(err);
    setDoneStatus("Could not send photo.", true);
  } finally {
    btnDone.disabled = false;
  }
});

const bootPin = joinCodeFromLocation();
if (bootPin) {
  pinInput.value = bootPin;
  enterWorkshop(bootPin).catch((err) => {
    console.error(err);
    setPinStatus(joinErrorMessage(err), true);
  });
}
