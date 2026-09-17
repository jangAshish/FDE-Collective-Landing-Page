# Become an AI FDE - Lyzr landing page

A single-page, light-mode marketing and recruitment page for Lyzr's Forward-Deployed Engineer programme, built exactly to the supplied design system.

## Note on partner logos

The brief references a "Section 6 confirmed partner list" that was not included in the message. Rather than fetch or invent third-party logo image files, partner references will render as typed wordmark chips (partner name in JetBrains Mono inside a pill/outline in the relevant stage color) driven by a `partners` data array. Swapping a chip for a real logo file later is a one-line change per entry. Partner names used are only those already named in the brief.

## What gets built

One route at `/` (replacing the placeholder index), plus a design-token layer.

Sections, top to bottom, each with an `id`:

1. Sticky nav - 72px, white/90 + blur, logo, 5 links, primary readiness-check pill. Mobile: hamburger to full-screen white overlay.
2. Hero - blurred multi-color blobs, mono eyebrow, two-line H1 with "FDE" in indigo, lead paragraph, primary + secondary buttons. Full-bleed logo marquee strip below on `--bg-alt`, 28s linear loop, pause on hover.
3. What is an FDE - two-column, plus interactive persona chip strip (Engineer / Consultant / Product Manager / Architect) swapping a one-line description.
4. Sticky section-index nav - six stage chips, active state filled with its stage color, driven by IntersectionObserver. Horizontally scrollable on mobile.
5. Competency map - header, four count-up stats, then six large alternating stage cards on their own tint with a 4px top border in full-saturation stage color, mono stage number, H3, description, competency bullets, partner chips, mono LEARN MORE link. Colored card-hover shadow per stage.
6. 100+ skills grid - `skillMap` data array of ~36 rows across all six stages, 4/2/1 column responsive grid, colored left-border per row, partner chip, then two CTAs.
7. How to become one - monochrome ink+indigo hub: 280px pulsing circle with four numbered steps around it (2x2 on mobile), thin indigo connector lines.
8. Programme formats - three neutral white cards, third marked COMING SOON.
9. Who this is for - two columns (green checks vs neutral ink-low), plus a 10-question yes/no self-check with a result line and matching CTA.
10. Partner ecosystem - category-grouped wordmark grid with stage-colored mono captions, credits note, CTA.
11. Stats band - 4-up count-up numbers with stage-colored underlines.
12. CTA band - full-bleed indigo panel, white H2, inverted white button + white-outline secondary.
13. FAQ - accordion, one open at a time, plus icon rotating 45 degrees, indigo active accent.
14. Footer - `--ink` background, four mono link columns plus contact, bottom row with copyright, privacy, and cross-link to agentengineer.space.

## Technical approach

- Tokens: all hex values from the brief added verbatim to `src/styles.css` as CSS variables and registered in `@theme inline` so they become Tailwind utilities (`bg-build-tint`, `text-harden`, etc.). No hardcoded colors in components. No `.dark` styles applied on this page.
- Fonts: Space Grotesk, Inter, JetBrains Mono loaded via a `<link>` in `src/routes/__root.tsx` head (not `@import`, per Tailwind v4 constraints). Registered as `--font-display`, `--font-body`, `--font-mono` theme tokens; type scale added as exact-value utilities with the specified mobile overrides.
- Data: typed arrays near the top of the page module - `navLinks`, `personas`, `stages`, `skillMap`, `steps`, `programmes`, `readinessQuestions`, `partnerCategories`, `stats`, `faqs`. Layout code maps over them.
- Components: one route file `src/routes/index.tsx` composing section components under `src/components/fde/` (Nav, Hero, Marquee, WhatIsFde, StageIndex, CompetencyMap, SkillGrid, Methodology, Programmes, ReadinessCheck, PartnerGrid, StatsBand, CtaBand, Faq, Footer) so no single file becomes unmanageable.
- Motion: `motion` (Framer Motion) installed; scroll reveals use `whileInView` with `initial={{opacity:0,y:32}}`, 0.6s ease-out, 0.08s stagger. No raw CSS `opacity:0`, so content stays visible without JS. Count-up hooks run on in-view.
- SEO: route `head()` with title "Become an AI FDE - Lyzr", a sub-160-character description, og/twitter tags. Single H1.
- QA pass before finishing: exact hex values, one H1, mono uppercase on all eyebrows/buttons/tags, 16px card radius and pill buttons only, hyphens only in copy, no em dashes, no exclamation points, responsive check at 1440 / 768 / 375, and AA contrast verification of `--ink` on each of the six tints and white on `--foundations`.

No backend is required - the readiness check, persona toggle, and FAQ are local state, and the download/share/workshop CTAs are placeholder actions.
