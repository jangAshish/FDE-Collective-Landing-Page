# Tighter pages, with a visible path

Two changes across both pages: cut the wordiness so every section makes one point well, and give people a clear path — a career path on the homepage, the curriculum path on the course page.

## Voice

Short, declarative, specific. Numbers and named facts instead of adjectives. No "unlock", "empower", "in today's fast-moving landscape", no three-clause sentences where one will do. Every section: one headline, at most two short lines of support, then evidence. If a paragraph repeats a point another section already makes, it goes.

## Homepage — new flow

Today the page argues the same case four times (the moment, why now, what an FDE is, why you). New order, each with a single job:

1. **Opening** — the claim and two actions. Trim the sub-line to one sentence.
2. **Why this role, right now** — merge the momentum band and "why now" into one section. Keeps Palantir, Wonderful, Harvey/Sierra, Accenture, and Lyzr's 1,000+ agents / zero churn / under 8 weeks. Loses the two long explanatory paragraphs.
3. **What an FDE actually is** — the definition plus the role switcher, cut to a few lines. The separate "why you" band folds in here as the payoff line.
4. **Where this already runs** — enterprise logos, no added prose.
5. **Your path to becoming one** — NEW. The career path, described below.
6. **Why we started the Collective** — three short cards, no lead paragraph duplicating them.
7. **Two ways in** — the course and city chapters.
8. **Closing action.**

Partner/tool logos stay, as a strip rather than a full section on the homepage.

### The career path (homepage)

A horizontal five-stop path showing movement from where someone is now to where this takes them, each stop one line:

```text
Where you are          →  What changes            →  Where you land
Developer / consultant    Learn on live systems      FDE on real deployments
```

Five stops: **Today** (strong engineer, agent demos that stall) → **Enroll** (10 modules, 100 competencies) → **Build** (a real system, reviewed work) → **Certified** (graded capstone) → **Deployed** (the person trusted to take agents into production). On mobile it stacks vertically as a connected timeline. It sits right after the proof of where Lyzr already deploys, so the promise lands on evidence and leads straight into the two tracks.

## Course page — new flow

1. **Opening** — the promise, price, the Scope / Build / Harden / Deploy / Own progression.
2. **The curriculum path** — NEW, replaces both the current delivery-arc section and the outcomes grid. One continuous journey showing the five stages, which module numbers belong to each stage, and what you leave the stage able to do. Clicking a stage scrolls to those modules.
3. **The ten modules** — the existing explorer, unchanged in behaviour. Section intro cut to one line.
4. **How it runs** — the four delivery facts, no headline paragraph.
5. **The tool ecosystem** — as today, one-line intro.
6. **Certification, readiness check, pricing, FAQ** — copy trimmed, structure unchanged.

## Technical notes

- New `CareerPath.tsx` and `CurriculumPath.tsx` in `src/components/fde/`, with their content in `src/lib/collective-data.ts` and `src/lib/curriculum-data.ts` respectively; the curriculum path derives its stage-to-module mapping from `curriculumModules` so it stays in sync.
- `FdeMomentum` absorbs `WhyNow`; `WhyYou` folds into `WhatIsFde`; `CourseOutcomes` and `EnterpriseFit` are retired in favour of `CurriculumPath`. Unused components deleted.
- Stage anchors reuse the existing `#module-NN` ids in `ModuleJourney`.
- Existing tokens, type scale, reveal animations, and the reduced-motion path are reused — no new colours or fonts. No routing, data, or pricing changes.
- Route metadata descriptions shortened to match the new copy.
