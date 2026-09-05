# Curriculum agent — lesson authoring (One Dollar Computer)

For **agents** (Codex, Cursor MCP, curl) building teacher lessons.
Teachers only paste the Agent link and describe the lesson in natural language.

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
| `LED` = 19, `BUTTON` = 13 | Arduino `D13` / ESP32 GPIO numbers |
| `pin_set` / `led_on` / `delay` / `read_button` | `#![no_std]`, `extern "C"`, HAL paths |
| One complete `fn main()` | Partial snippets as the only firmware |

GPIO-capable: `0–9`, `12–15`, `19`. Power/GND/NC are not GPIO.

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
3. **`links[]`** — at least:
   - Editor: `https://onedollarcomputer.com/editor/`
   - Virtual board: `https://onedollarcomputer.com/emulator/r2/`
   - Spec or AI docs if helpful

Students compile/load via the **editor** (Compile / Upload) or open **Lab → Simulate** with a project. The lesson HTML teaches; the Rust is what becomes the `.bin`.

### HTML tips

- Prefer a full mini-document: `<!doctype html><html>…</html>` inside each `html` string.
- Keep scripts self-contained (no secrets, no Firebase service keys).
- Linking out to `/editor/` and `/emulator/r2/` is encouraged.
- Embedding the emulator iframe is optional: `/emulator/r2/?embed=1` (parent can `postMessage` `{ type: "odc-emulator", action: "loadBin"|"run"|"stop" }` — see `web/emulator/r2/README.md`).

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

**Do**

- Pair with MCP; update lessons on the site (not local `outputs/*.html` files).
- Match the instructor’s preferred teaching style in HTML5.
- Emit **valid ODC Rust** whenever hardware or the virtual board is part of the story.

**Don’t**

- Scrape the connect URL as a webpage for lesson content.
- Send Blockly / JS / Python / asm **to** the cloud compiler as `language`.
- Use chip pad names or invent pin numbers outside 0–19.
