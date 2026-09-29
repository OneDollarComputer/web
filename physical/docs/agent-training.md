# Agent / LLM guide — One Dollar Computer: Training mode

URL: `https://onedollarcomputer.com/physical/?mode=train`

Give this file to an AI assistant or agent so it can help the user train the robot.
The user (Claudio, the creator) speaks Portuguese and English — reply in the
language they use.

## What it is

Voice-training for the "longhorn" walker robot. The user speaks a command out
loud; the robot tries a motion in a MuJoCo physics simulation (rendered with
Three.js). The user taps Reward when it gets it right. Rewarded words become
instant over time. It is deliberately child-simple: audio only, no typing.

## Who can use it

- Only the creator (Claudio, signed in with Google) can open training.
- Anyone else signed in is bounced back to the simulation-only view.
- Flow: intro screen → Google sign-in → training UI.

## The UI

- **Red mic button** — HOLD to talk, release to send. The status line shows
  only the detected words (by design; there is no "recording" label).
- **Trophy (Reward)** — tap when the robot got it right. Saying nothing means
  wrong; just ask again.
- **Speech bubble (Feedback)** — hold to leave a short coaching note on the
  last try. It goes into the log the AI reads.
- **Undo** — reverses the last spoken command.
- **Share** (top-right) — copies the train link (`?mode=train`; the project id
  is dropped so shared links open clean training).
- **Circular arrow (Reset, top-right)** — one tap returns the walker to the
  position saved in the editor (the loaded project pose; the spawn pose when
  training without a project). It never erases training
  data or learned words. Erasing all training data is a two-tap confirm
  inside the "?" help sheet.
- **"?"** (top-right) — help sheet ("How to train").

## How the AI pipeline works

1. Speech → text (browser speech recognition).
2. Local keyword match first (fast, offline).
3. Otherwise Gemini 3.1 Flash-Lite through a server proxy (the API key never
   ships in the browser; a user-provided key lives in localStorage
   `odc-gemini-api-key`).
4. Each AI ask receives the command text plus raw posture numbers:
   - live `upZ` (1 = upright, 0 = on its side, -1 = upside down),
   - live `tiltDeg` (0 = upright),
   - the measured result of the last trial (displacement in meters, turns,
     falls).
   The AI interprets these numbers itself — there are no fixed posture rules.
   A verdict like "walked / stayed / fell" is only a hint; the user's
   Reward / Wrong is authoritative.
5. Vision: a tiny scene snapshot is attached to each AI ask by default so the
   AI can roughly see posture (costs a little more). Disable with
   `?vision=0` (or the localStorage flag).

## Learned words (fast path)

- **3 Rewards on the same word → it becomes a "learned word"**: next time it
  responds instantly, no AI call.
- Stored locally: `odc.learnedWords.v1` (max 60 words). Cleared only by the
  two-tap "Erase training data" button inside the "?" help sheet — never by
  Reset.
- Training log (command text + motion + reward labels, last 200 entries) in
  localStorage `odc-gait-training-log`. Microphone audio is NEVER stored.

## How to help the user

- A word isn't working: have them say it and Reward it 3 times — that's the
  fastest path to an instant response.
- The robot fell or is upside down: the AI already sees `upZ`/`tiltDeg` and
  should explain and ask for it to be flipped; the user can tap Reset to put
  the walker back at the editor-saved position.
- Mic problems: check the browser microphone permission; speech recognition
  needs a network connection.
- The AI misbehaves: use Feedback (speech bubble) to leave a coaching note.
- Start over: "Erase training data" (two taps, inside the "?" help sheet)
  clears telemetry and learned words. The top-right Reset only repositions
  the walker.
- Share training with someone: use Share (top-right) to copy the link.

## URL parameters

- `?mode=train` — training mode.
- `?vision=0` — disable the per-ask scene snapshot.

Related: `agent-editor.md` (the full 3D builder).
