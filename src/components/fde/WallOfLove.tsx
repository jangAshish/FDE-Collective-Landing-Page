import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";
import { Quote, Star } from "lucide-react";

export const testimonials = [
  {
    name: "Vikram R.",
    role: "Senior Backend Engineer",
    company: "Bengaluru Workshop Attendee",
    text: "Building an agent is easy with tutorials, but making it clear customer security review, audit logs, and token limits is where 99% fail. The Lyzr FDE session broke down the exact architecture needed.",
    rating: 5,
  },
  {
    name: "Ananya M.",
    role: "Enterprise Solutions Architect",
    company: "Hyderabad Clinic Attendee",
    text: "The graph RAG and eval framework taught here saved us at least 6 weeks of engineering trial-and-error on our banking client rollout. Extremely high signal-to-noise ratio.",
    rating: 5,
  },
  {
    name: "Karthik S.",
    role: "Full-Stack Dev -> Forward Deployed",
    company: "Pune Field Session",
    text: "The shift from building toy LLM wrappers to production multi-agent workflows with state persistence was eye-opening. Best investment in my engineering career this year.",
    rating: 5,
  },
];

export function WallOfLove() {
  return (
    <SectionShell id="testimonials" className="bg-canvas-alt">
      <Reveal className="max-w-[850px]">
        <Eyebrow>Wall of Love</Eyebrow>
        <H2>Trusted by builders from workshops and live field sessions.</H2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <div className="flex h-full flex-col justify-between rounded-card border border-line bg-white p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-gold-deep">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="size-4 fill-gold-deep text-gold-deep" />
                    ))}
                  </div>
                  <Quote className="size-5 text-ink-low/40" />
                </div>

                <p className="mt-5 text-[14.5px] leading-relaxed text-navy">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-navy text-[15px]">{t.name}</p>
                <p className="text-xs text-ink-mid font-mono mt-0.5">{t.role}</p>
                <span className="mt-2 inline-block rounded bg-canvas px-2 py-0.5 font-mono text-[11px] text-ter-600">
                  {t.company}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
