# `/physical/` — Physical Lab (Marco 0)

Published **static shell** of the MuJoCo drop demo (Marco 0) from the sibling repo **physical** (`mujoco-drop/`). Core lives there; this folder is hosting glue only — same pattern as `emulator/r2/`.

- Live: https://onedollarcomputer.com/physical/
- Hub contract: `web/3d/` = static GLB viewer (never overwrite); Physical Lab shell = `web/physical/`; core = `physical/mujoco-drop/` → publish as `web/physical/index.html`

## Do not confuse with `3d/`

| Path | What it is |
|------|------------|
| **`physical/`** | MuJoCo physics drop lab (this tree) |
| **`3d/`** | Separate Three.js GLB viewer (`/3d/viewer.html`) |

Do **not** merge, symlink, or rebuild one into the other. Updates here are drop-in dist replacements from `mujoco-drop`, never copies from `3d/`.

## Local preview

```bash
python3 serve.py --mode firebase
# http://127.0.0.1:8080/physical/
```

## Refresh from `mujoco-drop`

In the **physical** sibling, on the spike/app branch:

```bash
cd mujoco-drop
# vite.config must use base: '/physical/'
npm ci && npm run build
rm -rf /path/to/web/physical/assets /path/to/web/physical/models
cp -a dist/. /path/to/web/physical/
```

Then confirm `index.html` and hashed assets reference `/physical/...` (including MJCF `fetch("/physical/models/odc_drop.xml")`). Commit the new artifacts in **web**.
