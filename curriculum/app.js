/**
 * Curriculum — collaborative lessons (RTDB)
 *
 * Share: /curriculum/?lesson={id}
 * - title/owner public (unauthenticated can read title only)
 * - body requires Google sign-in
 * - authors edit; others suggest
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  onValue,
  onDisconnect,
  push
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const FIREBASE = {
  apiKey: "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
  authDomain: "auth.onedollarcomputer.com",
  databaseURL: "https://odc-files-default-rtdb.firebaseio.com",
  projectId: "odc-files",
  storageBucket: "odc-files.firebasestorage.app",
  messagingSenderId: "1086912562723",
  appId: "1:1086912562723:web:d158f4ce5c08d1ceb95396"
};

const PRESENCE_COLORS = ["#0f766e", "#1d4ed8", "#b45309", "#be123c", "#7c3aed", "#0369a1"];

const AGENT_API =
  "https://us-central1-odc-files.cloudfunctions.net/curriculumAgent";
const SHORT_ORIGIN = "https://odc.rs";
const PAIR_TTL_MS = 10 * 60 * 1000;

const app = initializeApp(FIREBASE);
const auth = getAuth(app);
const db = getDatabase(app);
const google = new GoogleAuthProvider();
google.setCustomParameters({ prompt: "select_account" });

const gate = document.getElementById("gate");
const gateTitle = document.getElementById("gateTitle");
const gateLede = document.getElementById("gateLede");
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
const btnSave = document.getElementById("btnSave");
const btnDelete = document.getElementById("btnDelete");
const saveStatus = document.getElementById("saveStatus");
const collabBar = document.getElementById("collabBar");
const authorTools = document.getElementById("authorTools");
const roleHint = document.getElementById("roleHint");
const presenceBar = document.getElementById("presenceBar");
const inviteUser = document.getElementById("inviteUser");
const btnInvite = document.getElementById("btnInvite");
const btnShare = document.getElementById("btnShare");
const modeEdit = document.getElementById("modeEdit");
const modeSuggest = document.getElementById("modeSuggest");
const suggestPanel = document.getElementById("suggestPanel");
const suggestForm = document.getElementById("suggestForm");
const sugList = document.getElementById("sugList");
const btnAgent = document.getElementById("btnAgent");
const agentPanel = document.getElementById("agentPanel");
const agentLink = document.getElementById("agentLink");
const agentStatus = document.getElementById("agentStatus");
const agentClient = document.getElementById("agentClient");
const agentLinkBox = document.getElementById("agentLinkBox");
const agentSessionList = document.getElementById("agentSessionList");
const agentNone = document.getElementById("agentNone");
const btnAgentCreate = document.getElementById("btnAgentCreate");
const btnCopyAgent = document.getElementById("btnCopyAgent");
const btnAgentConfirm = document.getElementById("btnAgentConfirm");
const btnAgentDeny = document.getElementById("btnAgentDeny");
const btnAgentClose = document.getElementById("btnAgentClose");
const connectPanel = document.getElementById("connectPanel");
const connectLede = document.getElementById("connectLede");
const connectStatus = document.getElementById("connectStatus");
const btnConnectConfirm = document.getElementById("btnConnectConfirm");
const btnConnectDeny = document.getElementById("btnConnectDeny");

function el(id) {
  return document.getElementById(id);
}

function field(id) {
  return form?.elements?.namedItem?.(id) || el(id);
}

let me = null;
let myUsername = null;
let lessons = []; // { id, title, updatedAt }
let currentId = null;
let currentMeta = null; // full lesson snapshot fields we care about
let isAuthor = false;
let editMode = "edit"; // edit | suggest
let applyingRemote = false;
let saveTimer = null;
let unsubLesson = null;
let unsubPresence = null;
let unsubSuggestions = null;
let presenceCleanup = null;

function lessonQueryId() {
  return new URLSearchParams(location.search).get("lesson") || null;
}

function connectQueryCode() {
  return new URLSearchParams(location.search).get("connect") || null;
}

function setLessonQuery(id) {
  const url = new URL(location.href);
  if (id) url.searchParams.set("lesson", id);
  else url.searchParams.delete("lesson");
  // keep connect param until confirm finishes
  history.replaceState({}, "", url);
}

function clearConnectQuery() {
  const url = new URL(location.href);
  url.searchParams.delete("connect");
  history.replaceState({}, "", url);
}

async function agentFetch(method, path, body) {
  const headers = { Accept: "application/json" };
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (me) {
    headers.Authorization = `Bearer ${await me.getIdToken()}`;
  }
  const res = await fetch(`${AGENT_API}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const err = new Error(data.error || res.statusText);
    err.status = res.status;
    throw err;
  }
  return data;
}

function setAgentStatus(msg) {
  if (agentStatus) agentStatus.textContent = msg || "";
}

function setConnectStatus(msg) {
  if (connectStatus) connectStatus.textContent = msg || "";
}

function randomSecret(bytes = 18) {
  const a = new Uint8Array(bytes);
  crypto.getRandomValues(a);
  let s = "";
  for (let i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function agentConnectUrl(code) {
  return `${SHORT_ORIGIN}/curriculum/?connect=${encodeURIComponent(code)}`;
}

let pendingAgentCode = null;
let pendingAgentLabel = "Cursor";

function selectedAgentLabel() {
  return (agentClient?.value || "Other").trim() || "Other";
}

function copyAgentLink() {
  const url = agentLink?.value?.trim();
  if (!url) return Promise.reject(new Error("No link"));
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(url);
  return Promise.reject(new Error("Clipboard unavailable"));
}

async function refreshAgentSessions() {
  if (!me || !agentSessionList) return [];
  agentSessionList.replaceChildren();
  const snap = await get(ref(db, `curriculum/byUser/${me.uid}/agentTokenHashes`));
  const map = snap.exists() ? snap.val() : {};
  const sessions = [];
  for (const [th, meta] of Object.entries(map)) {
    const tokenSnap = await get(ref(db, `curriculum/agentTokens/${th}`));
    if (!tokenSnap.exists() || tokenSnap.val()?.revoked) continue;
    const t = tokenSnap.val();
    const label =
      (typeof meta === "object" && meta?.label) ||
      t.label ||
      "Agent";
    const createdAt =
      (typeof meta === "object" && meta?.createdAt) ||
      t.createdAt ||
      0;
    sessions.push({ hash: th, label, createdAt });
  }
  sessions.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  if (agentNone) agentNone.hidden = sessions.length > 0;
  sessions.forEach((s) => {
    const li = document.createElement("li");
    li.className = "agent-session";
    const when = s.createdAt
      ? new Date(s.createdAt).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
      })
      : "";
    li.innerHTML =
      `<span class="agent-session-name">${escapeHtml(s.label)}</span>` +
      `<span class="agent-session-meta">${escapeHtml(when)}</span>`;
    const revoke = document.createElement("button");
    revoke.type = "button";
    revoke.className = "ghost-sm";
    revoke.textContent = "Revoke";
    revoke.addEventListener("click", () => revokeOneAgent(s.hash, s.label));
    li.appendChild(revoke);
    agentSessionList.appendChild(li);
  });

  if (btnAgent) {
    if (sessions.length === 0) {
      btnAgent.textContent = "Agent";
      btnAgent.classList.remove("btn-agent-on");
    } else if (sessions.length === 1) {
      btnAgent.textContent = sessions[0].label;
      btnAgent.classList.add("btn-agent-on");
    } else {
      btnAgent.textContent = `${sessions.length} agents`;
      btnAgent.classList.add("btn-agent-on");
    }
  }
  return sessions;
}

async function openAgentPanel() {
  if (!me) return;
  if (agentPanel) agentPanel.hidden = false;
  if (agentLinkBox) agentLinkBox.hidden = true;
  setAgentStatus("");
  await refreshAgentSessions();
}

async function startAgentPair() {
  if (!me) return;
  if (agentPanel) agentPanel.hidden = false;
  pendingAgentLabel = selectedAgentLabel();
  setAgentStatus("Creating link…");
  if (btnAgentConfirm) btnAgentConfirm.disabled = false;
  try {
    const code = randomSecret(18);
    const now = Date.now();
    await set(ref(db, `curriculum/agentPairing/${code}`), {
      status: "pending",
      createdBy: me.uid,
      createdAt: now,
      expiresAt: now + PAIR_TTL_MS,
      label: pendingAgentLabel
    });
    pendingAgentCode = code;
    const url = agentConnectUrl(code);
    if (agentLink) agentLink.value = url;
    if (agentLinkBox) agentLinkBox.hidden = false;
    try {
      await copyAgentLink();
      setAgentStatus(`${pendingAgentLabel} link copied.`);
    } catch {
      setAgentStatus("Copy the link, paste into the agent, then Confirm.");
    }
  } catch (err) {
    console.error(err);
    setAgentStatus(err?.message || "Could not start pairing. Try again.");
  }
}

async function confirmAgentPair(code) {
  const c = code || pendingAgentCode || connectQueryCode();
  if (!c || !me) return;
  try {
    const snap = await get(ref(db, `curriculum/agentPairing/${c}`));
    if (!snap.exists()) throw new Error("Unknown or expired code");
    const row = snap.val();
    if (row.status !== "pending") throw new Error(`Pairing is ${row.status}`);
    if (row.expiresAt && Date.now() > row.expiresAt) {
      await update(ref(db, `curriculum/agentPairing/${c}`), { status: "expired" });
      throw new Error("Code expired — start again");
    }

    const label = row.label || pendingAgentLabel || selectedAgentLabel();
    const token = `odc_agent_${randomSecret(32)}`;
    const tokenHash = await sha256Hex(token);
    const now = Date.now();
    await set(ref(db, `curriculum/agentTokens/${tokenHash}`), {
      uid: me.uid,
      createdAt: now,
      pairingCode: c,
      label
    });
    await set(ref(db, `curriculum/byUser/${me.uid}/agentTokenHashes/${tokenHash}`), {
      label,
      createdAt: now
    });
    await update(ref(db, `curriculum/agentPairing/${c}`), {
      status: "approved",
      uid: me.uid,
      tokenHash,
      tokenPending: token,
      confirmedAt: now,
      label
    });
    setAgentStatus(`${label} connected — the agent can finish pairing.`);
    setConnectStatus(`${label} confirmed.`);
    if (btnConnectConfirm) btnConnectConfirm.disabled = true;
    if (btnAgentConfirm) btnAgentConfirm.disabled = true;
    if (agentLinkBox) agentLinkBox.hidden = true;
    clearConnectQuery();
    await refreshAgentSessions();
  } catch (err) {
    console.error(err);
    setAgentStatus(err.message || "Confirm failed.");
    setConnectStatus(err.message || "Confirm failed.");
  }
}

async function denyAgentPair(code) {
  const c = code || pendingAgentCode || connectQueryCode();
  if (!c || !me) return;
  try {
    await update(ref(db, `curriculum/agentPairing/${c}`), {
      status: "denied",
      uid: me.uid,
      deniedAt: Date.now()
    });
    setAgentStatus("Cancelled.");
    setConnectStatus("Denied.");
    clearConnectQuery();
    if (connectPanel) connectPanel.hidden = true;
    if (agentLinkBox) agentLinkBox.hidden = true;
  } catch (err) {
    console.error(err);
    setAgentStatus(err.message || "Cancel failed.");
  }
}

async function revokeOneAgent(tokenHash, label) {
  if (!me || !tokenHash) return;
  if (!confirm(`Revoke ${label || "this agent"}?`)) return;
  const now = Date.now();
  try {
    await update(ref(db), {
      [`curriculum/agentTokens/${tokenHash}/revoked`]: true,
      [`curriculum/agentTokens/${tokenHash}/revokedAt`]: now,
      [`curriculum/byUser/${me.uid}/agentTokenHashes/${tokenHash}`]: null
    });
    setAgentStatus(`${label || "Agent"} revoked.`);
    await refreshAgentSessions();
  } catch (err) {
    console.error(err);
    setAgentStatus(err.message || "Revoke failed.");
  }
}

function showConnectConfirm(code) {
  if (!connectPanel) return;
  pendingAgentCode = code;
  connectPanel.hidden = false;
  get(ref(db, `curriculum/agentPairing/${code}/label`)).then((snap) => {
    const label = snap.val();
    connectLede.textContent = label
      ? `${label} wants access to your curriculum lessons.`
      : "An agent wants access to your curriculum lessons.";
  }).catch(() => {
    connectLede.textContent = "An agent wants access to your curriculum lessons.";
  });
  setConnectStatus("");
  if (btnConnectConfirm) btnConnectConfirm.disabled = false;
}

async function showGate() {
  gate.hidden = false;
  studio.hidden = true;
  if (connectPanel) connectPanel.hidden = true;
  me = null;
  detachLesson();

  const connectCode = connectQueryCode();
  const lid = lessonQueryId();
  if (connectCode) {
    gateTitle.textContent = "Connect agent";
    gateLede.textContent = "Sign in with Google to confirm or deny agent access.";
  } else if (lid) {
    const meta = await loadPublicTitle(lid);
    if (meta) {
      gateTitle.textContent = meta.title;
      gateLede.textContent = meta.ownerName
        ? `Lesson by ${meta.ownerName}. Sign in with Google to view the full lesson.`
        : "Sign in with Google to view the full lesson.";
    } else {
      gateTitle.textContent = "Curriculum";
      gateLede.textContent = "This lesson link was not found. Sign in to open your lessons.";
    }
  } else {
    gateTitle.textContent = "Curriculum";
    gateLede.textContent = "Sign in with Google to view lessons and co-edit with other instructors.";
  }
}

function showError(msg) {
  if (!gateError) return;
  gateError.hidden = !msg;
  gateError.textContent = msg || "";
}

function setStatus(msg) {
  if (saveStatus) saveStatus.textContent = msg || "";
}

function lines(text) {
  return String(text || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
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

function newId() {
  return `l_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function colorFor(uid) {
  let h = 0;
  for (let i = 0; i < uid.length; i++) h = (h * 31 + uid.charCodeAt(i)) >>> 0;
  return PRESENCE_COLORS[h % PRESENCE_COLORS.length];
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
  row.className =
    kind === "link" ? "media-row two"
      : kind === "video" ? "media-row video-row"
        : "media-row";
  row.dataset.kind = kind;

  if (kind === "link") {
    row.innerHTML =
      `<input class="label-input" type="text" placeholder="Label (optional)" value="${escapeAttr(values.label || "")}" />` +
      `<input class="url-input" type="url" placeholder="https://…" value="${escapeAttr(values.url || "")}" />` +
      `<button type="button" class="remove" aria-label="Remove">✕</button>`;
  } else if (kind === "video") {
    row.innerHTML =
      `<div class="yt-embed" hidden></div>` +
      `<div class="video-controls">` +
      `<input class="url-input" type="url" placeholder="Paste YouTube link…" value="${escapeAttr(values.url || "")}" />` +
      `<button type="button" class="remove" aria-label="Remove">✕</button>` +
      `</div>`;
  } else {
    row.className = "media-row video-row";
    row.innerHTML =
      `<img class="photo-preview" alt="" hidden />` +
      `<div class="video-controls">` +
      `<input class="url-input" type="url" placeholder="https://…/photo.jpg" value="${escapeAttr(values.url || "")}" />` +
      `<button type="button" class="remove" aria-label="Remove">✕</button>` +
      `</div>`;
  }

  const urlInput = row.querySelector(".url-input");
  const syncPreview = () => {
    if (kind === "video") {
      const box = row.querySelector(".yt-embed");
      const id = youtubeId(urlInput.value.trim());
      if (id) {
        box.hidden = false;
        box.innerHTML =
          `<iframe src="https://www.youtube-nocookie.com/embed/${escapeAttr(id)}" ` +
          `title="Lesson video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
      } else {
        box.hidden = true;
        box.innerHTML = "";
      }
    } else if (kind === "photo") {
      const img = row.querySelector(".photo-preview");
      const u = urlInput.value.trim();
      if (u) {
        img.hidden = false;
        img.src = u;
      } else {
        img.hidden = true;
        img.removeAttribute("src");
      }
    }
  };

  urlInput?.addEventListener("input", () => {
    syncPreview();
    if (isAuthor && editMode === "edit") scheduleSave();
  });
  row.querySelector(".remove").addEventListener("click", () => {
    row.remove();
    if (isAuthor && editMode === "edit") scheduleSave();
  });
  host.appendChild(row);
  syncPreview();
}

function clearMedia() {
  ["photoRows", "videoRows", "linkRows"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.replaceChildren();
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

function blankBody() {
  return {
    overview: "",
    materials: [],
    steps: [],
    photos: [],
    videos: [],
    links: []
  };
}

function autosizeAll() {
  form?.querySelectorAll("textarea.doc-body").forEach((ta) => {
    ta.style.height = "auto";
    ta.style.height = `${Math.max(ta.scrollHeight, 28)}px`;
  });
}

function collectForm() {
  return {
    title: (field("fTitle") || field("title"))?.value?.trim() || "",
    overview: (field("fOverview") || field("overview"))?.value?.trim() || "",
    materials: lines((field("fMaterials") || field("materials"))?.value),
    steps: lines((field("fSteps") || field("steps"))?.value),
    photos: readMedia("photo"),
    videos: readMedia("video"),
    links: readMedia("link")
  };
}

function fillFormFromLesson(lesson) {
  applyingRemote = true;
  currentId = lesson.id;
  const titleEl = field("fTitle") || field("title");
  const overviewEl = field("fOverview") || field("overview");
  const materialsEl = field("fMaterials") || field("materials");
  const stepsEl = field("fSteps") || field("steps");
  if (titleEl) titleEl.value = lesson.title || "";
  const body = lesson.body || blankBody();
  if (overviewEl) overviewEl.value = body.overview || "";
  if (materialsEl) materialsEl.value = (body.materials || []).join("\n");
  if (stepsEl) stepsEl.value = (body.steps || []).join("\n");
  clearMedia();
  (body.photos || []).forEach((p) => addMediaRow("photo", p));
  (body.videos || []).forEach((v) => addMediaRow("video", v));
  (body.links || []).forEach((l) => addMediaRow("link", l));
  if (!(body.photos || []).length) addMediaRow("photo");
  if (!(body.videos || []).length) addMediaRow("video");
  if (!(body.links || []).length) addMediaRow("link");
  applyingRemote = false;
  btnDelete.hidden = !(isAuthor && currentMeta?.ownerUid === me?.uid);
  autosizeAll();
  renderList();
  updateCollabChrome();
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
      btn.addEventListener("click", () => openLesson(lesson.id));
      li.appendChild(btn);
      lessonList.appendChild(li);
    });
}

function setFormEditable(canEdit) {
  form?.querySelectorAll("input, textarea, button.remove, [data-add], .doc-insert").forEach((node) => {
    if (node === btnSave || node === btnDelete) return;
    if (node.tagName === "BUTTON") node.disabled = !canEdit;
    else node.readOnly = !canEdit;
  });
  if (btnSave) btnSave.hidden = !canEdit;
  document.querySelectorAll("[data-add], .doc-insert").forEach((b) => {
    b.hidden = !canEdit;
  });
}

function updateCollabChrome() {
  if (!currentId || !me) {
    collabBar.hidden = true;
    suggestPanel.hidden = true;
    return;
  }
  collabBar.hidden = false;
  if (isAuthor) {
    authorTools.hidden = false;
    roleHint.textContent = currentMeta?.ownerUid === me.uid
      ? "You own this lesson."
      : "You are a co-author.";
    modeEdit.hidden = false;
    modeSuggest.hidden = true;
    editMode = "edit";
    modeEdit.classList.add("active");
    modeSuggest.classList.remove("active");
    setFormEditable(true);
    suggestPanel.hidden = false; // authors see pending suggestions
    suggestForm.hidden = true;
  } else {
    authorTools.hidden = true;
    roleHint.textContent = "Suggest changes — an author can accept them.";
    modeEdit.hidden = true;
    modeSuggest.hidden = false;
    editMode = "suggest";
    modeSuggest.classList.add("active");
    modeEdit.classList.remove("active");
    setFormEditable(false);
    suggestPanel.hidden = false;
    suggestForm.hidden = false;
  }
}

async function loadPublicTitle(lessonId) {
  try {
    const [titleSnap, ownerSnap, nameSnap] = await Promise.all([
      get(ref(db, `curriculum/lessons/${lessonId}/title`)),
      get(ref(db, `curriculum/lessons/${lessonId}/ownerUid`)),
      get(ref(db, `curriculum/lessons/${lessonId}/ownerName`))
    ]);
    if (!titleSnap.exists() && !ownerSnap.exists()) return null;
    return {
      title: titleSnap.val() || "Untitled lesson",
      ownerUid: ownerSnap.val() || null,
      ownerName: nameSnap.val() || null
    };
  } catch {
    return null;
  }
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

  myUsername = await usernameFor(user.uid);
  userMeta.textContent = myUsername
    ? `Instructor · /${myUsername}/`
    : (user.email || "Signed in with Google");

  await refreshLessonIndex();
  await refreshAgentSessions();

  const connectCode = connectQueryCode();
  if (connectCode) {
    showConnectConfirm(connectCode);
  }

  const wanted = lessonQueryId();
  if (wanted) await openLesson(wanted);
  else if (lessons.length) await openLesson(lessons[0].id);
  else fillBlankNew();
}

function fillBlankNew() {
  detachLesson();
  currentId = null;
  currentMeta = null;
  isAuthor = true;
  setLessonQuery(null);
  applyingRemote = true;
  const titleEl = field("fTitle") || field("title");
  const overviewEl = field("fOverview") || field("overview");
  const materialsEl = field("fMaterials") || field("materials");
  const stepsEl = field("fSteps") || field("steps");
  if (titleEl) titleEl.value = "";
  if (overviewEl) overviewEl.value = "";
  if (materialsEl) materialsEl.value = "";
  if (stepsEl) stepsEl.value = "";
  clearMedia();
  addMediaRow("photo");
  addMediaRow("video");
  addMediaRow("link");
  applyingRemote = false;
  btnDelete.hidden = true;
  collabBar.hidden = true;
  suggestPanel.hidden = true;
  setFormEditable(true);
  setStatus("");
  autosizeAll();
  renderList();
}

async function refreshLessonIndex() {
  if (!me) return;
  const snap = await get(ref(db, `curriculum/byUser/${me.uid}`));
  const ids = snap.exists()
    ? Object.keys(snap.val()).filter((id) => id.startsWith("l_"))
    : [];
  const rows = await Promise.all(ids.map(async (id) => {
    try {
      const [t, u] = await Promise.all([
        get(ref(db, `curriculum/lessons/${id}/title`)),
        get(ref(db, `curriculum/lessons/${id}/updatedAt`))
      ]);
      return { id, title: t.val() || "Untitled", updatedAt: u.val() || 0 };
    } catch {
      return { id, title: "Untitled", updatedAt: 0 };
    }
  }));
  lessons = rows;
  renderList();
}

function detachLesson() {
  if (typeof unsubLesson === "function") unsubLesson();
  if (typeof unsubPresence === "function") unsubPresence();
  if (typeof unsubSuggestions === "function") unsubSuggestions();
  if (typeof presenceCleanup === "function") presenceCleanup();
  unsubLesson = unsubPresence = unsubSuggestions = presenceCleanup = null;
  if (presenceBar) presenceBar.replaceChildren();
  document.querySelectorAll(".who").forEach((el) => {
    el.textContent = "";
  });
}

async function openLesson(id) {
  if (!me || !id) return;
  detachLesson();
  currentId = id;
  setLessonQuery(id);
  setStatus("Loading…");

  let lastContentKey = "";
  const contentRef = ref(db, `curriculum/lessons/${id}`);
  // Listen once for meta + subscribe to content fields without presence noise
  unsubLesson = onValue(contentRef, (snap) => {
    if (!snap.exists()) {
      setStatus("Lesson not found.");
      fillBlankNew();
      return;
    }
    const data = snap.val();
    const authors = data.authors || {};
    isAuthor = !!(authors[me.uid] || data.ownerUid === me.uid);
    currentMeta = {
      title: data.title,
      ownerUid: data.ownerUid,
      ownerName: data.ownerName,
      authors,
      updatedAt: data.updatedAt,
      updatedBy: data.updatedBy
    };

    const body = data.body || blankBody();
    const contentKey = `${data.updatedAt || 0}:${data.updatedBy || ""}:${data.title || ""}:${JSON.stringify(body)}`;
    if (contentKey === lastContentKey) {
      updateCollabChrome();
      return;
    }
    if (saveTimer && data.updatedBy === me.uid) {
      lastContentKey = contentKey;
      updateCollabChrome();
      return;
    }
    lastContentKey = contentKey;
    try {
      fillFormFromLesson({
        id,
        title: data.title || "",
        body
      });
      setStatus(isAuthor ? "Synced." : "Viewing (suggest mode).");
    } catch (err) {
      console.error(err);
      setStatus("Could not render lesson.");
    }
  }, (err) => {
    console.error(err);
    setStatus("Could not open lesson.");
  });

  attachPresence(id);
  attachSuggestions(id);
  renderList();
}

function attachPresence(lessonId) {
  if (!me) return;
  const pref = ref(db, `curriculum/lessons/${lessonId}/presence/${me.uid}`);
  const payload = {
    name: me.displayName || "Instructor",
    photoURL: me.photoURL || "",
    color: colorFor(me.uid),
    field: "",
    at: Date.now()
  };
  set(pref, payload).catch(() => {});
  onDisconnect(pref).remove().catch(() => {});

  presenceCleanup = () => {
    remove(pref).catch(() => {});
  };

  unsubPresence = onValue(ref(db, `curriculum/lessons/${lessonId}/presence`), (snap) => {
    const map = snap.val() || {};
    presenceBar.replaceChildren();
    document.querySelectorAll(".who").forEach((el) => {
      el.textContent = "";
    });
    Object.entries(map).forEach(([uid, p]) => {
      if (uid === me.uid) return;
      const chip = document.createElement("span");
      chip.className = "presence-chip";
      chip.title = p.name || "Someone";
      chip.style.setProperty("--pcolor", p.color || "#64748b");
      if (p.photoURL) {
        chip.innerHTML = `<img src="${escapeAttr(p.photoURL)}" alt="" />`;
      } else {
        chip.textContent = (p.name || "?")[0].toUpperCase();
      }
      presenceBar.appendChild(chip);
      if (p.field) {
        const who = document.querySelector(`.who[data-who="${CSS.escape(p.field)}"]`);
        if (who) {
          who.textContent = `· ${p.name || "Editing"}`;
          who.style.color = p.color || "var(--sub)";
        }
      }
    });
  });
}

async function updateMyPresenceField(field) {
  if (!me || !currentId) return;
  try {
    await update(ref(db, `curriculum/lessons/${currentId}/presence/${me.uid}`), {
      field: field || "",
      at: Date.now()
    });
  } catch {
    /* ignore */
  }
}

function attachSuggestions(lessonId) {
  unsubSuggestions = onValue(ref(db, `curriculum/lessons/${lessonId}/suggestions`), (snap) => {
    const map = snap.val() || {};
    const items = Object.entries(map)
      .map(([id, s]) => ({ id, ...s }))
      .filter((s) => s.status === "pending")
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    sugList.replaceChildren();
    if (!items.length) {
      sugList.innerHTML = `<li class="empty-sug">No pending suggestions.</li>`;
      return;
    }
    items.forEach((s) => {
      const li = document.createElement("li");
      li.className = "sug-item";
      li.innerHTML =
        `<p class="sug-meta"><strong>${escapeHtml(s.authorName || "Someone")}</strong> · ${escapeHtml(s.field || "")}</p>` +
        `<pre class="sug-text">${escapeHtml(s.proposed || "")}</pre>`;
      if (isAuthor) {
        const actions = document.createElement("div");
        actions.className = "sug-actions";
        const accept = document.createElement("button");
        accept.type = "button";
        accept.className = "primary-sm";
        accept.textContent = "Accept";
        accept.addEventListener("click", () => acceptSuggestion(s));
        const reject = document.createElement("button");
        reject.type = "button";
        reject.className = "ghost-sm";
        reject.textContent = "Reject";
        reject.addEventListener("click", () => rejectSuggestion(s.id));
        actions.append(accept, reject);
        li.appendChild(actions);
      }
      sugList.appendChild(li);
    });
  });
}

async function acceptSuggestion(s) {
  if (!isAuthor || !currentId) return;
  const field = s.field;
  const proposed = s.proposed || "";
  const patch = {};
  if (field === "overview") {
    patch[`curriculum/lessons/${currentId}/body/overview`] = proposed;
  } else if (field === "materials") {
    patch[`curriculum/lessons/${currentId}/body/materials`] = lines(proposed);
  } else if (field === "steps") {
    patch[`curriculum/lessons/${currentId}/body/steps`] = lines(proposed);
  } else {
    return;
  }
  patch[`curriculum/lessons/${currentId}/suggestions/${s.id}/status`] = "accepted";
  patch[`curriculum/lessons/${currentId}/updatedAt`] = Date.now();
  patch[`curriculum/lessons/${currentId}/updatedBy`] = me.uid;
  try {
    await update(ref(db), patch);
    setStatus("Suggestion accepted.");
  } catch (err) {
    console.error(err);
    setStatus("Could not accept.");
  }
}

async function rejectSuggestion(sid) {
  if (!isAuthor || !currentId) return;
  try {
    await update(ref(db, `curriculum/lessons/${currentId}/suggestions/${sid}`), { status: "rejected" });
    setStatus("Suggestion rejected.");
  } catch (err) {
    console.error(err);
    setStatus("Could not reject.");
  }
}

function scheduleSave() {
  if (!isAuthor || applyingRemote) return;
  clearTimeout(saveTimer);
  setStatus("Saving…");
  saveTimer = setTimeout(() => saveCurrent(), 500);
}

async function saveCurrent() {
  if (!me) return;
  const data = collectForm();
  if (!data.title) {
    setStatus("Add a title first.");
    return;
  }
  const now = Date.now();
  try {
    if (!currentId) {
      const id = newId();
      const ownerName = me.displayName || myUsername || "Instructor";
      const updates = {};
      updates[`curriculum/lessons/${id}/title`] = data.title;
      updates[`curriculum/lessons/${id}/ownerUid`] = me.uid;
      updates[`curriculum/lessons/${id}/ownerName`] = ownerName;
      updates[`curriculum/lessons/${id}/createdAt`] = now;
      updates[`curriculum/lessons/${id}/updatedAt`] = now;
      updates[`curriculum/lessons/${id}/updatedBy`] = me.uid;
      updates[`curriculum/lessons/${id}/authors/${me.uid}`] = {
        name: ownerName,
        role: "owner",
        addedAt: now
      };
      updates[`curriculum/lessons/${id}/body`] = {
        overview: data.overview,
        materials: data.materials,
        steps: data.steps,
        photos: data.photos,
        videos: data.videos,
        links: data.links
      };
      updates[`curriculum/byUser/${me.uid}/${id}`] = true;
      await update(ref(db), updates);
      currentId = id;
      setLessonQuery(id);
      await refreshLessonIndex();
      await openLesson(id);
      setStatus("Saved.");
      return;
    }

    if (!isAuthor) {
      setStatus("You can suggest changes instead.");
      return;
    }

    const updates = {};
    updates[`curriculum/lessons/${currentId}/title`] = data.title;
    updates[`curriculum/lessons/${currentId}/updatedAt`] = now;
    updates[`curriculum/lessons/${currentId}/updatedBy`] = me.uid;
    updates[`curriculum/lessons/${currentId}/body`] = {
      overview: data.overview,
      materials: data.materials,
      steps: data.steps,
      photos: data.photos,
      videos: data.videos,
      links: data.links
    };
    await update(ref(db), updates);
    // Refresh list title
    const row = lessons.find((l) => l.id === currentId);
    if (row) {
      row.title = data.title;
      row.updatedAt = now;
      renderList();
    }
    setStatus("Saved.");
  } catch (err) {
    console.error(err);
    setStatus("Save failed. Check connection.");
  }
}

async function deleteCurrent() {
  if (!me || !currentId || currentMeta?.ownerUid !== me.uid) return;
  if (!confirm("Delete this lesson?")) return;
  const id = currentId;
  const authorUids = Object.keys(currentMeta?.authors || { [me.uid]: true });
  const updates = {};
  updates[`curriculum/lessons/${id}`] = null;
  authorUids.forEach((uid) => {
    updates[`curriculum/byUser/${uid}/${id}`] = null;
  });
  updates[`curriculum/byUser/${me.uid}/${id}`] = null;
  try {
    await update(ref(db), updates);
    detachLesson();
    await refreshLessonIndex();
    if (lessons.length) await openLesson(lessons[0].id);
    else fillBlankNew();
    setStatus("Deleted.");
  } catch (err) {
    console.error(err);
    setStatus("Delete failed.");
  }
}

async function inviteCoAuthor() {
  if (!me || !currentId || currentMeta?.ownerUid !== me.uid) {
    setStatus("Only the owner can invite.");
    return;
  }
  const name = (inviteUser.value || "").trim().toLowerCase();
  if (!name) {
    setStatus("Enter a username.");
    return;
  }
  try {
    const snap = await get(ref(db, `usernames/${name}`));
    if (!snap.exists()) {
      setStatus("Username not found.");
      return;
    }
    const uid = snap.val()?.uid || snap.val();
    const otherUid = typeof uid === "string" ? uid : uid?.uid;
    if (!otherUid) {
      setStatus("Username not found.");
      return;
    }
    if (otherUid === me.uid) {
      setStatus("That’s you.");
      return;
    }
    const profile = await get(ref(db, `profiles/${name}`));
    const display = profile.val()?.displayName || name;
    const now = Date.now();
    const updates = {};
    updates[`curriculum/lessons/${currentId}/authors/${otherUid}`] = {
      name: display,
      role: "author",
      addedAt: now
    };
    updates[`curriculum/byUser/${otherUid}/${currentId}`] = true;
    await update(ref(db), updates);
    inviteUser.value = "";
    setStatus(`Added ${name}.`);
  } catch (err) {
    console.error(err);
    setStatus("Invite failed.");
  }
}

function shareLink() {
  if (!currentId) {
    setStatus("Save the lesson first.");
    return;
  }
  const url = `${SHORT_ORIGIN}/curriculum/?lesson=${encodeURIComponent(currentId)}`;
  navigator.clipboard?.writeText(url).then(
    () => setStatus("Link copied."),
    () => setStatus(url)
  );
}

// ——— Events ———

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

btnNew?.addEventListener("click", () => fillBlankNew());

btnInvite?.addEventListener("click", () => inviteCoAuthor());
inviteUser?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    inviteCoAuthor();
  }
});

btnShare?.addEventListener("click", () => shareLink());

document.querySelectorAll("[data-add]").forEach((btn) => {
  btn.addEventListener("click", () => {
    addMediaRow(btn.getAttribute("data-add"));
    if (isAuthor && editMode === "edit") scheduleSave();
  });
});

form?.addEventListener("input", (e) => {
  if (applyingRemote) return;
  if (e.target?.matches?.("textarea.doc-body")) autosizeAll();
  const f = e.target?.closest?.("[data-field]")?.dataset?.field;
  if (f) updateMyPresenceField(f);
  if (isAuthor && editMode === "edit") scheduleSave();
});

form?.addEventListener("focusin", (e) => {
  const field = e.target?.closest?.("[data-field]")?.dataset?.field;
  if (field) updateMyPresenceField(field);
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  clearTimeout(saveTimer);
  saveCurrent();
});

btnDelete?.addEventListener("click", () => deleteCurrent());

suggestForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!me || !currentId || isAuthor) return;
  const field = document.getElementById("sugField").value;
  const proposed = document.getElementById("sugText").value.trim();
  if (!proposed) return;
  const sid = push(ref(db, `curriculum/lessons/${currentId}/suggestions`)).key;
  try {
    await set(ref(db, `curriculum/lessons/${currentId}/suggestions/${sid}`), {
      authorUid: me.uid,
      authorName: me.displayName || "Instructor",
      field,
      proposed,
      status: "pending",
      createdAt: Date.now()
    });
    document.getElementById("sugText").value = "";
    setStatus("Suggestion sent.");
  } catch (err) {
    console.error(err);
    setStatus("Could not send suggestion.");
  }
});

modeEdit?.addEventListener("click", () => {
  if (!isAuthor) return;
  editMode = "edit";
  modeEdit.classList.add("active");
  modeSuggest.classList.remove("active");
  setFormEditable(true);
  suggestForm.hidden = true;
});

modeSuggest?.addEventListener("click", () => {
  editMode = "suggest";
  modeSuggest.classList.add("active");
  modeEdit.classList.remove("active");
  setFormEditable(false);
  suggestForm.hidden = false;
});

btnAgent?.addEventListener("click", () => openAgentPanel());
btnAgentCreate?.addEventListener("click", () => startAgentPair());
btnCopyAgent?.addEventListener("click", () => {
  copyAgentLink().then(
    () => setAgentStatus("Link copied."),
    () => setAgentStatus(agentLink?.value || "No link yet.")
  );
});
btnAgentConfirm?.addEventListener("click", () => confirmAgentPair());
btnAgentDeny?.addEventListener("click", () => denyAgentPair());
btnAgentClose?.addEventListener("click", () => {
  if (agentPanel) agentPanel.hidden = true;
});
btnConnectConfirm?.addEventListener("click", () => confirmAgentPair());
btnConnectDeny?.addEventListener("click", () => denyAgentPair());

onAuthStateChanged(auth, (user) => {
  if (user) showStudio(user);
  else showGate();
});

window.addEventListener("beforeunload", () => {
  if (typeof presenceCleanup === "function") presenceCleanup();
});
