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

const statusEl = document.getElementById("status");
const ledEl = document.getElementById("led");
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

function setStatus(text, kind = "") {
  statusEl.textContent = text;
  statusEl.className = `status${kind ? ` ${kind}` : ""}`;
}

function setRunEnabled(on) {
  loadedBin = on;
  if (!running) runBtn.disabled = !on;
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

async function fetchProjectBinary(projectID, authCtx) {
  if (authCtx.local) {
    const res = await fetch(`/api/projects/${encodeURIComponent(projectID)}`);
    if (!res.ok) throw new Error(`Project not found (${res.status})`);
    const data = await res.json();
    const b64 = data.binary || data.compilationResult?.binary;
    if (!b64) throw new Error("No compiled binary — compile in the editor first");
    return decodeBase64Binary(b64);
  }

  const token = await getIdToken();
  const authQuery = token ? `?auth=${encodeURIComponent(token)}` : "";
  const metaRes = await fetch(
    `${DATABASE_URL}/projects/${encodeURIComponent(projectID)}.json${authQuery}`,
  );
  if (!metaRes.ok) throw new Error(`Project not found (${metaRes.status})`);
  const meta = await metaRes.json();
  if (!meta) throw new Error("Project not found");

  const uid = authCtx.user?.uid;
  if (meta.ownerUid !== uid && meta.public !== true) {
    throw new Error("Sign in as the project owner to simulate this firmware");
  }

  const codeRes = await fetch(
    `${DATABASE_URL}/projects/${encodeURIComponent(projectID)}/code.json`,
  );
  if (!codeRes.ok) throw new Error(`Could not load project (${codeRes.status})`);
  const code = await codeRes.json();

  let b64 = code?.binary;
  if (!b64 && code?.binaryHash) {
    const cacheRes = await fetch(`${DATABASE_URL}/cache/${code.binaryHash}.json`);
    if (cacheRes.ok) {
      const cache = await cacheRes.json();
      b64 = cache?.binary;
    }
  }
  if (!b64) b64 = code?.compilationResult?.binary;
  if (!b64) throw new Error("No compiled binary — compile in the editor first");
  if (code.compilationStatus && code.compilationStatus !== "success") {
    throw new Error("Last compile failed — fix and compile in the editor");
  }
  return decodeBase64Binary(b64);
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
  runBtn.disabled = !loadedBin;
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
    const authCtx = await ensureEmulatorAccess();
    await loadWasm();

    const projectID = new URLSearchParams(location.search).get("projectID");
    if (projectID) {
      setStatus(`Loading ${projectID}…`);
      await loadBin(await fetchProjectBinary(projectID, authCtx));
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
