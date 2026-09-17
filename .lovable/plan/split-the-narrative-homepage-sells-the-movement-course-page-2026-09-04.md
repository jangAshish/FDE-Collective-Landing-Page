# Split the narrative: homepage sells the movement, course page sells the course

Right now both pages carry the same blocks — "What is an FDE", the co-creation section, partner logos, FAQ — so the homepage reads like a shorter version of the course page. The fix is a clean division of labour:

- **Homepage** = why this role, why now, who it's for, where we've deployed, why we started the Collective. Demand generation.
- **Course page** = what you actually learn and buy.

## Homepage (`/`) — new section order

1. **Hero** — the movement, not the product. Sharper headline on the FDE becoming the defining enterprise AI job, plus a moment-in-time line ("the window is now"). CTAs: Explore the course / Bring us to your city. Keep the partner marquee.
2. **Why now** — moved here from the course page. The Accenture-origin story of the role, the demo-to-production gap, the market claims and the counters (the existing proof points and stats). This is the demand-generation core.
3. **What is an FDE** — the definition plus the engineer / consultant / PM switcher. Lives only here, removed from the course page.
4. **Why you should be part of this** — new: what the role does for your career (the "you become the person the enterprise trusts" framing, reusing the existing dark band treatment).
5. **Where this comes from** — enterprise deployment logos, reframed from "the curriculum comes out of these" to "this is where we've deployed, and it's why we know what the role needs".
6. **Why we started the Collective** — new short section: the role exists, nobody is training for it, so we're building the bench in the open, with partners and in cities.
7. **Two tracks** — course and city chapters, unchanged in structure.
8. **Built with our partners** — replaces the current curriculum-focused co-creation copy with a generic, movement-level line: the people who build the technology are building this with us, with the partner logo wall underneath. The detailed "each module is taught by…" version stays on the course page only.
9. **City chapters** — kept.
10. **Closing CTA + footer.** Homepage FAQ is removed (it is course-purchase focused and belongs on the course page).

## Course page (`/course`) — more course, less general

1. **Hero** — kept, with the four-phase strip.
2. **What you'll be able to do** — new: outcomes framed as capabilities on a real engagement, replacing the general "What is an FDE" and "Why now" blocks that move to the homepage.
3. **The journey** — the 14 modules by phase, kept, with expandable topics.
4. **How it's delivered** — new: format, pace, capstone, partner-led live sessions, community — the practical detail buyers ask for.
5. **Where this fits in an enterprise** — kept.
6. **Partner-taught modules** — keeps the specific, module-level co-creation language.
7. **Certification levels** — kept.
8. **Readiness self-check** — kept.
9. **Pricing** — kept.
10. **FAQ** — kept here only, with questions rewritten toward enrolment (time commitment, prerequisites, refunds, certification value).

## Technical notes

- New components: `WhyNow` (home-facing rewrite of `ProofBand`), `WhyCollective`, `BuiltWithPartners` (generic home version of `CoCreated`), `CourseOutcomes`, `HowItWorks`.
- `WhatIsFde`, `ProofBand`, `WhyYou` move to the homepage import list; `WhatIsFde` and `ProofBand` are dropped from `course.tsx`.
- `CoCreated` stays on the course page with its current module-level copy; the homepage uses the new generic variant plus `PartnerGrid`.
- Copy for the new sections is added to `src/lib/collective-data.ts`; FAQ entries in `src/lib/fde-data.ts` are rewritten for enrolment.
- Both routes keep their existing `head()` metadata; the homepage title/description are retuned toward the movement framing.
- No backend, no data-model changes — copy, components and section ordering only.
