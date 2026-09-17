import { useState } from "react";
import { ChevronDown, CircleDot } from "lucide-react";
import { curriculumModules } from "@/lib/curriculum-data";
import { PartnerLogo } from "./PartnerLogo";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

const accents = [
  "border-t-foundations text-foundations",
  "border-t-build text-build",
  "border-t-gold text-gold-deep",
  "border-t-ship text-ship",
  "border-t-deliver text-deliver",
  "border-t-gold-deep text-gold-deep",
  "border-t-foundations text-foundations",
  "border-t-build text-build",
  "border-t-harden text-harden",
  "border-t-craft text-craft",
];

export function ModuleJourney() {
  const [open, setOpen] = useState("01");

  return (
    <SectionShell id="curriculum" className="bg-canvas">
      <Reveal className="max-w-[860px]">
        <Eyebrow>The complete curriculum</Eyebrow>
        <H2>Ten gates between a model call and a system the customer trusts.</H2>
        <p className="mt-5 text-lead leading-[1.6] text-ink-mid">
          Open a module for its ten competencies and the tools you work with.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <nav aria-label="Curriculum modules" className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
          {curriculumModules.map((module, i) => (
            <a
              key={module.number}
              href={`#module-${module.number}`}
              onClick={() => setOpen(module.number)}
              aria-label={`Go to module ${module.number}: ${module.title}`}
              className={`group rounded-card border border-line bg-white p-3 transition-colors hover:border-navy/30 ${open === module.number ? "border-navy" : ""}`}
            >
              <span className={`font-mono text-[12px] font-medium ${accents[i]?.split(" ")[1] ?? "text-gold-deep"}`}>
                {module.number}
              </span>
              <span className="mt-2 block text-[12px] font-medium leading-[1.25] text-navy">
                {module.title}
              </span>
            </a>
          ))}
        </nav>
      </Reveal>

      <div className="mt-12 space-y-5">
        {curriculumModules.map((module, moduleIndex) => {
          const isOpen = open === module.number;
          const accent = accents[moduleIndex] ?? "border-t-gold text-gold-deep";
          const accentText = accent.split(" ")[1] ?? "text-gold-deep";
          return (
            <Reveal key={module.number}>
              <article id={`module-${module.number}`} className={`scroll-mt-28 overflow-hidden rounded-card border border-line border-t-4 bg-white ${accent.split(" ")[0]}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`module-panel-${module.number}`}
                  onClick={() => setOpen(isOpen ? "" : module.number)}
                  className="grid w-full gap-5 p-6 text-left md:grid-cols-[72px_minmax(0,1fr)_auto] md:items-center md:p-8"
                >
                  <span className={`font-mono text-[1.75rem] font-medium ${accentText}`}>{module.number}</span>
                  <span>
                    <span className="block text-h3-m font-medium text-navy md:text-h3">{module.title}</span>
                    <span className="mt-1 block text-[15px] text-ink-mid">{module.subtitle}</span>
                    <span className="mt-3 block max-w-[760px] text-[15px] leading-[1.55] text-ink-low">{module.theme}</span>
                  </span>
                  <span className="flex items-center gap-3 justify-self-start md:justify-self-end">
                    <span className="rounded-tag border border-line px-3 py-1 font-mono text-[11px] font-medium uppercase text-ink-low">10 competencies</span>
                    <ChevronDown className={`size-5 text-ink-low transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>

                {isOpen ? (
                  <div id={`module-panel-${module.number}`} className="border-t border-line bg-canvas-alt/55 px-6 py-7 md:px-8 md:py-9">
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
                      <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
                        {module.competencies.map((competency, i) => (
                          <li key={competency.name} className="bg-white p-4">
                            <div className="flex items-center gap-3">
                              <span className={`font-mono text-[11px] font-medium ${accentText}`}>{String(i + 1).padStart(2, "0")}</span>
                              <h4 className="text-[14px] font-medium leading-[1.35] text-navy">{competency.name}</h4>
                            </div>
                          </li>
                        ))}
                      </ol>

                      <aside>
                        <p className="text-eyebrow text-ink-low">Tools in this module</p>
                        <div className="mt-4 space-y-3">
                          {module.tools.map((tool) => (
                            <div key={tool.name} className="rounded-card border border-line bg-white p-4">
                              <div className="flex min-h-7 items-center gap-3">
                                <PartnerLogo name={tool.name} domain={tool.domain} className="h-5" />
                                <span className="sr-only">{tool.name}</span>
                              </div>
                              <p className="mt-3 text-[12px] font-medium text-navy">{tool.category}</p>
                              <p className="mt-1 text-[12px] leading-[1.45] text-ink-low">{tool.coverage}</p>
                            </div>
                          ))}
                        </div>
                      </aside>
                    </div>
                    <div className="mt-7 flex items-start gap-3 border-t border-line pt-6">
                      <CircleDot className={`mt-0.5 size-4 shrink-0 ${accentText}`} />
                      <p className="text-[14px] leading-[1.6] text-ink-mid"><strong className="font-medium text-navy">Why this module matters:</strong> {module.theme}</p>
                    </div>
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
