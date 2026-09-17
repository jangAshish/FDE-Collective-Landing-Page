import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/fde/Nav";
import { Hero } from "@/components/fde/Hero";
import { WhyCollective } from "@/components/fde/WhyCollective";
import { WhatIsFde } from "@/components/fde/WhatIsFde";
import { SkillsWall } from "@/components/fde/SkillsWall";
import { FdeMomentum } from "@/components/fde/FdeMomentum";
import { EnterpriseProof } from "@/components/fde/EnterpriseProof";
import { BuiltWithPartners } from "@/components/fde/BuiltWithPartners";
import { CareerPath } from "@/components/fde/CareerPath";
import { CurriculumShowcase } from "@/components/fde/CurriculumShowcase";
import { InstructorsWall } from "@/components/fde/InstructorsWall";
import { ValueStack } from "@/components/fde/ValueStack";
import { PricingDualTier } from "@/components/fde/PricingDualTier";
import { WallOfLove } from "@/components/fde/WallOfLove";
import { Faq } from "@/components/fde/Faq";
import { CtaBand } from "@/components/fde/CtaBand";
import { SiteFooter } from "@/components/fde/SiteFooter";
import { StickyMasterclassBar } from "@/components/fde/StickyMasterclassBar";

const title = "The FDE Collective, 1M Forward-Deployed Engineers Needed by 2030 | Lyzr";
const description =
  "AI is creating a million forward-deployed engineering jobs by 2030. Get trained for one: a 10-week fellowship across 100 competencies and 50+ production tools, plus free workshops in your city.";
const url = "https://fde-collective.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink">
      <Nav />
      <main>
        <Hero />
        <WhyCollective />
        <WhatIsFde />
        <SkillsWall />
        <BuiltWithPartners />
        <CareerPath />
        <CurriculumShowcase />
        <InstructorsWall />
        <WallOfLove />
        <ValueStack />
        <FdeMomentum />
        <EnterpriseProof />
        <PricingDualTier />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
      <StickyMasterclassBar />
    </div>
  );
}
