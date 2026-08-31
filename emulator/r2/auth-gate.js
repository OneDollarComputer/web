/**
 * Emulator access: no login on localhost; Google sign-in on onedollarcomputer.com.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const FIREBASE = {
  apiKey: "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
  authDomain: "auth.onedollarcomputer.com",
  databaseURL: "https://odc-files-default-rtdb.firebaseio.com",
  projectId: "odc-files",
  storageBucket: "odc-files.firebasestorage.app",
  messagingSenderId: "1086912562723",
  appId: "1:1086912562723:web:d158f4ce5c08d1ceb95396",
};

export function isLocalDev() {
  const host = location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]";
}

export function ensureEmulatorAccess() {
  const gate = document.getElementById("auth-gate");
  const main = document.getElementById("emulator-main");

  if (isLocalDev()) {
    if (gate) gate.hidden = true;
    if (main) main.hidden = false;
    return Promise.resolve();
  }
  const btnGoogle = document.getElementById("btnGoogle");
  const gateError = document.getElementById("gateError");

  if (!gate || !main) {
    return Promise.resolve();
  }

  gate.hidden = false;
  main.hidden = true;

  const app = initializeApp(FIREBASE);
  const auth = getAuth(app);
  const google = new GoogleAuthProvider();
  google.setCustomParameters({ prompt: "select_account" });

  return new Promise((resolve) => {
    const stop = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      gate.hidden = true;
      main.hidden = false;
      stop();
      resolve();
    });

    if (btnGoogle) {
      btnGoogle.addEventListener("click", async () => {
        if (gateError) gateError.hidden = true;
        try {
          await signInWithPopup(auth, google);
        } catch (err) {
          if (gateError) {
            gateError.textContent = err?.message || "Sign-in failed";
            gateError.hidden = false;
          }
        }
      });
    }
  });
}
