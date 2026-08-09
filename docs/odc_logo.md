# One Dollar Computer — logo mark (for agents & humans)

Brand mark for **One Dollar Computer** (ODC). Do **not** call the product a “board” in UI copy; the mark is the collegiate **“1”** inside a circle (same silk motif as on the hardware).

## Files (repo root)

| File | Color | Use when |
|------|--------|----------|
| `odc_logo_white.svg` | `#ffffff` | Dark backgrounds (site nav, hero, dark UI) |
| `odc_logo_black.svg` | `#000000` | Light backgrounds (docs print, light emails, light cards) |
| `odc_logo_accent.svg` | `#48E1A7` (brand green) | Accent moments (CTAs, brand highlights) |
| `odc_logo.svg` | `currentColor` | Parent sets color via CSS (`color` / Tailwind text-* ) |
| `odc_logo_favicon.svg` | white on `#07090F` chip | Browser tab / PWA-style mark (same as `icon.svg`) |
| `favicon.ico` / `favicon.png` / `apple-touch-icon.png` | raster of favicon mark | ICO/PNG fallbacks generated from the SVG |

Paths are absolute from site root, e.g. `/odc_logo_white.svg` on production (`https://onedollarcomputer.com/odc_logo_white.svg`).

Main site (`index.html`) uses:

- Nav: `/odc_logo_white.svg`
- Favicon: `/odc_logo_favicon.svg` + `/favicon.ico` + `/apple-touch-icon.png`

## Geometry (do not redesign casually)

- **ViewBox:** `0 0 64 64`
- **Form:** circle ring + digit **1**
- **Digit:** path extracted from **Graduate** (OFL collegiate face), same family as hero wordmark fonts under `fonts/Graduate-*.ttf`
- **Layout:** circle centered; digit scaled/translated to match hardware silk proportions as closely as practical in SVG

If you change the glyph, keep all color variants in sync (same path + same transform).

## Choosing a variant (rules for agents)

1. Prefer a **fixed-color** file when the surface color is known and fixed:
   - dark surface → `odc_logo_white.svg`
   - light surface → `odc_logo_black.svg`
   - green accent surface or “brand pop” → `odc_logo_accent.svg`
2. Prefer `odc_logo.svg` (`currentColor`) when:
   - the mark must follow theme tokens (hover, light/dark switch, button text color)
   - you inline or embed SVG inside a component that already sets `color`

**Never** rely on a white mark on white/light without switching to black (or `currentColor` set to a dark token).  
**Never** use black on near-black without switching to white.

## HTML usage

### Image tag (simplest)

```html
<img src="/odc_logo_white.svg" width="36" height="36" alt="One Dollar Computer" />
```

### Inline / themed (`currentColor`)

```html
<!-- Parent color drives the mark -->
<a href="/" class="text-white hover:text-base-accent">
  <!-- Prefer inlining odc_logo.svg contents, or: -->
  <img src="/odc_logo.svg" width="36" height="36" alt="One Dollar Computer"
       class="[filter:none]" style="/* img does not inherit color; use inline SVG instead */" />
</a>
```

**Important for agents:** `<img src="odc_logo.svg">` does **not** inherit CSS `color` in browsers. For `currentColor` to work, **inline** the SVG (or use a CSS-mask technique). Example:

```html
<a href="/" class="inline-flex text-base-text hover:text-base-accent" aria-label="One Dollar Computer home">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-9 w-9" aria-hidden="true">
    <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" stroke-width="2.5"/>
    <g transform="translate(19.2 10) scale(0.058 -0.058) translate(-107 -750)">
      <path fill="currentColor"
        d="M309 750L401 750L401 80L551 80L551 0L159 0L159 80L309 80L309 653L146 572L107 650L309 750Z"/>
    </g>
  </svg>
</a>
```

Copy path data from `odc_logo.svg` when inlining so files stay the source of truth.

### Site nav (recommended)

- Default (dark site header): white file or inline `currentColor` with `text-white`
- Square chip wrappers from old UI are optional; the circle mark already reads as a badge

```html
<img src="/odc_logo_white.svg" class="h-9 w-9" width="36" height="36" alt="One Dollar Computer" />
```

## Favicon / app icons

Default browser favicon is the **black monogram** (`odc_logo_black.svg` — “1” in a circle).

| File | Notes |
|------|--------|
| `odc_logo_black.svg` | Primary SVG favicon (linked from `index.html`) |
| `icon.svg` | Copy of the black monogram (fallback path for older pages) |
| `favicon.ico` | 16 / 32 / 48 ICO (black mark on white chip for tab contrast) |
| `favicon.png` | 32×32 PNG |
| `apple-touch-icon.png` | 180×180 PNG |

**Do not** revive pixel board recreations of `odc.png` for the tab icon unless product asks. Keep product photos (`odc.png`, face/hero) for marketing; monogram for chrome icons.

In-site **nav** still uses `odc_logo_white.svg` on the dark header.

## Wordmark vs monogram

| Asset | Role |
|-------|------|
| `odc_logo_*.svg` | Monogram: **1** in circle |
| Hero text “ONE / DOLLAR / COMPUTER” | Display wordmark (Graduate font in page CSS) |
| Full name in nav “One Dollar Computer” | Text wordmark, Inter / system sans |

Do not set monogram SVG as body wordmark text.

## Naming convention

- Prefix: `odc_logo`
- Suffix by ink: `_white`, `_black`, `_accent`
- Unsuffixed `odc_logo.svg` = adaptive / `currentColor`

Do **not** invent `logo-1-*` or temporary preview names. Previews belonged only to design exploration and must not be reintroduced.

## Licensing note

The digit outline is derived from **Graduate** (SIL Open Font License). Keep attribution context via project fonts (`fonts/`) and do not claim proprietary ownership of the outline alone. Shipping the mark on ODC surfaces is intended for project branding.

## Checklist when adding the logo somewhere new

- [ ] Background is dark or light? → pick white or black (or accent)
- [ ] Need hover/theme color? → inline `odc_logo.svg` + `currentColor`
- [ ] `alt` / `aria-label` says “One Dollar Computer” (not “board”)
- [ ] Size is legible (≥ ~24px UI; 36px common for nav)
- [ ] All color variants stay geometry-identical after any path edit
