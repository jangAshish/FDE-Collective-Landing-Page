import { ArrowUpRight } from "lucide-react";
import { CITY_PROGRAM_URL, cities, cityFormat } from "@/lib/collective-data";
import { buttonStyles, Eyebrow, H2, Reveal, SectionShell } from "./primitives";

const statusStyles: Record<string, string> = {
  Completed: "border-line text-ink-low",
  Planned: "border-gold/50 text-gold-deep",
  Open: "border-navy bg-navy text-white",
};

export function CityChapters() {
  return (
    <SectionShell id="cities" className="bg-canvas">
      <Reveal className="max-w-[820px]">
        <Eyebrow>On the ground</Eyebrow>
        <H2>We are taking this city by city.</H2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cityFormat.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.06}>
            <p className="font-mono text-mono font-medium uppercase tracking-[0.1em] text-gold-deep">
              {item.step}
            </p>
            <h3 className="mt-3 text-[19px] font-medium text-navy">{item.title}</h3>
            <p className="mt-3 text-base leading-[1.65] text-ink-mid">{item.line}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 border-t border-line pt-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <div
              key={c.city}
              className="flex items-center justify-between gap-4 rounded-card border border-line bg-white px-5 py-4"
            >
              <div>
                <p className="text-[16px] font-medium text-navy">{c.city}</p>
                <p className="mt-1 text-[14px] text-ink-low">
                  {c.country} · {c.note}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-tag border px-2.5 py-1 font-mono text-mono font-medium uppercase tracking-[0.1em] ${statusStyles[c.status]}`}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={CITY_PROGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className={buttonStyles.secondary}
          >
            Bring this to your city
            <ArrowUpRight className="ml-2 size-4" />
          </a>
          <p className="text-[15px] text-ink-mid">
            Champion applications are open for every unlisted city.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
