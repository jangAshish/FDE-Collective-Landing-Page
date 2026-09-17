import { Link } from "@tanstack/react-router";
import { curriculumStats, deliveryProgression } from "@/lib/curriculum-data";
import { pricing } from "@/lib/collective-data";
import buildImage from "@/assets/build-session.jpg";
import { buttonStyles, Eyebrow, Reveal } from "./primitives";

export function CourseHero() {
  return (
    <section id="top" className="bg-canvas pt-[112px] pb-14 md:pt-[144px] md:pb-20">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow>Lyzr FDE Collective / The course</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 inline-flex rounded-tag bg-navy px-4 py-2 font-mono text-[11px] font-medium uppercase text-canvas">The world's most comprehensive FDE training program</p>
            <h1 className="mt-6 max-w-[900px] text-hero-m font-normal leading-[0.98] text-navy md:text-hero">
              AI Forward Deployed <span className="text-gold-deep">Engineer.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[660px] text-lead leading-[1.6] text-ink-mid">
              Ten modules from a model call to a system running in a customer’s estate.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className={buttonStyles.primary}>Enroll, {pricing.amount}</a>
              <a href="#curriculum" className={buttonStyles.secondary}>Explore all 100 competencies</a>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6">
              {deliveryProgression.map((stage, i) => (
                <span key={stage} className="flex items-center gap-3">
                  <span className={stage === "Build" || stage === "Deploy" ? "rounded-tag bg-gold px-3 py-1 font-medium text-canvas" : "font-medium text-navy"}>{stage}</span>
                  {i < deliveryProgression.length - 1 ? <span className="text-ink-low">/</span> : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line bg-white shadow-card">
            <img src={buildImage} alt="Engineers working through a production agent build" width={1280} height={1008} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent px-6 pb-6 pt-28 text-canvas">
              <p className="text-[15px] leading-relaxed">Every competency is taught on live systems and assessed on shipped work.</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid w-full max-w-[1280px] gap-px overflow-hidden rounded-card border border-line bg-line px-0 sm:grid-cols-3">
        {curriculumStats.map((stat) => (
          <Reveal key={stat.value} className="bg-white p-6 md:p-8">
            <p className="text-h3-m font-medium text-gold-deep md:text-h3">{stat.value}</p>
            <p className="mt-2 text-[14px] leading-[1.5] text-ink-mid">{stat.label}</p>
          </Reveal>
        ))}
      </div>
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <p className="mt-8 text-[15px] text-ink-mid">New here? <Link to="/" className="font-medium text-gold-deep hover:underline">Start with the Collective</Link>.</p>
      </div>
    </section>
  );
}
