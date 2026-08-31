/**
 * ODC R2 emulator — browser shell (deploy of emulator/r2 WASM).
 * Core board model: https://github.com/OneDollarComputer/emulator/tree/main/r2
 */

import {
  ensureEmulatorAccess,
  isLocalDev,
  getIdToken,
  DATABASE_URL,
} from "./auth-gate.js";

const CYCLES_PER_FRAME = 80_000;
const COMPILE_TIMEOUT_MS = 120_000;

const statusEl = document.getElementById("status");
const ledEl = document.getElementById("led");
const compileBtn = document.getElementById("compile");
const runBtn = document.getElementById("run");
const stopBtn = document.getElementById("stop");
const fileInput = document.getElementById("bin-file");
const bootBtn = document.getElementById("boot-btn");
const metricCycles = document.getElementById("metric-cycles");
const metricPc = document.getElementById("metric-pc");
const metricStop = document.getElementById("metric-stop");

let wasm;
let emu;
let rafId = 0;
let running = false;
let loadedBin = false;
let compiling = false;
let authCtx = null;
let projectID = null;
let projectMeta = null;

function setStatus(text, kind = "") {
  statusEl.textContent = text;
  statusEl.className = `status${kind ? ` ${kind}` : ""}`;
}

function setRunEnabled(on) {
  loadedBin = on;
  if (!running && !compiling) runBtn.disabled = !on;
}

function setCompileVisible(on) {
  if (compileBtn) compileBtn.hidden = !on;
}

function updateMetrics(stopCode) {
  if (!emu) return;
  metricCycles.textContent = String(emu.cycles());
  metricPc.textContent = `0x${emu.pc().toString(16).padStart(8, "0")}`;
  if (stopCode !== undefined) {
    metricStop.textContent = wasm.stopReasonName(stopCode);
  }
}

function syncLed() {
  if (!emu) return;
  const on = emu.ledOn();
  ledEl.classList.toggle("on", on);
  window.odcEmulatorNotify?.({ type: "odc-emulator", event: "led", on });
}

function decodeBase64Binary(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

function extractBinary(data) {
  return data?.binary || data?.compilationResult?.binary || null;
}

function cleanCodeForHash(code) {
  return String(code)
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function getCodeHash(code) {
  const buffer = new TextEncoder().encode(cleanCodeForHash(code));
  const hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function fetchProjectMeta(id, ctx) {
  if (ctx.local) return null;
  const token = await getIdToken();
  const authQuery = token ? `?auth=${encodeURIComponent(token)}` : "";
  const metaRes = await fetch(
    `${DATABASE_URL}/projects/${encodeURIComponent(id)}.json${authQuery}`,
  );
  if (!metaRes.ok) throw new Error(`Project not found (${metaRes.status})`);
  const meta = await metaRes.json();
  if (!meta) throw new Error("Project not found");
  return meta;
}

function canAccessProject(meta, ctx) {
  if (ctx.local) return true;
  const uid = ctx.user?.uid;
  return meta.ownerUid === uid || meta.public === true;
}

function canCompileProject(meta, ctx) {
  if (ctx.local) return true;
  return meta && ctx.user?.uid === meta.ownerUid;
}

async function fetchProjectCode(id, ctx) {
  if (ctx.local) {
    const res = await fetch(`/api/projects/${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`Project not found (${res.status})`);
    return res.json();
  }

  const meta = await fetchProjectMeta(id, ctx);
  if (!canAccessProject(meta, ctx)) {
    throw new Error("Sign in as the project owner to simulate this firmware");
  }

  const codeRes = await fetch(
    `${DATABASE_URL}/projects/${encodeURIComponent(id)}/code.json`,
  );
  if (!codeRes.ok) throw new Error(`Could not load project (${codeRes.status})`);
  return codeRes.json();
}

async function fetchBinaryFromCache(binaryHash, code = null) {
  if (code && code.binary) {
    return code.binary;
  }
  if (!binaryHash) return null;
  const cacheRes = await fetch(`${DATABASE_URL}/cache/${binaryHash}.json`);
  if (!cacheRes.ok) return null;
  const cache = await cacheRes.json();
  return cache?.binary || null;
}

async function fetchProjectBinary(id, ctx) {
  const code = await fetchProjectCode(id, ctx);

  let b64 = extractBinary(code);
  if (!b64 && code?.binaryHash) {
    b64 = await fetchBinaryFromCache(code.binaryHash, code);
  }
  if (!b64) throw new Error("No compiled binary — Compile to build a .bin");
  if (code.compilationStatus === "error") {
    throw new Error(code.compilationError || "Last compile failed — Compile again");
  }
  if (code.compilationStatus && code.compilationStatus !== "success") {
    throw new Error("Compilation in progress — wait or Compile again");
  }
  return decodeBase64Binary(b64);
}

async function waitForCloudCompile(id, expectedHash, startedAt) {
  const deadline = Date.now() + COMPILE_TIMEOUT_MS;
  let sawPending = false;

  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch(
      `${DATABASE_URL}/projects/${encodeURIComponent(id)}/code.json`,
      { cache: "no-store" },
    );
    if (!res.ok) continue;
    const data = await res.json();

    if (data.compilationStatus === "pending") {
      sawPending = true;
      setStatus("Compiling…");
      continue;
    }
    if (data.compilationStatus === "error") {
      throw new Error(data.compilationError || "Compile failed");
    }
    if (data.compilationStatus === "success" && data.binaryHash === expectedHash) {
      const updated = data.compilationUpdatedAt || data.binarySavedAt || "";
      if (sawPending || !updated || updated >= startedAt) {
        return data;
      }
    }
  }
  throw new Error("Compile timed out — try again");
}

async function requestCompile(id, ctx, content) {
  if (!content.trim()) throw new Error("No source code to compile");

  if (ctx.local) {
    const res = await fetch("/api/compile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectID: id, content, language: "rust" }),
    });
    const result = await res.json();
    if (!res.ok || result.compilationStatus === "error" || result.ok === false) {
      throw new Error(result.compilationError || result.error || "Compile failed");
    }
    return result;
  }

  if (!canCompileProject(projectMeta, ctx)) {
    throw new Error("Only the project owner can compile");
  }

  const binaryHash = await getCodeHash(content);
  const now = new Date().toISOString();
  const data = {
    content,
    binaryHash,
    language: "rust",
    lastModified: now,
    timestamp: Date.now(),
    size: content.length,
    compilationStatus: "pending",
    compilationRequested: true,
    compilationRequestedAt: now,
  };

  const putRes = await fetch(
    `${DATABASE_URL}/projects/${encodeURIComponent(id)}/code.json`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  if (!putRes.ok) throw new Error(`Could not request compile (${putRes.status})`);

  try {
    await fetch(
      `${DATABASE_URL}/compileQueue/${encodeURIComponent(id)}.json`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestedAt: now, binaryHash }),
      },
    );
  } catch {
    /* queue write is best-effort */
  }

  return waitForCloudCompile(id, binaryHash, now);
}

async function compileAndLoad() {
  if (!projectID || !authCtx || compiling) return;

  compiling = true;
  compileBtn.disabled = true;
  runBtn.disabled = true;
  stopLoop();

  try {
    const code = await fetchProjectCode(projectID, authCtx);
    const content = code.content || code.code || "";
    const hash = await getCodeHash(content);

    if (code.compilationStatus === "success" && code.binaryHash === hash) {
      const b64 = extractBinary(code) || await fetchBinaryFromCache(code.binaryHash, code);
      if (b64) {
        await loadBin(decodeBase64Binary(b64));
        setStatus(`Loaded ${atob(b64).length} bytes`, "ok");
        return;
      }
    }

    setStatus("Compiling…");
    await requestCompile(projectID, authCtx, content);
    await loadBin(await fetchProjectBinary(projectID, authCtx));
    setStatus(`Compiled — ${loadedBin ? "ready to run" : "loaded"}`, "ok");
  } catch (err) {
    setStatus(String(err.message || err), "error");
  } finally {
    compiling = false;
    if (compileBtn) compileBtn.disabled = false;
    if (!running) runBtn.disabled = !loadedBin;
  }
}

async function loadWasm() {
  if (wasm) return;
  const mod = await import("./wasm/odc_emulator_r2_wasm.js");
  await mod.default();
  wasm = mod;
  emu = new wasm.OdcR2Emulator();
}

async function loadBin(bytes) {
  if (!emu) await loadWasm();
  emu.loadBin(new Uint8Array(bytes));
  updateMetrics(0);
  syncLed();
  setRunEnabled(true);
  setStatus(`Loaded ${bytes.byteLength} bytes`, "ok");
  window.odcEmulatorNotify?.({ type: "odc-emulator", event: "loaded", size: bytes.byteLength });
}

function stopLoop() {
  running = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  if (!compiling) runBtn.disabled = !loadedBin;
  stopBtn.disabled = true;
}

function tick() {
  if (!running || !emu) return;
  const code = emu.run(BigInt(CYCLES_PER_FRAME));
  updateMetrics(code);
  syncLed();

  if (code !== 0 && code !== 3) {
    setStatus(`Stopped: ${wasm.stopReasonName(code)}`, code === 4 ? "ok" : "");
    stopLoop();
    window.odcEmulatorNotify?.({ type: "odc-emulator", event: "stop", code });
    return;
  }

  rafId = requestAnimationFrame(tick);
}

function startLoop() {
  if (!emu || running || !loadedBin) return;
  running = true;
  runBtn.disabled = true;
  stopBtn.disabled = false;
  setStatus("Running…");
  rafId = requestAnimationFrame(tick);
}

function wireInput() {
  const press = () => {
    bootBtn.classList.add("pressed");
    emu?.pressButton();
    syncLed();
  };
  const release = () => {
    bootBtn.classList.remove("pressed");
    emu?.releaseButton();
    syncLed();
  };

  bootBtn.addEventListener("mousedown", press);
  bootBtn.addEventListener("mouseup", release);
  bootBtn.addEventListener("mouseleave", release);
  bootBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    press();
  }, { passive: false });
  bootBtn.addEventListener("touchend", release);

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !e.repeat) {
      e.preventDefault();
      press();
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.code === "Space") release();
  });
}

compileBtn?.addEventListener("click", () => {
  compileAndLoad().catch((err) => setStatus(String(err.message || err), "error"));
});

runBtn.addEventListener("click", () => {
  try {
    startLoop();
  } catch (err) {
    setStatus(String(err), "error");
  }
});

stopBtn.addEventListener("click", stopLoop);

fileInput.addEventListener("change", async () => {
  const file = fileInput.files?.[0];
  if (!file) return;
  try {
    if (!emu) await loadWasm();
    stopLoop();
    await loadBin(await file.arrayBuffer());
  } catch (err) {
    setStatus(String(err), "error");
  }
});

wireInput();

if (new URLSearchParams(location.search).get("embed") === "1") {
  document.body.classList.add("embed");
}

if (isLocalDev()) {
  const bar = document.querySelector(".bar-inner");
  if (bar) {
    const tag = document.createElement("span");
    tag.className = "local-tag";
    tag.textContent = "Local — no sign-in";
    bar.appendChild(tag);
  }
}

(async () => {
  try {
    authCtx = await ensureEmulatorAccess();
    await loadWasm();

    projectID = new URLSearchParams(location.search).get("projectID");
    if (projectID) {
      if (!authCtx.local) {
        projectMeta = await fetchProjectMeta(projectID, authCtx);
      }
      setCompileVisible(canCompileProject(projectMeta, authCtx));

      setStatus(`Loading ${projectID}…`);
      try {
        await loadBin(await fetchProjectBinary(projectID, authCtx));
      } catch (err) {
        const msg = String(err.message || err);
        if (msg.includes("No compiled binary") || msg.includes("Compile")) {
          setStatus(canCompileProject(projectMeta, authCtx)
            ? "No binary yet — Compile, then Run"
            : msg,
            canCompileProject(projectMeta, authCtx) ? "" : "error");
        } else {
          setStatus(msg, "error");
        }
      }
      return;
    }

    setStatus("Ready — open from the editor or load a .bin", "ok");
  } catch (err) {
    if (String(err).includes("WASM")) {
      setStatus(
        "WASM not built. From emulator repo run: r2/scripts/deploy-web.sh",
        "error",
      );
    } else {
      setStatus(String(err.message || err), "error");
    }
    console.error(err);
  }
})();

export { loadBin, startLoop, stopLoop };
