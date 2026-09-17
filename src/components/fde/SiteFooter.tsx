import { Link } from "@tanstack/react-router";
import { CITY_PROGRAM_URL } from "@/lib/collective-data";
import { Wordmark } from "./Nav";

const columns: { title: string; links: { label: string; to?: string; href?: string }[] }[] = [
  {
    title: "The Collective",
    links: [
      { label: "Overview", to: "/" },
      { label: "Tools & partners", href: "/course#partners" },
      { label: "City chapters", href: "/#cities" },
      { label: "FAQ", href: "/course#faq" },
    ],
  },
  {
    title: "The course",
    links: [
      { label: "100 competencies", href: "/course#curriculum" },
      { label: "Certification", href: "/course#certification" },
      { label: "Readiness check", href: "/course#readiness" },
      { label: "Pricing", href: "/course#pricing" },
    ],
  },
  {
    title: "Cities",
    links: [
      { label: "Attend a workshop in your city", href: "/#cities" },
      { label: "Become a champion", href: CITY_PROGRAM_URL },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Lyzr", href: "https://lyzr.ai" },
      { label: "Contact", href: "mailto:academy@lyzr.ai" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 rounded-t-[32px] bg-navy py-14 text-white md:mt-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-eyebrow text-gold">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-eyebrow text-gold">Contact</p>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>
                <a href="mailto:academy@lyzr.ai" className="hover:text-white">
                  academy@lyzr.ai
                </a>
              </li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark tone="white" />
          <div className="flex flex-wrap items-center gap-6 text-[14px] text-white/60">
            <span>© {new Date().getFullYear()} Lyzr. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
