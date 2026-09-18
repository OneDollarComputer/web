# SG90 MuJoCo parameters — provenance

Physics-oriented **digital-twin approximation** for mechanism feasibility (“can it lift / slew?”), **not** a visual CAD twin and **not** a validated electrical-efficiency model.

Primary dynamics narrative: [Dan Aukes — Micro Servo Fitting, Parts 5–6](https://danaukes.com/work-blog/2023-12-07-servo-fitting/) (2023-12-07). Geometry / mass / datasheet slew: common SG90 sheets (e.g. [Components101 SG90 PDF](https://components101.com/sites/default/files/component_datasheet/SG90%20Servo%20Motor%20Datasheet.pdf)).

| Parameter | Value | Unit | Provenance |
|-----------|------:|------|------------|
| Housing size (L×W×H) | 22.2 × 11.8 × 31 | mm | Manufacturer datasheet (Components101-class SG90 sheet) |
| MuJoCo box half-extents | 0.0111 × 0.0059 × 0.0155 | m | Inferred from datasheet dims ÷ 2 |
| Mass (whole servo) | 0.009 | kg | Manufacturer datasheet (9 g). Do **not** invent a heavier mass to “fix” bounce — lab free-fall rebound is contact `solref`/`solimp` (peer `0.012 0.25`), not mass. |
| Housing diaginertia | 8.25e-7, 1.09e-6, 4.74e-7 | kg·m² | Inferred: uniform box about COM, \(I=\frac{m}{12}(a^2+b^2)\) |
| Output travel | ±π/2 (±90°) | rad | Manufacturer datasheet (~180° total) |
| Joint `range` | −1.5708 … 1.5708 | rad | Same as travel |
| Output spline teeth | 21T | — | TowerPro SG90: ServoDatabase Gear Spline/Teeth 21T; RobotShop spline modelling; Thingiverse SG-90 21 teeth. Discrete horn seat step = 360°/21 ≈ 17.142857°. Visual mount index only — not MuJoCo qpos. |
| Motor orientation (UI) | yaw/pitch/roll ° | — | Whole housing+horn rigid reorient (`sg90MotorOrientation.js`). Bench writes root `body_quat` = motor_R × MJCF base; lab freejoint uses edit-while-paused / Apply on Reset. Independent of hinge ctrl and 21T mount index. |
| Stall torque (model `forcerange`) | ±0.15 | N·m | **Recommended conservative:** Aukes / multi-sheet 6 V consensus ≈ 15 N·cm. Alternate datasheet 1.8 kgf·cm ≈ 0.177 N·m @ ~4.8–5 V (Components101) — **not used** as default so “can it lift?” errs low. |
| No-load slew (datasheet) | 0.1 s / 60° | — | Manufacturer datasheet @ ~4.8–5 V |
| ω_nl (output) | ≈ 10.47 | rad/s | Inferred: \(60°/0.1\,\mathrm{s}\) → rad/s |
| Gear ratio G | 55.5 | — | Manufacturer datasheet cited by Aukes (for Phase-2 motor model) |
| i_stall | ≈ 0.6 | A | Aukes: datasheet “max current” interpreted as stall @ 6 V |
| R | 10 | Ω | Inferred by Aukes: \(V_\mathrm{nom}/i_\mathrm{stall}=6/0.6\) |
| i_nl | 0.2 | A | Assumption in Aukes article |
| Datasheet max speed (Aukes) | 0.66 | deg/ms | Datasheet value used by Aukes for motor-side ω_nl |
| Aukes fitted kp (voltage loop) | ≈ 8.9 | V/rad | Fitted vs video @ **5 V** experiment — **not** copied into v1 `<position>` kp |
| Aukes fitted b_act | ≈ 1.404e-6 | N·m·s/rad (motor) | Fitted @ 5 V — Phase 2 callback; voltage-dependent |
| v1 `<position>` kp | 3.0 | N·m/rad | **Calibrated approximation** so large moves saturate `forcerange` early (servo-like slew), **not** Aukes voltage-loop fit |
| v1 `<position>` kv | 0.01 | N·m·s/rad | **Assumption** — light actuator damping for settle near target |
| Joint damping | 0.01432 | N·m·s/rad | **Calibrated approximation:** \(b \approx \tau_\mathrm{stall}/\omega_\mathrm{nl} = 0.15/10.47\) so saturated no-load rate ≈ datasheet slew |
| Joint armature | 1e-6 | kg·m² | **Assumption** for numerical stability (Aukes ignored rotor inertia; \(G^2 J_\mathrm{rotor}\) unknown) |
| Horn / rotor mass | 5e-4 | kg | **Assumption** — small share of 9 g for moving plastics; housing keeps 0.009 as datasheet whole-servo mass for the fixed body (slight double-count; see Assumptions) |
| Horn inertial | see MJCF | kg·m² | **Assumption** — order-of-magnitude arm about shaft |
| Housing mount | euler 90° about X | — | **Assumption** for bench: tips datasheet-upright servo so shaft is horizontal and gravity loads the hinge (“can it lift?”). Reusable include may remount upright on a robot. |
| Absurd load mass × lever | 0.4 kg × ~0.08 m | — | **Assumption** (demo only) so \(mgr \approx 0.314\,\mathrm{N·m} > 0.15\) stall; shown via `sg90_loaded.xml` (WASM `eq_active` bool buffer is unusable in `@mujoco/mujoco` 3.13) |
| Electrical efficiency | — | — | **Rejected as validated:** Aukes explicitly says electrical side is **not** validated; mechanical power capability is the goal |
| MARIO manipulator `kp` 170/40/30 | — | — | **Rejected** — arm-tuned `<position>` gains, not SG90-identified ([SRA-VJTI/MARIO](https://github.com/SRA-VJTI/MARIO) `manipulator.xml`) |
| MARIO URDF `effort="1.0"` | 1.0 | N·m | **Rejected** — far above SG90 stall; not a reusable SG90 torque limit |
| MARIO joint damping 0.1 / armature 0.01 | — | — | **Rejected** as SG90 truth — generic hinge numerics for that arm |

## Actuator choice (v1 vs Phase 2)

**v1 (this tree):** MuJoCo `<position>` with `ctrlrange=±π/2`, `forcerange=±0.15`, kp/kv + joint damping as above. Good enough for mechanism feasibility in the browser without a control callback.

**Phase 2 (documented path, not implemented here):** Aukes motor callback on a `<motor>`:

\[
\tau = G\left(\frac{k_t(V - k_e G\omega)}{R} - b_\mathrm{act} G\omega\right),\quad V=\mathrm{clip}(k_p(q_\mathrm{des}-q),\,\pm V_\mathrm{supply})
\]

with \(k_t=t_\mathrm{stall,motor}/i_\mathrm{stall}\), \(k_e=k_t\), and fitted \(k_p\approx 8.9\), \(b_\mathrm{act}\approx 1.404\times10^{-6}\) at 5 V. Re-fit if supply voltage changes.

## Assumptions (must not be treated as datasheet)

1. v1 position-actuator kp/kv approximate slew/settle; they are **not** Aukes’s fitted voltage-loop kp.
2. Joint damping from \(\tau/\omega_\mathrm{nl}\) lumps gearbox + back-EMF speed limit into a viscous term under torque saturation.
3. Armature and horn inertia are placeholders; do not use them for reflected-rotor studies without measurement.
4. Housing mass is the full 9 g while the horn also has mass — tiny double-count; prefer housing=9 g for “object in scene” mass budgets.
5. No coulomb `frictionloss` / deadband modeled (datasheet deadband ~10 µs is electrical, not MJCF).

## Rejected numbers (do not copy)

| Source | Number | Why rejected for SG90 |
|--------|--------|------------------------|
| MARIO MJCF | kp=170/40/30 | Different robot; not identified on SG90 |
| MARIO URDF | effort=1.0 N·m | ~6–7× SG90 stall |
| Invented “nice” stall | e.g. 1 N·m | No datasheet / fit support |


## CAD visual meshes (v1.1)

| Asset | Path | Provenance |
|-------|------|------------|
| Housing STEP | `cad/Servo-sg90.step` | [FreeCAD-library](https://github.com/FreeCAD/FreeCAD-library) `Electrical Parts/Servos/SG-90` |
| Horn STEP | `cad/SG90-1-arm-horn.step` | Same FreeCAD-library folder |
| Housing STL | `meshes/sg90_body.stl` | Converted from STEP (cascadio) mm→m; shaft-centered; visual only |
| Horn STL | `meshes/sg90_horn.stl` | Converted from FreeCAD horn STEP; visual only |

**Important:** MJCF collision / inertia remain datasheet **boxes**. CAD meshes drive **Three.js visuals** synced to MuJoCo body poses so the horn moves with `sg90_joint`. Alignment is approximate (see `meshes/ALIGN.txt`); refine against a measured spline offset if mates look off.


## CAD visual (GrabCAD)

| Asset | Path | Notes |
|-------|------|-------|
| Housing STEP | `cad/GrabCAD_SG90_body.step` | [grabcad.com/library/sg90-5](https://grabcad.com/library/sg90-5) |
| Cross horn STEP | `cad/GrabCAD_SG90_cross_horn.step` | Same model pack |
| Housing/horn STL | `meshes/sg90_body.stl`, `meshes/sg90_horn.stl` | STEP→STL, mm→m; shaft on +Z; horn hub at origin |

MJCF collision/inertia remain datasheet boxes. Visuals only.

## Runtime STEP (preferred visual)

Browser loads `cad/*.step` with **occt-import-js** (OpenCascade WASM), tessellating BREP at ~0.04 mm linear deflection. Coarse offline STL under `meshes/` is fallback / archive only — prefer STEP at runtime for quality.

## Runtime STEP HQ (preferred)

Browser loads `cad/SG90_HQ_Wonil.step` with **occt-import-js** (~0.035 mm deflection, ~200k tris).
Assembly solids are split: housing stays on the fixed body; the horn solid rotates with the MuJoCo joint.

Provenance: GrabCAD [sg90-servo-motor-module-for-arduino-1](https://grabcad.com/library/sg90-servo-motor-module-for-arduino-1) (Wonil Kim). See `cad/SOURCE_HQ.md`.

Simplified GrabCAD `sg90-5` (~70 KB) and offline STL are archive only — they look faceted because the BREP itself is low-detail, not because of STL conversion alone.
