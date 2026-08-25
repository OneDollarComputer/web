/**
 * One Dollar Computer — show signed-in avatar in site chrome
 * Mark Sign in links with data-odc-signin (prefer inside .odc-auth-slot).
 * CSS /js/auth-nav.css hides them until html.odc-auth-ready.
 * When signed out, offer Google One Tap once per page load.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithCredential
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

/** Public Web client ID (Firebase Google provider). Never put the client secret here. */
const GOOGLE_CLIENT_ID =
  "1086912562723-6qcej5vr93i1k4np87apvdea5q4t2u6r.apps.googleusercontent.com";

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

function authSlots() {
  // Header only — never put the avatar in the footer.
  const header =
    document.querySelector("header .odc-auth-slot") ||
    document.querySelector("nav.top .odc-auth-slot") ||
    document.querySelector("nav .odc-auth-slot");
  if (header) return [header];
  const first = document.querySelector(".odc-auth-slot");
  return first ? [first] : [];
}

function fillSlotSignedOut(slot) {
  const existing = slot.querySelector("[data-odc-signin]");
  slot.querySelectorAll("[data-odc-avatar]").forEach((el) => el.remove());
  if (existing) {
    existing.hidden = false;
    return;
  }
  const a = document.createElement("a");
  a.href = "/project/";
  a.dataset.odcSignin = "";
  a.textContent = "Sign in";
  a.className = "nav-link text-sm text-base-sub font-medium";
  slot.appendChild(a);
}

function fillSlotSignedIn(slot, user, username) {
  const signIn = slot.querySelector("[data-odc-signin]");
  if (signIn) signIn.hidden = true;
  slot.querySelectorAll("[data-odc-avatar]").forEach((el) => el.remove());
  slot.appendChild(makeAvatar(user, username));
}

function applySignedOut() {
  authSlots().forEach(fillSlotSignedOut);
  markReady();
}

function applySignedIn(user, username) {
  authSlots().forEach((slot) => fillSlotSignedIn(slot, user, username));
  markReady();
}

function markReady() {
  document.documentElement.classList.add("odc-auth-ready");
}

async function loadUsername(uid) {
  const db = getDatabase();
  const snap = await get(ref(db, `users/${uid}`));
  if (!snap.exists()) return null;
  const rec = snap.val();
  return rec && rec.username ? rec.username : null;
}

function loadGsi() {
  if (window.google?.accounts?.id) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-odc-gsi]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("gsi")), { once: true });
      return;
    }
    const s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.dataset.odcGsi = "1";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("gsi"));
    document.head.appendChild(s);
  });
}

let wantOneTap = false;
let oneTapReady = false;

async function handleOneTap(response) {
  if (!response || !response.credential) return;
  try {
    const cred = GoogleAuthProvider.credential(response.credential);
    const result = await signInWithCredential(auth, cred);
    const username = await loadUsername(result.user.uid);
    if (!username) {
      window.location.assign("/project/");
    }
  } catch (err) {
    console.warn("One Tap sign-in failed", err);
  }
}

async function offerOneTap() {
  wantOneTap = true;
  try {
    await loadGsi();
  } catch {
    return;
  }
  if (!wantOneTap || !window.google?.accounts?.id) return;
  if (!oneTapReady) {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleOneTap,
      auto_select: true,
      cancel_on_tap_outside: true,
      context: "signin",
      itp_support: true,
      use_fedcm_for_prompt: true
    });
    oneTapReady = true;
  }
  if (!wantOneTap) return;
  window.google.accounts.id.prompt();
}

function cancelOneTap() {
  wantOneTap = false;
  try {
    window.google?.accounts?.id?.cancel?.();
  } catch {
    /* ignore */
  }
}

const app = initializeApp(FIREBASE);
const auth = getAuth(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    applySignedOut();
    offerOneTap();
    return;
  }
  cancelOneTap();
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
