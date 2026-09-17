import { useState } from "react";
import { curriculumModules } from "@/lib/curriculum-data";
import { PartnerLogo } from "./PartnerLogo";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";
import { CheckCircle2, Terminal, Layers } from "lucide-react";

export function CurriculumShowcase() {
  const [activeWeek, setActiveWeek] = useState("01");
  const current = curriculumModules.find((m) => m.number === activeWeek) ?? curriculumModules[0];

  return (
    <SectionShell id="curriculum" className="bg-canvas-alt">
      <Reveal className="max-w-[850px]">
        <Eyebrow>10-Week Fellowship Curriculum</Eyebrow>
        <H2>Ten modules. Ten weeks.</H2>
      </Reveal>

      {/* Week Selector Tabs */}
      <Reveal delay={0.06} className="mt-10">
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none sm:grid sm:grid-cols-5 lg:grid-cols-10">
          {curriculumModules.map((module) => {
            const isActive = activeWeek === module.number;
            return (
              <button
                key={module.number}
                type="button"
                onClick={() => setActiveWeek(module.number)}
                className={`flex shrink-0 flex-col items-start rounded-card border-2 p-3 text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-black bg-white shadow-sm"
                    : "border-transparent bg-white/70 hover:border-black/20 hover:bg-white"
                }`}
              >
                <span className={`font-mono text-xs font-bold ${isActive ? "text-ter-600" : "text-gold-deep"}`}>
                  W{module.number}
                </span>
                <span className="mt-1.5 line-clamp-2 text-[13px] font-medium leading-[1.25] text-navy">
                  {module.title}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Selected Week Detail Card */}
      <Reveal delay={0.12} className="mt-6">
        <div className="rounded-card border border-line bg-white p-7 shadow-sm md:p-9">
          <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-navy px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Week {current.number} of 10
                </span>
                <span className="font-mono text-xs text-ink-mid uppercase tracking-wide">
                  {current.subtitle}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-2 text-base text-ink-mid italic">
                "{current.theme}"
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-line bg-canvas p-3">
              <Layers className="size-5 text-gold-deep shrink-0" />
              <div className="text-left">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-low">Focus Level</p>
                <p className="text-sm font-semibold text-navy">Production Delivery</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Core Competencies Learned */}
            <div>
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-navy">
                <CheckCircle2 className="size-4 text-ship" />
                Key Competencies Cleared (10 Mapped)
              </h4>
              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {current.competencies.map((comp) => (
                  <div
                    key={comp.name}
                    className="flex items-center gap-2.5 rounded-lg border border-line/70 bg-canvas/40 px-3.5 py-3 transition-colors hover:border-navy/30 hover:bg-white"
                  >
                    <span className="size-1.5 rounded-full bg-ter-600 shrink-0" />
                    <p className="text-[14px] font-medium text-navy leading-snug">{comp.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Live Build */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-navy">
                  <Terminal className="size-4 text-ter-600" />
                  Tools Mastered This Week
                </h4>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {current.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 rounded-md border border-line bg-canvas px-3 py-1.5"
                    >
                      <PartnerLogo name={tool.name} domain={tool.domain} className="h-4 w-auto" />
                      <span className="text-[13px] font-medium text-navy">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gold-deep/20 bg-gold/5 p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep">
                  Weekly Live Build Project
                </p>
                <p className="mt-2 text-[14px] font-medium text-navy">
                  Build and test an end-to-end {current.title.toLowerCase()} module conforming to enterprise SLAs, token latency budgets, and security gates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
