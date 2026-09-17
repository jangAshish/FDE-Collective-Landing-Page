# Apply the Lyzr design system end to end

Adopt the attached Lyzr Design System v1.0 as the single source of truth for both pages, and rebuild the hero as a cream editorial hero.

## 1. Real Aeonik type

The design system file carries the five licensed Aeonik weights (Light 300, Regular 400, Italic 400, Medium 500, Bold 700). Extract them, host them with the site, and make Aeonik the one family for headings and body, with Figtree only as fallback. Drop the Google Figtree load and keep the mono face for eyebrow labels.

Type scale becomes the exact Major Third scale from the system: Display 2 / Display 1 / H1 / H2 / H3 / H4 / H5 / H6 / body-large / body / small / eyebrow, with the specified line heights and negative tracking. Headings run Regular 400, UI emphasis Medium 500. Measures: hero 18ch, prose 65ch, card copy 38ch.

## 2. Token layer

Rename the ad hoc tokens (gold, navy, canvas) onto the system's real ramps and semantic names:

- Espresso 50 to 975, Mahogany, Terracotta, Cream ramps as primitives.
- Semantic tokens on top: page ground, subtle warm band, raised card white, inverse espresso-950 band, accent fill terracotta-600 (hover 700), accent text terracotta-700, brand mahogany-700, text primary / secondary / muted, border subtle / default / strong / control / focus.
- Full 4px spacing scale, container sizes (640 / 1152 / 1280 / 1440), gutter and section rhythm clamps.
- Radii 4 / 8 / 12 / 16 / 24 / 40 / full, with cards at 16 and buttons at 40.
- Warm espresso-tinted shadows xs to xl, plus the terracotta accent glow reserved for primary button hover.
- Motion tokens: 80 / 140 / 220 / 340 / 520 / 720ms with the four named curves; reveals stay at 720ms opacity and y 30 to 0, scale .992 to 1.

Components read semantic tokens only. Existing component APIs keep working through aliases so nothing breaks mid-change.

## 3. New hero (cream editorial)

Replace the dark full-bleed hero with the cream version: cream canvas, eyebrow, Display-scale headline capped at 18ch, one short supporting line, primary terracotta pill plus outline pill, and the hero photograph held in a 16px-radius panel beside the copy. Tighter vertical rhythm on mobile, no wasted whitespace before the actions. The partner logo strip stays underneath on a hairline band.

## 4. Sweep both pages

Homepage and course page, every section:

- Buttons: 44px tall (32px in nav), 40px radius, Medium weight, hover lift of 1px, accent glow on primary only.
- Cards: 16px radius, hairline border, white raised surface, lift 4px onto shadow-lg on hover.
- Dark sections become deliberate espresso-950 bands, not a theme.
- Terracotta stays scarce: primary CTA, links, focus rings, one chip per group.
- Section padding, gutters and container widths move onto the system rhythm.
- Focus ring: 2px terracotta-600 at 2px offset. All motion collapses under reduced motion.

## 5. Copy rule

Rewrite every em and en dash across both pages into commas, periods or plain hyphens (Hero, Nav, WhatIsFde, Certification, CourseHero, BuiltWithPartners, both route heads, and the two content data files).

## 6. Standing rule

Record the design system in project memory as the standing rule for all future work on this project, including the non-negotiables: one accent spent carefully, semantic tokens only, warm shadows, type discipline, no em or en dashes, motion respects the reader, 40px pill buttons, light theme is the product.

## Technical notes

- Fonts are decoded from the uploaded HTML and served as CDN-hosted assets, declared with `@font-face` in `src/styles.css`; the Google Fonts link in `src/routes/__root.tsx` is trimmed to the mono face.
- Tokens live in `src/styles.css` under `:root` plus `@theme inline`, so Tailwind utilities pick them up; the current `--gold` / `--navy` / `--canvas` names remain as aliases pointing at the new ramps to keep existing class names valid during the sweep.
- No routing, data model or pricing changes. Verification: build plus typecheck, then Playwright screenshots of both routes at 1280 and 390 wide, checking for console errors and horizontal overflow.
