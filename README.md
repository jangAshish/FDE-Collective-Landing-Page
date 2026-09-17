# FDE Journey Map

Build a single-page, light-mode marketing landing page called "Become an AI FDE" for Lyzr, an enterprise agentic AI company. This page introduces and recruits people into Lyzr's Forward-Deployed Engineer (FDE) programme — a competency framework, certification track, and hands-on workshop series for people who scope, build, harden, ship, and deliver AI agent systems inside real enterprise environments.

Audience: working professionals already building with LLMs/agents — SI/GSI engineers (Accenture, Deloitte, etc.), enterprise AI/platform engineers, solution architects, and technical consultants. This is explicitly not aimed at students or people with zero hands-on LLM experience — the tone should read as credible and technical, not like a bootcamp ad.

Visual direction: bold, confident, high-contrast, editorial-but-modern — closer to Linear, Clay, or Stripe's marketing pages than a typical dark "AI startup" template. White/near-white canvas throughout. No dark mode anywhere on this page. The six lifecycle stages of the competency framework each get their own saturated signature color, and that color system is the main visual differentiator of the page — it should feel like the colors are mapping the journey, not decorating it.

Stack: React + TypeScript + Tailwind CSS. Pull repeatable data (skills list, partner logos, competency stages, FAQ) into typed arrays/objects near the top of the file so content can be edited without touching layout code. Framer Motion for animation. Fully responsive from 1440px down to 375px, desktop-first.

Do not invent a different palette or type system than what's specified below — use these tokens exactly.

1. Design system — use verbatim

css

:root {
  /* Canvas & neutrals */
  --bg: #FFFFFF;              /* primary page background */
  --bg-alt: #F7F7F9;          /* alternating section background, cool off-white */
  --ink: #0B0B0D;             /* primary text, near-black not pure black */
  --ink-mid: #55565B;         /* secondary/body text on light */
  --ink-low: #8B8B90;         /* captions, metadata */
  --border: #E6E6EA;          /* dividers, card borders */
  --white: #FFFFFF;

  /* Stage colors — the core identity system, one per lifecycle stage */
  --foundations: #3E5CFF;     /* Indigo Blue — also the site-wide hero/CTA accent */
  --foundations-tint: #EDF0FF;
  --build: #FF7A29;           /* Amber Orange */
  --build-tint: #FFF1E6;
  --harden: #F0334D;          /* Crimson Red */
  --harden-tint: #FEEBEE;
  --ship: #00C285;            /* Emerald Green */
  --ship-tint: #E5FBF3;
  --deliver: #8B3FFA;         /* Violet */
  --deliver-tint: #F4EBFF;
  --craft: #FF2E8B;           /* Hot Pink — Consulting/Commercial/Delivery Craft */
  --craft-tint: #FFEAF3;

  --radius-card: 16px;
  --radius-pill: 999px;
  --radius-tag: 8px;
}

Each stage color is used consistently across: its section's accent bar/ badge, its skill-grid dots, its section-index nav chip, and any icon inside its cards. Never reassign a stage's color to a different stage. The --foundations blue is the only color also used for primary CTA buttons, links, and the hero accent — this is deliberate, it ties "where the journey starts" to "the action color" throughout the page. All other five stage colors stay scoped to their own section.

Fonts (Google Fonts):

Space Grotesk: 500, 600, 700   — all display headings, big numbers, hero
Inter: 400, 500, 600           — body copy, nav, UI text
JetBrains Mono: 500            — the "technical voice": eyebrows, stage
                                   index numbers, tags, buttons, stat labels

Type roles

Space Grotesk 700 → Hero H1 only. 600 → H2/H3. Tight letter-spacing (-0.02em) at large sizes, never lowercase-only for headlines.

Inter → all body copy, nav links, longform text. 400 body, 500-600 emphasis.

JetBrains Mono 500 → eyebrows, stage numbers (01 / FOUNDATIONS), buttons, tags, stat captions. Always uppercase, letter-spacing: .08em.

Type scale — exact values, don't round:

SteppxremUsageHero72px4.5remHero H1 — exactly one per pageH248px3remSection headingsH328px1.75remCard/feature headingsLead20px1.25remIntro paragraphs under headingsBody16px1remBody copy, line-height 1.6Mono13px0.8125remEyebrows, tags, buttons, uppercase

Mobile (≤767px): Hero → 2.75rem, H2 → 2rem, H3 → 1.5rem. Body stays 1rem.

Radius: cards and framed images 16px. Buttons and tags fully rounded pill (999px). No other radii.

Spacing: 1280px max content width, 24px side padding on mobile. Section vertical padding 120px desktop / 56px mobile (small sections 64/32). Card gap 24px.

Buttons: pill, padding: 16px 32px. Primary = solid --foundations fill, white text, hover → darken 8% + subtle lift translateY(-2px). Secondary = 1.5px --ink outline on transparent, hover → fills --ink, text turns white.

Copy rules — enforce strictly: hyphens only, never em dashes. No exclamation points except in the two places marked below. Avoid "unlock," "leverage," "seamless," "supercharge," "delve," and similar AI-marketing filler. Short, declarative sentences. Confident and specific, not hypey. Never call agents "bots."

2. Motion spec

Scroll-triggered reveals on every section: fade + translateY(32px → 0), 0.6s ease-out, staggered 0.08s per child element.

Micro-interactions (hovers, buttons): all .25s ease-out.

Card hover: transform: translateY(-4px), shadow deepens from a soft ambient shadow to a colored shadow in that card's stage color at low opacity (e.g. 0 16px 32px -8px rgba(62,92,255,.25) for a Foundations card) — this is a key "impact" moment, don't skip it.

Logo marquee: continuous translateX(0 → -33.333%), linear, ~28s loop, pause on hover.

Stat counters animate count-up when scrolled into view.

Section-index nav chips: active chip fills with its stage color and white text; inactive chips are outlined in --border with --ink-mid text.

Page must render correctly with JavaScript disabled — set animation initial states via Framer Motion, not raw CSS opacity:0, so nothing is permanently invisible if scripts fail.

3. Page architecture

Build these sections top to bottom. Each gets an id matching the sticky index nav in Section 3.4. Alternate --bg and --bg-alt section backgrounds for rhythm; the six stage cards each override to their own tint background regardless of that alternation.

3.1 — Sticky nav

Fixed top bar, 72px tall, white background at 90% opacity + backdrop- filter: blur(12px), 1px bottom border --border.

Left: Lyzr logo mark (standard black/ink version).

Center: Inter nav links — What is an FDE, The Skill Map, How to Become One, Programme, Partners.

Right: primary pill button, --foundations fill, label TAKE THE READINESS CHECK.

Mobile: hamburger → full-screen white overlay, links stacked large.

3.2 — Hero

Background --bg, with 3-4 large soft blurred color blobs positioned behind the headline at low opacity (10-15%), using a mix of stage colors (indigo, orange, pink) — this previews the multi-color system before the visitor reaches the competency section, without competing with the text.

Content, centered, max-width 760px:

Eyebrow (JetBrains Mono, --foundations, uppercase): A NEW ROLE IS RESHAPING HOW ENTERPRISE AI GETS BUILT

H1 (Space Grotesk 700, hero size, two lines): Line 1 in --ink: This is the future. Line 2, with "FDE" set in --foundations as the single color emphasis in this section: FDE is the future.

Lead paragraph (lead size, --ink-mid, max 580px): "Forward-Deployed Engineer. The person who walks into a customer, understands the real problem, builds the multi-agent system, gets it into production, and moves to the next one. Global systems integrators are already restructuring around this role. Here's how to become one."

Button row: primary TAKE THE READINESS CHECK (anchors to 3.9), secondary SEE THE SKILL MAP (anchors to 3.5, outline style).

Directly below the hero, full-bleed infinite logo marquee. Row of partner/ technology logos on white, ~28px tall, 56px gap, full color at rest (not grayscale, since this is a light page — light desaturated gray backdrop strip behind the marquee row, --bg-alt, so logos read clearly). [FLAG: only include logos your team has confirmed you're allowed to display publicly — see Section 6 for the exact confirmed list.]

3.3 — What is an FDE (content pillar 1)

Background --bg-alt.

Two-column layout: eyebrow (01 / DEFINITION) + H2 on the left ("What is an FDE?"), two body paragraphs on the right:

"Forward-Deployed Engineer started as an Accenture term for a specific job: go to the customer, scope the real problem, build the agentic system end to end — integrations, retrieval, orchestration, the interface — and get it to production before moving on.

We think the role is bigger than the title. An AI FDE isn't only an engineer. It's whoever owns getting an agentic system from idea to production inside a real enterprise: the engineer who builds it, the consultant who scopes it, the product manager who ships it."

Below that, a horizontal persona strip — four clickable pill chips (white bg, --border outline, active state fills --foundations + white text) labeled Engineer, Consultant, Product Manager, Architect. Clicking one swaps a short one-line description beneath the strip (simple state toggle):

Engineer: "Builds the integrations, the retrieval layer, the multi-agent system, and the guardrails around it."

Consultant: "Scopes the real problem, runs discovery, and gets the room to agree on what 'done' actually means."

Product Manager: "Owns the roadmap from pilot to production and proves the ROI once it ships."

Architect: "Designs the knowledge, memory, and tool-layer architecture the whole system runs on."

3.4 — Sticky section index nav

Thin horizontal strip, sticky just under the main nav once scrolled into the competency section (3.5 onward). Six chips, one per stage, each outlined in its own stage color when inactive (--border fallback if you prefer more neutral at rest) and filled solid with its stage color + white text when active (via scroll position / IntersectionObserver):

01 FOUNDATIONS (indigo) · 02 BUILD (orange) · 03 HARDEN (red) · 04 SHIP (green) · 05 DELIVER (violet) · 06 DELIVERY CRAFT (pink)

3.5 — What makes an FDE — the competency map (content pillar 2)

This is the centerpiece section and the main showcase for the color system. Background --bg.

Header: eyebrow 02 / THE SKILL MAP, H2: "What actually makes an FDE." Lead line: "Not a job title. A stack of competencies, built one production system at a time." Below the header, a stat row (JetBrains Mono, uppercase, count-up on scroll):

118 Competencies mapped

26 Certificate-bearing modules

6 Lifecycle stages

40+ Category-leading partners teaching alongside Lyzr

Then six stage cards, each a large card using that stage's own tint as the card background (e.g. Foundations card = --foundations-tint fill) with a 4px solid top border in the full-saturation stage color, 16px radius, and the alternating large-card layout (visual/icon half + text half, alternate left/right per card). Each card:

A large mono stage number (01) in the full-saturation stage color

Stage name as H3 (Space Grotesk 600)

One-line description

4-5 example competencies as a tight bulleted list (use the real examples below, don't invent generic ones)

A row of 2-3 small partner-logo chips relevant to that stage, each with a thin outline in the stage color

Mono LEARN MORE → link in the stage color

Use this exact stage data (condensed from the full 118-item map):

01 — Foundations (indigo #3E5CFF, 13 competencies) "How agents actually think, before you build anything." Examples: LLM behaviour, tokens & context windows · Reasoning & planning patterns (ReAct, CoT, Reflexion) · The agent loop: perceive, reason, act, observe · Structured outputs & function-calling · Model landscape & selection. Partners: Anthropic, OpenAI, Hugging Face.

02 — Build (orange #FF7A29, 34 competencies across knowledge/ retrieval, memory/multi-agent, tools/protocols, and enterprise data/ workflow/voice) "Where the system actually gets built." Examples: RAG & retrieval architecture · Knowledge graphs & GraphRAG · Agent memory (episodic, semantic, procedural) · Multi-agent topologies · MCP servers & tool protocols · Voice stack & conversation design. Partners: Qdrant, Neo4j, Mem0, CrewAI, Composio.

03 — Harden (red #F0334D, 22 competencies across evaluation/ observability and security/governance) "Where most agent projects actually fail — and how to catch it first." Examples: Eval foundations & golden datasets · LLM-as-judge & rubric design · Tracing & observability · AI threat modelling (OWASP LLM Top 10) · Prompt-injection & tool-poisoning defences · Automated red-teaming. Partners: Arize Phoenix, Braintrust, Guardrails AI, Repello, Noma Security.

04 — Ship (green #00C285, 13 competencies) "Getting a working system into a real production environment, safely." Examples: Self-hosted / VPC / air-gapped deployment · Enterprise SSO & identity · Authorization (RBAC/ABAC) & multi-tenancy · Audit logging & forensics · Compliance frameworks (SOC 2, ISO 27001, HIPAA). Partners: Okta, WorkOS, Vanta, AWS.

05 — Deliver (violet #8B3FFA, 16 competencies across discovery/ scoping and architecture/ROI/delivery) "Scoping the real problem and proving it worked." Examples: Use-case scoping & requirements gathering · Extracting the real requirement behind the stated ask · Solution & integration architecture · Measuring baseline vs. post-deploy ROI · Executive framing & demo craft.

06 — Consulting, Commercial & Delivery Craft (pink #FF2E8B, 9 competencies) "The skills that turn a good build into a trusted account." Examples: Stakeholder mapping · Executive relationship management · Competitive positioning & objection handling · Operating inside an SI/GSI delivery model · Mentoring other FDEs.

3.6 — The 100 Skills grid (the shareable centerpiece asset)

This section should look like a premium, screenshot-ready artifact — it's meant to work as a standalone share image too, so it needs to read cleanly at component scale.

Background --bg-alt. Header: eyebrow THE SKILL MAP, H2: "100+ skills. One stack. Every one taught by the company that leads it." Sub-line: "Leaders only. No filler tools, no vendor of the month."

Layout: a responsive 4-column grid (2-column tablet, 1-column mobile) grouped by the six stages above. Each skill row is a white card/row with:

a small colored dot or 3px left-border in that skill's stage color

skill name (Inter 500, base size)

a small logo chip for its primary partner (or a Lyzr mark if Lyzr-owned — 44 of the 118 rows are Lyzr's own delivery craft)

Build this as a data array (const skillMap = [{ stage, skill, partner, color }, ...]) rather than hand-coding all 118 rows in JSX. Pre-populate with 30-40 representative rows spanning all six stages (use the stage examples above plus): Cost & latency economics of models · Document parsing & layout-aware extraction · Role-based crews & task delegation · Building & securing an MCP server · Sandboxed code execution for agents · Data warehouses & lakehouse connectivity · Deterministic vs. agentic workflow design · Grounding & hallucination guardrails · AI asset discovery & agentic risk posture · Enterprise auth, provisioning & SSO · Cost & performance engineering (FinOps) · Vertical playbooks & reference architectures · Security questionnaire response · Conflict management across stakeholders.

Because every row carries its stage color, this grid should read as a visibly multi-colored mosaic at a glance — that's the point, don't mute it down to a single accent.

Below the grid: two CTAs — primary DOWNLOAD THE FULL SKILL MAP (placeholder action / lead-gen form), secondary SHARE ON LINKEDIN (outline style).

3.7 — How do you become one (content pillar 3) — methodology hub

Background --bg. Centered circular visual (280px, white with a soft --foundations-colored glow ring, simple looping pulse animation) with four numbered steps arranged around it on desktop (2x2 grid on mobile), connected to the hub with thin lines in --foundations at low opacity. Keep this section monochrome (ink + indigo only) — it's deliberately calmer than the six-color competency section so the color system doesn't fatigue the visitor by the time they reach the CTA.

01 — Check your baseline. "Comfortable with Python and APIs, called an LLM API, know what RAG and embeddings are. Take the 10-question readiness check before you start."

02 — Attend the 4-hour flagship workshop. "Half landscape, mostly hands-on. You leave having actually built an agent in Lyzr Studio, not watched a slide deck."

03 — Go deep in the Academy. "26 certificate-bearing modules, each taught by the company that leads that category, each with a Lyzr build handoff: learn the concept, then build the same pattern yourself."

04 — Get certified. Bring it to your enterprise. "Earn an Associate, Certified, or Lead credential per module. Then bring the workshop format to your own team."

3.8 — Programme formats (services cards)

Background --bg-alt. Header: eyebrow THE PROGRAMME, H2: "Three ways in."

Three neutral white cards (border --border, no stage-color tinting — this section is about format, not the skill taxonomy, so keep it clean):

The 4-Hour Flagship Workshop — "Lyzr in the room, hands-on the whole time. A landscape overview of the full skill stack, then real building time in Lyzr Studio. Free for SI and enterprise teams — bring it to your office." CTA: REQUEST A WORKSHOP (primary, --foundations).

Partner Landscape Sessions — "A category leader teaches the concept in 15-30 minutes, then we build the same pattern live on Lyzr." CTA: SEE UPCOMING SESSIONS (outline).

The Self-Paced FDE Academy — "All 26 modules, every lesson with a 'learn it, build it on Lyzr' handoff. Go at your own pace, earn a certificate per module." CTA: EXPLORE THE ACADEMY (outline), marked with a small COMING SOON mono tag. [FLAG: per the source material this is explicitly the last thing being built, don't let Lovable imply it's live yet.]

3.9 — Who this is for / readiness check

Background --bg. Two columns: "This is for you if" (checkmarked list in --ship green: comfortable with Python and APIs, has called an LLM API and built a prompt-based app, understands RAG and embeddings conceptually, has used git in a real project) vs. "This isn't for you yet if" (marked in --ink-low, no red/alarm color here: has never called an API, doesn't know basic Python, wants to learn what an LLM is from scratch — points to a future self-paced beginner track instead, no hard sell).

Below, an embedded interactive self-check: 8-10 yes/no toggle questions (simple state, no backend needed) pulled from that same baseline list, ending in a one-line result ("You're ready" / "Start with the fundamentals first") and a CTA button matching the result.

3.10 — Partner ecosystem (logo grid)

Background --bg-alt. Header: eyebrow THE PARTNER STACK, H2: "We don't replace your stack. We fill the gap that gets you to production." Sub-line: "Every competency is taught by a category leader, then rebuilt on Lyzr so you leave knowing how to actually ship it."

Grid of full-color logos grouped by category label (small JetBrains Mono uppercase caption above each row, colored to match the stage that category most belongs to where relevant — e.g. the security/observability row caption in --harden red, memory/multi-agent row in --build orange): Frontier Labs, Hyperscalers, Vector & Graph, Memory, Multi-Agent Orchestration, Evaluation & Observability, Security & Governance, Identity, Voice, Enterprise Data. Use only the confirmed partner list in Section 6 below.

Below the grid, a soft mention of platform credits, no hard dollar figure (see [FLAG] in Section 6): "Enrolled teams get platform credits from partners across the stack — talk to us about what that looks like for your organization." CTA: TALK TO US ABOUT CREDITS.

3.11 — Stats band

4-up grid on --bg, numbers animate count-up on scroll, Space Grotesk 700 in --ink, caption in JetBrains Mono below. Give each stat a thin underline in a different stage color as a small rhythmic callback to Section 3.5 without repeating the full card treatment:

118 Competencies mapped end to end (underline --foundations)

26 Independently certifiable modules (underline --build)

4 hrs Hands-on, not slides (underline --ship)

40+ Category-leading partners (underline --deliver)

[FLAG: do not add named customer logos or Fortune 500 client names to this band unless your team has confirmed they're cleared for public use.]

3.12 — CTA band

This is the single boldest color moment on the page — a full-bleed solid --foundations (indigo) panel, white text, inside 16px radius corners if you want it inset, or full-bleed if you want maximum impact. Centered: H2 (Space Grotesk 700, white) "You get to become an AI FDE." One-line body in white at 85% opacity: "As part of the same movement already running across Indian cities and enterprise floors worldwide." Primary button = white fill, --foundations text (inverted from the rest of the page, so it pops against the solid color panel), label TAKE THE READINESS CHECK. Secondary button = white outline, white text, label REQUEST THE 4-HOUR WORKSHOP.

(This line deliberately echoes the existing "Agent Engineer" movement branding — treat Agent Engineer as the vehicle and AI FDE as the destination, don't introduce a competing brand name here.)

3.13 — FAQ (accordion)

Background --bg. Full-width rows, 1px --border divider, plus-toggle rotating 45° to close, one open at a time, --foundations accent on the active row's icon.

"Is this for students?" → No — it's built for working professionals already writing production LLM code. Point toward the future self-paced beginner track instead.

"What do I need to know before I start?" → Comfortable with Python and APIs, has called an LLM API, understands RAG/embeddings conceptually, has used git on a real project.

"How long does the full programme take?" → Varies by pace — the 4-hour workshop is a single session; the full 26-module Academy is self-paced.

"What do I actually get at the end?" → A certificate per completed module (Associate / Certified / Lead), plus a completed capstone project for each.

"Is it free?" → The 4-hour flagship workshop is free for SI and enterprise teams. [FLAG: confirm Academy pricing before publishing — not specified in source material.]

"Can I bring this to my own company?" → Yes — request a workshop for your team directly.

3.14 — Footer

--ink (near-black) background, white text — the one deliberate dark moment on the page, used purely as a bookend frame, not as "dark mode" for content. Four JetBrains Mono uppercase link columns (Programme, Skill Map, Partners, Company) + a contact column. Bottom row: Lyzr logo mark (white version), copyright, privacy link, and a small cross-link back to the Agent Engineer movement site (agentengineer.space).

4. Accessibility & QA checklist

All hex codes exact, no approximated colors.

Exactly one Hero H1 on the page, Space Grotesk 700, 4.5rem.

Every eyebrow/button/tag is JetBrains Mono uppercase with letter-spacing.

Card/image radius 16px everywhere, buttons/tags fully pill.

Page content is visible and readable with JavaScript disabled.

No em dashes anywhere in copy — hyphens only.

Contrast: verify every stage-tint card background still holds WCAG AA for --ink body text on it (the tints are deliberately light — test each one, don't assume).

White text on --foundations blue (used on the CTA band and nav button) must hold AA — #3E5CFF at these text sizes should pass, but confirm in build.

Mobile: hero scales to 2.75rem, marquee still loops, nav collapses to a full-screen overlay, sticky index nav becomes a horizontally scrollable strip of the six stage chips instead of disappearing.

Meta title: "Become an AI FDE — Lyzr". Meta description: one sentence covering the FDE definition and the certification programme, under 160 characters.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fde-collective.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4eddc39c-e0d2-408f-be17-a86c39655371).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
