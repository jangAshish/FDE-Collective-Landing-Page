# The FDE Collective - restructure into two swim lanes

The site becomes **The FDE Collective**, an initiative with two tracks: an online certification course, and offline city chapters. Three routes.

```text
/            Home - the initiative, partners, cities, both lanes
/course      The AI FDE course - why, what, curriculum, pricing
(external)   Unlock Your City - linked out from home
```

## 1. Rebrand and re-theme

- Name across nav, footer, metadata: **The FDE Collective**, by Lyzr.
- New palette (replaces navy/gold): graphite ink `#141414`, warm paper `#F7F5F2`, signal orange `#E85D3A`, muted gray `#8A8A8A`. Orange is used sparingly - CTAs, eyebrows, active states, one accent rule per section. Everything else is ink on paper, editorial and high-contrast.
- The six stage jewel colors get retuned to a muted sequence that sits under the graphite/orange system instead of competing with it.

## 2. Home page (`/`)

Reworked from the current page, section by section:

1. **Hero** - the Collective, not the course. Headline about the FDE role becoming the defining enterprise AI job; two CTAs: "Explore the course" and "Bring us to your city".
2. **Enterprise proof strip** - logos of enterprises Lyzr already builds for: PepsiCo, U.S. Government, Hitachi, AirAsia, WW Publishers, Verifone, Willis Towers, Watson, Accenture. Framed as "these are the systems the curriculum is drawn from".
3. **What is an FDE** - short definition plus the persona switcher (engineer / consultant / PM), kept.
4. **Two swim lanes** - a two-card split: *The Course* (self-paced certification, $999) and *The City Chapters* (offline workshops). Each links to its lane.
5. **Co-created with industry partners** - the differentiator section. Language like "the graph module is taught by the team behind the leading graph database; the vector retrieval module by the team behind a leading vector engine" - described by capability, with the partner logo wall underneath rather than name-by-name claims.
6. **On the ground** - the city initiative: what happens at a chapter event (1-hour "how to become an FDE" session, live build, champion-led), ~10 events run across India, planned for South Africa, Dubai and Toronto. Shown as a simple list of city rows with a status tag (Completed / Planned / Open) rather than a map. Ends with a "Bring this to your city" button linking out to the existing Unlock Your City page.
7. **FAQ + closing CTA + footer.**

## 3. Course page (`/course`)

1. **Hero** - "Become an AI Forward-Deployed Engineer", $999, apply CTA.
2. **Why this exists** - the gap between agent demos and production inside a real enterprise.
3. **What an FDE actually does** - the competency framing, carried over.
4. **The journey** - the 14 modules from the uploaded curriculum, grouped into four phases:
   - *Scope it*: 1 Client Room & commercial boundaries, 2 Stack strategy & ROI, 3 Legacy systems & data plumbing
   - *Build it*: 4 Production backends & ops dashboards, 5 Enterprise RAG & multimodal, 6 Knowledge graphs & GraphRAG, 7 Enterprise agents, loops & MCP, 8 Voice agents & real-time audio
   - *Ship it*: 9 Containerization, hardening & GitOps, 10 AWS hyperscaler deployment, 11 Infosec, red teaming & compliance, 12 Reliability, observability & incident war rooms
   - *Own it*: 13 Field-to-product bridge & internal tooling, 14 Domain verticals, GSI delivery, handover & capstone

   Each module is a card: number, title, one-line outcome, a partner-taught tag where relevant, expandable to show its topics from the curriculum file. No lesson-level detail.
5. **Where this fits in an enterprise** - a short diagram-style band mapping the phases to a real delivery lifecycle (discovery to handover) so the journey reads as a job, not a syllabus.
6. **Partner-taught modules** - same co-creation language, scoped to the modules it applies to.
7. **Certification levels** - kept.
8. **Readiness self-check** - kept.
9. **Pricing** - single card: $999, what is included (14 modules, capstone, certification, partner-led sessions, community). CTA only for now, no application backend.
10. **FAQ + footer.**

## Technical notes

- New route file `src/routes/course.tsx`; `src/routes/index.tsx` becomes the Collective home. Both get their own `head()` metadata.
- Curriculum data (14 modules, phases, topics) is added to `src/lib/fde-data.ts` from the uploaded CSV, typed and grouped by phase; existing stage/competency data is trimmed to what the two pages still use.
- Palette swap happens in `src/styles.css` tokens only - components keep using semantic classes, so no hardcoded colors.
- Enterprise logos reuse the existing Logo.dev `PartnerLogo` component; new domain entries are added to `partnerDomains`. Where a logo is not resolvable (U.S. Government, Willis Towers, Watson), the component falls back to a typed wordmark.
- Existing components are reused where possible: `WhatIsFde`, `Certification`, `ReadinessCheck`, `Faq`, `SiteFooter`, `PartnerGrid`, `ReadinessCheck`. `CompetencyMap` / `ModuleDeepDive` / `SkillGrid` are replaced by the new phase-grouped module journey. New components: `SwimLanes`, `EnterpriseProof`, `CityChapters`, `ModuleJourney`, `Pricing`, `EnterpriseFit`.
- Nav gains a route-aware link set (Home, Course, Cities) and keeps the apply CTA.
