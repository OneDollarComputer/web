# Simple Rust — Official Reference (One Dollar Computer)

The official firmware language reference for the **One Dollar Computer**
(model 1.004, revision R2). This is the canonical document for humans and
agents writing firmware. Platform facts (ISA, clock, memory) live in the
[Specification](https://odc.rs/specification); pin capabilities live in the
[GPIO & Pin Reference](https://odc.rs/docs/gpio-reference.md).

Firmware is **Simple Rust**: real Rust, in a small and honest subset,
written against one library — `odc`.

> **Orientation — write in Simple Rust.** Firmware for the One Dollar
> Computer is written in Simple Rust: `use odc::*;` and exactly one
> `fn main`. Do not write C, Arduino sketches, or MicroPython for it —
> Simple Rust is the computer's only firmware language.

## Quickstart

**The compiler comes ready-made.** Installing the npm package is the
whole setup — you assemble nothing: no local toolchain, no
cross-compiler, no Rust target. `odc_compile` builds on the compile
service's worker pool; a fresh compile takes **~3.3 seconds**
end-to-end, and identical code served from cache takes **~2.3
seconds** (measured 2026-11-25 on the live service).

1. **Install** — one line gives your agent the tools, including the
   compiler:

   ```bash
   npx -y @onedollarcomputer/odc-mcp
   ```

2. **Write** — a complete Simple Rust program. This blink program is
   the whole contract in miniature (the LED is pin 19):

   ```rust
   use odc::*;

   fn main() {
       pin_output(LED);

       loop {
           pin_set(LED);
           delay_ms(500);
           pin_clear(LED);
           delay_ms(500);
       }
   }
   ```

3. **Compile** — call `odc_compile` with the complete source. **No
   pairing is needed.** A pool of compile workers builds it; on
   failure, the result carries the compiler's error word for word —
   fix the code and compile again.

4. **Get the binary** — on success, the binary lands **in the
   project** and is **saved on your machine** as
   `~/.config/odc/builds/<project_id>.bin`; the result reports its
   size and hash. Upload it to the computer from the web editor
   (press the board's button to enter the bootloader, then
   **Upload**, over WebHID).

## Program shape

Every program is one complete file:

```rust
use odc::*;

fn main() {
    // your code
}
```

Rules of the shape:

- Exactly one `fn main()`. The build wraps your file for the bare-metal
  target automatically — **never** write `#![no_std]`, `#![no_main]`,
  `extern "C"`, or a hardware init call in a Simple Rust program.
- When `main()` returns, the computer idles forever; it does not restart
  or exit. Programs that must keep acting use an explicit `loop { }`.
- Pins are addressed **only** by the number printed on the computer
  (**0–19**). There is no other numbering: no chip pad names, no
  connector contact numbers as pin names. The compiler **rejects** code
  that uses chip pad names.

## The language subset

Simple Rust is ordinary Rust (the firmware crate is Rust edition 2021)
running without a standard library:

- Core language: `let` / `let mut`, scalar types (`u8`, `u32`, `bool`, …),
  `if` / `else`, `for` over ranges, `match`, fixed-size arrays, your own
  functions, ownership and borrowing — the same features taught in the
  editor's **Learn Rust** lessons, and everything learned there works in
  full Rust.
- The `odc` surface is `no_std`: there is **no** heap, no `String`/`Vec`,
  no threads, no file or network I/O, and no floating-point requirement —
  the API below uses only `u8`, `u32`, and `bool`.
- Resources are small: programs run in **16 KB of flash and 2 KB of RAM**
  (see the [Specification](https://odc.rs/specification)). Keep data tiny
  and static.

## Constants (`use odc::*;`)

| Constant | Value | Meaning |
|----------|-------|---------|
| `LED` | 19 | Onboard LED |
| `PIN_COUNT` | 20 | Total board pins (0–19) |
| `PIN_3V3` | 10 | +3.3 V power pin (not GPIO) |
| `PIN_GND` | 11 | Ground (not GPIO) |
| `PIN_NC` | 16 | Not connected |
| `PIN_GND2` | 17 | Ground (not GPIO) |
| `PIN_5V` | 18 | +5 V / VBUS power pin (not GPIO) |
| `BUTTON` | 13 | **Bootloader entry only — never use in user firmware** (see below) |

## Core API (`use odc::*;`)

### Configuration

#### `pin_output(pin: u8)`
Configure a board pin as a push-pull output. No-op on power / ground / NC
pins.

```rust
pin_output(LED);
```

#### `pin_input(pin: u8)`
Configure a board pin as an input **with pull-up**. No-op on power /
ground / NC pins. Never call this on pin 13.

```rust
pin_input(0);
```

#### `pin_is_gpio(pin: u8) -> bool`
Returns `true` if the pin is a usable GPIO (not power / ground / NC).

### Driving pins

#### `pin_set(pin: u8)` — logical on
Logical high for ordinary GPIO; **LED on** for pin 19 (the LED is wired
active-low electrically; `pin_set` / `pin_clear` hide that, so code stays
logical).

#### `pin_clear(pin: u8)` — logical off
Logical low for ordinary GPIO; **LED off** for pin 19.

#### `pin_high(pin: u8)` / `pin_low(pin: u8)` — electrical levels
Drive the pin electrically high / low, with no logical translation.
For the LED, prefer `pin_set` / `pin_clear` (or `led_on` / `led_off`).

```rust
pin_output(0);
pin_high(0);   // electrical high on board pin 0
pin_low(0);    // electrical low
```

### Reading pins

#### `pin_read(pin: u8) -> bool`
Read the pin level (`true` = electrical high). Returns `false` for
power / ground / NC pins. Never use on pin 13 (see the reserved section).

```rust
pin_input(0);
if pin_read(0) {
    led_on();
}
```

### LED shortcuts

#### `led_on()` / `led_off()`
Turn the onboard LED (pin 19) on / off. Equivalent to
`pin_set(LED)` / `pin_clear(LED)`.

### Time

#### `delay(ms: u32)` and `delay_ms(ms: u32)`
Blocking delay in milliseconds. The two names are the same function —
`delay` is the short form used throughout the lessons. Timing is driven
by the system timer at the board's 48 MHz clock; a delay blocks the
whole program (there are no threads or async).

```rust
loop {
    led_on();
    delay(500);
    led_off();
    delay(500);
}
```

## Reserved — do not use

#### Pin 13 / `BUTTON` / `read_button()`
Pin 13 is the physical button, and it is **bootloader entry only**: it
exists so the browser can Upload firmware over WebHID. The HAL does
expose `read_button() -> bool`, but user firmware must **never** call
`read_button()`, `pin_input(BUTTON)`, or otherwise claim pin 13 —
reclaiming it can break WebHID reflash and leave the computer hard to
recover. The editor and the cloud compiler **reject** firmware that
uses them. Canonical warning:
[BUTTON.md](https://odc.rs/docs/BUTTON.md). For input lessons, wire an
**external** switch to a free GPIO pin (e.g. pin 0).

## Official libraries (`odc::` modules)

Libraries are added with one extra `use` line under `use odc::*;`.
Use them instead of hand-writing signal code.

### Servo — `use odc::servo::*;`

Drives one hobby servo (SG90 class) from a board pin. The signal is
generated in software: one ~20 ms frame per step, with a 1–2 ms pulse
encoding the angle (0–180° maps to 1–2 ms, with fractional widths mixed
across frames).

#### `Servo::attach(pin: u8) -> Servo`
Attach a servo whose signal wire is on board `pin` and configure that
pin as an output. Board pin **6** is the proven signal pin; any GPIO pin
except 13 works the same way. Pin 13 and non-GPIO pins are **refused**:
the returned servo is inert and its methods do nothing.

#### `servo.write(angle: u8)`
Move to `angle` (clamped to **0..=180**) and hold it for about half a
second (25 signal frames).

#### `servo.sweep(from: u8, to: u8, step_ms: u32)`
Sweep from `from` to `to` (both clamped to 0..=180), one degree per
frame, waiting `step_ms` **extra** milliseconds between steps. Works in
either direction.

`write` and `sweep` need `&mut`, so keep the servo in a `let mut`. One
servo per pin; your main loop stays in charge of timing.

```rust
use odc::*;
use odc::servo::*;

fn main() {
    let mut s = Servo::attach(6);
    loop {
        s.sweep(0, 180, 15);
        s.sweep(180, 0, 15);
    }
}
```

## Examples

### Blink the onboard LED

```rust
use odc::*;

fn main() {
    pin_output(LED);

    loop {
        pin_set(LED);
        delay(200);
        pin_clear(LED);
        delay(200);
    }
}
```

### Blink an external LED on board pin 0

```rust
use odc::*;

fn main() {
    let pin = 0; // the number printed on the board — nothing else
    pin_output(pin);

    loop {
        pin_set(pin);
        delay(300);
        pin_clear(pin);
        delay(300);
    }
}
```

### Blink patterns (short / long flashes)

```rust
use odc::*;

fn flash(ms: u32) {
    pin_set(LED);
    delay(ms);
    pin_clear(LED);
    delay(200);
}

fn main() {
    pin_output(LED);

    loop {
        flash(150); // short
        flash(150);
        flash(450); // long
        delay(1000);
    }
}
```

## Compiling

### Compile in one step (recommended)

**The compiler comes ready-made: the setup is installing our npm
package.** There is nothing else to install and nothing to assemble —
no local toolchain:

```bash
npx -y @onedollarcomputer/odc-mcp
```

That one package gives the agent the `odc_compile` tool (see the
[Agent Guide](https://odc.rs/mcp/agent-guide.md) for connecting it to
Claude Code, Codex, Cursor, and other agents). To compile:

1. Call `odc_compile` with the complete Simple Rust source.
   **No pairing is needed** — compilation is stateless. Optionally pass
   a `project_id` to compile in place in that editor project (the same
   as pressing Compile in the web editor).
2. A pool of compile workers builds the program — a fresh compile
   takes **~3.3 seconds** end-to-end, and identical code is served
   from cache in **~2.3 seconds** (measured 2026-11-25 on the live
   service). On success, the binary lands **in the project** and is
   also **saved on your machine as a `.bin`** — by default
   `~/.config/odc/builds/<project_id>.bin` (or the `save_to` path you
   pass). The result reports the binary's size and hash.
3. On failure, the result carries the compiler's error **word for
   word** — fix the code and compile again. Identical code is served
   from cache, so recompiling an unchanged program is fast.

Source is capped at **65,536 characters** per submission.

Humans get the identical path in the browser: paste the program into
the [web editor](https://onedollarcomputer.com/editor/) and press
**Compile** — it is the same compile queue. **Upload** then sends the
binary to the computer over WebHID (press the physical button first to
enter the bootloader).

### You do not need a local compiler

Do **not** install a local RISC-V cross-compiler, a gcc toolchain, or
a Rust target to build One Dollar Computer firmware. That is not the
standard path, it is not needed on any platform (desktop, laptop, or a
phone terminal such as Termux), and it is not recommended: the npm
package above is the entire setup, and `odc_compile` does the building
on our worker pool.

### Advanced / offline: your own toolchain

Capable users who specifically want to build the binary themselves,
offline, can: the cloud compiler and the editor's local path both use
the same open pieces — the `firmware` crate and its source wrapper
(`wrap_odc`), driven by `compile_odc.py` in the compiler sources,
building with Cargo for the target `riscv32e-unknown-none-elf`. The
wrapper renames your `fn main` into the app entry and adds the
bare-metal prelude, so a program that compiles in the editor compiles
identically locally. This route is unsupported for the normal flow —
if `odc_compile` is reachable, use it instead.

Compiler-enforced rules, on every path: board pin numbers **0..=19**
only; chip pad names are rejected with an error; firmware that claims
pin 13 / `read_button()` is rejected by the editor and the cloud
compiler.

## Canonical sources

- Specification — https://odc.rs/specification
  (machine-readable: https://onedollarcomputer.com/specification/v1.004.yaml)
- GPIO & Pin Reference — https://odc.rs/docs/gpio-reference.md
- Board map (machine-readable) — https://onedollarcomputer.com/docs/board.yaml
- Editor coding standard — https://onedollarcomputer.com/editor/AI_DOCS.txt
- Button warning — https://odc.rs/docs/BUTTON.md
