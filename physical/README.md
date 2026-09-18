# `/physical/` — Physical Lab

Published **static shell** of the MuJoCo drop lab from sibling repo `physical/mujoco-drop` (Vite build with `base: '/physical/'`).

- Live: https://onedollarcomputer.com/physical/
- SG90 bench: https://onedollarcomputer.com/physical/sg90.html
- Source of truth: sibling **physical** repo (`mujoco-drop`), not hand-edited JS here

## This publish

| | |
|--|--|
| Source | `OneDollarComputer/physical` PR **#5** |
| Branch | `cursor/sg90-odc-lab-fusion-b3ac` |
| Commit | `679c7b58fbc884f3263b945ef427b437e0252f4f` |
| Built | 2026-09-18T06:11Z (`vite build --base=/physical/`) |

Includes SG90 motor, Fusion STEP parts, Attach/Detach welds, and reorient-any.

## Do not confuse with `3d/`

| Path | What it is |
|------|------------|
| **`physical/`** | MuJoCo physics lab (this tree) |
| **`3d/`** | Separate Three.js GLB viewer (`/3d/viewer.html`) |

Do **not** merge, symlink, or rebuild one into the other. Updates here are drop-in dist replacements from `mujoco-drop`, never copies from `3d/`.

## Local preview

```bash
npx serve .
# open http://127.0.0.1:3000/physical/
# open http://127.0.0.1:3000/physical/sg90.html
```
