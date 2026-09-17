import { enterpriseLogos } from "@/lib/collective-data";
import { PartnerLogo } from "./PartnerLogo";
import { Eyebrow, H2, Reveal, SectionShell } from "./primitives";

export function EnterpriseProof() {
  return (
    <SectionShell id="enterprises" className="bg-canvas-alt" small>
      <Reveal className="max-w-[820px]">
        <Eyebrow>Why us</Eyebrow>
        <H2>We are live with these enterprises.</H2>
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {enterpriseLogos.map((org, i) => (
          <Reveal key={org.name} delay={Math.min(i, 6) * 0.04}>
            <div className="flex h-16 items-center gap-3 rounded-card border border-line bg-white px-5">
              <PartnerLogo
                name={org.name}
                {...(org.domain ? { domain: org.domain } : {})}
                className="h-7"
              />
              {org.domain ? (
                <span className="whitespace-nowrap text-[15px] font-medium text-navy">
                  {org.name}
                </span>
              ) : null}
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.28}>
          <div className="flex h-16 items-center rounded-card border border-dashed border-line px-5 text-[15px] font-medium text-ink-mid">
            and many more
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
