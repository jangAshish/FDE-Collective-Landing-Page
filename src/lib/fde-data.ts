export const marqueeLogos: { name: string; domain: string }[] = [
  { name: "Anthropic", domain: "anthropic.com" },
  { name: "OpenAI", domain: "openai.com" },
  { name: "Lyzr", domain: "lyzr.ai" },
  { name: "Neo4j", domain: "neo4j.com" },
  { name: "Qdrant", domain: "qdrant.tech" },
  { name: "Braintrust", domain: "braintrust.dev" },
  { name: "Okta", domain: "okta.com" },
  { name: "AWS", domain: "aws.amazon.com" },
  { name: "Databricks", domain: "databricks.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Accenture", domain: "accenture.com" },
];

export const proofPoints = [
  { claim: "Accenture says it is building the largest FDE capability in the services industry.", source: "Accenture careers page" },
  { claim: "OpenAI and Google are racing to hire for this exact role.", source: "The New Stack" },
  { claim: "The role now has its own Wikipedia page, a category that did not formally exist three years ago.", source: "Wikipedia" },
  { claim: "Palantir's forward-deployed model is now the reference point every major SI is measured against.", source: "Public reporting on Palantir's delivery model" },
];

export const proofStats: { value: number; suffix?: string; label: string }[] = [
  { value: 10, label: "Modules covering every gate a production deployment clears" },
  { value: 100, label: "Competencies mapped across the full FDE skill stack" },
  { value: 50, suffix: "+", label: "Tools and platforms used across the curriculum" },
];

export interface PersonaInfo {
  key: string;
  label: string;
  roleDescription: string;
  whatYouBring: string;
  theFdeEdge: string;
}

export const personas: PersonaInfo[] = [
  {
    key: "platform-engineer",
    label: "Platform Engineer",
    roleDescription:
      "Specializes in infrastructure, container orchestration, CI/CD pipelines, and enterprise-grade reliability at scale.",
    whatYouBring:
      "Deep expertise in Kubernetes, cloud infrastructure (AWS/GCP/Azure), observability, security policies, and production reliability.",
    theFdeEdge:
      "FDE bridges platform stability with agent runtime requirements—deploying LLM gateway routers, vector DB clusters, agent sandboxes, and enterprise IAM guardrails.",
  },
  {
    key: "solutions-architect",
    label: "Solutions Architect",
    roleDescription:
      "Designs end-to-end enterprise architectures, aligns technical capability with business drivers, and maps complex customer integrations.",
    whatYouBring:
      "Mastery of system design, enterprise protocols (OAuth2/SAML/RBAC), data governance, and high-level stakeholder translation.",
    theFdeEdge:
      "FDE takes architectural designs into live code—embedding multi-agent workflows, stateful memory layers, and real-time validation directly inside customer environments.",
  },
  {
    key: "software-engineer",
    label: "Software Engineer",
    roleDescription:
      "Writes clean production code, develops core business logic, builds robust APIs, and integrates backend services.",
    whatYouBring:
      "Strong fluency in Python/TypeScript, clean API patterns, database querying, testing suites, and algorithmic problem solving.",
    theFdeEdge:
      "FDE levels up from backend services to autonomous agent pipelines—mastering tool-calling protocols, agentic loops, evaluation harnesses, and customer-facing deployment.",
  },
];

export const levels = [
  { name: "Associate", line: "You can execute the core patterns with guidance and explain the decisions behind them." },
  { name: "Certified", line: "You can deliver the full pattern independently in a production context." },
  { name: "Lead", line: "You can design for a novel enterprise problem and mentor a delivery team through it." },
];

export const forYou = [
  "Comfortable with Python and APIs",
  "Has called an LLM API and built a prompt-based app",
  "Understands RAG and embeddings conceptually",
  "Has used git in a real project",
];

export const notYet = [
  "Has never called an API",
  "Does not yet know basic Python",
  "Has not worked with version control",
  "Looking for an introduction to programming rather than a production track",
];

export const readinessQuestions = [
  "You write Python comfortably without a tutorial open.",
  "You have called an LLM API directly, not only through a chat UI.",
  "You have shipped something that uses a prompt in production or in a real pilot.",
  "You can explain what an embedding is and when retrieval beats fine-tuning.",
  "You have built or debugged a RAG pipeline.",
  "You use git on real projects with other people.",
  "You have integrated a third-party API with authentication and error handling.",
  "You have worked inside an enterprise environment with security review.",
  "You have owned a system after it went live, not only during the build.",
  "You want a credential tied to production work, not lesson completions.",
];

export const partnerDomains: Record<string, string> = {
  "Anthropic": "anthropic.com",
  "OpenAI": "openai.com",
  "Hugging Face": "huggingface.co",
  "Cohere": "cohere.com",
  "Mistral AI": "mistral.ai",
  "Lyzr": "lyzr.ai",
  "LlamaIndex": "llamaindex.ai",
  "Qdrant": "qdrant.tech",
  "Elastic": "elastic.co",
  "Neo4j": "neo4j.com",
  "Composio": "composio.dev",
  "Mem0": "mem0.ai",
  "Temporal": "temporal.io",
  "CrewAI": "crewai.com",
  "Google": "google.com",
  "Modal": "modal.com",
  "Browserbase": "browserbase.com",
  "Braintrust": "braintrust.dev",
  "Arize Phoenix": "arize.com",
  "Langfuse": "langfuse.com",
  "Scale AI": "scale.com",
  "Guardrails AI": "guardrailsai.com",
  "Noma Security": "noma.security",
  "Repello": "repello.ai",
  "Okta": "okta.com",
  "SailPoint": "sailpoint.com",
  "Databricks": "databricks.com",
  "Snowflake": "snowflake.com",
  "Informatica": "informatica.com",
  "Collibra": "collibra.com",
  "Vanta": "vanta.com",
  "AWS": "aws.amazon.com",
  "HashiCorp": "hashicorp.com",
  "Datadog": "datadoghq.com",
  "PagerDuty": "pagerduty.com",
  "Salesforce": "salesforce.com",
  "ServiceNow": "servicenow.com",
  "ElevenLabs": "elevenlabs.io",
  "Twilio": "twilio.com",
  "OpenRouter": "openrouter.ai",
  "Celonis": "celonis.com",
  "Amplitude": "amplitude.com",
  "Accenture": "accenture.com",
  "Deloitte": "deloitte.com",
};

export const whyYouCards = [
  "A credential mapped to the tools enterprise teams already run, not a bootcamp badge.",
  "The role systems integrators are rebuilding their delivery model around.",
  "Shipped capstones as proof, work you can show, not lessons you completed.",
];

export const faqs = [
  { q: "What exactly do I get for $999?", a: "All 10 modules, 100 mapped competencies, hands-on work across 50+ tools and platforms, the graded capstone and certification. One-time payment, access does not expire." },
  { q: "How much time does it take?", a: "Most people finish in 10 to 12 weeks at around 5 hours a week. It is self-paced, so you can compress it or stretch it around delivery work." },
  { q: "What do I need to know before I start?", a: "Comfort with Python and APIs, having called an LLM API directly, a conceptual grasp of RAG and embeddings, and git on a real project. The readiness check on this page is the honest test." },
  { q: "Is this for students?", a: "No. It is built for working professionals already writing production code or running delivery who want to own enterprise agentic projects end to end." },
  { q: "Which tools and platforms will I work with?", a: "The curriculum maps 50 tools and platforms to the modules where they matter, from Anthropic, OpenAI and Lyzr to Neo4j, Qdrant, Braintrust, Okta, AWS, Databricks, Salesforce and more." },
  { q: "What is the certification worth?", a: "It is graded against a capstone engagement, not a quiz, and maps to the work enterprise delivery teams perform. You leave with work you can show at Associate, Certified or Lead level." },
  { q: "Can I get a refund?", a: "Yes. If the programme is not what you expected, write to us within 14 days of enrolling and we will refund you in full." },
];

/* -------------------------------------------------------------------------- */
/*  Skills wall: what a backend/full-stack engineer has vs what an FDE needs  */
/* -------------------------------------------------------------------------- */

export type SkillCell = { label: string; core: boolean };

export const skillWall: SkillCell[] = [
  { label: "APIs & REST", core: true },
  { label: "Databases", core: true },
  { label: "Data modelling", core: true },
  { label: "Cloud infra", core: true },
  { label: "Containers", core: true },
  { label: "CI/CD", core: true },
  { label: "Testing", core: true },
  { label: "Auth basics", core: true },
  { label: "Caching", core: true },
  { label: "Queues", core: true },
  { label: "Frontend", core: true },
  { label: "Git & review", core: true },

  { label: "Discovery & scoping", core: false },
  { label: "Use-case qualification", core: false },
  { label: "Model behaviour", core: false },
  { label: "Context engineering", core: false },
  { label: "Prompt architecture", core: false },
  { label: "Retrieval design", core: false },
  { label: "Knowledge graphs", core: false },
  { label: "Memory design", core: false },
  { label: "Agent orchestration", core: false },
  { label: "Multi-agent systems", core: false },
  { label: "Tool & MCP integration", core: false },
  { label: "Evals & grading", core: false },
  { label: "Guardrails", core: false },
  { label: "Red teaming", core: false },
  { label: "Identity & permissions", core: false },
  { label: "Governance & audit", core: false },
  { label: "Data residency", core: false },
  { label: "Agent observability", core: false },
  { label: "Cost & token control", core: false },
  { label: "Human-in-the-loop", core: false },
  { label: "Enterprise integration", core: false },
  { label: "Risk review", core: false },
  { label: "ROI proof", core: false },
  { label: "Handover & enablement", core: false },
  { label: "Account expansion", core: false },
];
