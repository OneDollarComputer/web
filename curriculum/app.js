/**
 * Curriculum — Google Sign-in (same Firebase Auth as the rest of ODC)
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
const profileHint = document.getElementById("profileHint");
const profileLink = document.getElementById("profileLink");

function showError(msg) {
  if (!gateError) return;
  gateError.hidden = !msg;
  gateError.textContent = msg || "";
}

async function usernameFor(uid) {
  try {
    const snap = await get(ref(db, `users/${uid}/username`));
    return snap.exists() ? String(snap.val()) : null;
  } catch {
    return null;
  }
}

function showGate() {
  gate.hidden = false;
  studio.hidden = true;
}

async function showStudio(user) {
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
  if (username) {
    userMeta.textContent = `Signed in · /${username}/`;
    profileHint.textContent = "Your public teacher page is ready.";
    profileLink.href = `/${encodeURIComponent(username)}/`;
    profileLink.textContent = `Open /${username}/ →`;
  } else {
    userMeta.textContent = user.email || "Signed in with Google";
    profileHint.textContent = "Claim a public name so students and other teachers can find you.";
    profileLink.href = "/project/";
    profileLink.textContent = "Choose your name →";
  }
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

btnSignOut?.addEventListener("click", async () => {
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user) showStudio(user);
  else showGate();
});
