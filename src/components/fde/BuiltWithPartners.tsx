import { curriculumModules } from "@/lib/curriculum-data";
import { PartnerLogo } from "./PartnerLogo";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function BuiltWithPartners({ course = false }: { course?: boolean }) {
  return (
    <SectionShell id="partners" className="bg-canvas-alt">
      <Reveal className="max-w-[850px]">
        <Eyebrow>{course ? "The working stack" : "Built around the working stack"}</Eyebrow>
        <H2>{course ? "Fifty tools. Each one placed where it matters." : "Learn the tools behind production agents, not a vendor slideshow."}</H2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {curriculumModules.map((module, i) => (
          <Reveal key={module.number} delay={Math.min(i, 5) * 0.04}>
            <div className="h-full rounded-card border border-line bg-white p-5 md:p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] font-medium text-gold-deep">{module.number}</span>
                <h3 className="text-[15px] font-medium text-navy">{module.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                {module.tools.map((tool) => (
                  <div
                    key={tool.name}
                    title={`${tool.name}: ${tool.coverage}`}
                    className="flex min-h-7 items-center gap-2 rounded-md border border-line/60 bg-canvas/60 px-2.5 py-1"
                  >
                    <PartnerLogo name={tool.name} domain={tool.domain} className="h-4 w-auto" />
                    <span className="text-[13px] font-medium text-navy">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
