/**
 * Google sign-in for every ODC surface.
 *
 * Inside Electron and in-app webviews the Google popup never finishes, so those
 * browsers sign in elsewhere: the app shows a one-time link
 * (odc-files-api.web.app/login/browser?code=…), the real browser approves it,
 * and the app exchanges the code for a custom token.
 */
import {
  signInWithPopup,
  signInWithCustomToken
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const API = "https://api.onedollarcomputer.com";
const POLL_MS = 1500;

/** Popup failures that mean "this browser cannot show Google" — not a cancel. */
const HANDOFF_ERRORS = new Set([
  "auth/popup-blocked",
  "auth/operation-not-supported-in-this-environment",
  "auth/web-storage-unsupported",
  "auth/internal-error"
]);

export function isEmbeddedBrowser() {
  const ua = navigator.userAgent || "";
  if (/Electron|FBAN|FBAV|Instagram|Line\/|MicroMessenger|Snapchat|LinkedInApp|OkHttp|GSA\//i.test(ua)) {
    return true;
  }
  if (/;\s*wv\)/i.test(ua)) return true;
  if (/iPhone|iPad|iPod/.test(ua) && !/Safari/.test(ua)) return true;
  try {
    if (window.top !== window.self) return true;
  } catch {
    return true;
  }
  return false;
}

function randomSecret(bytes = 24) {
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

async function api(path, { method = "GET", body } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* keep {} */
  }
  if (!res.ok) {
    const err = new Error(data.error || res.statusText || `HTTP ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

function cancelledError() {
  // Call sites already treat this code as "user closed sign-in".
  const err = new Error("Sign-in was cancelled.");
  err.code = "auth/popup-closed-by-user";
  return err;
}

const STYLE = `
.odc-signin-gate {
  position: fixed; inset: 0; z-index: 2147483000;
  display: flex; align-items: center; justify-content: center;
  background: rgba(3, 6, 12, 0.72); padding: 1.25rem;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
}
.odc-signin-card {
  width: min(26rem, 100%); background: #0D1220; color: #E8EEF8;
  border: 1px solid #1D2843; border-radius: 12px; padding: 1.25rem; line-height: 1.5;
}
.odc-signin-card h2 { margin: 0 0 0.5rem; font-size: 1.05rem; }
.odc-signin-card p { margin: 0 0 0.85rem; color: #A9B4C7; font-size: 0.95rem; }
.odc-signin-url {
  display: block; word-break: break-all; background: #07090F; color: #48E1A7;
  border: 1px solid #1D2843; border-radius: 8px; padding: 0.65rem 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.8rem;
  margin: 0 0 0.85rem;
}
.odc-signin-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
.odc-signin-card button {
  font: inherit; cursor: pointer; border: 0; border-radius: 8px; padding: 0.6rem 1rem;
}
.odc-signin-copy { background: #48E1A7; color: #04140e; font-weight: 600; }
.odc-signin-cancel { background: transparent; color: #48E1A7; border: 1px solid #1D2843; }
.odc-signin-status { margin: 0.75rem 0 0; color: #A9B4C7; font-size: 0.88rem; min-height: 1.2em; }
`;

function injectStyle() {
  if (document.getElementById("odc-signin-style")) return;
  const style = document.createElement("style");
  style.id = "odc-signin-style";
  style.textContent = STYLE;
  document.head.appendChild(style);
}

function openHandoffDialog(url) {
  injectStyle();
  const gate = document.createElement("div");
  gate.className = "odc-signin-gate";
  gate.innerHTML = `
    <div class="odc-signin-card" role="dialog" aria-modal="true" aria-label="Sign in from your browser">
      <h2>Sign in from your browser</h2>
      <p>This window cannot show Google. Open this link in Chrome or Safari, sign in, then come back — this dialog continues by itself.</p>
      <code class="odc-signin-url"></code>
      <div class="odc-signin-actions">
        <button type="button" class="odc-signin-copy">Copy link</button>
        <button type="button" class="odc-signin-cancel">Cancel</button>
      </div>
      <p class="odc-signin-status">Waiting for your browser…</p>
    </div>`;
  gate.querySelector(".odc-signin-url").textContent = url;
  document.body.appendChild(gate);

  const statusEl = gate.querySelector(".odc-signin-status");
  let rejectCancel;
  const cancelled = new Promise((_, reject) => { rejectCancel = reject; });
  cancelled.catch(() => {});

  gate.querySelector(".odc-signin-copy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(url);
      statusEl.textContent = "Copied — open it in your browser.";
    } catch {
      statusEl.textContent = "Copy the link above into your browser.";
    }
  });
  gate.querySelector(".odc-signin-cancel").addEventListener("click", () => {
    rejectCancel(cancelledError());
  });

  return {
    cancelled,
    status(msg) { statusEl.textContent = msg; },
    close() { gate.remove(); }
  };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForApproval(code, verifier, expiresAt, dialog) {
  const deadline = expiresAt || Date.now() + 10 * 60 * 1000;
  let sawApproved = 0;
  while (Date.now() < deadline) {
    let data;
    try {
      data = await api(
        `/login/status?code=${encodeURIComponent(code)}&verifier=${encodeURIComponent(verifier)}`
      );
    } catch (err) {
      if (err.status === 404) throw new Error("That sign-in link expired. Try again.");
      dialog.status("Waiting for your browser…");
      await Promise.race([sleep(POLL_MS), dialog.cancelled]);
      continue;
    }
    if (data.token) return data.token;
    if (data.status === "expired" || data.status === "unknown") {
      throw new Error("That sign-in link expired. Try again.");
    }
    if (data.status === "connected" && !data.token) {
      throw new Error("Sign-in was already used. Try again.");
    }
    if (data.status === "approved") {
      sawApproved += 1;
      dialog.status("Approved — finishing…");
      // Token should arrive on the same status call; if RTDB lagged, retry a few times.
      if (sawApproved > 8) {
        throw new Error("Approved, but this app did not receive the session. Try Sign in again.");
      }
    } else {
      sawApproved = 0;
      dialog.status("Waiting for your browser…");
    }
    await Promise.race([sleep(POLL_MS), dialog.cancelled]);
  }
  throw new Error("That sign-in link expired. Try again.");
}

/** Sign in through a real browser and return the credential. */
export async function signInFromBrowser(auth) {
  const verifier = randomSecret();
  const started = await api("/login/start", {
    method: "POST",
    body: { verifierHash: await sha256Hex(verifier) }
  });
  // Always use the API approve page — production site may not have the latest JS.
  const url = started.url || `https://odc-files-api.web.app/login/browser?code=${encodeURIComponent(started.code)}`;

  const dialog = openHandoffDialog(url);
  try {
    window.open(url, "_blank", "noopener");
  } catch {
    /* the link is on screen either way */
  }
  try {
    const token = await waitForApproval(started.code, verifier, started.expiresAt, dialog);
    dialog.status("Signing in…");
    return await signInWithCustomToken(auth, token);
  } finally {
    dialog.close();
  }
}

/** Google sign-in: popup where it works, browser handoff where it does not. */
export async function signInWithGoogle(auth, provider) {
  // Approving a handoff link must use Google in *this* browser — never start another handoff.
  const approvingHandoff = (() => {
    try {
      const q = new URLSearchParams(location.search);
      if (q.has("login") || q.has("code")) {
        const path = location.pathname || "";
        if (path.includes("/login") || q.has("login")) return true;
      }
      return false;
    } catch {
      return false;
    }
  })();

  if (approvingHandoff || !isEmbeddedBrowser()) {
    try {
      return await signInWithPopup(auth, provider);
    } catch (err) {
      if (approvingHandoff || !HANDOFF_ERRORS.has(err && err.code)) throw err;
    }
  }
  return signInFromBrowser(auth);
}
