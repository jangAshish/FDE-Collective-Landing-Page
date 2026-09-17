export type CurriculumCompetency = { name: string; why: string };
export type CurriculumTool = { name: string; category: string; domain: string; coverage: string };
export type CurriculumModule = { number: string; title: string; subtitle: string; theme: string; competencies: CurriculumCompetency[]; tools: CurriculumTool[] };

export const curriculumModules: CurriculumModule[] = [
  {
    "number": "01",
    "title": "Agent Foundations",
    "subtitle": "Model behaviour, prompting and context",
    "theme": "Every failure downstream traces back to a model or context decision made here.",
    "competencies": [
      {
        "name": "LLM behaviour, tokens & context windows",
        "why": "Lets you explain why an agent failed instead of guessing in front of the customer."
      },
      {
        "name": "Model landscape & selection framework",
        "why": "Customers ask 'why this model' in every architecture review you will sit in."
      },
      {
        "name": "Reasoning models & thinking budgets",
        "why": "Reasoning is a cost lever; leaving it on by default blows the budget at scale."
      },
      {
        "name": "Reasoning & planning patterns (ReAct, CoT, Reflexion)",
        "why": "The shared vocabulary behind every framework and platform you will be handed."
      },
      {
        "name": "System prompts & enterprise persona design",
        "why": "Tone, scope and refusal behaviour become contractual terms in regulated rollouts."
      },
      {
        "name": "Structured outputs, schema enforcement & function calling",
        "why": "Downstream enterprise systems need typed, validated JSON, never prose."
      },
      {
        "name": "Context engineering: budgeting, compaction & pruning",
        "why": "The single biggest driver of both cost and quality regressions in production."
      },
      {
        "name": "Grounding, citations & source attribution",
        "why": "Enterprise answers must be traceable to a source document or they get rejected."
      },
      {
        "name": "Prompt optimisation, versioning & rollout control",
        "why": "Prompts are code; unversioned changes silently break live customer workflows."
      },
      {
        "name": "Multilingual & regional model choices",
        "why": "Global rollouts fail on language and script coverage long before they fail on accuracy."
      }
    ],
    "tools": [
      {
        "name": "Anthropic",
        "category": "Frontier lab",
        "domain": "anthropic.com",
        "coverage": "Prompting, context engineering, reasoning"
      },
      {
        "name": "OpenAI",
        "category": "Frontier lab",
        "domain": "openai.com",
        "coverage": "Structured outputs, function calling"
      },
      {
        "name": "Hugging Face",
        "category": "Open-model hub",
        "domain": "huggingface.co",
        "coverage": "Model landscape & open weights"
      },
      {
        "name": "Cohere",
        "category": "Embeddings & grounding",
        "domain": "cohere.com",
        "coverage": "Grounding, citations, multilingual"
      },
      {
        "name": "Mistral AI",
        "category": "Frontier lab",
        "domain": "mistral.ai",
        "coverage": "Open-weight & regional models"
      }
    ]
  },
  {
    "number": "02",
    "title": "Knowledge & Retrieval",
    "subtitle": "Making enterprise data answerable",
    "theme": "Most enterprise pilots fail on retrieval quality, not model quality.",
    "competencies": [
      {
        "name": "Ingestion, parsing & layout-aware extraction",
        "why": "Bad chunking is the most common root cause of a failed enterprise pilot."
      },
      {
        "name": "Embeddings selection & evaluation",
        "why": "Embedding choice quietly sets the ceiling on how good retrieval can ever get."
      },
      {
        "name": "Vector databases & index tuning (HNSW)",
        "why": "You will size, tune and cost the store against the customer's real corpus."
      },
      {
        "name": "Hybrid search, reranking & retrieval quality",
        "why": "Pure vector search underperforms badly on enterprise jargon, codes and IDs."
      },
      {
        "name": "Advanced RAG: query rewriting, routing & fusion",
        "why": "Ambiguous and multi-hop questions are what real users actually type."
      },
      {
        "name": "Agentic RAG end to end",
        "why": "Turns retrieval from a lookup into something that plans, verifies and retries."
      },
      {
        "name": "Permissions-aware retrieval & document ACLs",
        "why": "Surfacing one document a user cannot open ends the deployment immediately."
      },
      {
        "name": "OCR & document intelligence at scale",
        "why": "Scanned PDFs, forms and tables are the default enterprise input, not clean text."
      },
      {
        "name": "Knowledge graphs & GraphRAG",
        "why": "Relationship questions need a graph; a chunk store answers them confidently wrong."
      },
      {
        "name": "Knowledge freshness, sync & re-indexing",
        "why": "A stale knowledge base fails silently weeks after everyone declared success."
      }
    ],
    "tools": [
      {
        "name": "Lyzr",
        "category": "Agent platform",
        "domain": "lyzr.ai",
        "coverage": "Knowledge base & agentic RAG"
      },
      {
        "name": "LlamaIndex",
        "category": "Document processing",
        "domain": "llamaindex.ai",
        "coverage": "Parsing & layout-aware extraction"
      },
      {
        "name": "Qdrant",
        "category": "Vector DB",
        "domain": "qdrant.tech",
        "coverage": "Vector storage & index tuning"
      },
      {
        "name": "Elastic",
        "category": "Search platform",
        "domain": "elastic.co",
        "coverage": "Hybrid search & reranking"
      },
      {
        "name": "Neo4j",
        "category": "Graph DB",
        "domain": "neo4j.com",
        "coverage": "Knowledge graphs & GraphRAG"
      }
    ]
  },
  {
    "number": "03",
    "title": "Agent Architecture",
    "subtitle": "Designing agents that survive contact",
    "theme": "The difference between a demo that impresses and a system that runs.",
    "competencies": [
      {
        "name": "The agent loop: perceive, reason, act, observe",
        "why": "The mental model every platform and framework assumes you already hold."
      },
      {
        "name": "Autonomy levels: agent vs deterministic workflow",
        "why": "Most enterprise use cases need a deterministic workflow with one model call."
      },
      {
        "name": "Tool-calling fundamentals & schema design",
        "why": "Poor tool descriptions cause more production failures than poor prompts do."
      },
      {
        "name": "MCP servers & clients",
        "why": "The emerging standard way agents reach the customer's existing systems."
      },
      {
        "name": "Custom tools, tool auth & scoped access",
        "why": "Unbounded tool access will not survive the customer's security review."
      },
      {
        "name": "Memory types & architecture (episodic, semantic, working)",
        "why": "Memory is what makes someone open the agent a second time."
      },
      {
        "name": "Durable workflows & durable-execution infrastructure",
        "why": "Enterprise processes run for days and must survive restarts and outages."
      },
      {
        "name": "Human-in-the-loop, approval gates & bounded autonomy",
        "why": "Autonomy is granted incrementally; nobody approves full autonomy on day one."
      },
      {
        "name": "Failure modes, retries & graceful degradation",
        "why": "You design for the model being wrong, slow or entirely unavailable."
      },
      {
        "name": "Subagents, skills & code-mode patterns",
        "why": "How to decompose work without exploding latency and token cost."
      }
    ],
    "tools": [
      {
        "name": "Lyzr",
        "category": "Agent platform",
        "domain": "lyzr.ai",
        "coverage": "Agent design, workflows, autonomy"
      },
      {
        "name": "Anthropic",
        "category": "Protocol author",
        "domain": "anthropic.com",
        "coverage": "MCP, subagents & skills"
      },
      {
        "name": "Composio",
        "category": "Tool integration",
        "domain": "composio.dev",
        "coverage": "Custom tools & scoped auth"
      },
      {
        "name": "Mem0",
        "category": "Agent memory",
        "domain": "mem0.ai",
        "coverage": "Memory architecture & retrieval"
      },
      {
        "name": "Temporal",
        "category": "Durable execution",
        "domain": "temporal.io",
        "coverage": "Durable state, retries, recovery"
      }
    ]
  },
  {
    "number": "04",
    "title": "Multi-Agent & Integration",
    "subtitle": "Systems of agents, wired into systems of record",
    "theme": "Enterprise value comes from agents that reach real systems, not chat windows.",
    "competencies": [
      {
        "name": "Multi-agent topologies: supervisor, router, swarm",
        "why": "The default structure once a use case outgrows a single task."
      },
      {
        "name": "Role-based crews, delegation & coordination",
        "why": "Maps agents onto the customer's actual team and approval structure."
      },
      {
        "name": "Parallelisation, fan-out & sandboxed execution",
        "why": "The main latency lever once you are processing large document or record sets."
      },
      {
        "name": "Agent-to-agent interoperability (A2A)",
        "why": "Enterprises will run agents from four vendors and expect them to interoperate."
      },
      {
        "name": "Agent-to-human handoff design",
        "why": "Escalation quality decides whether the business trusts the deployment."
      },
      {
        "name": "SaaS connector engineering & auth flows",
        "why": "Roughly sixty percent of any real deployment is integration work."
      },
      {
        "name": "Agent gateway: quotas, rate limits & fallback",
        "why": "Agents generate bursty traffic that breaks the customer's upstream systems."
      },
      {
        "name": "Event-driven & scheduled agent triggers",
        "why": "Real work is triggered by business events, not by someone opening a chat box."
      },
      {
        "name": "Browser automation for no-API systems",
        "why": "The system that matters most in an enterprise often has no API at all."
      },
      {
        "name": "Live web retrieval & search as an agent tool",
        "why": "Internal knowledge alone cannot answer market, vendor or regulatory questions."
      }
    ],
    "tools": [
      {
        "name": "Lyzr",
        "category": "Agent platform",
        "domain": "lyzr.ai",
        "coverage": "Orchestration & agent gateway"
      },
      {
        "name": "CrewAI",
        "category": "Multi-agent orchestration",
        "domain": "crewai.com",
        "coverage": "Crews, roles & topologies"
      },
      {
        "name": "Google",
        "category": "Protocol author",
        "domain": "google.com",
        "coverage": "A2A interoperability"
      },
      {
        "name": "Modal",
        "category": "Sandboxed execution",
        "domain": "modal.com",
        "coverage": "Parallel & sandboxed runs"
      },
      {
        "name": "Browserbase",
        "category": "Browser automation",
        "domain": "browserbase.com",
        "coverage": "No-API legacy systems"
      }
    ]
  },
  {
    "number": "05",
    "title": "Evaluation & Quality",
    "subtitle": "Proving it works before the customer does",
    "theme": "Evals are the language that connects business requirements to engineering.",
    "competencies": [
      {
        "name": "Turning requirements into eval criteria",
        "why": "The skill that turns a pilot into a signed expansion."
      },
      {
        "name": "Golden datasets, test-set design & metrics",
        "why": "You cannot improve what nobody has written down and pinned to a number."
      },
      {
        "name": "LLM-as-judge & rubric design",
        "why": "Scales review far past what the customer's team can read by hand."
      },
      {
        "name": "Trajectory & component-level evaluation",
        "why": "Final-answer scoring hides exactly where multi-step agents actually break."
      },
      {
        "name": "Regression testing & CI gates for agents",
        "why": "Prompt and model changes must not silently degrade a live customer workflow."
      },
      {
        "name": "Online eval, A/B testing & feature flags",
        "why": "Offline evals never fully predict how real users will behave."
      },
      {
        "name": "Human review, annotation ops & feedback loops",
        "why": "Someone has to read the outputs, systematically and on a cadence."
      },
      {
        "name": "Querying trace & eval data at scale",
        "why": "Debugging a month of production traffic needs real query tooling, not scrolling."
      },
      {
        "name": "Acceptance criteria & customer sign-off",
        "why": "Define what 'working' means in writing before you build anything."
      },
      {
        "name": "Drift, quality regression & production feedback",
        "why": "Agents degrade quietly over months as data, usage and models shift underneath."
      }
    ],
    "tools": [
      {
        "name": "Braintrust",
        "category": "Eval platform",
        "domain": "braintrust.dev",
        "coverage": "Eval design & LLM-as-judge"
      },
      {
        "name": "Arize Phoenix",
        "category": "Eval & observability",
        "domain": "arize.com",
        "coverage": "Trajectory & drift evaluation"
      },
      {
        "name": "Langfuse",
        "category": "Eval & observability",
        "domain": "langfuse.com",
        "coverage": "Tracing & production feedback"
      },
      {
        "name": "Scale AI",
        "category": "Data labelling",
        "domain": "scale.com",
        "coverage": "Golden datasets & annotation"
      },
      {
        "name": "Lyzr",
        "category": "Agent platform",
        "domain": "lyzr.ai",
        "coverage": "Built-in evals & CI gates"
      }
    ]
  },
  {
    "number": "06",
    "title": "Safety & Security",
    "subtitle": "Passing the risk review",
    "theme": "The gate every enterprise deployment must clear before it goes live.",
    "competencies": [
      {
        "name": "Guardrail types & content safety",
        "why": "The first artifact the customer's risk team will ask you to show."
      },
      {
        "name": "Prompt-injection & tool-poisoning defences",
        "why": "An agent with tools is an attack surface, not just a feature."
      },
      {
        "name": "Automated adversarial red-teaming",
        "why": "Find the failure before the customer's auditor or a journalist does."
      },
      {
        "name": "Responsible AI, bias & fairness",
        "why": "Required evidence in HR, lending, insurance and public-sector deployments."
      },
      {
        "name": "Refusal, fallback & safe-failure design",
        "why": "What the agent does when it should not act is a design decision you own."
      },
      {
        "name": "Enterprise auth, provisioning & SSO",
        "why": "An agent needs an identity before it needs a prompt."
      },
      {
        "name": "Authorization (RBAC/ABAC) & multi-tenancy",
        "why": "Least privilege is the thing the security team will actually audit."
      },
      {
        "name": "Non-human identity & agent credential lifecycle",
        "why": "Agent credentials outlive projects and become the forgotten standing risk."
      },
      {
        "name": "Supply-chain, secrets & network isolation",
        "why": "Hardcoded keys fail the security review instantly and memorably."
      },
      {
        "name": "AI threat modelling (OWASP LLM Top 10)",
        "why": "Gives you shared vocabulary with the customer's security team."
      }
    ],
    "tools": [
      {
        "name": "Guardrails AI",
        "category": "Guardrails",
        "domain": "guardrailsai.com",
        "coverage": "Content safety & validation"
      },
      {
        "name": "Noma Security",
        "category": "AI security posture",
        "domain": "noma.security",
        "coverage": "Injection & tool-poisoning defence"
      },
      {
        "name": "Repello",
        "category": "AI red-teaming",
        "domain": "repello.ai",
        "coverage": "Adversarial testing & threat models"
      },
      {
        "name": "Okta",
        "category": "Identity",
        "domain": "okta.com",
        "coverage": "SSO, RBAC & multi-tenancy"
      },
      {
        "name": "SailPoint",
        "category": "Identity governance",
        "domain": "sailpoint.com",
        "coverage": "Non-human identity lifecycle"
      }
    ]
  },
  {
    "number": "07",
    "title": "Data & Governance",
    "subtitle": "Where the data comes from and who signs it off",
    "theme": "Agents are only as good as the data they can legally and technically reach.",
    "competencies": [
      {
        "name": "Source system discovery & data mapping",
        "why": "Find where the data really lives, including the spreadsheet nobody admits to."
      },
      {
        "name": "Data readiness, warehouses & lakehouses",
        "why": "Agents need clean, joined data far more often than they need a better model."
      },
      {
        "name": "Structured data + agents (text-to-SQL and beyond)",
        "why": "Most enterprise questions are answered from tables, not from documents."
      },
      {
        "name": "Streaming & event-driven data for agents",
        "why": "Real-time use cases are triggered by events, not by a nightly schedule."
      },
      {
        "name": "PII discovery, masking & tokenisation",
        "why": "Most enterprise AI projects stall here, not on model quality."
      },
      {
        "name": "Data quality, lineage & catalogue",
        "why": "You must be able to prove where any given answer came from."
      },
      {
        "name": "Data residency, sovereignty & regional deployment",
        "why": "Where tokens are processed is a contractual term, not an engineering preference."
      },
      {
        "name": "AI governance frameworks & compliance-by-design",
        "why": "The vocabulary you need to survive the customer's risk committee."
      },
      {
        "name": "Model, prompt & agent registries",
        "why": "Every deployed agent needs a named owner and a record that outlives you."
      },
      {
        "name": "Audit evidence, logging & explainability packs",
        "why": "What you hand the auditor six months after go-live."
      }
    ],
    "tools": [
      {
        "name": "Databricks",
        "category": "Data platform",
        "domain": "databricks.com",
        "coverage": "Lakehouse & data readiness"
      },
      {
        "name": "Snowflake",
        "category": "Data platform",
        "domain": "snowflake.com",
        "coverage": "Warehouse & text-to-SQL"
      },
      {
        "name": "Informatica",
        "category": "Master data management",
        "domain": "informatica.com",
        "coverage": "Discovery & data mapping"
      },
      {
        "name": "Collibra",
        "category": "Data governance",
        "domain": "collibra.com",
        "coverage": "Lineage, quality & catalogue"
      },
      {
        "name": "Vanta",
        "category": "Compliance automation",
        "domain": "vanta.com",
        "coverage": "Governance & compliance-by-design"
      }
    ]
  },
  {
    "number": "08",
    "title": "Deployment & Operations",
    "subtitle": "Running it in someone else's estate",
    "theme": "You deploy into the customer's environment, under their guardrails, on their pager.",
    "competencies": [
      {
        "name": "Cloud landing zones, environments & promotion",
        "why": "You deploy into their account, under their guardrails, not yours."
      },
      {
        "name": "Containers, Kubernetes & runtime",
        "why": "The default enterprise runtime for anything that runs longer than a request."
      },
      {
        "name": "Infrastructure-as-code for agent deployments",
        "why": "Dev to staging to production has to be reproducible on demand."
      },
      {
        "name": "CI/CD & agent lifecycle management",
        "why": "Agents ship on the same rails as the rest of the customer's estate."
      },
      {
        "name": "Self-hosted, VPC, on-prem & air-gapped deployment",
        "why": "Banking, defence and healthcare will require it, not politely request it."
      },
      {
        "name": "Release strategy: canary, staged rollout & flags",
        "why": "Never switch an enterprise workflow over to an agent in a single step."
      },
      {
        "name": "Tracing fundamentals & OpenTelemetry instrumentation",
        "why": "You cannot debug a multi-agent failure without traces."
      },
      {
        "name": "Observability dashboards for business stakeholders",
        "why": "The sponsor needs to see business value, not spans and p95 latency."
      },
      {
        "name": "Incident response, on-call & runbooks",
        "why": "When it misbehaves at 2am, someone follows the runbook you wrote."
      },
      {
        "name": "SLOs, latency budgets & reliability targets",
        "why": "Agree the numbers before go-live, not after the first complaint."
      }
    ],
    "tools": [
      {
        "name": "Lyzr",
        "category": "Agent platform",
        "domain": "lyzr.ai",
        "coverage": "Agent lifecycle & CI/CD"
      },
      {
        "name": "AWS",
        "category": "Hyperscaler",
        "domain": "aws.amazon.com",
        "coverage": "Landing zones & VPC deployment"
      },
      {
        "name": "HashiCorp",
        "category": "Infra-as-code",
        "domain": "hashicorp.com",
        "coverage": "Terraform & environment promotion"
      },
      {
        "name": "Datadog",
        "category": "Observability / APM",
        "domain": "datadoghq.com",
        "coverage": "Tracing, monitoring, SLOs"
      },
      {
        "name": "PagerDuty",
        "category": "Incident management",
        "domain": "pagerduty.com",
        "coverage": "On-call & incident response"
      }
    ]
  },
  {
    "number": "09",
    "title": "Enterprise Systems & Economics",
    "subtitle": "Integration surface and unit cost",
    "theme": "Adoption happens where people already work, and renewal happens on unit cost.",
    "competencies": [
      {
        "name": "CRM, ERP & ITSM integration",
        "why": "The highest-value first use cases all live inside these systems."
      },
      {
        "name": "Collaboration surfaces & embedded agents",
        "why": "Adoption happens where people already work, not in a new tab."
      },
      {
        "name": "Voice stack, conversation design & channels",
        "why": "Voice is the fastest-growing enterprise agent category and the least understood."
      },
      {
        "name": "Voice, telephony & contact-centre integration",
        "why": "A voice agent that cannot join a real call is a demo, not a deployment."
      },
      {
        "name": "Cost & latency economics of models",
        "why": "Cost per resolved case is the number the CFO will ask you for."
      },
      {
        "name": "Model gateway routing, fallback & cost controls",
        "why": "Routing the easy majority to a cheaper model is what funds the rollout."
      },
      {
        "name": "Fast-inference serving & latency optimisation",
        "why": "Perceived speed drives adoption more than accuracy does."
      },
      {
        "name": "Fine-tuning: when, dataset prep, technique & serving",
        "why": "Knowing when not to fine-tune saves the customer months."
      },
      {
        "name": "FinOps, chargeback & cost attribution",
        "why": "Enterprises need per-team cost attribution before they will scale spend."
      },
      {
        "name": "Scaling & infrastructure for production agents",
        "why": "Pilot traffic looks nothing like traffic the week after rollout."
      }
    ],
    "tools": [
      {
        "name": "Salesforce",
        "category": "Enterprise SaaS",
        "domain": "salesforce.com",
        "coverage": "CRM & embedded agent surfaces"
      },
      {
        "name": "ServiceNow",
        "category": "Enterprise workflow",
        "domain": "servicenow.com",
        "coverage": "ITSM & enterprise workflow"
      },
      {
        "name": "ElevenLabs",
        "category": "Voice AI",
        "domain": "elevenlabs.io",
        "coverage": "Voice stack & conversation design"
      },
      {
        "name": "Twilio",
        "category": "Telephony infra",
        "domain": "twilio.com",
        "coverage": "Telephony & contact centre"
      },
      {
        "name": "OpenRouter",
        "category": "Model gateway",
        "domain": "openrouter.ai",
        "coverage": "Routing, fallback & cost control"
      }
    ]
  },
  {
    "number": "10",
    "title": "Discovery, Delivery & Ownership",
    "subtitle": "The part that makes you an FDE",
    "theme": "Everything above is buildable. This is what makes you the person who ships it.",
    "competencies": [
      {
        "name": "Workflow shadowing & process observation",
        "why": "Watch how the work is actually done, not how it is documented."
      },
      {
        "name": "Extracting the real requirement",
        "why": "The defining FDE skill: the stated ask is rarely the real requirement."
      },
      {
        "name": "Use-case qualification & prioritisation",
        "why": "Pick the wedge that proves value in weeks rather than quarters."
      },
      {
        "name": "Feasibility, data readiness & access-scoped data",
        "why": "Decide fast whether the data can actually support the promise being made."
      },
      {
        "name": "Baselines, value hypothesis & ROI modelling",
        "why": "If you did not measure before, you cannot claim the value after."
      },
      {
        "name": "Competing platform & ecosystem literacy",
        "why": "You are being compared to three other vendors and an internal team."
      },
      {
        "name": "Running a customer bootcamp on live data",
        "why": "The highest-leverage artifact an FDE owns, for delivery and for sales."
      },
      {
        "name": "Scoping to a shippable slice & demo front-ends",
        "why": "Scope discipline is what makes the go-live date survivable."
      },
      {
        "name": "Operating inside an SI/GSI delivery model",
        "why": "Most enterprise work reaches you through a partner's account team."
      },
      {
        "name": "Handover, run-state, SLAs & expansion",
        "why": "Handover quality decides whether you are invited back for the second use case."
      }
    ],
    "tools": [
      {
        "name": "Celonis",
        "category": "Process mining",
        "domain": "celonis.com",
        "coverage": "Workflow shadowing & process data"
      },
      {
        "name": "Amplitude",
        "category": "Product analytics",
        "domain": "amplitude.com",
        "coverage": "Baselines & value measurement"
      },
      {
        "name": "Accenture",
        "category": "SI/GSI co-delivery",
        "domain": "accenture.com",
        "coverage": "Delivery model & scoping"
      },
      {
        "name": "Deloitte",
        "category": "SI/GSI co-delivery",
        "domain": "deloitte.com",
        "coverage": "Qualification & prioritisation"
      },
      {
        "name": "Lyzr",
        "category": "Agent platform",
        "domain": "lyzr.ai",
        "coverage": "Bootcamps, demos & handover"
      }
    ]
  }
];

export const curriculumStats = [
  { value: "100", label: "competencies mapped end to end" },
  { value: "10", label: "modules, each a production gate" },
  { value: "50+", label: "tools and platforms used hands-on" },
] as const;

export const deliveryProgression = ["Scope", "Build", "Harden", "Deploy", "Own"] as const;

export const curriculumPillars = [
  { title: "Built for production", line: "Deployments, not demos" },
  { title: "Enterprise grade", line: "Security, governance, audit" },
  { title: "Partner backed", line: "Best-in-class tools per module" },
  { title: "Customer facing", line: "Discovery through handover" },
] as const;

export const curriculumToolCount = curriculumModules.reduce((total, module) => total + module.tools.length, 0);

export type CurriculumStage = { stage: string; modules: string[]; line: string };

export const curriculumPath: CurriculumStage[] = [
  { stage: "Scope", modules: ["10"], line: "Find the workflow, qualify the value, agree what done means." },
  { stage: "Build", modules: ["01", "02", "03", "04"], line: "Model behaviour, retrieval, architecture and integrations." },
  { stage: "Harden", modules: ["05", "06", "07"], line: "Evals, safety, identity and governance the review will test." },
  { stage: "Deploy", modules: ["08"], line: "Promote into the customer estate and run it." },
  { stage: "Own", modules: ["09"], line: "Prove the economics, hand over, earn the expansion." },
];
