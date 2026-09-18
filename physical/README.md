# `/physical/` — Physical Lab

Published **static shell** of the MuJoCo drop lab from sibling repo `physical/mujoco-drop` (Vite build with `base: '/physical/'`).

- Live: https://onedollarcomputer.com/physical/
- SG90 bench: https://onedollarcomputer.com/physical/sg90.html
- Source of truth: sibling **physical** repo (`mujoco-drop`), not hand-edited JS here

## This publish

| | |
|--|--|
| Source | `OneDollarComputer/physical` |
| Commit | `428f150656680ffbcdbf3bbd3ad31b8fff1ae38a` |
| Built | 2026-09-18T16:12Z (`vite build --base=/physical/`) |

SG90 lab contact `solref` now `0.012 0.25` (peer ODC bounce); mass remains datasheet **0.009 kg**. Dist paths `/models` and `/vendor` rewritten to `/physical/...` for site hosting.

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
