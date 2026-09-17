import { levels } from "@/lib/fde-data";
import certificationImage from "@/assets/certification.jpg";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function Certification() {
  return (
    <SectionShell id="certification" className="bg-canvas-alt">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <figure className="overflow-hidden rounded-card border border-line bg-white">
            <img
              src={certificationImage}
              alt="A graded capstone certificate reviewed at a desk"
              loading="lazy"
              width={1280}
              height={960}
              className="h-[260px] w-full object-cover md:h-[420px]"
            />
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Certification</Eyebrow>
            <H2>Assessed on shipped work, not lesson completion.</H2>
            <p className="mt-5 text-lead leading-[1.6] text-ink-mid">
              The capstone follows the full arc, scope, build, harden, deploy, own, and is
              reviewed against the evidence an enterprise expects before go-live.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
            {levels.map((level, i) => (
              <Reveal key={level.name} delay={i * 0.06} className="bg-white p-6">
                <p className="text-eyebrow text-gold-deep">Level {i + 1}</p>
                <h3 className="mt-3 text-[19px] font-medium text-navy">{level.name}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-mid">{level.line}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
