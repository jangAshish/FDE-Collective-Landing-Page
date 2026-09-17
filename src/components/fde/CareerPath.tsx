import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { careerPath } from "@/lib/collective-data";
import { cn } from "@/lib/utils";
import { buttonStyles, Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function CareerPath() {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const containerRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(containerRef, { amount: 0.25 });

  useEffect(() => {
    if (!isInView) {
      setActiveStep(null);
      setCurrentIdx(0);
      return;
    }

    // Step zooms in
    setActiveStep(currentIdx);

    // After 1800ms, zoom down to normal size
    const downTimer = setTimeout(() => {
      setActiveStep(null);
    }, 1800);

    // After 2300ms, move to the next step
    const nextTimer = setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % careerPath.length);
    }, 2300);

    return () => {
      clearTimeout(downTimer);
      clearTimeout(nextTimer);
    };
  }, [isInView, currentIdx]);

  return (
    <SectionShell id="path" className="bg-canvas">
      <Reveal className="max-w-[760px]">
        <Eyebrow>The path</Eyebrow>
        <H2>From where you are to the person who ships it.</H2>
      </Reveal>

      <Reveal delay={0.05}>
        <ol
          ref={containerRef}
          className="mt-12 grid gap-px rounded-card border border-line bg-line lg:grid-cols-5"
        >
          {careerPath.map((stop, i) => {
            const isActive = activeStep === i;
            return (
              <motion.li
                key={stop.step}
                animate={{
                  scale: isActive ? 1.06 : 1,
                  zIndex: isActive ? 10 : 1,
                  boxShadow: isActive
                    ? "0 12px 30px -4px rgba(0, 0, 0, 0.12), 0 6px 12px -4px rgba(0, 0, 0, 0.08)"
                    : "0 0 0 0 rgba(0, 0, 0, 0)",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "relative bg-white p-6 md:p-7",
                  "first:rounded-t-card lg:first:rounded-l-card lg:first:rounded-tr-none",
                  "last:rounded-b-card lg:last:rounded-r-card lg:last:rounded-bl-none",
                  isActive && "rounded-card"
                )}
              >
                {/* Theme orange border that activates at full scale */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25, delay: isActive ? 0.1 : 0 }}
                  className="pointer-events-none absolute inset-0 rounded-card ring-2 ring-gold-deep"
                />

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-medium uppercase text-gold-deep">
                    {stop.step}
                  </span>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  {i < careerPath.length - 1 ? (
                    <ArrowRight className="size-3.5 shrink-0 text-ink-low" aria-hidden="true" />
                  ) : null}
                </div>
                <h3 className="mt-5 text-[17px] font-medium leading-[1.25] text-navy">
                  {stop.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-mid">
                  {stop.line}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <a href="#curriculum" className={buttonStyles.primary}>
          See the 10-week curriculum
        </a>
      </Reveal>
    </SectionShell>
  );
}
