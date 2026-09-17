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
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
        />

        {/* Gradient overlay at the bottom for crisp text, button, and logo contrast */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent"
          aria-hidden="true"
        />

        {/* Text & Button Layer aligned at the bottom, just above the logo bar */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end px-6 pb-24 pt-16 sm:pb-28 md:px-10 md:pb-30 lg:px-14">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              {/* Headline on bottom-left */}
              <h1 className="max-w-[700px] text-[1.6rem] font-bold leading-[1.15] tracking-[-0.03em] text-white drop-shadow-md sm:text-[2.1rem] md:text-[2.4rem] lg:text-[2.9rem]">
                1M+ Forward Deployed Engineers needed by 2030.
              </h1>

              {/* Button on bottom-right */}
              <div className="shrink-0 pb-1">
                <a
                  href="#pricing"
                  className="ds-motion inline-flex h-12 items-center justify-center rounded-lg bg-[#db5c4d] px-8 font-body text-base font-semibold text-white shadow-lg transition-all hover:bg-ter-700 hover:shadow-xl hover:-translate-y-px active:scale-95"
                >
                  Start your journey today
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Partner logos marquee directly OVER the image at the base */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-4 pt-2 sm:pb-5">
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 drop-shadow-md sm:text-xs">
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
