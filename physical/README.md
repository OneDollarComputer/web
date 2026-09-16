# `/physical/` — Physical Lab (Marco 0)

Published **static shell** of the MuJoCo drop demo from the sibling repo `physical/mujoco-drop` (Vite build with `base: '/physical/'`).

- Live: https://onedollarcomputer.com/physical/
- Source of truth for the app: sibling **physical** repo (`mujoco-drop`), not this folder’s hand-edited JS

## Do not confuse with `3d/`

| Path | What it is |
|------|------------|
| **`physical/`** | MuJoCo physics drop lab (this tree) |
| **`3d/`** | Separate Three.js GLB viewer (`/3d/viewer.html`) |

Do **not** merge, symlink, or rebuild one into the other. Updates here are drop-in dist replacements from `mujoco-drop`, never copies from `3d/`.

## Local preview

From the site root (or any static server):

```bash
npx serve .
# open http://127.0.0.1:3000/physical/
```
