# Physical button (pin 13) — bootloader only

**Canonical warning for humans and agents.** Also: [`board.yaml`](board.yaml), [`/editor/AI_DOCS.txt`](../editor/AI_DOCS.txt), [`/curriculum/AGENT_LESSONS.md`](../curriculum/AGENT_LESSONS.md).

## Rule

The onboard button on the One Dollar Computer (**board pin 13**, constant `BUTTON`) exists to **enter the bootloader** so the browser can **Upload** firmware over **WebHID**.

It is **not** a student / beginner input.

| Do | Don’t |
|----|--------|
| Press the button **before Upload** to enter HID | Teach “press button → LED on” as user firmware |
| Leave pin **13** alone in Simple Rust sketches | Call `read_button()` or `pin_input(BUTTON)` |
| Teach input with HTML demos or an **external** switch on another GPIO (e.g. 0) | Promise live browser ↔ board HID sync (not validated yet) |

The browser editor and cloud compiler **reject** firmware that uses `read_button()`, `BUTTON`, or pin `13` helpers.

## Why this matters

User firmware that reclaims pin **13** can **break WebHID reflash**. The computer may become hard to recover through the normal browser Upload path.

## Emulator note

In `/emulator/r2/`, Space / the on-screen button simulates the **same bootloader button** (pin 13). That is for reset / boot path testing — not a template for classroom “button input” lessons.

## Safe firmware direction

Prefer LED timing and GPIO on pins other than 13. Example direction after blink: blink codes / light signals — no onboard button.
