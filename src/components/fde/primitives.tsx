import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.992 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "low" | "onNavy";
}) {
  return (
    <p
      className={cn(
        "text-eyebrow",
        tone === "gold" && "text-gold-deep",
        tone === "low" && "text-ink-low",
        tone === "onNavy" && "text-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionShell({
  id,
  children,
  className,
  small = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  small?: boolean;
}) {
  return (
    <section id={id} className={cn(small ? "section-y-sm" : "section-y", className)}>
      <div className="page-gutter mx-auto w-full max-w-[1152px]">{children}</div>
    </section>
  );
}

export function H2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "mt-4 text-h2-m font-medium leading-[1.08] tracking-[-0.026em] text-navy md:text-h2",
        className,
      )}
    >
      {children}
    </h2>
  );
}

const baseButton =
  "ds-motion inline-flex h-11 items-center justify-center rounded-button px-6 font-body text-base font-medium hover:-translate-y-px";

export const buttonStyles = {
  primary: cn(baseButton, "bg-accent-fill text-crm-50 hover:bg-accent-hover hover:shadow-accent"),
  secondary: cn(baseButton, "bg-esp-950 text-crm-50 hover:bg-esp-800 hover:shadow-md"),
  outline: cn(
    baseButton,
    "border border-esp-300 bg-transparent text-esp-950 hover:border-esp-950 hover:bg-esp-100",
  ),
  onNavy: cn(baseButton, "bg-accent-fill text-crm-50 hover:bg-accent-hover hover:shadow-accent"),
  onDark: cn(
    baseButton,
    "border border-crm-50/35 bg-transparent text-crm-50 hover:bg-crm-50 hover:text-esp-950",
  ),
};

export const cardStyles =
  "ds-motion rounded-card border border-border-subtle bg-surface-raised hover:-translate-y-1 hover:shadow-lg";

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string | undefined;
  suffix?: string | undefined;
  className?: string | undefined;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 36;
    setDisplay(0);
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame >= total) {
        setDisplay(value);
        clearInterval(id);
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
