import { Check } from "lucide-react";
import { pricing } from "@/lib/collective-data";
import { buttonStyles, Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function Pricing() {
  return (
    <SectionShell id="pricing" className="bg-canvas">
      <div className="grid gap-10 md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:gap-16">
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <H2>One price, the whole programme.</H2>
          <p className="mt-5 text-base leading-[1.65] text-ink-mid">
            No per-module upsell and no certification fee on top. You pay once and keep access
            to the modules, the partner sessions and the Collective community.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-card border-[1.5px] border-navy bg-white p-8 md:p-10">
            <p className="font-mono text-mono font-medium uppercase tracking-[0.1em] text-ink-low">
              AI FDE Certification
            </p>
            <p className="mt-4 flex items-baseline gap-3">
              <span className="text-hero-m font-bold tracking-[-0.02em] text-navy">
                {pricing.amount}
              </span>
              <span className="text-[15px] text-ink-mid">{pricing.cadence}</span>
            </p>
            <ul className="mt-8 space-y-3">
              {pricing.includes.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-[1.6] text-ink">
                  <Check className="mt-1 size-4 shrink-0 text-gold-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:academy@lyzr.ai?subject=AI%20FDE%20Academy%20enrollment"
              className={`${buttonStyles.primary} mt-9 w-full`}
            >
              Enroll now
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
