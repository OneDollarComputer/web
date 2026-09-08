const DEFAULT_CODE = `//! One Dollar Computer — LED

use odc::*;

fn main() {
    pin_output(LED);
    loop {
        pin_set(LED);
        delay(200);
        pin_clear(LED);
        delay(200);
    }
}
`;

const FIREBASE = {
  apiKey: "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
  authDomain: "auth.onedollarcomputer.com",
  databaseURL: "https://odc-files-default-rtdb.firebaseio.com",
  projectId: "odc-files",
  storageBucket: "odc-files.firebasestorage.app",
  messagingSenderId: "1086912562723",
  appId: "1:1086912562723:web:d158f4ce5c08d1ceb95396"
};

const RESERVED = new Set([
  "about", "brand", "project", "projects", "editor", "docs", "seo", "3d",
  "electronics", "download", "js", "guides", "api", "physicalai", "profile",
  "login", "signup", "users", "user", "u", "admin", "www", "static", "assets",
  "css", "img", "images", "favicon", "robots", "sitemap", "llms", "humans",
  "ai", "index", "well-known", "agents", "blog", "shop", "store", "support",
  "help", "legal", "privacy", "account", "settings", "new", "curriculum",
  "specification", "emulator"
]);

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  runTransaction
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { signInWithGoogle } from "/js/sign-in.js?v=20260908a";

const app = initializeApp(FIREBASE);
const auth = getAuth(app);
const db = getDatabase(app);
const google = new GoogleAuthProvider();
google.setCustomParameters({ prompt: "select_account" });

const $ = (id) => document.getElementById(id);

let me = null;
let profile = null;
let view = { kind: "login" };

function restoreGithubPagesPath() {
  try {
    const stored = sessionStorage.getItem("odc-path");
    if (!stored) return;
    sessionStorage.removeItem("odc-path");
    const url = new URL(stored, location.origin);
    if (url.origin === location.origin && url.pathname !== location.pathname) {
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  } catch {
    /* ignore */
  }
}

restoreGithubPagesPath();

function slugify(raw) {
  const s = String(raw || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return s || "project";
}

function uniqueSlug(base, used) {
  let slug = slugify(base);
  if (!used[slug]) return slug;
  let i = 2;
  while (used[`${slug}-${i}`]) i += 1;
  return `${slug}-${i}`;
}

function suggestUsername(displayName, email) {
  const fromName = (displayName || "").split(/\s+/)[0] || "";
  const fromEmail = (email || "").split("@")[0] || "";
  let base = slugify(fromName || fromEmail || "user").replace(/-/g, "").slice(0, 24);
  base = base.replace(/^[0-9]+/, "");
  if (!base || base.length < 2) base = (base + "user").slice(0, 24);
  return base || "user";
}

/** Public usernames: lowercase, 2–24 chars, start with a letter (not a digit). */
function isValidUsername(name) {
  return (
    /^[a-z][a-z0-9-]{0,22}[a-z0-9]$/.test(name) &&
    name.length >= 2 &&
    name.length <= 24 &&
    !RESERVED.has(name)
  );
}

function isValidSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length >= 1 && slug.length <= 48;
}

function nowIso() {
  return new Date().toISOString();
}

function newProjectId() {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return "p" + Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function fileIdFromName(name) {
  const id = slugify(String(name || "").trim()).replace(/-+/g, "-").slice(0, 32);
  return id || "file";
}

function uniqueFileId(name, used) {
  let id = fileIdFromName(name);
  if (!used[id]) return id;
  let n = 2;
  while (used[`${id}-${n}`]) n += 1;
  return `${id}-${n}`;
}

/** One project → many firmware sources. Legacy `code` becomes files.main. */
function normalizeProjectFiles(data) {
  const row = data || {};
  const out = {};
  if (row.files && typeof row.files === "object") {
    for (const [id, f] of Object.entries(row.files)) {
      if (!f || typeof f !== "object") continue;
      const content = typeof f.content === "string"
        ? f.content
        : (typeof f.code === "string" ? f.code : "");
      out[id] = {
        name: (f.name && String(f.name).trim()) || id,
        content,
        language: f.language || "rust",
        updatedAt: f.updatedAt || ""
      };
    }
  }
  if (!Object.keys(out).length) {
    const content = (row.code && (row.code.content || row.code.code)) || DEFAULT_CODE;
    out.main = { name: "main", content: String(content), language: "rust", updatedAt: "" };
  }
  const activeFile = (row.activeFile && out[row.activeFile])
    ? row.activeFile
    : (out.main ? "main" : Object.keys(out)[0]);
  return { files: out, activeFile };
}

function editorUrl(projectId, fileId) {
  let url = `/editor/?projectID=${encodeURIComponent(projectId)}`;
  if (fileId && fileId !== "main") {
    url += `&file=${encodeURIComponent(fileId)}`;
  }
  return url;
}

function codeBlob(content) {
  return { content, language: "rust" };
}

function projectSeed(ownerUid, username, slug, name, createdAt, code = DEFAULT_CODE) {
  return {
    ownerUid,
    username,
    slug,
    name,
    isMain: false,
    public: false,
    createdAt,
    updatedAt: createdAt,
    activeFile: "main",
    files: {
      main: { name: "main", content: code, language: "rust", updatedAt: createdAt }
    },
    code: codeBlob(code)
  };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseRoute() {
  const parts = location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  if (!parts.length || parts[0] === "project" || parts[0] === "profile") {
    return { kind: "login" };
  }
  if (RESERVED.has(parts[0]) || !/^[a-z][a-z0-9-]*$/.test(parts[0])) {
    return { kind: "missing" };
  }
  if (parts.length === 1) return { kind: "user", username: parts[0] };
  if (parts.length === 2 && isValidSlug(parts[1])) {
    return { kind: "project", username: parts[0], slug: parts[1] };
  }
  return { kind: "missing" };
}

function setCanonical(path) {
  const link = document.querySelector("link[rel='canonical']");
  if (link) link.href = "https://onedollarcomputer.com" + path;
}

function showError(msg) {
  const el = $("authError");
  if (!el) return;
  el.hidden = !msg;
  el.textContent = msg || "";
}

function setStatus(msg) {
  const el = $("status");
  if (el) el.textContent = msg || "";
}

function hideAll() {
  ["viewLogin", "viewClaim", "viewPage", "viewMissing"].forEach((id) => {
    const el = $(id);
    if (el) el.hidden = true;
  });
}

function go(path, replace) {
  const next = path.startsWith("/") ? path : "/" + path;
  if (replace) history.replaceState(null, "", next);
  else history.pushState(null, "", next);
  render();
}

async function claimUsername(user, username) {
  const name = slugify(username).replace(/-+/g, "-");
  if (!isValidUsername(name)) {
    throw new Error(
      "Use 2–24 characters: start with a letter, then letters, numbers, or hyphens. Single letters and names that start with a number are not allowed."
    );
  }
  const existingSnap = await get(ref(db, `users/${user.uid}`));
  const prev = existingSnap.exists() ? existingSnap.val() : null;
  if (prev && prev.username && prev.username !== name) {
    throw new Error("This Google account already has a page at /" + prev.username + "/");
  }

  const taken = await get(ref(db, `usernames/${name}`));
  if (taken.exists() && taken.val().uid !== user.uid) {
    throw new Error("That username is already taken. Try another.");
  }
  const tx = await runTransaction(ref(db, `usernames/${name}`), (current) => {
    if (current && current.uid && current.uid !== user.uid) return;
    return { uid: user.uid };
  });
  if (!tx.committed) {
    throw new Error("That username is already taken. Try another.");
  }

  const createdAt = nowIso();
  const projectsIndex = {};
  const usedSlugs = {};
  let mainId = prev && prev.mainProjectId;
  let mainSlug = "led";

  if (prev && prev.projectIds) {
    for (const pid of Object.keys(prev.projectIds)) {
      const pSnap = await get(ref(db, `projects/${pid}`));
      if (!pSnap.exists()) continue;
      const p = pSnap.val();
      let slug = p.slug || slugify(p.name || "project");
      if (usedSlugs[slug]) {
        let n = 2;
        while (usedSlugs[`${slug}-${n}`]) n += 1;
        slug = `${slug}-${n}`;
      }
      usedSlugs[slug] = true;
      await update(ref(db, `projects/${pid}`), {
        username: name,
        slug
      });
      const isMain = !!(p.isMain || pid === prev.mainProjectId);
      const isPublic = p.public === true;
      if (isPublic) {
        projectsIndex[slug] = {
          id: pid,
          name: p.name || slug,
          isMain,
          updatedAt: p.updatedAt || createdAt
        };
      }
      if (isMain) mainSlug = slug;
    }
  }

  if (!mainId) {
    mainId = newProjectId();
    mainSlug = uniqueSlug("led", usedSlugs);
    await set(ref(db, `projects/${mainId}`), projectSeed(
      user.uid, name, mainSlug, "LED", createdAt, DEFAULT_CODE
    ));
    await update(ref(db, `projects/${mainId}`), { isMain: true });
  }

  const existingIds = (prev && prev.projectIds) || {};
  await set(ref(db, `profiles/${name}`), {
    uid: user.uid,
    displayName: user.displayName || name,
    photoURL: user.photoURL || "",
    mainSlug,
    createdAt: (prev && prev.createdAt) || createdAt,
    projects: projectsIndex
  });

  await set(ref(db, `users/${user.uid}`), {
    email: user.email || "",
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
    username: name,
    mainProjectId: mainId,
    projectIds: { ...existingIds, [mainId]: true },
    createdAt: (prev && prev.createdAt) || createdAt
  });

  return name;
}

async function loadMyUser(user) {
  const snap = await get(ref(db, `users/${user.uid}`));
  if (!snap.exists()) return null;
  return snap.val();
}

async function loadPublicProfile(username) {
  const snap = await get(ref(db, `profiles/${username}`));
  if (!snap.exists()) return null;
  return snap.val();
}

function isOwner(username) {
  return !!(me && profile && profile.username === username);
}

const AGENT_API = "https://api.onedollarcomputer.com";
const SHORT_ORIGIN = "https://odc.rs";
const PAIR_TTL_MS = 10 * 60 * 1000;
const PUBLISH_WARN = "Once public, you cannot make it private again. Anyone can view and copy it.";

function connectQueryCode() {
  return new URLSearchParams(location.search).get("connect") || null;
}

function loginQueryCode() {
  return new URLSearchParams(location.search).get("login") || null;
}

function clearConnectQuery() {
  const url = new URL(location.href);
  if (!url.searchParams.has("connect")) return;
  url.searchParams.delete("connect");
  history.replaceState(null, "", url.pathname + url.search + url.hash);
}

function clearLoginQuery() {
  const url = new URL(location.href);
  if (!url.searchParams.has("login")) return;
  url.searchParams.delete("login");
  history.replaceState(null, "", url.pathname + url.search + url.hash);
}

async function approveExternalLogin(code) {
  if (!code || !me) return false;
  const res = await fetch(`${AGENT_API}/login/approve`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${await me.getIdToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code })
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) throw new Error(data.error || "Could not approve sign-in");
  return true;
}

function agentConnectUrl(code) {
  // Same pairing path as curriculum — that page tells agents "MCP only, do not scrape".
  return `${SHORT_ORIGIN}/curriculum/?connect=${encodeURIComponent(code)}`;
}

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomSecret(bytes = 18) {
  const a = new Uint8Array(bytes);
  crypto.getRandomValues(a);
  let s = "";
  for (let i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function usedSlugsForMe() {
  const used = {};
  if (!me || !profile || !profile.username) return used;
  const pub = await loadPublicProfile(profile.username);
  Object.keys((pub && pub.projects) || {}).forEach((s) => { used[s] = true; });
  const ids = Object.keys((profile && profile.projectIds) || {});
  for (const pid of ids) {
    const snap = await get(ref(db, `projects/${pid}/slug`));
    if (snap.exists() && snap.val()) used[snap.val()] = true;
  }
  return used;
}

async function loadOwnerProjects(uid) {
  const snap = await get(ref(db, `users/${uid}/projectIds`));
  const ids = snap.exists() ? Object.keys(snap.val() || {}) : [];
  const rows = [];
  await Promise.all(ids.map(async (id) => {
    const p = await get(ref(db, `projects/${id}`));
    if (!p.exists()) return;
    const v = p.val();
    rows.push({
      id,
      slug: v.slug,
      name: v.name,
      isMain: v.isMain,
      public: v.public === true,
      updatedAt: v.updatedAt,
      forkedFrom: v.forkedFrom || null
    });
  }));
  return rows;
}

async function recordFork(source, dest) {
  await set(ref(db, `forks/${source.id}/${dest.id}`), {
    projectId: dest.id,
    byUid: dest.ownerUid,
    byUsername: dest.username,
    fromUid: source.ownerUid || "",
    fromUsername: source.username || "",
    fromSlug: source.slug || "",
    toUsername: dest.username,
    toSlug: dest.slug,
    createdAt: dest.createdAt
  });
}

function rememberCloneIntent(projectId, content, returnTo) {
  try {
    sessionStorage.setItem("odc-clone", JSON.stringify({
      projectId,
      content: content || "",
      returnTo: returnTo || "page"
    }));
  } catch {
    /* ignore */
  }
}

async function cloneProject(sourceId, contentOverride) {
  if (!me || !profile || !profile.username) {
    throw new Error("Sign in and choose a username first.");
  }
  const srcSnap = await get(ref(db, `projects/${sourceId}`));
  const src = srcSnap.exists() ? srcSnap.val() : {};
  const { files: srcFiles, activeFile: srcActive } = normalizeProjectFiles(src);
  // Prefer override for the active file when visitor edited the textarea before fork.
  if (typeof contentOverride === "string") {
    const aid = srcActive;
    srcFiles[aid] = {
      ...(srcFiles[aid] || { name: aid, language: "rust" }),
      content: contentOverride,
      language: "rust"
    };
  }
  const activeFile = srcFiles[srcActive] ? srcActive : Object.keys(srcFiles)[0];
  const activeContent = srcFiles[activeFile].content;
  const name = src.name || src.slug || "Project";
  const used = await usedSlugsForMe();
  const slug = uniqueSlug(name, used);
  const id = newProjectId();
  const createdAt = nowIso();
  const forkedFrom = {
    projectId: sourceId,
    username: src.username || "",
    slug: src.slug || "",
    ownerUid: src.ownerUid || ""
  };
  await set(ref(db, `projects/${id}`), {
    ownerUid: me.uid,
    username: profile.username,
    slug,
    name,
    isMain: false,
    public: false,
    clonedFrom: sourceId,
    forkedFrom,
    createdAt,
    updatedAt: createdAt,
    activeFile,
    files: srcFiles,
    code: codeBlob(activeContent)
  });
  await update(ref(db, `users/${me.uid}/projectIds`), { [id]: true });
  if (profile.projectIds) profile.projectIds[id] = true;
  await recordFork(
    { id: sourceId, ownerUid: src.ownerUid, username: src.username, slug: src.slug },
    { id, ownerUid: me.uid, username: profile.username, slug, createdAt }
  );
  return { id, slug, username: profile.username, name };
}

let forkBusy = false;

async function handleEditAttempt() {
  const pane = $("projectPane");
  if (!pane || pane.hidden) return false;
  const username = pane.dataset.username;
  const sourceId = pane.dataset.projectId;
  if (!sourceId || isOwner(username)) return true;
  if (forkBusy) return false;
  forkBusy = true;
  try {
    if (!me) {
      setStatus("Sign in to edit — we'll copy this project to your page.");
      try {
        await signInWithGoogle(auth, google);
      } catch (e) {
        if (e && e.code === "auth/popup-closed-by-user") {
          setStatus("Sign in to edit this project.");
          return false;
        }
        throw e;
      }
      profile = await loadMyUser(me);
      syncNav();
    }
    if (isOwner(username)) return true;
    if (!profile || !profile.username) {
      rememberCloneIntent(sourceId, $("codeEditor").value, "page");
      go("/project/", true);
      return false;
    }
    setStatus("Copying to your page…");
    const dest = await cloneProject(sourceId, $("codeEditor").value);
    go(`/${dest.username}/${dest.slug}`);
    return false;
  } catch (e) {
    setStatus((e && e.message) || "Could not copy this project.");
    return false;
  } finally {
    forkBusy = false;
  }
}

async function consumePendingClone() {
  if (!me || !profile || !profile.username) return false;
  let raw;
  try {
    raw = sessionStorage.getItem("odc-clone");
  } catch {
    return false;
  }
  if (!raw) return false;
  sessionStorage.removeItem("odc-clone");
  let pending;
  try {
    pending = JSON.parse(raw);
  } catch {
    return false;
  }
  if (!pending || !pending.projectId) return false;
  setStatus("Copying to your page…");
  const dest = await cloneProject(pending.projectId, pending.content);
  if (pending.returnTo === "editor") {
    window.location.href = `/editor/?projectID=${encodeURIComponent(dest.id)}`;
    return true;
  }
  go(`/${dest.username}/${dest.slug}`, true);
  return true;
}

function setAgentStatus(msg) {
  for (const id of ["agentStatus", "projectAgentStatus"]) {
    const el = $(id);
    if (!el) continue;
    el.hidden = !msg;
    el.textContent = msg || "";
  }
}

function currentProjectContext() {
  const pane = $("projectPane");
  if (!pane || pane.hidden) return null;
  const id = pane.dataset.projectId;
  const username = pane.dataset.username;
  const slug = pane.dataset.slug;
  if (!id || !username || !slug) return null;
  return { id, username, slug };
}

function agentClipboardText(code) {
  const proj = currentProjectContext();
  const lines = [
    "Edit my One Dollar Computer firmware projects on the site (not local files).",
    "Read https://onedollarcomputer.com/editor/AI_DOCS.txt first.",
    "Rule: complete Simple Rust only (use odc::*; fn main). Never read_button() / pin 13.",
    ""
  ];
  if (proj) {
    lines.push(`Target project_id: ${proj.id}`);
    lines.push("");
  }
  lines.push(
    "If you have MCP (odc-curriculum): curriculum_pair with this link, then project_brief,",
    proj
      ? "then project_get / project_update with the project_id above (project_publish if asked)."
      : "then project_list / project_create / project_update / project_publish.",
    "REQUIRED: call curriculum_pair — do NOT fetch the Connect URL as a webpage.",
    "Publishing is irreversible.",
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
    "curl -sS -H \"Authorization: Bearer $TOKEN\" \"$API/projects\""
  );
  if (proj) {
    lines.push(
      "",
      "GET this project:",
      `curl -sS -H \"Authorization: Bearer $TOKEN\" \"$API/projects/${proj.id}\"`,
      "",
      "PATCH name + code:",
      "curl -sS -X PATCH -H \"Authorization: Bearer $TOKEN\" -H \"Content-Type: application/json\" \\",
      `  -d '{"name":"…","code":"use odc::*;\\nfn main() {\\n  …\\n}\\n"}' \\`,
      `  \"$API/projects/${proj.id}\"`
    );
  } else {
    lines.push(
      "",
      "CREATE a project:",
      "curl -sS -X POST -H \"Authorization: Bearer $TOKEN\" -H \"Content-Type: application/json\" \\",
      "  -d '{\"name\":\"LED\",\"code\":\"use odc::*;\\nfn main() { led_on(); }\\n\"}' \\",
      "  \"$API/projects\"",
      "",
      "PATCH an existing project:",
      "curl -sS -X PATCH -H \"Authorization: Bearer $TOKEN\" -H \"Content-Type: application/json\" \\",
      "  -d '{\"code\":\"use odc::*;\\nfn main() { led_on(); }\\n\"}' \\",
      "  \"$API/projects/PROJECT_ID\""
    );
  }
  return lines.join("\n");
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

function pairingLinkReady(row) {
  if (!row) return false;
  if (row.expiresAt && Date.now() > row.expiresAt) return false;
  if (row.status === "denied" || row.status === "expired") return false;
  return !!row.tokenPending;
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
      await fetch(`${AGENT_API}/pair/revoke`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await me.getIdToken()}`,
          "Content-Type": "application/json"
        },
        body: "{}"
      });
    } catch {
      /* optional */
    }
    pendingAgentCode = null;
    setAgentStatus(hashes.length ? "Access revoked." : "Nothing to revoke.");
  } catch (err) {
    console.error(err);
    setAgentStatus(err.message || "Revoke failed.");
  }
}

async function publishCurrentProject() {
  const pane = $("projectPane");
  if (!pane || pane.hidden) return;
  const id = pane.dataset.projectId;
  const username = pane.dataset.username;
  const slug = pane.dataset.slug;
  if (!me || !id || !isOwner(username)) return;
  const snap = await get(ref(db, `projects/${id}`));
  const row = snap.exists() ? snap.val() : {};
  const name = row.name || $("selectedTitle").textContent || slug;
  const updatedAt = nowIso();
  await update(ref(db, `projects/${id}`), {
    public: true,
    publishedAt: updatedAt,
    updatedAt
  });
  await update(ref(db, `profiles/${username}/projects/${slug}`), {
    id,
    name,
    isMain: !!row.isMain,
    updatedAt
  });
  go(`/${username}/${slug}`, true);
}

function renderLogin() {
  hideAll();
  $("viewLogin").hidden = false;
  document.title = "Sign in — One Dollar Computer";
  setCanonical("/project/");
  if (loginQueryCode()) {
    $("pageLede").textContent = "Sign in here to approve the other app or window. You can close this tab after.";
  } else if (connectQueryCode()) {
    $("pageLede").textContent = "This link is for your agent. Sign in to connect it.";
  } else {
    $("pageLede").textContent = "Continue with Google. Pick a short name, then your projects live at onedollarcomputer.com/your-name/";
  }
}

function renderClaim(user, preferredName) {
  hideAll();
  $("viewClaim").hidden = false;
  document.title = "Choose your name — One Dollar Computer";
  setCanonical("/project/");
  const input = $("usernameInput");
  if (input) {
    const hint = preferredName && isValidUsername(preferredName)
      ? preferredName
      : "";
    if (hint) input.value = hint;
    else if (!input.value) {
      input.value = suggestUsername(user.displayName, user.email);
    }
  }
  updateUsernamePreview();
}

function updateUsernamePreview() {
  const input = $("usernameInput");
  const preview = $("usernamePreview");
  if (!input || !preview) return;
  const name = slugify(input.value).replace(/-+/g, "-");
  preview.textContent = name && isValidUsername(name)
    ? `onedollarcomputer.com/${name}/`
    : "2+ characters, start with a letter — e.g. cloud";
}

function projectEntries(pub) {
  const map = (pub && pub.projects) || {};
  const main = pub && pub.mainSlug;
  return Object.keys(map)
    .map((slug) => ({ slug, ...map[slug] }))
    .sort((a, b) => {
      if (a.slug === main || a.isMain) return -1;
      if (b.slug === main || b.isMain) return 1;
      return (a.name || "").localeCompare(b.name || "");
    });
}

function renderProjectCards(username, items, pub, owner) {
  const main = pub && pub.mainSlug;
  $("projectGrid").innerHTML = items.length
    ? items
        .map((p) => {
          const isMain = p.slug === main || p.isMain;
          const vis = owner && !p.public ? " · only you" : "";
          return `<a class="proj-card" href="/${encodeURIComponent(username)}/${encodeURIComponent(p.slug)}">
            <strong>${escapeHtml(p.name || p.slug)}</strong>
            <span>/${username}/${p.slug}${isMain ? " · main" : ""}${vis}</span>
          </a>`;
        })
        .join("")
    : `<p class="meta">No projects yet.</p>`;
  $("projectGrid").querySelectorAll("a.proj-card").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      go(a.getAttribute("href"));
    });
  });
}

async function renderUser(username, pub, owner) {
  hideAll();
  $("viewPage").hidden = false;
  $("projectPane").hidden = true;
  $("listPane").hidden = false;
  $("ownerBar").hidden = !owner;
  $("visitorNote").hidden = owner;
  $("visitorNote").textContent = "Public projects on this computer.";
  if (owner) ensureAgentLink({ autoCopy: false }).catch(() => setAgentStatus("Could not prepare agent link."));
  document.title = `${username} — One Dollar Computer`;
  setCanonical(`/${username}/`);
  $("profileName").textContent = (pub && pub.displayName) || username;
  $("profileHandle").textContent = `onedollarcomputer.com/${username}/`;
  const photo = $("profilePhoto");
  if (pub && pub.photoURL) {
    photo.src = pub.photoURL;
    photo.hidden = false;
  } else {
    photo.hidden = true;
  }
  let items = projectEntries(pub);
  if (owner && me) {
    const mine = await loadOwnerProjects(me.uid);
    items = mine.sort((a, b) => {
      if (a.slug === (pub && pub.mainSlug) || a.isMain) return -1;
      if (b.slug === (pub && pub.mainSlug) || b.isMain) return 1;
      return (a.name || "").localeCompare(b.name || "");
    });
  }
  renderProjectCards(username, items, pub, owner);
}

async function findProject(username, slug, pub, owner) {
  const listed = pub && pub.projects && pub.projects[slug];
  if (listed) return listed;
  if (!owner || !me) return null;
  const mine = await loadOwnerProjects(me.uid);
  return mine.find((p) => p.slug === slug) || null;
}

async function renderProject(username, slug, pub, owner) {
  hideAll();
  $("viewPage").hidden = false;
  $("listPane").hidden = true;
  $("projectPane").hidden = false;
  $("ownerBar").hidden = !owner;
  $("visitorNote").hidden = owner;

  const entry = await findProject(username, slug, pub, owner);
  if (!entry) {
    $("viewPage").hidden = true;
    $("viewMissing").hidden = false;
    $("missingText").textContent = `No project “${slug}” on /${username}/.`;
    document.title = "Project not found — One Dollar Computer";
    return;
  }

  const snap = await get(ref(db, `projects/${entry.id}`));
  const data = snap.exists() ? snap.val() : {};
  const isPublic = data.public === true;
  if (!isPublic && !owner) {
    $("viewPage").hidden = true;
    $("viewMissing").hidden = false;
    $("missingText").textContent = `No project “${slug}” on /${username}/.`;
    document.title = "Project not found — One Dollar Computer";
    return;
  }

  $("visitorNote").textContent = "Public project.";
  $("codeEditor").readOnly = !owner;
  const name = data.name || entry.name || slug;
  document.title = `${name} — ${username} — One Dollar Computer`;
  setCanonical(`/${username}/${slug}`);
  $("profileName").textContent = (pub && pub.displayName) || username;
  $("profileHandle").innerHTML = `<a href="/${encodeURIComponent(username)}/">onedollarcomputer.com/${escapeHtml(username)}/</a>`;
  $("profileHandle").querySelector("a")?.addEventListener("click", (e) => {
    e.preventDefault();
    go(`/${username}/`);
  });
  const photo = $("profilePhoto");
  if (pub && pub.photoURL) {
    photo.src = pub.photoURL;
    photo.hidden = false;
  } else {
    photo.hidden = true;
  }
  $("selectedTitle").textContent = name;
  $("selectedMeta").textContent = isPublic
    ? `onedollarcomputer.com/${username}/${slug}`
    : "Only you can see this until you publish.";
  const from = data.forkedFrom;
  const fromEl = $("forkedFrom");
  if (fromEl) {
    if (from && from.username && from.slug) {
      fromEl.hidden = false;
      fromEl.innerHTML = `From <a href="/${encodeURIComponent(from.username)}/${encodeURIComponent(from.slug)}">/${escapeHtml(from.username)}/${escapeHtml(from.slug)}</a>`;
      fromEl.querySelector("a")?.addEventListener("click", (e) => {
        e.preventDefault();
        go(`/${from.username}/${from.slug}`);
      });
    } else {
      fromEl.hidden = true;
      fromEl.textContent = "";
    }
  }
  const { files, activeFile: initialFile } = normalizeProjectFiles(data);
  const activeFile = initialFile;
  const code = (files[activeFile] && files[activeFile].content) || "";
  $("codeEditor").value = code;
  lastSavedCode = code;
  $("projectPane").dataset.projectId = entry.id;
  $("projectPane").dataset.username = username;
  $("projectPane").dataset.slug = slug;
  $("projectPane").dataset.public = isPublic ? "1" : "0";
  $("projectPane").dataset.fileId = activeFile;
  $("projectPane")._files = files;
  renderFileTabs(owner);
  const btnEdit = $("btnEdit");
  const btnPublish = $("btnPublish");
  const btnAddFile = $("btnAddFile");
  const btnOpen = $("btnOpenEditor");
  if (btnEdit) btnEdit.hidden = !(!owner && isPublic);
  if (btnPublish) btnPublish.hidden = !(owner && !isPublic);
  if (btnAddFile) btnAddFile.hidden = !owner;
  if (btnOpen) btnOpen.hidden = false;
  const agentRow = $("projectAgentRow");
  if (agentRow) agentRow.hidden = !owner;
  if (owner) {
    setStatus("Edits save automatically.");
    ensureAgentLink({ autoCopy: false }).catch(() => setAgentStatus("Could not prepare agent link."));
  } else {
    setStatus("");
    setAgentStatus("");
  }
}

function renderFileTabs(owner) {
  const tabs = $("fileTabs");
  const pane = $("projectPane");
  if (!tabs || !pane) return;
  const files = pane._files || {};
  const active = pane.dataset.fileId || "main";
  const ids = Object.keys(files);
  // Always show tabs when there is more than one file, or owner can add more.
  tabs.hidden = ids.length < 2 && !owner;
  tabs.innerHTML = ids.map((id) => {
    const label = escapeHtml(files[id].name || id);
    const cls = id === active ? "file-tab active" : "file-tab";
    return `<button type="button" class="${cls}" data-file-id="${escapeHtml(id)}">${label}</button>`;
  }).join("");
  tabs.querySelectorAll("[data-file-id]").forEach((btn) => {
    btn.addEventListener("click", () => switchProjectFile(btn.getAttribute("data-file-id")));
  });
}

async function switchProjectFile(fileId) {
  const pane = $("projectPane");
  if (!pane || !fileId || pane.dataset.fileId === fileId) return;
  const files = pane._files || {};
  if (!files[fileId]) return;
  // Save current buffer first if owner.
  if (isOwner(pane.dataset.username) && $("codeEditor").value !== lastSavedCode) {
    await saveProjectCode();
  }
  pane.dataset.fileId = fileId;
  const content = files[fileId].content || "";
  $("codeEditor").value = content;
  lastSavedCode = content;
  renderFileTabs(isOwner(pane.dataset.username));
  // Persist active selection for editor / Upload.
  if (isOwner(pane.dataset.username) && pane.dataset.projectId) {
    const updatedAt = nowIso();
    await update(ref(db, `projects/${pane.dataset.projectId}`), {
      activeFile: fileId,
      updatedAt,
      code: codeBlob(content)
    }).catch(() => {});
  }
}

async function addProjectFile() {
  const pane = $("projectPane");
  if (!pane || !isOwner(pane.dataset.username)) return;
  const label = (prompt("Name for this code (e.g. send, receive)", "") || "").trim();
  if (!label) return;
  const files = pane._files || {};
  const id = uniqueFileId(label, files);
  const createdAt = nowIso();
  const content = DEFAULT_CODE;
  files[id] = { name: label, content, language: "rust", updatedAt: createdAt };
  pane._files = files;
  if ($("codeEditor").value !== lastSavedCode) await saveProjectCode();
  pane.dataset.fileId = id;
  $("codeEditor").value = content;
  lastSavedCode = content;
  const projectId = pane.dataset.projectId;
  await update(ref(db, `projects/${projectId}`), {
    updatedAt: createdAt,
    activeFile: id,
    [`files/${id}`]: files[id],
    code: codeBlob(content)
  });
  renderFileTabs(true);
  setStatus("Added.");
}

function needsUsername() {
  return !!(me && (!profile || !profile.username));
}

async function render() {
  view = parseRoute();
  showError("");
  setStatus("");
  $("missingLogin").hidden = true;

  if (view.kind === "login") {
    const loginCode = loginQueryCode();
    if (me && loginCode) {
      try {
        await approveExternalLogin(loginCode);
        clearLoginQuery();
        setStatus("Approved — return to the other app.");
        hideAll();
        $("viewLogin").hidden = false;
        $("pageLede").textContent = "Approved. You can close this tab and return to the other app.";
        $("btnGoogle").hidden = true;
        return;
      } catch (e) {
        showError((e && e.message) || "Could not approve sign-in.");
      }
    }
    const connectCode = connectQueryCode();
    if (me && connectCode) {
      try {
        await finishConnectVisit(connectCode);
      } catch {
        /* still continue */
      }
    }
    if (me && profile && profile.username && !loginCode) {
      go(`/${profile.username}/`, true);
      return;
    }
    if (needsUsername()) {
      renderClaim(me);
      return;
    }
    renderLogin();
    return;
  }

  if (view.kind === "missing") {
    hideAll();
    $("viewMissing").hidden = false;
    $("missingTitle").textContent = "Not found";
    $("missingText").textContent = "This page does not exist.";
    document.title = "Not found — One Dollar Computer";
    return;
  }

  const pub = await loadPublicProfile(view.username);

  if (needsUsername() && !pub) {
    renderClaim(me, view.username);
    return;
  }

  if (!pub) {
    hideAll();
    $("viewMissing").hidden = false;
    $("missingTitle").textContent = "This name is free";
    $("missingText").textContent = `No user named “${view.username}” yet. Sign in with Google to claim this name.`;
    document.title = "User not found — One Dollar Computer";
    $("missingLogin").hidden = !!me;
    return;
  }
  $("missingLogin").hidden = true;

  if (view.kind === "user") {
    await renderUser(view.username, pub, isOwner(view.username));
    return;
  }
  await renderProject(view.username, view.slug, pub, isOwner(view.username));
}

$("btnGoogle").addEventListener("click", async () => {
  showError("");
  try {
    await signInWithGoogle(auth, google);
  } catch (e) {
    const code = e && e.code;
    if (code === "auth/popup-closed-by-user") showError("Sign-in window was closed.");
    else if (code === "auth/operation-not-allowed") {
      showError("Google sign-in is not enabled on this Firebase project.");
    } else showError((e && e.message) || "Google sign-in failed.");
  }
});

$("btnGoogle2")?.addEventListener("click", () => $("btnGoogle").click());
$("btnSignOut").addEventListener("click", async () => {
  await signOut(auth);
  go("/project/", true);
});
$("usernameInput").addEventListener("input", updateUsernamePreview);

$("btnClaim").addEventListener("click", async () => {
  if (!me) return;
  showError("");
  $("btnClaim").disabled = true;
  try {
    const name = await claimUsername(me, $("usernameInput").value);
    profile = await loadMyUser(me);
    syncNav();
    if (await consumePendingClone()) return;
    go(`/${name}/`, true);
  } catch (e) {
    showError((e && e.message) || "Could not create your page.");
  } finally {
    $("btnClaim").disabled = false;
  }
});

let saveTimer = null;
let lastSavedCode = "";
let savingCode = false;
const SAVE_DEBOUNCE_MS = 800;

async function saveProjectCode() {
  const pane = $("projectPane");
  if (!pane || pane.hidden) return;
  const id = pane.dataset.projectId;
  const username = pane.dataset.username;
  const slug = pane.dataset.slug;
  const fileId = pane.dataset.fileId || "main";
  const content = $("codeEditor").value;
  if (!auth.currentUser || !id || !isOwner(username)) return;
  if (content === lastSavedCode || savingCode) return;
  savingCode = true;
  setStatus("Saving…");
  try {
    const updatedAt = nowIso();
    const files = pane._files || {};
    const prev = files[fileId] || { name: fileId, language: "rust" };
    files[fileId] = { ...prev, content, language: "rust", updatedAt };
    pane._files = files;
    await update(ref(db, `projects/${id}`), {
      updatedAt,
      activeFile: fileId,
      [`files/${fileId}/content`]: content,
      [`files/${fileId}/language`]: "rust",
      [`files/${fileId}/name`]: prev.name || fileId,
      [`files/${fileId}/updatedAt`]: updatedAt,
      code: codeBlob(content)
    });
    if (pane.dataset.public === "1") {
      await update(ref(db, `profiles/${username}/projects/${slug}`), { updatedAt });
    }
    lastSavedCode = content;
    setStatus("Saved.");
  } catch (e) {
    setStatus("Save failed: " + ((e && e.message) || "unknown"));
  } finally {
    savingCode = false;
  }
}

function scheduleAutosave() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = null;
    saveProjectCode().catch(() => {});
  }, SAVE_DEBOUNCE_MS);
}

$("codeEditor").addEventListener("input", () => {
  const pane = $("projectPane");
  if (!pane || pane.hidden) return;
  if (!isOwner(pane.dataset.username)) return;
  setStatus("Saving…");
  scheduleAutosave();
});

$("btnNew").addEventListener("click", async () => {
  if (!me || !profile || !profile.username) return;
  const name = ($("newProjectName").value || "").trim();
  if (!name) {
    $("newProjectName").focus();
    return;
  }
  const used = await usedSlugsForMe();
  let slug = uniqueSlug(name, used);
  const id = newProjectId();
  const createdAt = nowIso();
  await set(ref(db, `projects/${id}`), projectSeed(
    me.uid, profile.username, slug, name, createdAt, DEFAULT_CODE
  ));
  await update(ref(db, `users/${me.uid}/projectIds`), { [id]: true });
  if (profile.projectIds) profile.projectIds[id] = true;
  $("newProjectName").value = "";
  go(`/${profile.username}/${slug}`);
});

$("btnOpenEditor")?.addEventListener("click", () => {
  const pane = $("projectPane");
  const id = pane?.dataset.projectId;
  if (!id) {
    setStatus("Open a project first.");
    return;
  }
  location.assign(editorUrl(id, pane.dataset.fileId || "main"));
});

$("btnAddFile")?.addEventListener("click", () => {
  addProjectFile().catch((e) => setStatus((e && e.message) || "Could not add code."));
});

$("codeEditor").addEventListener("beforeinput", (e) => {
  const pane = $("projectPane");
  if (!pane || pane.hidden) return;
  if (isOwner(pane.dataset.username)) return;
  e.preventDefault();
});

$("btnEdit")?.addEventListener("click", () => {
  handleEditAttempt().catch((e) => setStatus((e && e.message) || "Could not copy this project."));
});

$("btnPublish")?.addEventListener("click", () => {
  const dialog = $("publishDialog");
  if (dialog && typeof dialog.showModal === "function") dialog.showModal();
  else if (confirm(PUBLISH_WARN)) publishCurrentProject().catch((e) => setStatus((e && e.message) || "Publish failed."));
});

$("btnPublishConfirm")?.addEventListener("click", async () => {
  const dialog = $("publishDialog");
  try {
    await publishCurrentProject();
  } catch (e) {
    setStatus((e && e.message) || "Publish failed.");
  } finally {
    dialog?.close();
  }
});

$("btnPublishCancel")?.addEventListener("click", () => $("publishDialog")?.close());

async function onCopyAgent() {
  try {
    await ensureAgentLink({ autoCopy: true });
  } catch (err) {
    setAgentStatus(err?.message || "Could not copy.");
  }
}

$("btnCopyAgent")?.addEventListener("click", () => onCopyAgent());
$("btnCopyAgentProject")?.addEventListener("click", () => onCopyAgent());

$("btnAgentRevoke")?.addEventListener("click", () => revokeAllAgents());
$("btnAgentRevokeProject")?.addEventListener("click", () => revokeAllAgents());

$("btnAgentHelp")?.addEventListener("click", (e) => {
  e.stopPropagation();
  const help = $("agentHelp");
  const btn = $("btnAgentHelp");
  if (!help || !btn) return;
  const open = help.hidden;
  help.hidden = !open;
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", () => {
  const help = $("agentHelp");
  const btn = $("btnAgentHelp");
  if (help) help.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
});
$("agentHelp")?.addEventListener("click", (e) => e.stopPropagation());

window.addEventListener("popstate", () => {
  render().catch((e) => showError((e && e.message) || "Could not load page."));
});

function syncNav() {
  const signIn = $("navSignIn");
  if (signIn) signIn.hidden = !!me;
  $("btnSignOut").hidden = !me;
  const mine = $("navMine");
  if (!mine) return;
  if (profile && profile.username) {
    mine.hidden = false;
    mine.href = `/${profile.username}/`;
    mine.textContent = `/${profile.username}/`;
  } else if (me) {
    mine.hidden = false;
    mine.href = "/project/";
    mine.textContent = "Choose name";
  } else {
    mine.hidden = true;
  }
}

onAuthStateChanged(auth, async (user) => {
  me = user;
  profile = null;
  if (user) {
    try {
      profile = await loadMyUser(user);
    } catch (e) {
      showError((e && e.message) || "Could not load your account.");
    }
  }
  syncNav();
  try {
    if (profile && profile.username && (await consumePendingClone())) return;
    await render();
  } catch (e) {
    showError((e && e.message) || "Could not load this page.");
  }
});

{
  const route = parseRoute();
  if (route.kind === "user" || route.kind === "project") {
    render().catch((e) => showError((e && e.message) || "Could not load this page."));
  }
}
