import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { pricing } from "@/lib/collective-data";
import { curriculumModules } from "@/lib/curriculum-data";
import courseImage from "@/assets/course-track.jpg";
import cityImage from "@/assets/city-workshop.jpg";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

const lanes = [
  {
    tag: "Track 01",
    title: "The AI FDE Course",
    line: `${curriculumModules.length} modules, 100 competencies, 50+ tools. Ship a production agent system, graded at the end.`,
    meta: `${pricing.amount} · full programme access`,
    cta: "Explore the course",
    to: "/course",
    image: courseImage,
    alt: "A cohort working through a live build session",
  },
  {
    tag: "Track 02",
    title: "City Chapters",
    line: "The same material, offline. One hour on the role, an agent built live in the room, a local champion who keeps it running.",
    meta: "10 cities in India · Dubai, Johannesburg and Toronto next",
    cta: "Attend a workshop in your city",
    href: "#cities",
    image: cityImage,
    alt: "Developers building agents together at a city chapter workshop",
  },
];

export function SwimLanes() {
  return (
    <SectionShell id="tracks" className="bg-canvas">
      <Reveal className="max-w-[760px]">
        <Eyebrow>Two ways in</Eyebrow>
        <H2>One initiative, two tracks.</H2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {lanes.map((lane, i) => (
          <Reveal key={lane.title} delay={i * 0.06}>
            <div
              className={`flex h-full flex-col overflow-hidden rounded-card border transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-card ${
                i === 0 ? "border-navy bg-navy text-canvas" : "border-line bg-white"
              }`}
            >
              <img
                src={lane.image}
                alt={lane.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="h-[220px] w-full object-cover md:h-[280px]"
              />
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <p className={`text-eyebrow ${i === 0 ? "text-gold" : "text-gold-deep"}`}>{lane.tag}</p>
                <h3
                  className={`mt-4 text-h3-m font-medium leading-[1.14] md:text-h3 ${
                    i === 0 ? "text-canvas" : "text-navy"
                  }`}
                >
                  {lane.title}
                </h3>
                <p className={`mt-4 text-base leading-[1.65] ${i === 0 ? "text-canvas/70" : "text-ink-mid"}`}>
                  {lane.line}
                </p>
                <p
                  className={`mt-6 font-mono text-mono font-medium uppercase ${
                    i === 0 ? "text-canvas/50" : "text-ink-low"
                  }`}
                >
                  {lane.meta}
                </p>
                <div className="mt-8">
                  {lane.to ? (
                    <Link
                      to={lane.to}
                      className={`inline-flex items-center gap-2 text-[15px] font-medium ${
                        i === 0 ? "text-gold" : "text-gold-deep"
                      } hover:underline`}
                    >
                      {lane.cta}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <a
                      href={lane.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-gold-deep hover:underline"
                    >
                      {lane.cta}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
