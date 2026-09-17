import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { careerPath } from "@/lib/collective-data";
import { buttonStyles, Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function CareerPath() {
  return (
    <SectionShell id="path" className="bg-canvas">
      <Reveal className="max-w-[760px]">
        <Eyebrow>The path</Eyebrow>
        <H2>From where you are to the person who ships it.</H2>
      </Reveal>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-5">
        {careerPath.map((stop, i) => (
          <Reveal as="li" key={stop.step} delay={i * 0.05} className="relative bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-medium uppercase text-gold-deep">
                {stop.step}
              </span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              {i < careerPath.length - 1 ? (
                <ArrowRight className="size-3.5 shrink-0 text-ink-low" aria-hidden="true" />
              ) : null}

            </div>
            <h3 className="mt-5 text-[17px] font-medium leading-[1.25] text-navy">{stop.title}</h3>
            <p className="mt-2 text-[14px] leading-[1.55] text-ink-mid">{stop.line}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1} className="mt-10">
        <a href="#curriculum" className={buttonStyles.primary}>
          See the 10-week curriculum
        </a>
      </Reveal>
    </SectionShell>
  );
}
