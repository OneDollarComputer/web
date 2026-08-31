/**
 * ODC R2 emulator — browser shell (deploy of emulator/r2 WASM).
 * Core board model: https://github.com/OneDollarComputer/emulator/tree/main/r2
 */

import { ensureEmulatorAccess } from "./auth-gate.js";

const CYCLES_PER_FRAME = 80_000;
const DEMO_PATH = "sample.bin";

const statusEl = document.getElementById("status");
const ledEl = document.getElementById("led");
const runDemoBtn = document.getElementById("run-demo");
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

function setStatus(text, kind = "") {
  statusEl.textContent = text;
  statusEl.className = `status${kind ? ` ${kind}` : ""}`;
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
  setStatus(`Loaded ${bytes.byteLength} bytes`, "ok");
  window.odcEmulatorNotify?.({ type: "odc-emulator", event: "loaded", size: bytes.byteLength });
}

async function fetchDemo() {
  const res = await fetch(DEMO_PATH);
  if (!res.ok) throw new Error(`demo bin ${res.status}`);
  return res.arrayBuffer();
}

function stopLoop() {
  running = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  runDemoBtn.disabled = false;
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
  if (!emu || running) return;
  running = true;
  runDemoBtn.disabled = true;
  stopBtn.disabled = false;
  setStatus("Running…");
  rafId = requestAnimationFrame(tick);
}

function wireInput() {
  const press = () => {
    emu?.pressButton();
    syncLed();
  };
  const release = () => {
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

runDemoBtn.addEventListener("click", async () => {
  try {
    await ensureEmulatorAccess();
    if (!emu) await loadWasm();
    await loadBin(await fetchDemo());
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

(async () => {
  try {
    await ensureEmulatorAccess();
    await loadWasm();
    setStatus("Ready — run demo or load a .bin", "ok");
  } catch (err) {
    setStatus(
      "WASM not built. From emulator repo run: r2/scripts/deploy-web.sh",
      "error",
    );
    console.error(err);
  }
})();

export { loadBin, startLoop, stopLoop };
