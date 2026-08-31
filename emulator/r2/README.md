# `web/emulator/r2/` — browser deploy

Static deploy of **[emulator/r2](https://github.com/OneDollarComputer/emulator/tree/main/r2)** (WASM + UI).  
The board model is developed in the **emulator** repo; this folder is only hosting glue.

## URLs

| | |
|--|--|
| Full page | `/emulator/r2/` |
| Curriculum iframe | `/emulator/r2/?embed=1` |

## Rebuild WASM (after changing `emulator/r2`)

From a checkout with **emulator** and **web** as siblings (`~/github/`):

```bash
~/github/emulator/r2/scripts/deploy-web.sh
```

Copies:

- `wasm/odc_emulator_r2_wasm.js` + `.wasm` (wasm-bindgen)
- `sample.bin` (demo blink firmware)

Commit the updated `wasm/` and `sample.bin` in **web** when you want the live site to pick up a new core.

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
