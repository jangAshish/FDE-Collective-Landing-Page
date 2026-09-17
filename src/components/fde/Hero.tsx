import { marqueeLogos } from "@/lib/fde-data";
import heroFinalCropped from "@/assets/hero-final-cropped.jpg";
import { PartnerLogo } from "./PartnerLogo";
import { Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-surface pt-[72px] text-text-primary">
      {/* Hero Banner sized to fit perfectly within the first fold (visible down to the logos) */}
      <div className="relative w-full overflow-hidden h-[calc(100svh-72px)] min-h-[500px] max-h-[840px] bg-black">
        {/* Full resolution runners image cropped from top */}
        <img
          src={heroFinalCropped}
          alt="1M+ Forward Deployed Engineers needed by 2030"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_top] sm:object-center select-none"
        />

        {/* Gradient overlay at the bottom for crisp text, button, and logo contrast on mobile and desktop */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-50% to-black/20 sm:via-black/40 sm:via-40% sm:to-transparent"
          aria-hidden="true"
        />

        {/* Text & Button Layer aligned at the bottom, just above the logo bar */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end px-5 pb-20 pt-10 sm:px-6 sm:pb-24 md:px-10 md:pb-28 lg:px-14">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
              {/* Headline on bottom-left with responsive mobile sizing */}
              <h1 className="max-w-[700px] text-[1.45rem] font-bold leading-[1.18] tracking-[-0.02em] text-white drop-shadow-md sm:text-[1.9rem] md:text-[2.3rem] lg:text-[2.9rem]">
                1M+ Forward Deployed Engineers needed by 2030.
              </h1>

              {/* Button on bottom-right - full width tap target on mobile, compact on desktop */}
              <div className="shrink-0">
                <a
                  href="#pricing"
                  className="ds-motion inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#db5c4d] px-7 font-body text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-ter-700 hover:shadow-xl hover:-translate-y-px active:scale-95 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
                >
                  Start your journey today
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Partner logos marquee directly OVER the image at the base */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-2.5 pt-1.5 sm:pb-4 sm:pt-2">
          <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white/90 drop-shadow-md sm:text-xs sm:tracking-[0.14em]">
            Built around the tools behind the stack
          </p>
          <div className="mt-1.5 w-full overflow-hidden py-0.5 sm:mt-2 sm:py-1">
            <div className="marquee-track flex w-max items-center gap-8 sm:gap-12 hover:[animation-play-state:paused]">
              {[0, 1, 2].map((copy) => (
                <div key={copy} className="flex items-center gap-8 sm:gap-12">
                  {marqueeLogos.map((logo) => (
                    <div
                      key={`${copy}-${logo.name}`}
                      className="ds-motion flex items-center gap-2 sm:gap-2.5 opacity-90 transition-opacity hover:opacity-100"
                    >
                      <PartnerLogo
                        name={logo.name}
                        domain={logo.domain}
                        tone="white"
                        className="h-5 sm:h-6"
                      />
                      <span className="whitespace-nowrap text-xs font-medium text-white drop-shadow-md sm:text-[15px]">
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
