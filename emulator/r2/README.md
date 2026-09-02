# `web/emulator/r2/` — browser deploy

Static deploy of **[emulator/r2](https://github.com/OneDollarComputer/emulator/tree/main/r2)** (WASM + terminal UI).  
The board model is developed in the **emulator** repo; this folder is only hosting glue.

## URLs

| | |
|--|--|
| Full page | `/emulator/r2/?projectID=…` |
| From editor | User menu → **Lab → Simulate** (passes current `projectID`) |
| Embed | iframe `/emulator/r2/?embed=1` |

**Firmware source (web format):** Firebase `/projects/{id}/code` via `?projectID=` — owner uses **compile** then **run**. No manual `.bin` upload. Localhost without `projectID` may load `sample.bin` only for core smoke tests.

**Access:** no sign-in on `localhost` / `127.0.0.1`. On **onedollarcomputer.com** the page requires Google sign-in.

## Rebuild WASM (after changing `emulator/r2`)

From a checkout with **emulator** and **web** as siblings (`~/github/`):

```bash
~/github/emulator/r2/scripts/deploy-web.sh
```

Copies:

- `wasm/odc_emulator_r2_wasm.js` + `.wasm` (wasm-bindgen)
- `board.png` + `overlay.json` (from `emulator/r2/assets/`)

Commit the updated `wasm/` and board assets in **web** when you want the live site to pick up a new core.

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

When hardware **R3** ships, add `web/emulator/r3/` as a separate deploy tree. Keep **R2** frozen for existing lessons.
