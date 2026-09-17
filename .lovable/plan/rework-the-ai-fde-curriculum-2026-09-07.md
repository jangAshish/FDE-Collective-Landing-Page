# Rework the AI FDE curriculum

## Goal
Replace the current course curriculum everywhere with the attached Lyzr AI FDE framework: **10 modules, 100 competencies, and 50 named tools/platforms**, presented as a premium, intuitive part of the existing warm Lyzr brand system.

## Course page

### 1. Reframe the opening
- Update the course headline, proof points, and summary to lead with the attached promise: from a model call to a production system in a customer’s estate.
- Show the three headline metrics prominently: **100 competencies**, **10 modules**, and **50+ tools and platforms**.
- Replace the old four-phase strip with the supplied progression: **Scope → Build → Harden → Deploy → Own**.

### 2. Replace the curriculum completely
Use the uploaded CSV as the source of truth for these ten modules:
1. Agent Foundations
2. Knowledge & Retrieval
3. Agent Architecture
4. Multi-Agent & Integration
5. Evaluation & Quality
6. Safety & Security
7. Data & Governance
8. Deployment & Operations
9. Enterprise Systems & Economics
10. Discovery, Delivery & Ownership

Each module will include:
- Its number, title, subtitle, and “why it matters” statement
- All 10 supplied competencies
- The supplied explanation of why each competency matters to an FDE
- Its five supplied tools/platforms with real logos and accessible text fallbacks

### 3. Make 100 competencies easy to explore
- Replace the current phase accordion with a responsive curriculum explorer rather than presenting one long wall of text.
- Provide a compact ten-module index for quick navigation.
- Use expandable module panels with clear visual hierarchy; competency explanations reveal within the selected module.
- On small screens, keep the same content in a clean single-column flow with generous touch targets and no horizontal overflow.

### 4. Build the tools and partner ecosystem from the attachment
- Remove the old hand-curated partner categories and old anonymous “partner-led” labels from curriculum sections.
- Use only the 50 module/tool relationships supplied in the CSV, including Lyzr, Anthropic, OpenAI, Neo4j, Qdrant, Braintrust, Okta, AWS, Databricks, Salesforce, Accenture, Deloitte, and the rest of the provided list.
- Show each logo within its relevant module and add a refined all-tools ecosystem section grouped by module.
- Continue using the existing logo service with graceful text fallback if a logo cannot load.
- Describe these accurately as the tools and platforms covered by the curriculum; avoid implying every listed company formally teaches or co-creates a module unless the attachment explicitly supports that claim.

### 5. Align supporting course content
- Rewrite outcomes around the supplied pillars: production, enterprise readiness, partner-backed tool fluency, and customer-facing ownership.
- Rework the enterprise-fit section around **Scope, Build, Harden, Deploy, Own** rather than the old four phases.
- Update delivery, certification, pricing inclusions, and FAQ copy so none refers to 14 or 26 modules, 70 or 119 competencies, or the superseded curriculum.
- Preserve the current **$999** price and existing enrollment action.

## Site-wide consistency
- Update homepage course summaries and statistics to **10 modules / 100 competencies / 50+ tools**.
- Update navigation/footer wording where it still names the old phases.
- Update page titles, descriptions, social metadata, and structured course data.
- Remove or retire unused old curriculum data so there is one source of truth.

## Visual direction
- Keep the current Lyzr warm-minimal system: cream canvas, espresso typography, terracotta emphasis, Figtree/Aeonik-style type, restrained 8px cards, pill actions, and editorial whitespace.
- Borrow the strongest structure from the supplied competency poster—numbered modules, thin black rules, selective module accents, compact tool marks—without copying its dense poster layout directly onto the page.
- Use dark and warm bands sparingly to create pacing, with subtle reveal motion and reduced-motion support.
- Keep existing photography and homepage narrative unless curriculum-related content needs correction.

## Technical details
- Model the uploaded curriculum as typed module, competency, and tool records.
- Extend logo-domain coverage to every supplied platform.
- Update or replace the curriculum, course opening, enterprise-fit, partner/tool ecosystem, pricing, FAQ, homepage course pathway, and metadata consumers.
- Verify expanded/collapsed states, logo fallbacks, anchor navigation, and keyboard access.
- Validate desktop and mobile layouts, check for console/runtime errors, and confirm the final build is clean.
