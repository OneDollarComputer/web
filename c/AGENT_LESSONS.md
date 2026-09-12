# Learn Physical AI — lesson authoring (One Dollar Computer)

For **agents** (Codex, Cursor MCP, curl) building **Physical AI** curriculum.
Teachers only paste the Agent link and describe the Physical AI lesson in natural language.

## Non-negotiable rule

**Teaching UI is free. Firmware is not.**

- You may invent any HTML5 experience the instructor wants (slides, game, block-like UI, quiz, “keyboard”, robot metaphor, …).
- If the lesson uses the **One Dollar Computer** (virtual board or real Upload), you **must** also produce **complete Simple Rust** that compiles with the existing ODC toolchain.
- Do **not** invent a second compiler language for the board. Blockly / Python-in-the-page / custom DSLs are **only** pedagogy; the board path is always Rust.

Canonical firmware shape:

```rust
use odc::*;

fn main() {
    // …
}
```

Full coding rules: https://onedollarcomputer.com/editor/AI_DOCS.txt  
Platform: https://onedollarcomputer.com/specification/ (v1.004 **R2**)

### Firmware constraints (short)

| Do | Don’t |
|----|--------|
| Pins **0..=19** only | MCU pads (`PD6`, `PC0`, …) |
| `LED` = 19; GPIO for I/O | Treat pin **13** / `BUTTON` as student input |
| `pin_set` / `led_on` / `delay` | `read_button()`, `pin_input(BUTTON)` |
| One complete `fn main()` | Partial snippets as the only firmware |

GPIO-capable for lessons: `0–9`, `12`, `14–15`, `19`. **Pin 13 is not for lessons.** Power/GND/NC are not GPIO.

### Physical button & HID (read before inventing input lessons)

**Canonical:** https://onedollarcomputer.com/docs/BUTTON.md

| Fact | Implication for lessons |
|------|-------------------------|
| The **physical** ODC button only **enters the bootloader** so Upload (WebHID) works | Do **not** teach “press the board button → LED on” as firmware |
| User firmware that touches pin **13** / `read_button()` can **break HID reflash** | Never emit that code in curriculum Rust |
| A **virtual button in HTML** can teach if/else in the browser | That is pedagogy only — it does **not** drive the real computer |
| Live browser ↔ board control via HID (page button → LED, or page reading the physical button) | **Not ready** — do not promise or build lessons that need it yet |

**Safe next lesson after blink:** LED timing / blink codes (“Light Signals”) in HTML + matching Simple Rust on the board — no button, no HID messaging.

**If the instructor wants input → decision → output:** simulate in HTML5, or use an **external** switch on a free GPIO (e.g. pin 0). Say clearly that the onboard button is for **bootloader / Upload**, not the exercise.

## How to put a lesson together (MCP)

Tools: `curriculum_pair` → `curriculum_agent_brief` → `curriculum_create_lesson` (or list/get) → `curriculum_update_lesson`.

| Tool | Use |
|------|-----|
| `curriculum_create_lesson` | **New** lesson — requires `title`; optional overview, steps, `html[]`, links, … Returns `{ id, siteUrl }` |
| `curriculum_update_lesson` | Patch an existing lesson by `lesson_id` |
| `curriculum_list_lessons` / `curriculum_get_lesson` | Read |

Useful fields (create + update):

| Field | Use |
|-------|-----|
| `title`, `overview`, `materials[]`, `steps[]` | Lesson text |
| `html[]` | `{ "title": "…", "html": "<!doctype html>…" }` — **interactive teaching UI** |
| `links[]` | Editor / emulator / docs links |
| `photos[]`, `videos[]` | Media |

**Prefer `curriculum_create_lesson`** for new work — do not overwrite unrelated lessons.

### Always when the board is involved

1. **`html[]`** — the experience (whatever the instructor asked for).  
2. **`steps[]` (or overview)** — include a clear section **Firmware (Simple Rust)** with the **full** Rust source in a fenced `rust` code block (copy-paste ready for the editor).  
3. **`links[]`** — at least the Editor: `https://onedollarcomputer.com/editor/`  
   Optional: Spec / AI docs. Emulator only when the lesson actually uses Lab → Simulate.

Students compile/load via the **editor** (Compile / Upload) or open **Lab → Simulate** with a project. The lesson HTML teaches; the Rust is what becomes the `.bin`.

### HTML tips

- Prefer a full mini-document: `<!doctype html><html>…</html>` inside each `html` string.
- Keep scripts self-contained (no secrets, no Firebase service keys).
- **Contrast:** titles and body text must be readable. On light backgrounds use dark text (`#0f172a` / `#334155`). Never pale gray/lavender titles on white. On dark panels use light text (`#f8fafc`).
- Prefer CSS variables or solid hex colors with clear contrast; avoid near-white on white.
- Link to `/editor/` when firmware is part of the lesson.
- Emulator iframe embed is optional (advanced): `/emulator/r2/?embed=1` — see `web/emulator/r2/README.md`.

## Minimal blink example (Rust that must compile)

```rust
use odc::*;

fn main() {
    loop {
        led_on();
        delay(500);
        led_off();
        delay(500);
    }
}
```

Put this (or the lesson’s real firmware) in **steps** under **Firmware (Simple Rust)**. Put any creative HTML in **`html[]`**.

## Do / don’t for agents

### Sandbox / Codex (403 host_not_allowed)

Some agent shells block `onedollarcomputer.com`, `api.onedollarcomputer.com`, and `odc.rs`.
Do **not** use `curl` there. Use **web-fetch / HTTP tools** (same path that can read this file).

The instructor **Copy** block already includes a Bearer token — skip pairing.

API hosts (try in order):

1. `https://api.onedollarcomputer.com`
2. `https://curriculumagent-mhrupl2ima-uc.a.run.app` (Cloud Run; same API)

Then `GET/POST /lessons` and `PATCH /lessons/:id` with `Authorization: Bearer …`.

**Do**

- Pair with MCP when it is connected; otherwise use the Copy token + HTTP tool. Update lessons on the site (not local `outputs/*.html` files).
- Match the instructor’s preferred teaching style in HTML5.
- Emit **valid ODC Rust** whenever hardware or the virtual board is part of the story.

**Don’t**

- Scrape the connect URL as a webpage for lesson content.
- Send Blockly / JS / Python / asm **to** the cloud compiler as `language`.
- Use chip pad names or invent pin numbers outside 0–19.
- Use the **physical button** / `read_button()` / pin **13** as lesson input.
- Promise browser ↔ board HID sync (not validated yet).
- Confuse an HTML “virtual button” with the real ODC button.
