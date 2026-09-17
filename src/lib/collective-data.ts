/* -------------------------------------------------------------------------- */
/*  Enterprises Lyzr already builds for                                       */
/* -------------------------------------------------------------------------- */

export const enterpriseLogos: { name: string; domain?: string }[] = [
  { name: "USA Gov", domain: "usa.gov" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "AirAsia", domain: "airasia.com" },
  { name: "WTW", domain: "wtwco.com" },
  { name: "Publicis", domain: "publicisgroupe.com" },
  { name: "Verifone", domain: "verifone.com" },
  { name: "Crown Castle", domain: "crowncastle.com" },
  { name: "KPMG", domain: "kpmg.com" },
  { name: "Prophet", domain: "prophet.com" },
];

/* -------------------------------------------------------------------------- */
/*  City chapters                                                             */
/* -------------------------------------------------------------------------- */

export const CITY_PROGRAM_URL = "https://agentengineer.space/";

export type City = {
  city: string;
  country: string;
  status: "Completed" | "Planned" | "Open";
  note: string;
};

export const cities: City[] = [
  { city: "Bengaluru", country: "India", status: "Completed", note: "Agent build workshop" },
  { city: "Hyderabad", country: "India", status: "Completed", note: "FDE field session" },
  { city: "Mumbai", country: "India", status: "Completed", note: "Enterprise delivery clinic" },
  { city: "Delhi NCR", country: "India", status: "Completed", note: "Agent build workshop" },
  { city: "Pune", country: "India", status: "Completed", note: "FDE field session" },
  { city: "Chennai", country: "India", status: "Completed", note: "Retrieval and graph lab" },
  { city: "Ahmedabad", country: "India", status: "Completed", note: "Agent build workshop" },
  { city: "Kochi", country: "India", status: "Completed", note: "FDE field session" },
  { city: "Kolkata", country: "India", status: "Completed", note: "Agent build workshop" },
  { city: "Jaipur", country: "India", status: "Completed", note: "Community chapter launch" },
  { city: "Dubai", country: "UAE", status: "Planned", note: "Next wave" },
  { city: "Johannesburg", country: "South Africa", status: "Planned", note: "Next wave" },
  { city: "Toronto", country: "Canada", status: "Planned", note: "Next wave" },
  { city: "Your city", country: "Anywhere", status: "Open", note: "Champion applications open" },
];

export const cityFormat: { step: string; title: string; line: string }[] = [
  {
    step: "01",
    title: "One hour on the role",
    line: "A condensed version of the Academy: what an FDE does, where enterprise agent projects break, and what the job actually pays off.",
  },
  {
    step: "02",
    title: "A live build",
    line: "The team builds an agent in the room, on real data, with the security and integration constraints called out as they hit them.",
  },
  {
    step: "03",
    title: "Champion-led community",
    line: "Every city has a local champion who keeps the chapter running between visits, with support and material from Lyzr.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Pricing                                                                    */
/* -------------------------------------------------------------------------- */

export const pricing = {
  amount: "$999",
  cadence: "one-time, full programme access",
  includes: [
    "All 10 modules and 100 mapped FDE competencies",
    "Hands-on work across 50+ production tools and platforms",
    "Graded capstone and the full agentathon simulation",
    "Certification at Associate, Certified or Lead level",
    "Access to the FDE Collective community and city chapters",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Why FDEs are the moment                                                   */
/* -------------------------------------------------------------------------- */

export const fdeMomentum = {
  eyebrow: "Who is hiring",
  headline:
    "The companies winning at enterprise AI are hiring FDEs first.",
  lead:
    "Given the probabilistic nature of generative AI, every production agentic system needs far more testing, fine-tuning, and intelligent orchestration to become production-grade. The people who do that work are Forward-Deployed Engineers.",
  proofIntro: "And the proof is right in front of us.",
  proofPoints: [
    {
      value: "100+",
      label: "FDEs deployed by Lyzr",
      detail: "shipping production-grade agents across Fortune 500s with zero churn.",
    },
    {
      value: "600%",
      label: "Palantir stock growth",
      detail: "in the last two years, driven by its forward-deployed delivery model.",
    },
    {
      value: "$550M",
      label: "Wonderful raised",
      detail: "at a $5B valuation, an FDE company built to deliver complex agent systems.",
    },
    {
      value: "Vertical AI",
      label: "Harvey and Sierra",
      detail: "rely on FDEs to ship domain-specific agents inside enterprise accounts.",
    },
  ],
  credibility: {
    headline: "Most enterprise developers need to evolve to become FDEs.",
    lines: [
      "Having shipped 1,000+ production-grade agents in the last 12 months at Fortune 500s, at Lyzr AI we are seeing this firsthand.",
      "We built an internal, hands-on training curriculum that has helped us maintain zero churn and, more importantly, ship production-grade agents in under 8 weeks.",
      "Now we are bringing that curriculum, expanded into 100 mapped competencies across 50+ production tools, to the entire engineering community.",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Homepage narrative                                                        */
/* -------------------------------------------------------------------------- */

export const collectiveOrigin: { title: string; line: string }[] = [
  {
    title: "The role exists. The skill does not.",
    line: "Roles are surging across the enterprise market, but the skills to build production agents do not exist readily. Teams cannot hire fast enough.",
  },
  {
    title: "The job crosses the whole stack.",
    line: "The work spans models, retrieval, orchestration, security, and customer handover. The curriculum maps the exact tools used at every stage.",
  },
  {
    title: "It has to happen in the open.",
    line: "A certification you take online, paired with live community chapters you can walk into in your city. Real-world practice, zero gatekeeping.",
  },
];

export const partnerPitch = {
  eyebrow: "The working stack",
  title: "Built around the technology production teams use.",
  line: "The curriculum is built around the companies, tools and platforms behind the enterprise agent stack, mapped module by module, from frontier models to customer delivery.",
};

/* -------------------------------------------------------------------------- */
/*  Course page                                                               */
/* -------------------------------------------------------------------------- */

export const courseOutcomes: { title: string; line: string }[] = [
  {
    title: "Build for production",
    line: "Move from model behaviour and context engineering to agent architectures, integrations, evals and reliable deployment, never stopping at the demo.",
  },
  {
    title: "Clear the enterprise gates",
    line: "Design for permissions, identity, governance, audit, data residency, observability and the risk review every serious rollout has to pass.",
  },
  {
    title: "Master the working stack",
    line: "Work across 50+ tools and platforms, understanding where each fits and how the pieces connect inside a customer estate.",
  },
  {
    title: "Own the customer outcome",
    line: "Shadow the workflow, find the real requirement, qualify the use case, prove the ROI, hand over cleanly and earn the expansion.",
  },
];

export const deliveryFormat: { label: string; value: string; line: string }[] = [
  {
    label: "Format",
    value: "Self-paced, cohort-supported",
    line: "Work through the modules on your own schedule, with guided sessions and office hours running alongside.",
  },
  {
    label: "Pace",
    value: "10-12 weeks typical",
    line: "Roughly 5 hours a week for working professionals. Access does not expire, so you can go faster or slower.",
  },
  {
    label: "Practice",
    value: "Build in every phase",
    line: "Each phase ends in a hands-on build against enterprise-shaped constraints, not a quiz.",
  },
  {
    label: "Capstone",
    value: "Graded, end to end",
    line: "One full engagement simulation, scope, build, ship, hand over, reviewed against the certification rubric.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Career path                                                               */
/* -------------------------------------------------------------------------- */

export type CareerStop = { step: string; title: string; line: string };

export const careerPath: CareerStop[] = [
  { step: "Today", title: "Strong engineer, stalled demos", line: "You can build an agent. It never clears integration and review." },
  { step: "Enroll", title: "10 modules, 100 competencies", line: "The gates a production deployment actually has to pass." },
  { step: "Build", title: "A real system, reviewed", line: "Every module ends in shipped work, not a quiz." },
  { step: "Certify", title: "Graded capstone", line: "One full engagement, scope to handover, assessed end to end." },
  { step: "Deployed", title: "The person they trust", line: "You own agent systems inside the customer estate." },
];
