import { useState } from "react";
import { personas } from "@/lib/fde-data";
import fdeVenn from "@/assets/fde-venn.png";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function WhatIsFde() {
  const [active, setActive] = useState(personas[0]?.key ?? "platform-engineer");
  const current = personas.find((p) => p.key === active) ?? personas[0];

  return (
    <SectionShell id="definition" className="bg-canvas">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left column: Heading, 3 tabs, and detailed role breakdown */}
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>The role</Eyebrow>
            <H2>What is an FDE?</H2>
          </Reveal>

          {/* Three tabs: Platform Engineer, Solutions Architect, Software Engineer */}
          <Reveal delay={0.08} className="mt-8">
            <div className="flex flex-wrap gap-2.5">
              {personas.map((p) => {
                const isActive = p.key === active;
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setActive(p.key)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 ease-out cursor-pointer ${
                      isActive
                        ? "border-navy bg-navy text-canvas shadow-sm"
                        : "border-line bg-white/60 text-ink-mid hover:border-navy/30 hover:bg-white hover:text-navy"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Information card for active role */}
            <div className="mt-6 rounded-card border border-line bg-white p-6 md:p-7 shadow-xs">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-ter-600">
                ROLE PROFILE
              </p>
              <p className="mt-3 text-lg font-medium leading-relaxed text-ink sm:text-xl">
                {current?.roleDescription}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right column: Venn diagram image cleanly embedded with no bounding box */}
        <Reveal delay={0.12} className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[560px] flex items-center justify-center p-2">
            <img
              src={fdeVenn}
              alt="Venn diagram illustrating Forward Deployed Engineer at the intersection of Platform Engineer, Solutions Architect, and Software Engineer"
              loading="lazy"
              className="h-auto w-full max-h-[480px] object-contain select-none mix-blend-multiply"
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
