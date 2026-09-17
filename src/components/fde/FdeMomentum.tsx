import { fdeMomentum } from "@/lib/collective-data";
import { Reveal, SectionShell } from "./primitives";

export function FdeMomentum() {
  return (
    <SectionShell id="moment" className="bg-navy text-canvas">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-eyebrow text-gold">{fdeMomentum.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-h2-m font-medium leading-[1.08] text-canvas md:text-h2">
              {fdeMomentum.headline}
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fdeMomentum.proofPoints.map((point, i) => (
            <Reveal key={point.label} delay={0.1 + i * 0.05}>
              <div className="h-full rounded-card border border-canvas/10 bg-canvas/[0.04] p-6">
                <p className="font-mono text-[32px] font-semibold leading-none text-gold md:text-[38px]">
                  {point.value}
                </p>
                <p className="mt-3 text-[15px] font-semibold text-canvas">{point.label}</p>
                <p className="mt-2 text-base leading-[1.55] text-canvas/60">{point.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
