import { Link } from "@tanstack/react-router";
import ctaImage from "@/assets/cta-open.jpg";
import { buttonStyles, Reveal } from "./primitives";

export function CtaBand() {
  return (
    <section id="apply" className="bg-canvas py-16 md:py-24">
      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1408px] overflow-hidden rounded-card bg-navy">
        <img
          src={ctaImage}
          alt="An engineer walking toward an enterprise campus at golden hour"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-photo-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative flex min-h-[420px] flex-col justify-end px-6 py-10 md:min-h-[520px] md:px-14 md:py-14">
          <Reveal className="max-w-[720px]">
            <h2 className="text-h2-m font-medium leading-[1.1] text-canvas md:text-h2">
              Join the FDE Collective.
            </h2>
            <p className="mt-5 max-w-[520px] text-lead leading-[1.6] text-canvas/75">
              Register for the upcoming Free Masterclass, apply for Cohort 1, or walk into a live workshop in your city.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className={buttonStyles.primary}>
                Register for Free Masterclass
              </a>
              <a href="#cities" className={buttonStyles.onDark}>
                Attend a workshop in your city
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
