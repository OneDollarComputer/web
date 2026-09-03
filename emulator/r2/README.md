# `web/emulator/r2/` — browser deploy

Static deploy of **[emulator/r2](https://github.com/OneDollarComputer/emulator/tree/main/r2)** (WASM + terminal UI).  
Board model lives in the **emulator** repo; this folder is hosting glue only.

## URLs

| | |
|--|--|
| Full page | `/emulator/r2/?projectID=…` |
| From editor | **Lab → Simulate** (passes `projectID`) |
| Embed | iframe `/emulator/r2/?embed=1` |

**Firmware:** loaded via `?projectID=` (compile then run). No manual `.bin` upload. On localhost without `projectID`, `sample.bin` is used for smoke tests.

**UI status lines** stay short (`emulator loaded`, `running`, `compiling…`) — no project IDs or backend details in the terminal log.

**Access:** no sign-in on `localhost` / `127.0.0.1`. Production requires Google sign-in.

## Rebuild WASM

With **emulator** and **web** as siblings:

```bash
~/github/emulator/r2/scripts/deploy-web.sh
```

Copies `wasm/`, `board.png`, `overlay.json`, and `sample.bin`. Commit those artifacts in **web** when the live site should pick up a new core.

`OdcR2Emulator.run(n)` advances **n additional** cycles (not an absolute cycle ceiling). `loadBin` resets the machine.

## iframe API

```html
<iframe src="/emulator/r2/?embed=1" title="ODC R2 emulator"></iframe>
```

```javascript
iframe.contentWindow.postMessage({
  type: "odc-emulator",
  action: "loadBin",
  bin: arrayBuffer,
}, "*");

iframe.contentWindow.postMessage({ type: "odc-emulator", action: "run" }, "*");
```

## Future revisions

When hardware **R3** ships, add `web/emulator/r3/`. Keep **R2** frozen for existing lessons.
