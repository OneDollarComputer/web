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
2. **Open** a listed pose → Physical Lab (`?poseProject=pp…`). The bridge loads JSON, sets `window.__labAssemblyPose`, and fires `odc-pose-load`.
3. Or **Create new** only when you want a new id, then Open / Save from the lab.
4. In Physical Lab (signed in), bottom-left:
   - Current project **name** is shown when one is open
   - **Save** updates the open project (URL + session). Mints an id only if nothing is open.
   - **Save as** always creates a new id
   - **Open…** picks from your list (same as cloud Open)
5. JSON editor: `/physical/cloud/?id=pp…` — **Save** updates that id; **Save as** mints a copy; **Open** returns to Lab.

```js
await OdcPhysicalPoses.save({ name: "Horn assembly" })   // update open, or create if none
await OdcPhysicalPoses.saveAs({ name: "Horn copy" })     // always new id
await OdcPhysicalPoses.load("pp…")
OdcPhysicalPoses.current()  // { id, name } | null
```

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
  "recipe": null,
  "createdAt": "…",
  "updatedAt": "…"
}
```

Capture prefers live `window.__labExportPoses()` / `__labGetAssemblyPose()` (same snapshot as lab **Save poses (JSON)**), then `__labAssemblyPose`, then `__odcPose` / `__sg90Pose` / `__labWelds`. Load sets `__labAssemblyPose` and fires `odc-pose-load`; also calls `__labApplyAssemblyPose(payload)` when present.

### Lab-side apply (physical / mujoco-drop) — required for restored positions

Published lab @ `6a68deb` does **not** yet listen for cloud load. Until physical lands the hook, Open still writes Firebase JSON onto the page globals/events, but MuJoCo bodies will not move.

Add in mujoco-drop (then republish dist to `web/physical/`):

```js
// Live export for cloud Save (reuse the same snapshot as download Save poses):
window.__labExportPoses = () => /* recipe from go() */;

// Apply cloud / bridge loads:
window.addEventListener("odc-pose-load", (e) => {
  window.__labApplyAssemblyPose?.(e.detail);
});
window.__labApplyAssemblyPose = (payload) => {
  // Prefer payload.recipe (lab download shape) when present;
  // else map payload.parts + payload.welds onto free joints / welds.
};
```

Do **not** change Firebase owner-only rules for this feature.

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
| Commit | `8c9e14efaa32ff18cfb87106c92242c783b114e1` |
| Built | 2026-09-19T01:57Z (`vite build --base=/physical/`) |

Save/Load fix (physical PR #8): live `__labAssemblyPose`, `odc-pose-load` applies freejoint qpos, Pose cloud Save updates the open project. Dist paths `/models` and `/vendor` rewritten to `/physical/...` for site hosting.

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
