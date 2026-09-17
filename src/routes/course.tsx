import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/fde/Nav";
import { CourseHero } from "@/components/fde/CourseHero";
import { CurriculumPath } from "@/components/fde/CurriculumPath";
import { ModuleJourney } from "@/components/fde/ModuleJourney";
import { HowItWorks } from "@/components/fde/HowItWorks";
import { BuiltWithPartners } from "@/components/fde/BuiltWithPartners";
import { Certification } from "@/components/fde/Certification";
import { ReadinessCheck } from "@/components/fde/ReadinessCheck";
import { Pricing } from "@/components/fde/Pricing";
import { Faq } from "@/components/fde/Faq";
import { SiteFooter } from "@/components/fde/SiteFooter";

const title = "AI FDE Course, 100 Production Competencies | Lyzr";
const description =
  "Ten modules, 100 competencies, 50+ tools, from a model call to a production system in a customer estate. $999.";
const url = "https://fde-journey-map.lovable.app/course";

export const Route = createFileRoute("/course")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "The AI FDE Course",
          description,
          provider: { "@type": "Organization", name: "Lyzr", url: "https://lyzr.ai" },
          offers: { "@type": "Offer", price: "999", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: CoursePage,
});

function CoursePage() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink">
      <Nav variant="course" />
      <main>
        <CourseHero />
        <CurriculumPath />
        <ModuleJourney />
        <HowItWorks />
        <BuiltWithPartners course />
        <Certification />
        <ReadinessCheck />
        <Pricing />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
