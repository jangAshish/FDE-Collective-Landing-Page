import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";
import vaibhaviImg from "@/assets/Vaibhavi .png";
import laurieImg from "@/assets/Laurie Voss.png";
import aryamanImg from "@/assets/Aryaman Behera.png";
import someshwaranImg from "@/assets/Someshwaran M..png";

export const instructors = [
  {
    name: "Vaibhavi",
    role: "Head of Developer Relations",
    company: "Lyzr",
    image: vaibhaviImg,
  },
  {
    name: "Laurie Voss",
    role: "Head of Developer Relations",
    company: "Arize Phoenix",
    image: laurieImg,
  },
  {
    name: "Aryaman Behera",
    role: "Co-Founder and CEO",
    company: "Repello",
    image: aryamanImg,
  },
  {
    name: "Someshwaran M.",
    role: "Senior Developer Advocate",
    company: "Elastic Labs",
    image: someshwaranImg,
  },
];

export function InstructorsWall() {
  return (
    <SectionShell id="mentors" className="bg-canvas">
      <Reveal className="max-w-[850px]">
        <Eyebrow>Practitioners, Not Trainers</Eyebrow>
        <H2>Learn from the engineers shipping production agents every week.</H2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {instructors.map((inst, i) => (
          <Reveal key={inst.name} delay={i * 0.06}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8ded7] bg-[#f4ebe6] shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              {/* Entire 1:1 image displayed on top without crop */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#ecdcd4]">
                <img
                  src={inst.image}
                  alt={inst.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content placed in cream card body below the photo */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-navy sm:text-[1.15rem]">
                    {inst.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono font-bold uppercase tracking-wider text-ter-600">
                    {inst.company}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-mid leading-snug">
                    {inst.role}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25} className="mt-10 rounded-card border border-dashed border-line bg-canvas-alt p-6 text-center">
        <p className="text-sm font-medium text-ink-mid">
          Plus weekly guest firesides & code clinics with engineering leaders from <strong className="text-navy">OpenAI</strong>, <strong className="text-navy">Anthropic</strong>, <strong className="text-navy">AWS</strong>, and <strong className="text-navy">Accenture</strong>.
        </p>
      </Reveal>
    </SectionShell>
  );
}
