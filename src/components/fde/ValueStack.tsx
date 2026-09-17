import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";
import { DollarSign, MessageSquareCode, Award, Briefcase, PartyPopper } from "lucide-react";

export const valuePillars = [
  {
    icon: DollarSign,
    badge: "$25,000+ Value",
    title: "AI Tool & Cloud Credits",
    desc: "Production credits from frontier labs, vector DBs, and infra partners (OpenAI, Anthropic, AWS, Neo4j, Qdrant, Braintrust) so you build with real resources.",
  },
  {
    icon: MessageSquareCode,
    badge: "Direct Access",
    title: "Weekly AMAs & Live Build Clinics",
    desc: "Interactive fireside sessions with engineers taking agents into customer production. Bring real code, debug edge cases, and inspect live architectures.",
  },
  {
    icon: Award,
    badge: "Accredited",
    title: "Production FDE Certification",
    desc: "Rigorous certification assessed on shipped capstone architecture and enterprise security gates—not passive video completion.",
  },
  {
    icon: Briefcase,
    badge: "Career Fast-Track",
    title: "Lyzr & Enterprise Interview Pipeline",
    desc: "Top performers get fast-tracked into technical interview rounds at Lyzr and enterprise hiring partners building out dedicated FDE teams.",
  },
  {
    icon: PartyPopper,
    badge: "In-Person",
    title: "Demo Day & Bengaluru Graduation",
    desc: "Showcase your capstone system to enterprise leaders, network with hiring managers, and celebrate at our in-person cohort graduation party in Bengaluru.",
  },
];

export function ValueStack() {
  return (
    <SectionShell id="valuestack" className="bg-canvas-alt">
      <Reveal className="max-w-[850px]">
        <Eyebrow>The Fellowship Value Stack</Eyebrow>
        <H2>Everything you need to become the engineer enterprises hire first.</H2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {valuePillars.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-card border border-line bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ter-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-mid">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
