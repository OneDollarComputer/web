/**
 * iframe / curriculum integration.
 *
 * Parent → iframe:
 *   { type: "odc-emulator", action: "loadBin", bin: ArrayBuffer }
 *   { type: "odc-emulator", action: "run" }
 *   { type: "odc-emulator", action: "stop" }
 *
 * iframe → parent (also via window.odcEmulatorNotify):
 *   { type: "odc-emulator", event: "loaded", size }
 *   { type: "odc-emulator", event: "led", on: boolean }
 *   { type: "odc-emulator", event: "stop", code }
 */

window.odcEmulatorNotify = (payload) => {
  if (window.parent !== window) {
    window.parent.postMessage(payload, "*");
  }
};

window.addEventListener("message", async (event) => {
  const data = event.data;
  if (!data || data.type !== "odc-emulator") return;

  const app = await import("./app.js");

  try {
    if (data.action === "loadBin" && data.bin) {
      await app.loadBin(data.bin);
    } else if (data.action === "run") {
      app.startLoop();
    } else if (data.action === "stop") {
      app.stopLoop();
    }
  } catch (err) {
    window.odcEmulatorNotify({
      type: "odc-emulator",
      event: "error",
      message: String(err),
    });
  }
});
