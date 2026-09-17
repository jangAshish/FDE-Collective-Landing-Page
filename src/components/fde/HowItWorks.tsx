import { deliveryFormat } from "@/lib/collective-data";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function HowItWorks() {
  return (
    <SectionShell id="how" className="bg-canvas">
      <Reveal className="max-w-[820px]">
        <Eyebrow>How it is delivered</Eyebrow>
        <H2>How it runs.</H2>
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {deliveryFormat.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <p className="text-eyebrow text-ink-low">{item.label}</p>
            <p className="mt-3 text-[19px] font-semibold text-navy">{item.value}</p>
            <p className="mt-3 text-base leading-[1.65] text-ink-mid">{item.line}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
