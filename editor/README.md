# One Dollar Computer — browser editor (Rust)

**URL (when served):** `/editor/` · `https://onedollarcomputer.com/editor/`  
**Not** linked from the marketing homepage (`/index.html`). Work freely here without promoting it on the main site.

> **Agents:** do **not** add an Editor CTA or footer link on the homepage unless the user explicitly asks.

## Source of truth

This folder is the **site copy** of the monorepo editor:

- Canonical toolchain: `bootloader_odb`  
  (`~/Documents/GitHub/bootloader_odb` or set `ODC_MONOREPO`)
- Firmware wrap / pins / bootloader: `onedollarcomputer/` inside that monorepo
- Language: **simple Rust** (`use odc::*;` + `fn main()`), not C

Legacy C editor snapshot (pre-migration): `_legacy_c/`.

## Layout

```
editor/
  index.html     # Monaco UI + Firebase / local APIs
  serve.py       # Local/firebase server + Cargo + host flash
  decode.js      # Early Base64 ?code= decode
  AI_DOCS.txt    # AI assistant protocol (Rust firmware only)
  docs/          # Pinout YAML + SVG
  projects/      # Local JSON projects (gitignored except demo)
  _legacy_c/     # Old C/CH32 editor snapshot
  README.md
```

## Modes

| Mode | Start | Persistence | Compile | Flash |
|------|--------|-------------|---------|-------|
| **local** (default) | `./serve.py` | `projects/*.json` | Cargo on monorepo firmware | Host `flashingpro` after ODC bootloader on USB |
| **firebase** | `./serve.py --mode firebase` | Firebase RTDB | Cloud compiler (`language: rust`) | Browser WebHID |
| **static** (GitHub Pages) | site host only | Firebase | Cloud (if worker handles Rust) | WebHID |

```bash
# From the site root (serves marketing + editor + /api)
python3 serve.py                    # http://127.0.0.1:8080/editor/?projectID=demo

# Or from editor/
./serve.py
./serve.py --mode firebase
ODC_MONOREPO=/path/to/bootloader_odb ./serve.py
```

Env: `ODC_EDITOR_HOST`, `ODC_EDITOR_PORT`, `ODC_EDITOR_MODE`, `ODC_MONOREPO`, `ODC_FLASH_WAIT_SEC`.

Static marketing preview (`python3 -m http.server 8765` from repo root) serves the UI at:

```text
http://127.0.0.1:8765/editor/
```

That host has **no** `/api/*` → the page falls back to **firebase** mode (same as production Pages).

## Local flash flow

1. Edit simple Rust (`use odc::*;`).
2. **Upload** → Cargo compile on host via `serve.py`.
3. Press the physical ODC button to enter bootloader (HID).
4. Flash via host FlashingPro (local mode) or WebHID (firebase).

## Brand / product names

- **One Dollar Computer** / **computer** in UI copy.
- Firebase project: **`odc-files`** (RTDB `https://odc-files-default-rtdb.firebaseio.com`). Legacy Board DB was `onedollarboard-1b26a`.
- Magic AI links use `https://onedollarcomputer.com/editor/…`.
- Logo: site root `/odc_logo_*.svg`.

## Improvement workflow (agents)

1. Prefer editing this `web/editor/` copy for site deploys; keep monorepo editor in sync when changing the shared app.
2. Preview with `./serve.py` for local compile/flash, or static `/editor/` for firebase UI only.
3. Do **not** wire homepage nav until release is requested.
4. Keep AI protocol: output is **simple Rust firmware only** in the `code` field.
