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
import { CURRICULUM_API } from "./api-origin.js";
import { paintIframe, repaintHtmlPreviews, watchHtmlEmbed } from "./iframe-paint.js";
import { joinUrl, joinUrlAlt, normalizeLessonBody, renderLessonBody } from "./session-shared.js";

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

const AGENT_API = CURRICULUM_API;
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
const btnPreview = document.getElementById("btnPreview");
const btnGoLive = document.getElementById("btnGoLive");
const liveDurationDialog = document.getElementById("liveDurationDialog");
const previewDialog = document.getElementById("previewDialog");
const previewTitle = document.getElementById("previewTitle");
const previewBody = document.getElementById("previewBody");
const liveDuration = document.getElementById("liveDuration");
const liveRoomChip = document.getElementById("liveRoomChip");
const liveRoomLink = document.getElementById("liveRoomLink");
const btnUpdateRoom = document.getElementById("btnUpdateRoom");
const modeEdit = document.getElementById("modeEdit");
const modeSuggest = document.getElementById("modeSuggest");
const suggestPanel = document.getElementById("suggestPanel");
const suggestForm = document.getElementById("suggestForm");
const sugList = document.getElementById("sugList");
const agentStatus = document.getElementById("agentStatus");
const btnCopyAgent = document.getElementById("btnCopyAgent");
const btnAgentRevoke = document.getElementById("btnAgentRevoke");

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
let unsubLiveRoom = null;
let activeLiveRoom = null;
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
  if (!agentStatus) return;
  agentStatus.hidden = !msg;
  agentStatus.textContent = msg || "";
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

function agentClipboardText(code) {
  return [
    "Edit my One Dollar Computer curriculum on the site (not local files).",
    "Read https://onedollarcomputer.com/curriculum/AGENT_LESSONS.md first.",
    "Rule: teaching HTML5 is free; any board firmware must be complete Simple Rust (use odc::*;).",
    "",
    "If you have MCP (odc-curriculum): curriculum_pair with this link, then curriculum_agent_brief,",
    "then curriculum_create_lesson (new) or curriculum_list_lessons / curriculum_update_lesson.",
    "",
    "Connect link:",
    agentConnectUrl(code),
    "",
    "Or run this entire block in ONE persistent shell (approve once):",
    "",
    "set -e",
    `API=${AGENT_API}`,
    `CODE=${code}`,
    "TOKEN=$(curl -sS \"$API/pair/status?code=$CODE\" | python3 -c \"import sys,json; d=json.load(sys.stdin); t=d.get('token',''); assert t, d; print(t)\")",
    "export TOKEN",
    "curl -sS -H \"Authorization: Bearer $TOKEN\" \"$API/lessons\"",
    "",
    "CREATE a lesson:",
    "curl -sS -X POST -H \"Authorization: Bearer $TOKEN\" -H \"Content-Type: application/json\" \\",
    "  -d '{\"title\":\"My lesson\",\"overview\":\"…\",\"steps\":[\"Firmware (Simple Rust)\",\"```rust\\nuse odc::*;\\nfn main() { led_on(); }\\n```\"],\"html\":[{\"title\":\"Demo\",\"html\":\"<!doctype html><html><body><h1>Hi</h1></body></html>\"}],\"links\":[{\"label\":\"Editor\",\"url\":\"https://onedollarcomputer.com/editor/\"},{\"label\":\"Virtual board\",\"url\":\"https://onedollarcomputer.com/emulator/r2/\"}]}' \\",
    "  \"$API/lessons\"",
    "",
    "PATCH an existing lesson (fields: overview, materials[], steps[], photos[], videos[], links[], html[]):",
    "curl -sS -X PATCH -H \"Authorization: Bearer $TOKEN\" -H \"Content-Type: application/json\" \\",
    "  -d '{\"html\":[{\"title\":\"Demo\",\"html\":\"<!doctype html><html>…</html>\"}]}' \\",
    "  \"$API/lessons/LESSON_ID\""
  ].join("\n");
}

let pendingAgentCode = null;
let pendingAgentExpiresAt = 0;

async function copyAgentPrompt() {
  if (!pendingAgentCode) await ensureAgentLink({ autoCopy: false });
  if (!pendingAgentCode) return Promise.reject(new Error("No agent code"));
  const text = agentClipboardText(pendingAgentCode);
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  return Promise.reject(new Error("Clipboard unavailable"));
}

async function approveAgentPairingCode(c) {
  if (!c || !me) return;
  const snap = await get(ref(db, `curriculum/agentPairing/${c}`));
  if (!snap.exists()) throw new Error("Unknown or expired code");
  const row = snap.val();
  if (row.expiresAt && Date.now() > row.expiresAt) {
    await update(ref(db, `curriculum/agentPairing/${c}`), { status: "expired" });
    throw new Error("Code expired");
  }
  if (row.status === "connected" && row.tokenPending) return;
  if (row.status === "approved" && row.tokenPending) return;
  if (row.status !== "pending") {
    throw new Error(`Pairing is ${row.status}`);
  }
  const token = `odc_agent_${randomSecret(32)}`;
  const tokenHash = await sha256Hex(token);
  const now = Date.now();
  await set(ref(db, `curriculum/agentTokens/${tokenHash}`), {
    uid: me.uid,
    createdAt: now,
    pairingCode: c
  });
  await set(ref(db, `curriculum/byUser/${me.uid}/agentTokenHashes/${tokenHash}`), {
    createdAt: now
  });
  await update(ref(db, `curriculum/agentPairing/${c}`), {
    status: "approved",
    uid: me.uid,
    tokenHash,
    tokenPending: token,
    confirmedAt: now
  });
}

function pairingLinkReady(row) {
  if (!row) return false;
  if (row.expiresAt && Date.now() > row.expiresAt) return false;
  if (row.status === "denied" || row.status === "expired") return false;
  return !!row.tokenPending;
}

/** Keep one agent link ready; reuse until claimed or near expiry. */
async function ensureAgentLink({ autoCopy = false, forceNew = false } = {}) {
  if (!me) return null;
  if (!forceNew && pendingAgentCode && pendingAgentExpiresAt - Date.now() > 60_000) {
    try {
      const snap = await get(ref(db, `curriculum/agentPairing/${pendingAgentCode}`));
      if (pairingLinkReady(snap.val())) {
        if (autoCopy) {
          try {
            await copyAgentPrompt();
            setAgentStatus("Copied — paste into your agent.");
          } catch {
            setAgentStatus("Could not copy.");
          }
        }
        return agentConnectUrl(pendingAgentCode);
      }
    } catch {
      /* new link below */
    }
    forceNew = true;
  }

  const code = randomSecret(18);
  const now = Date.now();
  const expiresAt = now + PAIR_TTL_MS;
  await set(ref(db, `curriculum/agentPairing/${code}`), {
    status: "pending",
    createdBy: me.uid,
    createdAt: now,
    expiresAt
  });
  await approveAgentPairingCode(code);
  pendingAgentCode = code;
  pendingAgentExpiresAt = expiresAt;
  if (autoCopy) {
    try {
      await copyAgentPrompt();
      setAgentStatus("Copied — paste into your agent.");
    } catch {
      setAgentStatus("Could not copy.");
    }
  } else {
    setAgentStatus("");
  }
  return agentConnectUrl(code);
}

async function finishConnectVisit(code) {
  if (!code || !me) return;
  try {
    const snap = await get(ref(db, `curriculum/agentPairing/${code}`));
    if (snap.exists() && snap.val()?.status === "pending") {
      await approveAgentPairingCode(code);
    }
  } catch (err) {
    console.error(err);
  }
  clearConnectQuery();
}

async function revokeAllAgents() {
  if (!me) return;
  if (!confirm("Revoke all agent access?")) return;
  try {
    const snap = await get(ref(db, `curriculum/byUser/${me.uid}/agentTokenHashes`));
    const hashes = snap.exists() ? Object.keys(snap.val()) : [];
    const updates = {};
    const now = Date.now();
    hashes.forEach((th) => {
      updates[`curriculum/agentTokens/${th}/revoked`] = true;
      updates[`curriculum/agentTokens/${th}/revokedAt`] = now;
      updates[`curriculum/byUser/${me.uid}/agentTokenHashes/${th}`] = null;
    });
    if (hashes.length) await update(ref(db), updates);
    try {
      await agentFetch("POST", "/pair/revoke", {});
    } catch {
      /* optional */
    }
    setAgentStatus(hashes.length ? "Access revoked." : "Nothing to revoke.");
  } catch (err) {
    console.error(err);
    setAgentStatus(err.message || "Revoke failed.");
  }
}

async function showGate() {
  gate.hidden = false;
  studio.hidden = true;
  me = null;
  detachLesson();

  const connectCode = connectQueryCode();
  const lid = lessonQueryId();
  if (connectCode) {
    gateTitle.textContent = "Agent link";
    gateLede.textContent =
      "This link is for your agent (MCP curriculum_pair), not a lesson page. Sign in to open your studio.";
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

const MAX_HTML_BYTES = 512 * 1024;

function lessonHtmlBlocks(body) {
  const blocks = body?.html || body?.games || [];
  return blocks.map((block) => {
    if (!block || typeof block !== "object") return block;
    return {
      ...block,
      title: block.title || "",
      html: block.html || block.gameHtml || block.game_html || ""
    };
  });
}

function setHtmlEditorOpen(row, open) {
  const editor = row.querySelector(".html-editor");
  const editBtn = row.querySelector(".html-edit");
  const doneBtn = row.querySelector(".html-done");
  if (!editor || !editBtn || !doneBtn) return;
  row.classList.toggle("is-editing", open);
  editor.hidden = !open;
  editBtn.hidden = open;
  doneBtn.hidden = !open;
  row.dataset.editing = open ? "1" : "";
}

function addHtmlRow(values = {}, startEditing = false) {
  const host = document.getElementById("htmlRows");
  if (!host) return;

  const row = document.createElement("div");
  row.className = "media-row html-row";
  row.dataset.kind = "html";

  const wrap = document.createElement("div");
  wrap.className = "html-embed-wrap";

  const view = document.createElement("div");
  view.className = "html-view";

  const titleDisplay = document.createElement("div");
  titleDisplay.className = "html-title-display";

  const embed = document.createElement("div");
  embed.className = "html-embed";
  embed.hidden = !String(values.html || "").trim();

  const iframe = document.createElement("iframe");
  iframe.title = values.title || "Lesson HTML";
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-forms allow-modals");
  iframe.setAttribute("allow", "fullscreen; clipboard-write");
  iframe.setAttribute("allowfullscreen", "");

  const fsBtn = document.createElement("button");
  fsBtn.type = "button";
  fsBtn.className = "html-fullscreen";
  fsBtn.setAttribute("aria-label", "Fullscreen");
  fsBtn.textContent = "⛶";

  embed.appendChild(iframe);
  embed.appendChild(fsBtn);

  const toolbar = document.createElement("div");
  toolbar.className = "html-toolbar";

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.className = "html-edit";
  editBtn.textContent = "Edit";

  const doneBtn = document.createElement("button");
  doneBtn.type = "button";
  doneBtn.className = "html-done";
  doneBtn.textContent = "Done";
  doneBtn.hidden = true;

  toolbar.appendChild(editBtn);
  toolbar.appendChild(doneBtn);
  view.appendChild(titleDisplay);
  view.appendChild(embed);
  view.appendChild(toolbar);

  const editor = document.createElement("div");
  editor.className = "html-editor";
  editor.hidden = true;

  const titleInput = document.createElement("input");
  titleInput.className = "title-input";
  titleInput.type = "text";
  titleInput.placeholder = "Title (optional)";
  titleInput.value = values.title || "";

  const htmlInput = document.createElement("textarea");
  htmlInput.className = "html-input";
  htmlInput.rows = 8;
  htmlInput.placeholder = "HTML5 only for now";
  htmlInput.value = values.html || "";

  const editorBar = document.createElement("div");
  editorBar.className = "html-editor-bar";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "remove";
  removeBtn.setAttribute("aria-label", "Remove");
  removeBtn.textContent = "Remove";

  editorBar.appendChild(removeBtn);
  editor.appendChild(titleInput);
  editor.appendChild(htmlInput);
  editor.appendChild(editorBar);

  wrap.appendChild(view);
  wrap.appendChild(editor);
  row.appendChild(wrap);

  let previewTimer = 0;
  const syncPreview = (immediate = false) => {
    const html = htmlInput.value.trim();
    const title = titleInput.value.trim();
    iframe.title = title || "Lesson HTML";
    titleDisplay.textContent = title;
    titleDisplay.hidden = !title;
    const paint = () => {
      if (html) {
        embed.hidden = false;
        paintIframe(iframe, html);
      } else {
        embed.hidden = true;
        iframe.removeAttribute("src");
        iframe.removeAttribute("srcdoc");
      }
    };
    clearTimeout(previewTimer);
    if (immediate) paint();
    else previewTimer = setTimeout(paint, 400);
  };

  fsBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      embed.requestFullscreen?.().catch(() => {});
    }
  });

  editBtn.addEventListener("click", () => {
    setHtmlEditorOpen(row, true);
    htmlInput.focus();
  });

  doneBtn.addEventListener("click", () => {
    syncPreview(true);
    setHtmlEditorOpen(row, false);
    if (isAuthor && editMode === "edit") scheduleSave();
  });

  titleInput.addEventListener("input", () => {
    const title = titleInput.value.trim();
    iframe.title = title || "Lesson HTML";
    titleDisplay.textContent = title;
    titleDisplay.hidden = !title;
    if (isAuthor && editMode === "edit") scheduleSave();
  });

  htmlInput.addEventListener("input", () => {
    syncPreview(false);
    if (isAuthor && editMode === "edit") scheduleSave();
  });

  removeBtn.addEventListener("click", () => {
    row.remove();
    if (isAuthor && editMode === "edit") scheduleSave();
  });

  host.appendChild(row);
  syncPreview(true);
  watchHtmlEmbed(iframe);
  if (startEditing || !htmlInput.value.trim()) setHtmlEditorOpen(row, true);
  else setHtmlEditorOpen(row, false);
}

function addQuizRow(values = {}) {
  const host = document.getElementById("quizRows");
  if (!host) return;
  const row = document.createElement("div");
  row.className = "media-row quiz-row";
  row.innerHTML =
    `<label class="field"><span>Question</span>` +
    `<textarea class="question-input doc-body" rows="2" placeholder="What did you learn?"></textarea></label>` +
    `<label class="field"><span>Choices (one per line)</span>` +
    `<textarea class="choices-input doc-body" rows="3" placeholder="Yes&#10;No"></textarea></label>` +
    `<button type="button" class="ghost-sm remove">Remove</button>`;
  const questionInput = row.querySelector(".question-input");
  const choicesInput = row.querySelector(".choices-input");
  const removeBtn = row.querySelector(".remove");
  questionInput.value = values.question || "";
  choicesInput.value = Array.isArray(values.choices) ? values.choices.join("\n") : "";
  removeBtn.hidden = !isAuthor;
  for (const el of [questionInput, choicesInput]) {
    el.addEventListener("input", () => {
      if (isAuthor && editMode === "edit") scheduleSave();
    });
  }
  removeBtn.addEventListener("click", () => {
    row.remove();
    if (isAuthor && editMode === "edit") scheduleSave();
  });
  host.appendChild(row);
  autosizeAll();
}

function clearMedia() {
  ["photoRows", "videoRows", "htmlRows", "quizRows", "linkRows"].forEach((id) => {
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

function readHtmlBlocks() {
  const host = document.getElementById("htmlRows");
  if (!host) return [];
  return [...host.querySelectorAll(".html-row")].map((row) => {
    const title = row.querySelector(".title-input")?.value.trim() || "";
    const html = row.querySelector(".html-input")?.value.trim() || "";
    const item = { html };
    if (title) item.title = title;
    return item;
  }).filter((x) => x.html);
}

function readQuizzes() {
  const host = document.getElementById("quizRows");
  if (!host) return [];
  return [...host.querySelectorAll(".quiz-row")].map((row) => {
    const question = row.querySelector(".question-input")?.value.trim() || "";
    const choices = lines(row.querySelector(".choices-input")?.value || "");
    return { question, choices };
  }).filter((x) => x.question && x.choices.length >= 2);
}

function blankBody() {
  return {
    overview: "",
    materials: [],
    steps: [],
    photos: [],
    videos: [],
    html: [],
    quizzes: [],
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
    html: readHtmlBlocks(),
    quizzes: readQuizzes(),
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
  lessonHtmlBlocks(body).forEach((block) => addHtmlRow(block));
  (body.quizzes || []).forEach((q) => addQuizRow(q));
  (body.links || []).forEach((l) => addMediaRow("link", l));
  if (!(body.photos || []).length) addMediaRow("photo");
  if (!(body.videos || []).length) addMediaRow("video");
  if (!lessonHtmlBlocks(body).length && isAuthor) addHtmlRow({}, true);
  if (!(body.quizzes || []).length && isAuthor) addQuizRow();
  if (!(body.links || []).length) addMediaRow("link");
  applyingRemote = false;
  btnDelete.hidden = !(isAuthor && currentMeta?.ownerUid === me?.uid);
  autosizeAll();
  renderList();
  updateCollabChrome();
  requestAnimationFrame(() => requestAnimationFrame(() => repaintHtmlPreviews()));
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
    if (node.classList?.contains("html-fullscreen")) return;
    if (node.closest(".html-editor")) return;
    if (node.tagName === "BUTTON") node.disabled = !canEdit;
    else node.readOnly = !canEdit;
  });
  document.querySelectorAll(".html-row").forEach((row) => {
    const toolbar = row.querySelector(".html-toolbar");
    if (toolbar) toolbar.hidden = !canEdit;
    toolbar?.querySelectorAll(".html-edit, .html-done").forEach((btn) => {
      btn.hidden = !canEdit;
    });
    if (!canEdit) {
      setHtmlEditorOpen(row, false);
    } else if (row.dataset.editing !== "1") {
      setHtmlEditorOpen(row, false);
    }
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
  claimEmailInvites();
  ensureAgentLink({ autoCopy: false }).catch((err) => {
    console.error(err);
    setAgentStatus("Could not prepare agent link.");
  });

  const connectCode = connectQueryCode();
  if (connectCode) await finishConnectVisit(connectCode);

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
  addHtmlRow({}, true);
  addQuizRow();
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
  if (typeof unsubLiveRoom === "function") unsubLiveRoom();
  if (typeof presenceCleanup === "function") presenceCleanup();
  unsubLesson = unsubPresence = unsubSuggestions = unsubLiveRoom = presenceCleanup = null;
  activeLiveRoom = null;
  if (liveRoomChip) liveRoomChip.hidden = true;
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
  attachLiveRoom(id);
  renderList();
}

function updateLiveRoomChrome(room) {
  activeLiveRoom = room;
  if (!liveRoomChip || !isAuthor || !room?.sessionId) {
    if (liveRoomChip) liveRoomChip.hidden = true;
    return;
  }
  if (room.expiresAt && room.expiresAt < Date.now()) {
    liveRoomChip.hidden = true;
    return;
  }
  liveRoomChip.hidden = false;
  if (liveRoomLink) {
    liveRoomLink.textContent = `odc.rs/${room.pin}`;
    liveRoomLink.href = joinUrl(room.pin);
    liveRoomLink.title = joinUrlAlt(room.pin);
  }
}

function attachLiveRoom(lessonId) {
  unsubLiveRoom = onValue(ref(db, `curriculum/lessons/${lessonId}/liveRoom`), (snap) => {
    updateLiveRoomChrome(snap.val());
  });
}

function sessionBodyFromData(data) {
  return {
    overview: data.overview,
    materials: data.materials,
    steps: data.steps,
    photos: data.photos,
    videos: data.videos,
    html: data.html,
    quizzes: data.quizzes,
    links: data.links
  };
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
  for (const block of data.html) {
    if (block.html && block.html.length > MAX_HTML_BYTES) {
      setStatus("HTML block is too large (max 512 KB).");
      return;
    }
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
        html: data.html,
        quizzes: data.quizzes,
        links: data.links
      };
      updates[`curriculum/lessons/${id}/body/games`] = null;
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
      html: data.html,
      quizzes: data.quizzes,
      links: data.links
    };
    updates[`curriculum/lessons/${currentId}/body/games`] = null;
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
  const raw = (inviteUser.value || "").trim().toLowerCase().replace(/^@+/, "");
  if (!raw) {
    setStatus("Enter a username or email.");
    return;
  }

  const isEmail = raw.includes("@");
  try {
    if (isEmail) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) {
        setStatus("Enter a valid email.");
        return;
      }
      const data = await agentFetch("POST", "/invite", {
        lessonId: currentId,
        email: raw
      });
      inviteUser.value = "";
      if (data.pending) {
        setStatus("Invite saved — they join when they sign in with that email.");
      } else if (data.already) {
        setStatus("Already an author.");
      } else {
        setStatus(`Added ${raw}.`);
      }
      return;
    }

    const name = raw;
    if (!/^[a-z][a-z0-9-]{0,22}[a-z0-9]$/.test(name) || name.length < 2) {
      setStatus("Username: 2–24 chars, start with a letter — or use an email.");
      return;
    }
    const data = await agentFetch("POST", "/invite", {
      lessonId: currentId,
      username: name
    });
    inviteUser.value = "";
    if (data.already) setStatus(`“${name}” is already an author.`);
    else setStatus(`Added /${name}/.`);
  } catch (err) {
    console.error(err);
    setStatus(err?.message || "Invite failed.");
  }
}

async function claimEmailInvites() {
  if (!me) return;
  try {
    const data = await agentFetch("POST", "/invite/claim", {});
    if (data.claimed > 0) {
      await refreshLessonIndex();
      setStatus(
        data.claimed === 1
          ? "Joined 1 invited lesson."
          : `Joined ${data.claimed} invited lessons.`
      );
    }
  } catch (err) {
    console.error(err);
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

function openStudentPreview() {
  if (!previewDialog || !previewBody) return;
  const data = collectForm();
  const body = normalizeLessonBody({
    overview: data.overview,
    materials: data.materials,
    steps: data.steps,
    photos: data.photos,
    videos: data.videos,
    html: data.html,
    quizzes: data.quizzes,
    links: data.links
  });
  if (previewTitle) previewTitle.textContent = data.title || "Untitled lesson";
  renderLessonBody(previewBody, body, { activitiesFirst: true });
  if (typeof previewDialog.showModal === "function") previewDialog.showModal();
  else previewDialog.hidden = false;
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
btnPreview?.addEventListener("click", () => openStudentPreview());

async function startWorkshop(durationMinutes = 45) {
  if (!me || !currentId || !isAuthor) return;
  await saveCurrent();
  if (!currentId) return;
  const data = collectForm();
  let pin = "";
  for (let attempt = 0; attempt < 12; attempt++) {
    const candidate = String(Math.floor(1000 + Math.random() * 9000));
    const taken = await get(ref(db, `curriculum/liveByPin/${candidate}`));
    if (!taken.exists() || taken.val()?.status !== "active") {
      pin = candidate;
      break;
    }
  }
  if (!pin) {
    setStatus("Could not create a room code. Try again.");
    return;
  }
  const sid = `ws_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();
  const durationMs = Math.max(15, Number(durationMinutes) || 45) * 60 * 1000;
  const session = {
    lessonId: currentId,
    ownerUid: me.uid,
    pin,
    status: "active",
    createdAt: now,
    durationMs,
    expiresAt: now + durationMs,
    currentSlide: 0,
    title: data.title,
    body: sessionBodyFromData(data)
  };
  const liveRoom = {
    sessionId: sid,
    pin,
    startedAt: now,
    expiresAt: session.expiresAt,
    durationMs
  };
  try {
    await update(ref(db), {
      [`curriculum/live/${sid}`]: session,
      [`curriculum/liveByPin/${pin}`]: {
        sessionId: sid,
        lessonId: currentId,
        status: "active",
        expiresAt: session.expiresAt
      },
      [`curriculum/lessons/${currentId}/liveRoom`]: liveRoom
    });
    updateLiveRoomChrome(liveRoom);
    window.open(`/curriculum/live/?session=${encodeURIComponent(sid)}`, "_blank", "noopener");
    setStatus(`Live · students type ${joinUrl(pin).replace(/^https?:\/\//, "")}`);
  } catch (err) {
    console.error(err);
    const denied = String(err?.message || "").includes("PERMISSION_DENIED");
    setStatus(denied
      ? "Deploy database rules first, then try again."
      : "Could not start class.");
  }
}

async function pushRoomUpdate() {
  if (!me || !currentId || !isAuthor || !activeLiveRoom?.sessionId) return;
  await saveCurrent();
  const data = collectForm();
  try {
    await update(ref(db), {
      [`curriculum/live/${activeLiveRoom.sessionId}/title`]: data.title,
      [`curriculum/live/${activeLiveRoom.sessionId}/body`]: sessionBodyFromData(data),
      [`curriculum/live/${activeLiveRoom.sessionId}/updatedAt`]: Date.now()
    });
    setStatus(`Room updated · PIN ${activeLiveRoom.pin}`);
  } catch (err) {
    console.error(err);
    setStatus("Could not update room.");
  }
}

btnGoLive?.addEventListener("click", () => {
  if (!liveDurationDialog) return startWorkshop();
  liveDurationDialog.showModal();
});

liveDurationDialog?.addEventListener("close", () => {
  if (liveDurationDialog.returnValue !== "go") return;
  const minutes = Number(liveDuration?.value || 45);
  startWorkshop(minutes);
});
btnUpdateRoom?.addEventListener("click", () => pushRoomUpdate());

document.querySelectorAll("[data-add]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const kind = btn.getAttribute("data-add");
    if (kind === "html") addHtmlRow({}, true);
    else if (kind === "quiz") addQuizRow();
    else addMediaRow(kind);
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

btnCopyAgent?.addEventListener("click", async () => {
  try {
    await ensureAgentLink({ autoCopy: true });
  } catch (err) {
    console.error(err);
    setAgentStatus(err?.message || "Could not copy.");
  }
});
btnAgentRevoke?.addEventListener("click", () => revokeAllAgents());

onAuthStateChanged(auth, (user) => {
  if (user) showStudio(user);
  else showGate();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") repaintHtmlPreviews();
});

window.addEventListener("beforeunload", () => {
  if (typeof presenceCleanup === "function") presenceCleanup();
});
