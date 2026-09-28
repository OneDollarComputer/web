# Agent / LLM guide — One Dollar Computer: Physical Lab (editor)

URL: `https://onedollarcomputer.com/physical/`
Open a saved project: `?poseProject=<id>` (restore only — opening never
creates or saves anything).

Give this file to an AI assistant or agent so it can help the user build and
tweak the robot. The user (Claudio, the creator) speaks Portuguese and
English — reply in the language they use.

## What it is

A 3D robot builder. Three.js renders the scene; MuJoCo runs the physics
(Three.js never fakes physics). The default scene is the "longhorn" walker on
a large dark checkerboard floor (0.5 m squares — visual only, no physics
change).

## Who sees what (two roles)

- **Creator** (Claudio, signed in with Google): the full editor below, plus a
  **Training** button in the topbar that opens `?mode=train` for the current
  project.
- **Viewer** (anyone else signed in with Google): simulation-only view —
  Play / Pause / Reset + camera orbit. No editing, no nudging, no saving.
  Viewers load the creator's published default scene read-only.
- Not signed in: a login gate ("Sign in with Google to use Physical Lab").

## Topbar

- **Play / Pause** (Space) — run / pause the physics. **Reset** (R) — reset the
  robot pose.
- **Training** (creator only) — opens training for the current project.
- **Camera** — ViewCube toggle. **Scene** — scene panel toggle.
- **Record** — captures WebM video; a download link appears when you stop.
- **Save** — manual save (autosave to Firebase is on for the creator).
- **Scripts** — run / stop canned motion scripts.
- **Voice coach** — Reward / Wrong buttons, "apply best" (replays the last
  human-rewarded motion), export.
- **Place** — toggle between moving the camera and moving bodies.

## Building

- Canvas: drag to orbit the camera.
- Select a body → the transform gizmo appears (translate / rotate, local or
  world frame).
- Keyboard (creator only):
  - `WASD` / `QE` — rotate the selected body (Q/E = local X, A/D = local Y,
    W/S = local Z; 5° steps, hold Shift for 1° fine steps).
  - Arrow keys — nudge ±0.01 m on X/Y (Shift+Up/Down = Z).
  - `Ctrl/Cmd+Z` — undo pose nudge / checkpoint.
    `Ctrl/Cmd+Shift+Z` — undo attach / assembly / clone.
- **Selection panel** — Attach / Detach bodies, Deselect, Copy pose JSON.
- **Assemblies panel** — save / clear / clone groups of parts.
- **Pose data editor** — numeric pose fields (arrow keys nudge the body while
  a field is focused).
- **Scene panel** — list of bodies in the scene.

## Saving / cloud

- The creator's work autosaves to Firebase under their account.
- The creator can publish the shared default (`physicalLab/sharedDefault`)
  that viewers load. Only the creator's UID can write it (enforced by
  database rules) — viewers can never overwrite it.
- Projects are addressed by `?poseProject=<id>`; share that URL to share a
  project.

## How to help the user

- "The robot falls over": check leg-pose symmetry, center of mass and initial
  tilt; use Reset; suggest small arrow-key nudges (0.01 m) or 1° (Shift)
  rotations.
- "I want to share my build": copy the URL with `?poseProject=<id>`.
- "It looked different yesterday": every deploy ships new bundle hashes — a
  hard refresh fixes stale-asset issues.
- Training the robot with voice instead: see `agent-training.md`
  (`?mode=train`).

## URL parameters

- `?poseProject=<id>` — open a saved project.
- `?mode=train` — voice training mode (creator only; viewers are bounced to
  the simulation view).

Related: `agent-training.md` (voice training).
