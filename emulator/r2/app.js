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

/**
 * sample.bin toggles ~every 667 cycles (SysTick stub). Keep frames short so the
 * LED half-period spans many animation frames (~2–3 Hz blink).
 */
const CYCLES_PER_FRAME = 80;
const SYNC_SLICE = 40;

/** Header pin indicators — 389×642 display space (matches claudioos). */
const PIN_INDICATORS = [
  { pin: 0, signal: "PC0", port: "c", bit: 0, x: 33, y: 255, w: 14, h: 15 },
  { pin: 1, signal: "PC1", port: "c", bit: 1, x: 33, y: 294, w: 14, h: 15 },
  { pin: 2, signal: "PC2", port: "c", bit: 2, x: 33, y: 333, w: 14, h: 14 },
  { pin: 3, signal: "PC3", port: "c", bit: 3, x: 33, y: 371, w: 14, h: 15 },
  { pin: 4, signal: "PC4", port: "c", bit: 4, x: 33, y: 410, w: 14, h: 15 },
  { pin: 5, signal: "PC5", port: "c", bit: 5, x: 33, y: 449, w: 14, h: 14 },
  { pin: 6, signal: "PC6", port: "c", bit: 6, x: 33, y: 487, w: 14, h: 15 },
  { pin: 7, signal: "PC7", port: "c", bit: 7, x: 33, y: 526, w: 14, h: 14 },
  { pin: 8, signal: "PA1", port: "a", bit: 1, x: 33, y: 564, w: 14, h: 15 },
  { pin: 9, signal: "PA2", port: "a", bit: 2, x: 33, y: 603, w: 14, h: 15 },
  { pin: 12, signal: "PD1", port: "d", bit: 1, x: 342, y: 333, w: 15, h: 14 },
  { pin: 13, signal: "PD7", port: "d", bit: 7, input: true, x: 342, y: 371, w: 15, h: 15 },
  { pin: 14, signal: "PD0", port: "d", bit: 0, x: 342, y: 410, w: 15, h: 14 },
  { pin: 15, signal: "PD2", port: "d", bit: 2, x: 342, y: 449, w: 15, h: 15 },
  { pin: 19, signal: "PD6", port: "d", bit: 6, activeLow: true, led: true, x: 342, y: 603, w: 15, h: 15 },
];

const COMPILE_TIMEOUT_MS = 120_000;

const statusEl = document.getElementById("status");
const termLogEl = document.getElementById("term-log");
const gpioReadoutEl = document.getElementById("gpio-readout");
const metricLed = document.getElementById("metric-led");
const ledEl = document.getElementById("led");
const pinOverlayEl = document.getElementById("pin-overlay");
const boardWrapEl = document.getElementById("board-wrap");
const compileBtn = document.getElementById("compile");
const runBtn = document.getElementById("run");
const stopBtn = document.getElementById("stop");
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
let pinDots = [];

function termLog(text, kind = "") {
  if (!termLogEl) return;
  const line = document.createElement("p");
  line.className = `term-line${kind ? ` ${kind}` : ""}`;
  line.textContent = text;
  termLogEl.appendChild(line);
  while (termLogEl.childElementCount > 80) {
    termLogEl.firstElementChild?.remove();
  }
  termLogEl.scrollTop = termLogEl.scrollHeight;
}

function setStatus(text, kind = "") {
  if (statusEl) {
    statusEl.textContent = text;
    statusEl.className = `term-status${kind ? ` ${kind}` : ""}`;
  }
  const prefix = kind === "error" ? "[err] " : kind === "ok" ? "[ok] " : kind === "warn" ? "[warn] " : "";
  termLog(`${prefix}${text}`, kind);
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
  if (metricLed) {
    const on = emu.ledOn();
    metricLed.textContent = on ? "1" : "0";
    metricLed.className = on ? "on" : "off";
  }
}

function gpioPortOut(port) {
  if (!emu) return 0;
  if (port === "a") return emu.gpioAOut();
  if (port === "c") return emu.gpioCOut();
  return emu.gpioDOut();
}

function pinElectricalHigh(ind) {
  if (!emu) return false;
  const word = ind.input ? emu.gpioDIn() : gpioPortOut(ind.port);
  return ((word >> ind.bit) & 1) !== 0;
}

function pinActive(ind) {
  const high = pinElectricalHigh(ind);
  if (ind.activeLow) return !high;
  return high;
}

function buildPinOverlay() {
  if (!pinOverlayEl || !boardWrapEl) return;
  const bw = 389;
  const bh = 642;
  pinOverlayEl.replaceChildren();
  pinDots = PIN_INDICATORS.map((ind) => {
    const dot = document.createElement("div");
    dot.className = `pin-dot${ind.led ? " led-pin" : ""}`;
    dot.style.left = `${(ind.x / bw) * 100}%`;
    dot.style.top = `${(ind.y / bh) * 100}%`;
    dot.style.width = `${(ind.w / bw) * 100}%`;
    dot.style.height = `${(ind.h / bh) * 100}%`;
    dot.title = `Pin ${ind.pin} (${ind.signal})`;
    pinOverlayEl.appendChild(dot);
    return { ind, dot };
  });
}

function formatGpioReadout() {
  if (!emu || !gpioReadoutEl) return;
  const parts = PIN_INDICATORS.map((ind) => {
    const active = pinActive(ind);
    const val = active ? "1" : "0";
    const cls = active ? (ind.led ? "led-hi" : "hi") : "";
    return `<span class="${cls}">${String(ind.pin).padStart(2, " ")}:${val}</span>`;
  });
  gpioReadoutEl.innerHTML = parts.join("  ");
}

function syncBoard() {
  if (!emu) return;

  const ledOn = emu.ledOn();
  ledEl.classList.toggle("on", ledOn);

  for (const { ind, dot } of pinDots) {
    dot.classList.toggle("on", pinActive(ind));
  }
  formatGpioReadout();
  updateMetrics();

  window.odcEmulatorNotify?.({ type: "odc-emulator", event: "led", on: ledOn });
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
  if (!metaRes.ok) throw new Error("project not found");
  const meta = await metaRes.json();
  if (!meta) throw new Error("project not found");
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
    if (!res.ok) throw new Error("project not found");
    return res.json();
  }

  const meta = await fetchProjectMeta(id, ctx);
  if (!canAccessProject(meta, ctx)) {
    throw new Error("sign in required");
  }

  const codeRes = await fetch(
    `${DATABASE_URL}/projects/${encodeURIComponent(id)}/code.json`,
  );
  if (!codeRes.ok) throw new Error("could not load project");
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
  if (!b64) throw new Error("no binary");
  if (code.compilationStatus === "error") {
    throw new Error(code.compilationError || "compile failed");
  }
  if (code.compilationStatus && code.compilationStatus !== "success") {
    throw new Error("compiling…");
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
      setStatus("compiling…");
      continue;
    }
    if (data.compilationStatus === "error") {
      throw new Error(data.compilationError || "compile failed");
    }
    if (data.compilationStatus === "success" && data.binaryHash === expectedHash) {
      const updated = data.compilationUpdatedAt || data.binarySavedAt || "";
      if (sawPending || !updated || updated >= startedAt) {
        return data;
      }
    }
  }
  throw new Error("compile timed out");
}

async function requestCompile(id, ctx, content) {
  if (!content.trim()) throw new Error("no source");

  if (ctx.local) {
    const res = await fetch("/api/compile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectID: id, content, language: "rust" }),
    });
    const result = await res.json();
    if (!res.ok || result.compilationStatus === "error" || result.ok === false) {
      throw new Error(result.compilationError || result.error || "compile failed");
    }
    return result;
  }

  if (!canCompileProject(projectMeta, ctx)) {
    throw new Error("owner only");
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
  if (!putRes.ok) throw new Error("compile request failed");

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
        setStatus("emulator loaded", "ok");
        return;
      }
    }

    setStatus("compiling…");
    await requestCompile(projectID, authCtx, content);
    await loadBin(await fetchProjectBinary(projectID, authCtx));
    setStatus("emulator loaded", "ok");
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
  // Cache-bust when emulator WASM bindings change.
  const mod = await import("./wasm/odc_emulator_r2_wasm.js?v=5");
  await mod.default(new URL("./wasm/odc_emulator_r2_wasm_bg.wasm?v=5", import.meta.url));
  wasm = mod;
  emu = new wasm.OdcR2Emulator();
}

async function loadBin(bytes) {
  if (!emu) await loadWasm();
  emu.loadBin(new Uint8Array(bytes));
  updateMetrics(0);
  syncBoard();
  setRunEnabled(true);
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

  let remaining = CYCLES_PER_FRAME;
  let stopCode = 0;

  while (remaining > 0 && running) {
    const slice = Math.min(remaining, SYNC_SLICE);
    stopCode = emu.run(BigInt(slice));
    remaining -= slice;
    syncBoard();
    if (stopCode !== 0 && stopCode !== 3) {
      updateMetrics(stopCode);
      setStatus(`stopped: ${wasm.stopReasonName(stopCode)}`, stopCode === 4 ? "ok" : "error");
      stopLoop();
      window.odcEmulatorNotify?.({ type: "odc-emulator", event: "stop", code: stopCode });
      return;
    }
  }

  updateMetrics(stopCode);
  rafId = requestAnimationFrame(tick);
}

function startLoop() {
  if (!emu || running || !loadedBin) return;
  running = true;
  runBtn.disabled = true;
  stopBtn.disabled = false;
  setStatus("running", "ok");
  rafId = requestAnimationFrame(tick);
}

function wireInput() {
  const press = () => {
    bootBtn.classList.add("pressed");
    emu?.pressButton();
    syncBoard();
  };
  const release = () => {
    bootBtn.classList.remove("pressed");
    emu?.releaseButton();
    syncBoard();
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

function editorUrlForProject() {
  const id = projectID || new URLSearchParams(location.search).get("projectID");
  return id ? `/editor/?projectID=${encodeURIComponent(id)}` : "/editor/";
}

function toggleFullscreen() {
  const target = document.querySelector(".term-window") || document.documentElement;
  if (!document.fullscreenElement) {
    target.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
}

document.getElementById("chromeClose")?.addEventListener("click", () => {
  location.href = editorUrlForProject();
});

document.getElementById("chromeFullscreen")?.addEventListener("click", () => {
  toggleFullscreen();
});

wireInput();
buildPinOverlay();

if (new URLSearchParams(location.search).get("embed") === "1") {
  document.body.classList.add("embed");
}

if (isLocalDev()) {
  const tag = document.getElementById("local-tag");
  if (tag) tag.hidden = false;
}

(async () => {
  try {
    authCtx = await ensureEmulatorAccess();
    buildPinOverlay();
    await loadWasm();

    // Firmware via ?projectID= (editor Lab → Simulate). No manual .bin upload.
    projectID = new URLSearchParams(location.search).get("projectID");
    if (projectID) {
      if (!authCtx.local) {
        projectMeta = await fetchProjectMeta(projectID, authCtx);
      }
      setCompileVisible(canCompileProject(projectMeta, authCtx));

      try {
        await loadBin(await fetchProjectBinary(projectID, authCtx));
        setStatus("emulator loaded", "ok");
      } catch (err) {
        const msg = String(err.message || err);
        if (msg.includes("no binary") || msg.includes("Compile") || msg.includes("compile")) {
          setStatus(canCompileProject(projectMeta, authCtx)
            ? "no binary — compile, then run"
            : "no binary",
            canCompileProject(projectMeta, authCtx) ? "warn" : "error");
        } else {
          setStatus(msg, "error");
        }
      }
      return;
    }

    if (isLocalDev()) {
      try {
        const res = await fetch("sample.bin");
        await loadBin(await res.arrayBuffer());
        setStatus("emulator loaded", "ok");
      } catch {
        setStatus("no firmware", "warn");
      }
      return;
    }

    setStatus("no firmware", "warn");
  } catch (err) {
    if (String(err).includes("WASM")) {
      setStatus("emulator failed to load", "error");
    } else {
      setStatus(String(err.message || err), "error");
    }
    console.error(err);
  }
})();

export { loadBin, startLoop, stopLoop };
