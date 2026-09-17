import { collectiveOrigin } from "@/lib/collective-data";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

const tiles = [
  "bg-navy text-canvas",
  "bg-gold text-canvas",
  "bg-mahogany text-canvas",
];

export function WhyCollective() {
  return (
    <SectionShell id="collective" className="bg-canvas">
      <Reveal className="max-w-[820px]">
        <Eyebrow>The movement</Eyebrow>
        <H2>A million of these jobs are coming. Almost nobody is training for them.</H2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {collectiveOrigin.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div
              className={`flex h-full min-h-[260px] flex-col justify-between rounded-card p-7 md:p-8 ${
                tiles[i % tiles.length]
              }`}
            >
              <p className="font-mono text-[11px] font-medium uppercase opacity-70">0{i + 1}</p>
              <div>
                <h3 className="text-h3-m font-medium leading-[1.15] md:text-h3">{item.title}</h3>
                <p className="mt-4 text-base leading-[1.6] opacity-80">{item.line}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
