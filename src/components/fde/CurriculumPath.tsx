import { curriculumModules, curriculumPath } from "@/lib/curriculum-data";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

const titleFor = (number: string) =>
  curriculumModules.find((module) => module.number === number)?.title ?? "";

export function CurriculumPath() {
  return (
    <SectionShell id="path" className="bg-canvas-alt">
      <Reveal className="max-w-[760px]">
        <Eyebrow>The path</Eyebrow>
        <H2>Five stages. Ten modules. One deployment.</H2>
      </Reveal>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-5">
        {curriculumPath.map((stage, i) => (
          <Reveal as="li" key={stage.stage} delay={i * 0.05} className="bg-white p-6 md:p-7">
            <p className="font-mono text-[11px] font-medium text-gold-deep">0{i + 1}</p>
            <h3 className="mt-4 text-[19px] font-medium text-navy">{stage.stage}</h3>
            <p className="mt-2 text-[14px] leading-[1.55] text-ink-mid">{stage.line}</p>
            <div className="mt-5 flex flex-col gap-2">
              {stage.modules.map((number) => (
                <a
                  key={number}
                  href={`#module-${number}`}
                  className="group flex items-baseline gap-2 text-[13px] leading-[1.4] text-navy transition-colors hover:text-gold-deep"
                >
                  <span className="font-mono text-[11px] text-ink-low group-hover:text-gold-deep">
                    {number}
                  </span>
                  <span className="min-w-0">{titleFor(number)}</span>
                </a>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
