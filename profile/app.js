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
  "help", "legal", "privacy", "account", "settings", "new"
]);

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
  runTransaction
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

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

function suggestUsername(displayName, email) {
  const fromName = (displayName || "").split(/\s+/)[0] || "";
  const fromEmail = (email || "").split("@")[0] || "";
  return slugify(fromName || fromEmail || "user").replace(/-/g, "").slice(0, 24) || "user";
}

function isValidUsername(name) {
  return (
    /^[a-z0-9][a-z0-9-]{0,22}[a-z0-9]$/.test(name) &&
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
  if (RESERVED.has(parts[0]) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(parts[0])) {
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
    throw new Error("Use 2–24 letters or numbers (and optional hyphens). That name is reserved or invalid.");
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
  let mainId = prev && prev.mainProjectId;
  let mainSlug = "led";

  if (prev && prev.projectIds) {
    for (const pid of Object.keys(prev.projectIds)) {
      const pSnap = await get(ref(db, `projects/${pid}`));
      if (!pSnap.exists()) continue;
      const p = pSnap.val();
      let slug = p.slug || slugify(p.name || "project");
      if (projectsIndex[slug]) {
        let n = 2;
        while (projectsIndex[`${slug}-${n}`]) n += 1;
        slug = `${slug}-${n}`;
      }
      await update(ref(db, `projects/${pid}`), {
        username: name,
        slug,
        public: true
      });
      const isMain = !!(p.isMain || pid === prev.mainProjectId);
      projectsIndex[slug] = {
        id: pid,
        name: p.name || slug,
        isMain,
        updatedAt: p.updatedAt || createdAt
      };
      if (isMain) mainSlug = slug;
    }
  }

  if (!Object.keys(projectsIndex).length) {
    mainId = newProjectId();
    mainSlug = "led";
    await set(ref(db, `projects/${mainId}`), {
      ownerUid: user.uid,
      username: name,
      slug: mainSlug,
      name: "LED",
      isMain: true,
      public: true,
      createdAt,
      updatedAt: createdAt,
      code: { content: DEFAULT_CODE, language: "rust" }
    });
    projectsIndex[mainSlug] = {
      id: mainId,
      name: "LED",
      isMain: true,
      updatedAt: createdAt
    };
  }

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
    mainProjectId: mainId || projectsIndex[mainSlug].id,
    projectIds: prev && prev.projectIds
      ? { ...prev.projectIds, [projectsIndex[mainSlug].id]: true }
      : { [projectsIndex[mainSlug].id]: true },
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

function renderLogin() {
  hideAll();
  $("viewLogin").hidden = false;
  document.title = "Sign in — One Dollar Computer";
  setCanonical("/project/");
  $("pageLede").textContent = "Continue with Google. Pick a short name, then your projects live at onedollarcomputer.com/your-name/";
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
    : "Pick a short public name, like cloud";
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

function renderUser(username, pub, owner) {
  hideAll();
  $("viewPage").hidden = false;
  $("projectPane").hidden = true;
  $("listPane").hidden = false;
  $("ownerBar").hidden = !owner;
  $("visitorNote").hidden = owner;
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
  const items = projectEntries(pub);
  $("projectGrid").innerHTML = items.length
    ? items
        .map((p) => {
          const main = p.slug === (pub && pub.mainSlug) || p.isMain;
          return `<a class="proj-card" href="/${encodeURIComponent(username)}/${encodeURIComponent(p.slug)}">
            <strong>${escapeHtml(p.name || p.slug)}</strong>
            <span>/${username}/${p.slug}${main ? " · main" : ""}</span>
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

async function renderProject(username, slug, pub, owner) {
  hideAll();
  $("viewPage").hidden = false;
  $("listPane").hidden = true;
  $("projectPane").hidden = false;
  $("ownerBar").hidden = !owner;
  $("visitorNote").hidden = owner;
  $("btnSave").hidden = !owner;
  $("codeEditor").readOnly = !owner;

  const entry = pub && pub.projects && pub.projects[slug];
  if (!entry) {
    $("viewPage").hidden = true;
    $("viewMissing").hidden = false;
    $("missingText").textContent = `No project “${slug}” on /${username}/.`;
    document.title = "Project not found — One Dollar Computer";
    return;
  }

  const snap = await get(ref(db, `projects/${entry.id}`));
  const data = snap.exists() ? snap.val() : {};
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
  $("selectedMeta").textContent = `onedollarcomputer.com/${username}/${slug}`;
  $("codeEditor").value = (data.code && data.code.content) || "";
  $("btnOpenEditor").href = `/editor/?projectID=${encodeURIComponent(entry.id)}`;
  $("btnOpenEditor").hidden = false;
  $("projectPane").dataset.projectId = entry.id;
  $("projectPane").dataset.username = username;
  $("projectPane").dataset.slug = slug;
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
    if (me && profile && profile.username) {
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
    renderUser(view.username, pub, isOwner(view.username));
    return;
  }
  await renderProject(view.username, view.slug, pub, isOwner(view.username));
}

$("btnGoogle").addEventListener("click", async () => {
  showError("");
  try {
    await signInWithPopup(auth, google);
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
    go(`/${name}/`, true);
  } catch (e) {
    showError((e && e.message) || "Could not create your page.");
  } finally {
    $("btnClaim").disabled = false;
  }
});

$("btnSave").addEventListener("click", async () => {
  const pane = $("projectPane");
  const id = pane.dataset.projectId;
  const username = pane.dataset.username;
  const slug = pane.dataset.slug;
  if (!auth.currentUser || !id) return;
  setStatus("Saving…");
  try {
    const updatedAt = nowIso();
    await update(ref(db, `projects/${id}`), {
      updatedAt,
      code: { content: $("codeEditor").value, language: "rust" }
    });
    await update(ref(db, `profiles/${username}/projects/${slug}`), { updatedAt });
    setStatus("Saved.");
  } catch (e) {
    setStatus("Save failed: " + ((e && e.message) || "unknown"));
  }
});

$("btnNew").addEventListener("click", async () => {
  if (!me || !profile || !profile.username) return;
  const name = ($("newProjectName").value || "").trim();
  if (!name) {
    $("newProjectName").focus();
    return;
  }
  let slug = slugify(name);
  const pub = await loadPublicProfile(profile.username);
  const used = (pub && pub.projects) || {};
  if (used[slug]) {
    let i = 2;
    while (used[`${slug}-${i}`]) i += 1;
    slug = `${slug}-${i}`;
  }
  const id = newProjectId();
  const createdAt = nowIso();
  await set(ref(db, `projects/${id}`), {
    ownerUid: me.uid,
    username: profile.username,
    slug,
    name,
    isMain: false,
    public: true,
    createdAt,
    updatedAt: createdAt,
    code: { content: DEFAULT_CODE, language: "rust" }
  });
  await update(ref(db, `users/${me.uid}/projectIds`), { [id]: true });
  await update(ref(db, `profiles/${profile.username}/projects/${slug}`), {
    id,
    name,
    isMain: false,
    updatedAt: createdAt
  });
  $("newProjectName").value = "";
  go(`/${profile.username}/${slug}`);
});

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
    mine.textContent = "Create your page";
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
