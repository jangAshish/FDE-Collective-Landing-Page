import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { forYou, notYet, readinessQuestions } from "@/lib/fde-data";
import { buttonStyles, Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function ReadinessCheck() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const yesCount = Object.values(answers).filter(Boolean).length;
  const answered = Object.keys(answers).length;
  const ready = yesCount >= 7;

  return (
    <SectionShell id="readiness" className="bg-canvas">
      <Reveal className="max-w-[760px]">
        <Eyebrow>Readiness</Eyebrow>
        <H2>Is this for you.</H2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-eyebrow text-ink-low">This is for you if</p>
          <ul className="mt-5 space-y-4">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-[1.65] text-navy">
                <Check className="mt-1 size-4 shrink-0 text-ship" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-eyebrow text-ink-low">Not yet, if</p>
          <ul className="mt-5 space-y-4">
            {notYet.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-[1.65] text-ink-mid">
                <Minus className="mt-1 size-4 shrink-0 text-ink-low" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-[1.65] text-ink-mid">
            If that is where you are today, a fundamentals track is the better next step. The
            Academy will still be here.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14 rounded-card border border-line bg-canvas-alt p-7 md:p-10">
        <p className="text-eyebrow text-gold-deep">Self-check</p>
        <h3 className="mt-3 text-h3-m font-semibold text-navy md:text-h3">
          Ten questions. No account, nothing stored.
        </h3>

        <ul className="mt-8 divide-y divide-line border-y border-line">
          {readinessQuestions.map((q, i) => (
            <li key={q} className="flex flex-wrap items-center gap-4 py-4">
              <span className="flex-1 text-base leading-[1.65] text-navy">{q}</span>
              <div className="flex gap-2">
                {[true, false].map((val) => {
                  const selected = answers[i] === val;
                  return (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setAnswers((a) => ({ ...a, [i]: val }))}
                      aria-pressed={selected}
                      className={`rounded-tag border px-4 py-2 font-mono text-mono font-medium uppercase tracking-[0.1em] transition-all duration-200 ${
                        selected
                          ? "border-navy bg-navy text-white"
                          : "border-line text-ink-mid hover:border-navy/30 hover:text-navy"
                      }`}
                    >
                      {val ? "Yes" : "No"}
                    </button>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base leading-[1.65] text-navy">
            {answered === 0
              ? "Answer the questions to see where you stand."
              : ready
                ? `${yesCount} of 10 yes. You are ready to apply.`
                : `${yesCount} of 10 yes. Start with the fundamentals, then come back.`}
          </p>
          <a
            href="#apply"
            className={answered > 0 && !ready ? buttonStyles.secondary : buttonStyles.primary}
          >
            {answered > 0 && !ready ? "Start with the fundamentals" : "Apply to the Academy"}
          </a>
        </div>
      </Reveal>
    </SectionShell>
  );
}
