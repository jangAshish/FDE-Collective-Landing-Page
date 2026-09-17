import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { buttonStyles } from "./primitives";
import lyzrLogo from "@/assets/lyzr-logo.png.asset.json";

function Logo({ tone = "ink" }: { tone?: "ink" | "white" }) {
  return (
    <img
      src={lyzrLogo.url}
      alt="Lyzr"
      className={`h-7 w-auto ${tone === "white" ? "invert" : ""}`}
    />
  );
}

export { Logo };

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "white" }) {
  return (
    <span className="flex items-center gap-3">
      <Logo tone={tone} />
      <span
        className={`hidden border-l pl-3 font-mono text-mono font-medium uppercase tracking-[0.1em] sm:inline ${
          tone === "white" ? "border-white/25 text-white/80" : "border-line text-ink-mid"
        }`}
      >
        FDE Collective
      </span>
    </span>
  );
}

type NavItem = { label: string; href?: string; to?: string };

const homeLinks: NavItem[] = [
  { label: "The role", href: "#definition" },
  { label: "Skills", href: "#skills" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Mentors", href: "#mentors" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav({ variant = "home" }: { variant?: "home" | "course" }) {
  const [open, setOpen] = useState(false);
  const links = homeLinks;

  const renderLink = (link: NavItem, className: string, onClick?: () => void) =>
    link.to ? (
      <Link key={link.label} to={link.to} onClick={onClick} className={className}>
        {link.label}
      </Link>
    ) : (
      <a key={link.label} href={link.href} onClick={onClick} className={className}>
        {link.label}
      </a>
    );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-line/70 bg-canvas/90 backdrop-blur-[16px]">
        <div className="mx-auto flex h-full w-full max-w-[1408px] items-center justify-between px-6">
          <Link to="/" aria-label="The FDE Collective home">
            <Wordmark tone="ink" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) =>
              renderLink(
                link,
                "text-[15px] font-medium text-ink-mid transition-colors duration-200 ease-out hover:text-navy",
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:enterprise@lyzr.ai?subject=Enterprise%20FDE%20Team%20Training"
              className="hidden items-center rounded-button border border-border-strong px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-navy transition-colors hover:border-navy hover:bg-canvas-alt sm:inline-flex"
            >
              For Enterprise
            </a>
            <a
              href="#pricing"
              className={`${buttonStyles.primary} !py-2.5 !px-5 text-sm max-lg:!hidden`}
            >
              Register for Masterclass
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="text-navy lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-canvas lg:hidden">
          <div className="flex h-[72px] items-center justify-between border-b border-line px-6">
            <Wordmark />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-navy"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-6 px-6 py-10">
            {links.map((link) =>
              renderLink(link, "text-h3-m font-semibold text-navy", () => setOpen(false)),
            )}
            {cta.href.startsWith("/") ? (
              <Link
                to={cta.href}
                onClick={() => setOpen(false)}
                className={`${buttonStyles.primary} mt-4`}
              >
                {cta.label}
              </Link>
            ) : (
              <a
                href={cta.href}
                onClick={() => setOpen(false)}
                className={`${buttonStyles.primary} mt-4`}
              >
                {cta.label}
              </a>
            )}
          </nav>
        </div>
      ) : null}
    </>
  );
}
