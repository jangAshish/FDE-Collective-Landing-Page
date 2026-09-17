import { Link } from "@tanstack/react-router";
import { marqueeLogos } from "@/lib/fde-data";
import heroSummit from "@/assets/hero-summit.png";
import { PartnerLogo } from "./PartnerLogo";
import { buttonStyles, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-surface pt-[72px] text-text-primary">
      {/* Hero Banner: cropped 10% from the bottom, lifting content and framing the climbers */}
      <div className="relative w-full overflow-hidden min-h-[490px] sm:min-h-[540px] md:aspect-[18/9] md:min-h-[500px]">
        {/* 4K image: top-anchored and sized to cut off the bottom 10% */}
        <img
          src={heroSummit}
          alt="Climbers scaling a mountain summit together"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-x-0 top-0 h-[111%] w-full object-cover object-top select-none"
        />

        {/* Content placed over left side negative space, moved slightly up */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-24 pt-4 md:px-10 md:pb-28 md:pt-6 lg:px-14">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal className="max-w-[640px]">
              {/* Eyebrow badge in white rounded rectangle / pill for crisp visibility */}
              <div className="inline-flex items-center rounded-full border border-white/80 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-ter-600 sm:text-[13px]">
                  THE FDE COLLECTIVE · AN INITIATIVE BY LYZR
                </p>
              </div>

              {/* Bold, high-contrast headline */}
              <h1 className="mt-4 text-[2.5rem] font-bold leading-[1.08] tracking-[-0.035em] text-esp-950 sm:text-[3.2rem] lg:text-[4rem]">
                Helping 1M+ developers become forward-deployed engineers by 2030.
              </h1>

              {/* Buttons matching user design */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="ds-motion inline-flex h-12 items-center justify-center rounded-full bg-ter-600 px-7 font-body text-base font-semibold text-white shadow-sm hover:bg-ter-700 hover:-translate-y-px"
                >
                  Register for the free masterclass
                </a>
                <a
                  href="#curriculum"
                  className="ds-motion inline-flex h-12 items-center justify-center rounded-full border border-esp-900/40 bg-white/80 px-7 font-body text-base font-semibold text-esp-950 shadow-xs backdrop-blur-sm hover:border-esp-950 hover:bg-white hover:-translate-y-px"
                >
                  Explore the curriculum
                </a>
              </div>
            </Reveal>

            {/* Right column left open so all three climbers and the full summit are completely visible */}
            <div className="hidden lg:block min-h-[200px]" aria-hidden="true" />
          </div>
        </div>

        {/* Dark gradient shade in the bottom so white logos and text are clearly visible */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-esp-975/95 via-esp-975/65 to-transparent sm:h-44 md:h-48"
          aria-hidden="true"
        />

        {/* All partner logos in pure white, placed directly on top of the image */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-4 pt-2 sm:pb-6">
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white drop-shadow-md sm:text-xs">
            Built around the tools behind the stack
          </p>
          <div className="mt-2 w-full overflow-hidden py-1">
            <div className="marquee-track flex w-max items-center gap-12 hover:[animation-play-state:paused]">
              {[0, 1, 2].map((copy) => (
                <div key={copy} className="flex items-center gap-12">
                  {marqueeLogos.map((logo) => (
                    <div
                      key={`${copy}-${logo.name}`}
                      className="ds-motion flex items-center gap-2.5 opacity-90 transition-opacity hover:opacity-100"
                    >
                      <PartnerLogo
                        name={logo.name}
                        domain={logo.domain}
                        tone="white"
                        className="h-6"
                      />
                      <span className="whitespace-nowrap text-[15px] font-medium text-white drop-shadow-md">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
