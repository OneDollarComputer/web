# `/physical/` — Physical Lab

Published **static shell** of the MuJoCo drop lab from sibling repo `physical/mujoco-drop` (Vite build with `base: '/physical/'`).

- Live: https://onedollarcomputer.com/physical/
- SG90 bench: https://onedollarcomputer.com/physical/sg90.html
- **Pose cloud:** https://onedollarcomputer.com/physical/cloud/ — assembly pose JSON (not meshes)
- Source of truth: sibling **physical** repo (`mujoco-drop`), not hand-edited JS here

## Pose projects (Firebase)

Same Google login as `/project/` and `/editor/`. Public client config only (`physical/js/firebase-public.json` = `editor/firebase-public.json`).

| | |
|--|--|
| RTDB path | `users/{uid}/physicalPoses/{projectId}` |
| Rules | Owner read/write — `editor/database.rules.json` |
| Library UI | `/physical/cloud/` |
| Lab bridge | `/physical/js/pose-bridge.js` → `window.OdcPhysicalPoses` |

### Claudio — save / load

1. Open https://onedollarcomputer.com/physical/cloud/ and **Sign in** (Google).
2. **Create** a pose project (or open an existing one) and edit the JSON online, **Save**.
3. Or in Physical Lab (signed in): use **Save pose** (bottom-left), or in the console:
   ```js
   await OdcPhysicalPoses.save({ name: "Horn assembly" })
   ```
4. Load by id: `/physical/?poseProject=pp…` (auto-loads when signed in), or:
   ```js
   await OdcPhysicalPoses.load("pp…")
   ```
5. Open the JSON editor anytime: `/physical/cloud/?id=pp…`

Pose document shape:

```json
{
  "id": "pp…",
  "ownerUid": "<google-uid>",
  "name": "Horn assembly",
  "assemblyId": "odc-drop",
  "parts": {
    "odc": { "pos": [0,0,0], "quat": [1,0,0,0], "eulerDeg": { "x": 0, "y": 0, "z": 0 } }
  },
  "welds": [
    { "name": "lab_weld_a__b", "body1": "a", "body2": "b", "relpose": [0,0,0,1,0,0,0] }
  ],
  "createdAt": "…",
  "updatedAt": "…"
}
```

Capture prefers `window.__labAssemblyPose` (export this from mujoco-drop for a full snapshot). Fallback: `__odcPose`, `__sg90Pose`, `__labWelds`. Load sets `__labAssemblyPose` and fires `odc-pose-load` for the lab to apply.

### Agent / Grok Bot — read with Claudio’s session

Rules allow **only the owner**. With his signed-in browser session (or his Firebase ID token):

```text
GET {databaseURL}/users/{uid}/physicalPoses/{projectId}.json?auth={ID_TOKEN}
```

In the signed-in page console:

```js
const list = await OdcPhysicalPoses.list()
const doc = await OdcPhysicalPoses.load(list[0].id)
// or REST helper:
OdcPhysicalPoses.poseRestUrl(list[0].id)
```

Do **not** put service-account keys in the repo. Deploy rules after merge:

```bash
firebase deploy --only database --project odc-files
```

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

Do **not** merge, symlink, or rebuild one into the other. Updates here are drop-in dist replacements from `mujoco-drop`, never copies from `3d/`. Pose cloud JS under `physical/js/` and `physical/cloud/` is **site-owned** (not overwritten by dist drops).

## Local preview

```bash
python3 serve.py
# http://127.0.0.1:8080/physical/
# http://127.0.0.1:8080/physical/cloud/
# http://127.0.0.1:8080/physical/sg90.html
```
