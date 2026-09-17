import { Check } from "lucide-react";
import { buttonStyles, Eyebrow, H2, Reveal, SectionShell } from "./primitives";
import enterpriseTeamsBg from "@/assets/enterprise-teams-bg.jpg";

export function PricingDualTier() {
  return (
    <SectionShell id="pricing" className="bg-canvas">
      <div className="text-center">
        <Reveal className="mx-auto max-w-[780px]">
          <Eyebrow>Cohort & Self-Paced Options</Eyebrow>
          <H2>Transparent pricing designed for serious engineers.</H2>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Tier 1: Self-Paced Track */}
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col justify-between rounded-card border border-line bg-white p-8 md:p-10 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-ink-low">
                  Self-Paced Track
                </p>
                <span className="rounded-full bg-canvas-alt px-3 py-1 font-mono text-xs font-semibold text-ink-mid">
                  On-Demand
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Free
                </span>
                <span className="text-sm font-medium text-ink-mid">
                  to learn / $100 for verified exam
                </span>
              </div>

              <p className="mt-3 text-[14px] leading-relaxed text-ink-mid">
                Access all 10 recorded curriculum modules and self-guided projects. Learn at your own pace.
              </p>

              <div className="my-8 border-t border-line" />

              <ul className="space-y-3.5">
                {[
                  "Access to all 10 module recordings & slide decks",
                  "Mapped across 100 enterprise competencies",
                  "Full access to the FDE Collective global Discord",
                  "Self-guided code repositories and templates",
                  "Optional verified capstone evaluation & certificate ($100)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] leading-snug text-navy">
                    <Check className="size-4 text-ink-mid shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="#curriculum"
                className={`${buttonStyles.outline} w-full text-center`}
              >
                Explore free modules
              </a>
            </div>
          </div>
        </Reveal>

        {/* Tier 2: The Cohort Fellowship (Flagship) */}
        <Reveal delay={0.12}>
          <div className="relative flex h-full flex-col justify-between rounded-card border-2 border-ter-600 bg-white p-8 md:p-10 shadow-lg ring-1 ring-ter-600/10">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 right-8 rounded-full bg-ter-600 px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
              Flagship Fellowship
            </div>

            <div>
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-ter-600">
                  10-Week Cohort Fellowship
                </p>
                <span className="rounded-full bg-ter-50 px-3 py-1 font-mono text-xs font-semibold text-ter-700">
                  Starts Oct 16, 2026
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                  $1,000
                </span>
                <span className="text-sm font-medium text-ink-mid">
                  or 3x ₹28,000 EMI
                </span>
              </div>

              <p className="mt-3 text-[14px] leading-relaxed text-ink-mid">
                Interactive cohort led by practitioners shipping agents at Fortune 500s. Includes credits and hiring fast-tracks.
              </p>

              <div className="my-8 border-t border-line" />

              <ul className="space-y-3.5">
                {[
                  "Everything in Self-Paced Track",
                  "$25,000+ AI API, vector DB & cloud credits",
                  "Weekly live firesides & code AMAs with top practitioners",
                  "1-on-1 code reviews on your enterprise capstone",
                  "Fast-track interview rounds at Lyzr & enterprise partners",
                  "Access to paid enterprise client project briefs in our marketplace",
                  "In-person Demo Day & cohort graduation party in Bengaluru",
                  "Employer reimbursement & corporate sponsorship support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] leading-snug text-navy">
                    <Check className="size-4 text-ter-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:academy@lyzr.ai?subject=AI%20FDE%20Cohort%20Application"
                className={`${buttonStyles.primary} flex-1 text-center`}
              >
                Apply for Cohort 1
              </a>
              <a
                href="#apply"
                className={`${buttonStyles.outline} flex-1 text-center`}
              >
                Free Masterclass
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Enterprise Up-skilling Callout with background image */}
      <Reveal delay={0.18} className="relative mt-12 overflow-hidden rounded-2xl border border-navy/30 bg-esp-950 p-8 text-canvas shadow-xl md:p-12">
        {/* Background image: auditorium / enterprise presentation */}
        <img
          src={enterpriseTeamsBg}
          alt="Enterprise engineering team presentation"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
        />

        {/* Black overlay at 80% opacity for clear image visibility + text legibility */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/80"
          aria-hidden="true"
        />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="inline-block rounded-full bg-gold/15 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-gold border border-gold/30">
              For Enterprise Teams
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl tracking-tight">
              Upskill your engineering organization into high-output FDEs
            </h3>
            <p className="mt-3 max-w-[680px] text-sm md:text-base text-canvas/85 leading-relaxed">
              Custom cohort schedules, dedicated enterprise mentor clinics, internal compliance sandboxes, and tailored curriculum paths for SI teams.
            </p>
          </div>
          <a
            href="mailto:enterprise@lyzr.ai?subject=Enterprise%20FDE%20Training%20Inquiry"
            className={`${buttonStyles.onNavy} shrink-0 shadow-lg`}
          >
            Train Your Team
          </a>
        </div>
      </Reveal>
    </SectionShell>
  );
}
