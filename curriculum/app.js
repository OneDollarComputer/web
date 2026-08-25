/**
 * Curriculum — teacher workspace (Google Auth + local lesson drafts)
 *
 * Lesson shape (ready for cloud sync later):
 * {
 *   id, title, overview, materials[], steps[],
 *   photos: [{ url }],
 *   videos: [{ url }],   // YouTube / Shorts
 *   links: [{ label, url }],
 *   updatedAt, createdAt
 * }
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const FIREBASE = {
  apiKey: "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
  authDomain: "auth.onedollarcomputer.com",
  databaseURL: "https://odc-files-default-rtdb.firebaseio.com",
  projectId: "odc-files",
  storageBucket: "odc-files.firebasestorage.app",
  messagingSenderId: "1086912562723",
  appId: "1:1086912562723:web:d158f4ce5c08d1ceb95396"
};

const app = initializeApp(FIREBASE);
const auth = getAuth(app);
const db = getDatabase(app);
const google = new GoogleAuthProvider();
google.setCustomParameters({ prompt: "select_account" });

const gate = document.getElementById("gate");
const studio = document.getElementById("studio");
const btnGoogle = document.getElementById("btnGoogle");
const btnSignOut = document.getElementById("btnSignOut");
const gateError = document.getElementById("gateError");
const userPhoto = document.getElementById("userPhoto");
const userName = document.getElementById("userName");
const userMeta = document.getElementById("userMeta");
const lessonList = document.getElementById("lessonList");
const emptyList = document.getElementById("emptyList");
const form = document.getElementById("lessonForm");
const btnNew = document.getElementById("btnNew");
const btnDelete = document.getElementById("btnDelete");
const saveStatus = document.getElementById("saveStatus");
const preview = document.getElementById("preview");
const previewBody = document.getElementById("previewBody");

let me = null;
let lessons = [];
let currentId = null;

function storageKey(uid) {
  return `odc_curriculum_lessons_${uid}`;
}

function loadLessons(uid) {
  try {
    const raw = localStorage.getItem(storageKey(uid));
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function saveLessons(uid, list) {
  localStorage.setItem(storageKey(uid), JSON.stringify(list));
}

function uid() {
  return `l_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function lines(text) {
  return String(text || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function showError(msg) {
  if (!gateError) return;
  gateError.hidden = !msg;
  gateError.textContent = msg || "";
}

function setStatus(msg) {
  if (saveStatus) saveStatus.textContent = msg || "";
}

async function usernameFor(userId) {
  try {
    const snap = await get(ref(db, `users/${userId}/username`));
    return snap.exists() ? String(snap.val()) : null;
  } catch {
    return null;
  }
}

function youtubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0] || null;
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2] || null;
      return u.searchParams.get("v");
    }
  } catch {
    /* ignore */
  }
  return null;
}

function addMediaRow(kind, values = {}) {
  const host =
    kind === "photo" ? document.getElementById("photoRows")
      : kind === "video" ? document.getElementById("videoRows")
        : document.getElementById("linkRows");
  if (!host) return;

  const row = document.createElement("div");
  row.className = kind === "link" ? "media-row two" : "media-row";
  row.dataset.kind = kind;

  if (kind === "link") {
    row.innerHTML =
      `<input class="label-input" type="text" placeholder="Label (optional)" value="${escapeAttr(values.label || "")}" />` +
      `<input class="url-input" type="url" placeholder="https://…" value="${escapeAttr(values.url || "")}" />` +
      `<button type="button" class="remove" aria-label="Remove">✕</button>`;
  } else {
    const ph = kind === "video" ? "https://www.youtube.com/watch?v=…" : "https://…/photo.jpg";
    row.innerHTML =
      `<input class="url-input" type="url" placeholder="${ph}" value="${escapeAttr(values.url || "")}" />` +
      `<button type="button" class="remove" aria-label="Remove">✕</button>`;
  }

  row.querySelector(".remove").addEventListener("click", () => row.remove());
  host.appendChild(row);
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clearMedia() {
  ["photoRows", "videoRows", "linkRows"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.replaceChildren();
  });
}

function readMedia(kind) {
  const host =
    kind === "photo" ? document.getElementById("photoRows")
      : kind === "video" ? document.getElementById("videoRows")
        : document.getElementById("linkRows");
  if (!host) return [];
  return [...host.querySelectorAll(".media-row")].map((row) => {
    const url = row.querySelector(".url-input")?.value.trim() || "";
    if (kind === "link") {
      return { label: row.querySelector(".label-input")?.value.trim() || "", url };
    }
    return { url };
  }).filter((x) => x.url);
}

function blankLesson() {
  return {
    id: null,
    title: "",
    overview: "",
    materials: [],
    steps: [],
    photos: [],
    videos: [],
    links: []
  };
}

function fillForm(lesson) {
  currentId = lesson.id;
  form.fTitle.value = lesson.title || "";
  form.fOverview.value = lesson.overview || "";
  form.fMaterials.value = (lesson.materials || []).join("\n");
  form.fSteps.value = (lesson.steps || []).join("\n");
  clearMedia();
  (lesson.photos || []).forEach((p) => addMediaRow("photo", p));
  (lesson.videos || []).forEach((v) => addMediaRow("video", v));
  (lesson.links || []).forEach((l) => addMediaRow("link", l));
  if (!(lesson.photos || []).length) addMediaRow("photo");
  if (!(lesson.videos || []).length) addMediaRow("video");
  if (!(lesson.links || []).length) addMediaRow("link");
  btnDelete.hidden = !lesson.id;
  setStatus("");
  renderPreview(collectForm(lesson.id));
  renderList();
}

function collectForm(id) {
  return {
    id: id || currentId,
    title: form.fTitle.value.trim(),
    overview: form.fOverview.value.trim(),
    materials: lines(form.fMaterials.value),
    steps: lines(form.fSteps.value),
    photos: readMedia("photo"),
    videos: readMedia("video"),
    links: readMedia("link")
  };
}

function renderList() {
  lessonList.replaceChildren();
  emptyList.hidden = lessons.length > 0;
  lessons
    .slice()
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .forEach((lesson) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      if (lesson.id === currentId) btn.classList.add("active");
      const when = lesson.updatedAt
        ? new Date(lesson.updatedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })
        : "";
      btn.innerHTML = `${escapeHtml(lesson.title || "Untitled")}<span class="muted">${escapeHtml(when)}</span>`;
      btn.addEventListener("click", () => fillForm(lesson));
      li.appendChild(btn);
      lessonList.appendChild(li);
    });
}

function renderPreview(lesson) {
  if (!lesson.title && !lesson.overview && !lesson.steps.length) {
    preview.hidden = true;
    return;
  }
  preview.hidden = false;
  const parts = [];
  if (lesson.title) parts.push(`<h2>${escapeHtml(lesson.title)}</h2>`);
  if (lesson.overview) parts.push(`<p>${escapeHtml(lesson.overview)}</p>`);
  if (lesson.materials.length) {
    parts.push("<p><strong>Materials</strong></p><ul>" +
      lesson.materials.map((m) => `<li>${escapeHtml(m)}</li>`).join("") + "</ul>");
  }
  if (lesson.steps.length) {
    parts.push("<p><strong>Steps</strong></p><ol>" +
      lesson.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("") + "</ol>");
  }
  lesson.photos.forEach((p) => {
    parts.push(`<img src="${escapeAttr(p.url)}" alt="" loading="lazy" referrerpolicy="no-referrer" />`);
  });
  lesson.videos.forEach((v) => {
    const id = youtubeId(v.url);
    if (id) {
      parts.push(
        `<div class="yt"><iframe src="https://www.youtube-nocookie.com/embed/${escapeAttr(id)}" ` +
        `title="Lesson video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
      );
    } else {
      parts.push(`<p><a href="${escapeAttr(v.url)}" target="_blank" rel="noopener">Video</a></p>`);
    }
  });
  if (lesson.links.length) {
    parts.push("<p><strong>Materials &amp; links</strong></p><ul>" +
      lesson.links.map((l) => {
        const label = l.label || l.url;
        return `<li><a href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a></li>`;
      }).join("") + "</ul>");
  }
  previewBody.innerHTML = parts.join("");
}

function showGate() {
  gate.hidden = false;
  studio.hidden = true;
  me = null;
}

async function showStudio(user) {
  me = user;
  gate.hidden = true;
  studio.hidden = false;
  userName.textContent = user.displayName || "Teacher";
  if (user.photoURL) {
    userPhoto.src = user.photoURL;
    userPhoto.hidden = false;
  } else {
    userPhoto.removeAttribute("src");
    userPhoto.hidden = true;
  }

  const username = await usernameFor(user.uid);
  userMeta.textContent = username
    ? `Instructor · /${username}/`
    : (user.email || "Signed in with Google");

  lessons = loadLessons(user.uid);
  if (lessons.length) fillForm(lessons[0]);
  else fillForm(blankLesson());
}

btnGoogle?.addEventListener("click", async () => {
  showError("");
  btnGoogle.disabled = true;
  try {
    await signInWithPopup(auth, google);
  } catch (err) {
    const code = err && err.code;
    if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") {
      showError("Could not sign in. Try again.");
      console.error(err);
    }
  } finally {
    btnGoogle.disabled = false;
  }
});

btnSignOut?.addEventListener("click", () => signOut(auth));

btnNew?.addEventListener("click", () => fillForm(blankLesson()));

document.querySelectorAll("[data-add]").forEach((btn) => {
  btn.addEventListener("click", () => addMediaRow(btn.getAttribute("data-add")));
});

form?.addEventListener("input", () => {
  renderPreview(collectForm(currentId));
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!me) return;
  const draft = collectForm(currentId);
  if (!draft.title) {
    setStatus("Add a title first.");
    form.fTitle.focus();
    return;
  }
  const now = Date.now();
  if (draft.id) {
    const i = lessons.findIndex((l) => l.id === draft.id);
    if (i >= 0) {
      lessons[i] = { ...lessons[i], ...draft, updatedAt: now };
    }
  } else {
    draft.id = uid();
    draft.createdAt = now;
    draft.updatedAt = now;
    lessons.push(draft);
    currentId = draft.id;
  }
  saveLessons(me.uid, lessons);
  btnDelete.hidden = false;
  setStatus("Saved on this device.");
  renderList();
  renderPreview(draft);
});

btnDelete?.addEventListener("click", () => {
  if (!me || !currentId) return;
  if (!confirm("Delete this lesson?")) return;
  lessons = lessons.filter((l) => l.id !== currentId);
  saveLessons(me.uid, lessons);
  fillForm(lessons[0] || blankLesson());
  setStatus("Deleted.");
});

onAuthStateChanged(auth, (user) => {
  if (user) showStudio(user);
  else showGate();
});
