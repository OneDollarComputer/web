/**
 * One Dollar Computer — show signed-in avatar in site chrome
 * Mark Sign in links with data-odc-signin; this swaps them for a photo → /username/
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
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

const STYLE_ID = "odc-auth-nav-style";

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    a.odc-auth-avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 999px;
      overflow: hidden;
      border: 1px solid rgba(72, 225, 167, 0.35);
      background: #121a28;
      text-decoration: none;
      flex-shrink: 0;
      vertical-align: middle;
    }
    a.odc-auth-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    a.odc-auth-avatar span {
      font-size: 0.8rem;
      font-weight: 700;
      color: #E8EEF8;
      line-height: 1;
    }
    footer a.odc-auth-avatar {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;
  document.head.appendChild(style);
}

function makeAvatar(user, username) {
  const a = document.createElement("a");
  a.className = "odc-auth-avatar";
  a.href = `/${encodeURIComponent(username)}/`;
  a.setAttribute("aria-label", `/${username}/`);
  a.dataset.odcAvatar = "1";
  if (user.photoURL) {
    const img = document.createElement("img");
    img.src = user.photoURL;
    img.alt = "";
    img.referrerPolicy = "no-referrer";
    a.appendChild(img);
  } else {
    const span = document.createElement("span");
    span.textContent = (username[0] || "?").toUpperCase();
    a.appendChild(span);
  }
  return a;
}

function applySignedOut() {
  document.querySelectorAll("[data-odc-signin]").forEach((el) => {
    el.hidden = false;
  });
  document.querySelectorAll("[data-odc-avatar]").forEach((el) => el.remove());
}

function applySignedIn(user, username) {
  ensureStyle();
  document.querySelectorAll("[data-odc-signin]").forEach((el) => {
    el.hidden = true;
    const next = el.nextElementSibling;
    if (next && next.dataset && next.dataset.odcAvatar === "1") {
      next.replaceWith(makeAvatar(user, username));
      return;
    }
    el.insertAdjacentElement("afterend", makeAvatar(user, username));
  });
}

async function loadUsername(uid) {
  const db = getDatabase();
  const snap = await get(ref(db, `users/${uid}`));
  if (!snap.exists()) return null;
  const rec = snap.val();
  return rec && rec.username ? rec.username : null;
}

const app = initializeApp(FIREBASE);
const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    applySignedOut();
    return;
  }
  try {
    const username = await loadUsername(user.uid);
    if (!username) {
      applySignedOut();
      return;
    }
    applySignedIn(user, username);
  } catch {
    applySignedOut();
  }
});
