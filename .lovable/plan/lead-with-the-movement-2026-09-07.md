# Lead with the movement

Reframe the homepage from "we are building the bench" to a movement narrative: roughly a million forward-deployed engineers needed by 2030, and this is where you get trained for one of those jobs.

## New homepage order

1. **Opening (movement)** — headline around the 1M-by-2030 demand and the choice it creates: get trained, or get left in the part of the market that is shrinking. Two actions: explore the course, attend a workshop in your city.
2. **What is an FDE** — the role definition (unchanged section, moved into place).
3. **The skills wall** — new interactive section (below).
4. **Companies hiring / where this is happening** — the momentum proof (Palantir, Wonderful, Harvey and Sierra, Accenture) merged with the hiring angle.
5. **Why us** — replaces "we know what the role needs because we do the job". New framing: we are in live deployments with these enterprises, shipping production-grade agents for them. Same logo grid, new heading and one line of support.
6. **Partners and collaborators** — the tool and partner logos, brought up from the course page level of prominence into the homepage flow.
7. **How to learn** — the path, the two tracks (course + city chapters), city list, closing action.

## The skills wall (new section)

A wall of hexagons representing skills, with a horizontal slider control.

- Slider fully right: only the hexagons a strong backend or full-stack engineer already has are lit (APIs, databases, cloud, CI/CD, testing, auth, and so on). Caption reads roughly "where most engineers are today".
- Dragging the slider left progressively lights the additional FDE hexagons — 20+ of them: discovery and scoping, context engineering, retrieval design, evals, agent orchestration, guardrails, identity and permissions, governance and audit, data residency, observability, cost control, handover, expansion, and the rest — pulled from the existing competency map so the labels match the curriculum.
- Counter above the wall updates live: "12 skills" to "35 skills", with the delta called out as "+23 an FDE needs".
- Keyboard accessible (arrow keys on the slider), and on small screens the wall reflows to fewer hexagons per row with the same slider.

## Language pass

Replace "building the bench", "unlock", and similar phrasing across the site with movement language: demand, jobs being created, getting trained in time. Short, declarative, specific — no hype adjectives.

- "Unlock your city" becomes "Attend a workshop in your city" everywhere it appears (opening, tracks, closing band, footer).
- That link now lands on the city list on this page rather than sending people straight to the external site; the external programme link stays as the secondary action for cities not yet listed.

## Technical notes

- New `SkillsWall.tsx` in `src/components/fde/`, with a `skillWall` dataset in `src/lib/fde-data.ts` (each entry: label, group, `core: true|false`). Rendered as a CSS grid of clipped hexagons using existing tokens; unlit cells sit at low opacity with the line colour, lit FDE cells use gold. Controlled by a single range input styled to the brand, `prefers-reduced-motion` respected by dropping the transition.
- `WhyUs` replaces `EnterpriseProof`'s copy in place (same component, new eyebrow, heading, and supporting line) — no data change to `enterpriseLogos`.
- `Hero.tsx` copy rewritten; second action becomes an in-page `#cities` link labelled "Attend a workshop in your city".
- `SwimLanes.tsx`, `CtaBand.tsx`, `SiteFooter.tsx`: CTA label and target updated; `CITY_PROGRAM_URL` retained for the "bring this to your city" champion action in `CityChapters`.
- `src/routes/index.tsx` section order updated to match the list above; `BuiltWithPartners` added to the homepage.
- Route metadata title and description rewritten around the movement framing.
- No routing, pricing, or curriculum data changes.
