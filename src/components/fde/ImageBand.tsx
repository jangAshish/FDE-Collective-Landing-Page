import { Reveal } from "./primitives";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  className?: string;
  align?: "left" | "right";
};

export function ImageBand({
  src,
  alt,
  caption,
  width,
  height,
  className = "",
  align = "left",
}: Props) {
  return (
    <section className={`bg-canvas ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <Reveal
            className={
              align === "left"
                ? "md:col-span-7 md:col-start-1"
                : "md:col-span-7 md:col-start-6 md:order-2"
            }
          >
            <figure className="overflow-hidden rounded-card border border-line bg-white">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                width={width}
                height={height}
                className="h-[220px] w-full object-cover md:h-[380px]"
              />
            </figure>
          </Reveal>

          {caption ? (
            <Reveal
              delay={0.08}
              className={
                align === "left"
                  ? "md:col-span-4 md:col-start-9"
                  : "md:col-span-4 md:col-start-1 md:order-1"
              }
            >
              <p className="border-l border-gold pl-5 text-[17px] leading-[1.6] text-ink-mid">
                {caption}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
