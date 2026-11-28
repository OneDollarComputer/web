# GPIO & Pin Reference — One Dollar Computer

The official pin reference for the **One Dollar Computer** (model 1.004,
revision R2). For the firmware API that drives these pins, see the
[Simple Rust Reference](https://odc.rs/docs/rust-reference.md). Platform
facts are in the [Specification](https://odc.rs/specification); the
machine-readable board map is
[board.yaml](https://onedollarcomputer.com/docs/board.yaml).

## The only numbering

Every pin is named **only** by the number printed on the computer:
**0–19**. No other numbering exists in code, documentation, or
instructions:

- **Never** chip pad names — they are internal and change if the chip
  changes.
- **Never** a connector contact number as a pin's name (say "pin 6",
  never "RJ45-2"). The port prints contact numbers **1–8** only so you
  can land a standard RJ45 cable; each contact **is** one of the board
  pins, and the correspondence is printed beside the port (see the
  wiring table below).

Code written with board numbers keeps working across chip revisions.
Anything written with pad or contact numbers breaks.

## Pin map (0–19)

Orientation: the **left header carries pins 0–9**, the **right header
pins 10–19**. Logic level is **3.3 V**; the computer is supplied with
5 V over USB.

| Pin | Kind | What it is / limits |
|-----|------|---------------------|
| 0 | GPIO | General purpose digital I/O |
| 1 | GPIO | General purpose. Marked **RX** in the port wiring table (see below) |
| 2 | GPIO | General purpose digital I/O |
| 3 | GPIO | General purpose digital I/O |
| 4 | GPIO | General purpose digital I/O |
| 5 | GPIO | General purpose digital I/O |
| 6 | GPIO | General purpose. The **proven servo signal pin** (`Servo::attach(6)`) |
| 7 | GPIO | General purpose digital I/O |
| 8 | GPIO | Digital I/O; **analog-capable** (see "Analog" below) |
| 9 | GPIO | Digital I/O; **analog-capable** (see "Analog" below) |
| 10 | Power | **+3.3 V** output (`PIN_3V3`). Not GPIO — do not drive it |
| 11 | Ground | GND (`PIN_GND`) |
| 12 | GPIO | General purpose, **shared with the programming link**: using it as GPIO can pause programming until reboot |
| 13 | Button | **Bootloader entry only** (`BUTTON`). Never a user input — see the warning below |
| 14 | GPIO | General purpose. Marked **TX** in the port wiring table (see below) |
| 15 | GPIO | General purpose digital I/O |
| 16 | NC | Not connected (`PIN_NC`) |
| 17 | Ground | GND (`PIN_GND2`) |
| 18 | Power | **+5 V / VBUS** output (`PIN_5V`). Not GPIO — do not drive it |
| 19 | LED | Onboard LED (`LED`). Use `led_on()` / `led_off()` or `pin_set` / `pin_clear` |

**GPIO pins usable in firmware: 0–9, 12, 14, 15, 19.** Pin 13 is
excluded — always.

## How the GPIO behaves (Simple Rust semantics)

From the `odc` library (see the
[Rust Reference](https://odc.rs/docs/rust-reference.md)):

- `pin_output(pin)` configures a pin as a **push-pull output**.
- `pin_input(pin)` configures a pin as an **input with pull-up**.
- `pin_set` / `pin_clear` are **logical**: high / low on ordinary pins,
  and **on / off** on the LED. The onboard LED is wired active-low
  electrically; the logical functions hide that, so never reason about
  the LED in electrical terms — use `pin_high` / `pin_low` only when you
  deliberately want raw electrical levels on an ordinary pin.
- `pin_read(pin)` returns the electrical level (`true` = high) and
  returns `false` for power / ground / NC pins.
- Configuration and drive calls on power, ground, and NC pins are
  **no-ops** — safe, but they do nothing.

## The LED (pin 19)

The onboard LED is board pin **19**, constant `LED`. `led_on()` /
`led_off()` are the shortest path; `pin_set(LED)` / `pin_clear(LED)` do
the same thing. No external components are needed — blink is the
first program:

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

## ⚠ Pin 13 — the button is bootloader-only

The physical button on the computer is board pin **13** (constant
`BUTTON`). Its only job is to **enter the bootloader** so the browser
can Upload firmware over WebHID.

- Press it **before Upload**. Leave it alone in firmware.
- **Never** use pin 13 as a program input, and never emit
  `read_button()` or `pin_input(BUTTON)`: firmware that reclaims the
  pin can **break WebHID reflash** and leave the computer hard to
  recover. The editor and the cloud compiler reject such firmware.
- For input in a project, wire an **external** switch or button to a
  free GPIO pin (for example pin 0) and read it with `pin_read`.

Canonical warning: [BUTTON.md](https://odc.rs/docs/BUTTON.md).

## Analog (pins 8 and 9)

The platform specification routes a **10-bit ADC** to board pins **8
and 9**; the board map marks both pins analog-capable. In the current
Simple Rust API, however, pins 8 and 9 are exposed as **digital GPIO
only** — there is no analog-read function in `odc` yet. Treat them as
ordinary digital pins in firmware today.

## The port (wiring aid only)

The computer's port accepts a standard RJ45 cable. The contacts are
printed **1–8** at the port purely to land the cable; the board prints
the board pin beside each contact. Use this table **only when wiring**:

| Port contact (printed) | Board pin | Note |
|---|---|---|
| 1 | 7 | |
| 2 | 6 | |
| 3 | 1 | marked RX |
| 4 | 14 | marked TX |
| 5 | 18 | +5 V |
| 6 | 4 | |
| 7 | 17 | GND |
| 8 | 10 | +3.3 V |

The RX / TX marks are wiring labels from the port table. The current
Simple Rust API exposes **no serial/UART functions** — pins 1 and 14
are ordinary GPIO in firmware today.

In code, documentation, and instructions, always name the **board
pin**: "pin 6", never "RJ45-2".

## Power pins

- **Pin 10** — +3.3 V output. **Pin 18** — +5 V / VBUS output.
  Power external parts from these; never drive them as GPIO.
- **Pins 11 and 17** — ground.
- **Pin 16** — not connected; do not rely on it for anything.

## Canonical sources

- Specification — https://odc.rs/specification
  (machine-readable: https://onedollarcomputer.com/specification/v1.004.yaml)
- Board map (machine-readable) — https://onedollarcomputer.com/docs/board.yaml
- Pinout diagram — https://onedollarcomputer.com/docs/
- Simple Rust Reference — https://odc.rs/docs/rust-reference.md
- Button warning — https://odc.rs/docs/BUTTON.md
