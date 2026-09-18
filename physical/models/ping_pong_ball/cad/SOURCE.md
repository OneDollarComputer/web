# Source

- Origin: user Fusion export (Claudio)
- Product name (STEP): `Ball`
- Date: 2026-09-17 (STEP `FILE_NAME` time_stamp `2026-09-17T19:16:16-07:00`)
- Format: STEP (.step)
- Originating system: Autodesk Translation Framework (Fusion) via ST-Developer
- Source filename: `Ball.step`
- Repo filename: `ping_pong_ball.step`
- Slug / inspect name: `ping_pong_ball` / **Ping pong ball**

## Geometry

- STEP `SPHERICAL_SURFACE` radius **15** with units treated as **mm** → radius **0.015 m**, diameter **Ø30 mm**
- Occt AABB ≈ 29.98 × 29.99 × 30.00 mm confirms mm (not meters)
- **Not scaled to ITTF 40 mm diameter** — visual and sphere collider match the STEP as exported. Official table-tennis ball diameter is 40 mm; this CAD is Ø30 mm (documenting the mismatch; no silent rescale)

## Mass (ITTF)

- **mass = 0.0027 kg (2.7 g)** — ITTF Laws of Table Tennis, Law **2.3.2** (ball mass 2.7 g; acceptable manufacturing range often cited ≈ 2.67–2.77 g)
- Inertia: ASSUMPTION thin spherical shell `I = ⅔ m r²` (real ball is hollow; Fusion BREP is a solid sphere of convenience)
