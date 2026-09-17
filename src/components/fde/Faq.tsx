import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/fde-data";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell id="faq" className="bg-canvas">
      <Reveal className="max-w-[720px]">
        <Eyebrow>Questions</Eyebrow>
        <H2>Before you apply.</H2>
      </Reveal>

      <Reveal className="mt-12 border-t border-line">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`text-[19px] font-semibold ${isOpen ? "text-gold-deep" : "text-navy"}`}
                >
                  {faq.q}
                </span>
                <Plus
                  className={`size-5 shrink-0 transition-all duration-200 ease-out ${
                    isOpen ? "rotate-45 text-gold-deep" : "text-ink-low"
                  }`}
                />
              </button>
              {isOpen ? (
                <p className="max-w-[820px] pb-6 text-base leading-[1.65] text-ink-mid">
                  {faq.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </Reveal>
    </SectionShell>
  );
}
