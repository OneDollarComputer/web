import {
  get,
  onValue,
  ref,
  set,
  push
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import {
  escapeHtml,
  getDb,
  joinUrl,
  MAX_PHOTO_BYTES,
  renderLessonBody,
  studentId
} from "./session-shared.js";

const db = getDb();
const pinGate = document.getElementById("pinGate");
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const pinStatus = document.getElementById("pinStatus");
const lessonView = document.getElementById("lessonView");
const lessonTitle = document.getElementById("lessonTitle");
const lessonBody = document.getElementById("lessonBody");
const photoInput = document.getElementById("photoInput");
const btnPickPhoto = document.getElementById("btnPickPhoto");
const btnDone = document.getElementById("btnDone");
const doneStatus = document.getElementById("doneStatus");

let sessionId = null;
let sessionPin = null;
let myId = studentId();
let pendingPhoto = null;
let unsubSession = null;

function setPinStatus(msg, isError = false) {
  pinStatus.textContent = msg || "";
  pinStatus.classList.toggle("error", isError);
}

function setDoneStatus(msg, isError = false) {
  doneStatus.textContent = msg || "";
  doneStatus.classList.toggle("error", isError);
}

async function loadSessionByPin(pin) {
  const pinSnap = await get(ref(db, `curriculum/liveByPin/${pin}`));
  if (!pinSnap.exists()) {
    throw new Error("PIN not found. Check with your teacher.");
  }
  const pinRow = pinSnap.val();
  if (pinRow.status !== "active") {
    throw new Error("This workshop has ended.");
  }
  if (pinRow.expiresAt && pinRow.expiresAt < Date.now()) {
    throw new Error("This workshop has expired.");
  }
  const sid = pinRow.sessionId;
  const sessionSnap = await get(ref(db, `curriculum/live/${sid}`));
  if (!sessionSnap.exists()) {
    throw new Error("Workshop not found.");
  }
  const session = sessionSnap.val();
  if (session.status !== "active") {
    throw new Error("This workshop has ended.");
  }
  return { sid, session, pin };
}

async function registerStudent(sid) {
  const path = `curriculum/live/${sid}/students/${myId}`;
  const snap = await get(ref(db, path));
  if (!snap.exists()) {
    await set(ref(db, path), { joinedAt: Date.now() });
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

function watchSession(sid) {
  if (unsubSession) unsubSession();
  const sessionRef = ref(db, `curriculum/live/${sid}`);
  unsubSession = onValue(sessionRef, async (snap) => {
    if (!snap.exists() || snap.val().status !== "active") {
      setDoneStatus("This workshop has ended.", true);
      btnPickPhoto.disabled = true;
      btnDone.disabled = true;
      return;
    }
    renderSession(snap.val());
    await restoreMyAnswers(sid);
  });
}

function renderSession(session) {
  lessonTitle.textContent = session.title || "Workshop";
  renderLessonBody(lessonBody, session.body || {}, {
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

async function enterWorkshop(pin) {
  setPinStatus("Joining…");
  const { sid, pin: normalizedPin } = await loadSessionByPin(pin);
  sessionId = sid;
  sessionPin = normalizedPin;
  await registerStudent(sid);
  watchSession(sid);
  pinGate.hidden = true;
  lessonView.hidden = false;
  history.replaceState(null, "", `?pin=${encodeURIComponent(normalizedPin)}`);
  setPinStatus("");
}

function joinErrorMessage(err) {
  const msg = String(err?.message || err || "");
  if (msg.includes("PERMISSION_DENIED") || err?.code === "PERMISSION_DENIED") {
    return "Room not open yet. Ask your teacher to tap Go live.";
  }
  return err?.message || "Could not join.";
}

pinForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pin = pinInput.value.replace(/\D/g, "").slice(0, 4);
  if (pin.length !== 4) {
    setPinStatus("Enter a 4-digit PIN.", true);
    return;
  }
  try {
    await enterWorkshop(pin);
  } catch (err) {
    console.error(err);
    setPinStatus(joinErrorMessage(err), true);
  }
});

btnPickPhoto?.addEventListener("click", () => photoInput.click());

photoInput?.addEventListener("change", () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    setDoneStatus("Choose an image file.", true);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = String(reader.result || "");
    const bytes = Math.ceil((dataUrl.length - dataUrl.indexOf(",") - 1) * 3 / 4);
    if (bytes > MAX_PHOTO_BYTES) {
      setDoneStatus("Photo is too large. Try a smaller image.", true);
      pendingPhoto = null;
      btnDone.hidden = true;
      return;
    }
    pendingPhoto = dataUrl;
    btnDone.hidden = false;
    setDoneStatus("Ready to send.");
  };
  reader.onerror = () => setDoneStatus("Could not read photo.", true);
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
    pendingPhoto = null;
    photoInput.value = "";
    btnDone.hidden = true;
    setDoneStatus("Photo sent!");
  } catch (err) {
    console.error(err);
    setDoneStatus("Could not send photo.", true);
    btnDone.disabled = false;
  }
});

const urlPin = new URLSearchParams(location.search).get("pin");
if (urlPin) {
  pinInput.value = urlPin.replace(/\D/g, "").slice(0, 4);
  if (pinInput.value.length === 4) {
    enterWorkshop(pinInput.value).catch((err) => {
      console.error(err);
      setPinStatus(joinErrorMessage(err), true);
    });
  }
}
