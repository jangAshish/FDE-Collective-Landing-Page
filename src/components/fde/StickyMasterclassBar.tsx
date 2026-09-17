import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { buttonStyles } from "./primitives";

/**
 * Masterclass Banner Content Configuration
 * You can tweak any of these fields to test different hooks.
 */
export const masterclassConfig = {
  // Pill badge at top of content
  badge: "Free Live Masterclass",

  // Main bold headline
  title: "Building Production AI Agents",

  // Context line (works without a fixed date!)
  subtitle: "Next session schedule announcing soon",

  // CTA Button label
  buttonText: "Register for Masterclass",

  // If you have a Luma, Zoom, or Eventbrite link later, paste it here.
  // When left empty (""), it opens the on-page reservation modal.
  externalUrl: "",
};

export function StickyMasterclassBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Registration form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    focusArea: "Multi-Agent Orchestration & State",
  });

  // Slide up from bottom when user scrolls into the second fold (~450px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    if (masterclassConfig.externalUrl) {
      window.open(masterclassConfig.externalUrl, "_blank", "noopener,noreferrer");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <>
      {/* Floating Bottom Sticky Bar matching the site's design system */}
      <AnimatePresence>
        {isVisible && !isDismissed && (
          <motion.aside
            role="complementary"
            aria-label="Masterclass registration banner"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 py-3.5 shadow-lg backdrop-blur-md"
          >
            <div className="page-gutter mx-auto flex max-w-[1152px] items-center justify-between gap-4">
              {/* Left Column: Eyebrow, Title, and Subtitle */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                    {masterclassConfig.badge}
                  </span>
                  <span className="text-ink-low/40" aria-hidden="true">
                    •
                  </span>
                  <h4 className="text-[15px] font-semibold text-navy sm:text-base">
                    {masterclassConfig.title}
                  </h4>
                </div>
                <p className="mt-0.5 text-xs text-ink-mid sm:text-[13px]">
                  {masterclassConfig.subtitle}
                </p>
              </div>

              {/* Right Column: CTA Button and Dismiss */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className={`${buttonStyles.primary} !h-10 !px-5 !text-sm font-semibold shadow-xs`}
                >
                  {masterclassConfig.buttonText}
                </button>

                <button
                  type="button"
                  onClick={() => setIsDismissed(true)}
                  aria-label="Dismiss banner"
                  className="flex size-8 items-center justify-center rounded-md text-ink-low transition-colors hover:bg-canvas-alt hover:text-navy"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Instant Reservation Modal matching the site's design system */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-card border border-line bg-white p-7 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-ink-low transition-colors hover:bg-canvas-alt hover:text-navy"
                aria-label="Close modal"
              >
                <X className="size-4" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-tint px-3 py-1 font-mono text-[11px] font-semibold text-gold-deep">
                    <Sparkles className="size-3.5 text-gold-deep" />
                    <span>Priority Access</span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                    Reserve Your Masterclass Seat
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mid">
                    Join Lyzr engineers for a live 90-minute architecture clinic on multi-agent workflows, state persistence, and enterprise guardrails. We will email your calendar invite and prep materials as soon as the session date is locked in.
                  </p>

                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-mid">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-line bg-canvas-alt px-3.5 py-2 text-sm text-navy placeholder-ink-low/60 transition-colors focus:border-gold-deep focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-mid">
                        Work / Personal Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-line bg-canvas-alt px-3.5 py-2 text-sm text-navy placeholder-ink-low/60 transition-colors focus:border-gold-deep focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-mid">
                        What topic are you most interested in?
                      </label>
                      <select
                        value={formData.focusArea}
                        onChange={(e) => setFormData({ ...formData, focusArea: e.target.value })}
                        className="mt-1.5 w-full rounded-md border border-line bg-canvas-alt px-3.5 py-2 text-sm text-navy transition-colors focus:border-gold-deep focus:bg-white focus:outline-none"
                      >
                        <option value="Multi-Agent Orchestration & State">
                          Multi-Agent Orchestration & State
                        </option>
                        <option value="Enterprise Security & Guardrails">
                          Enterprise Security & Guardrails
                        </option>
                        <option value="Connecting Tools & Real-Time APIs">
                          Connecting Tools & Real-Time APIs
                        </option>
                        <option value="Evaluation, Tracing & Production Rollout">
                          Evaluation, Tracing & Production Rollout
                        </option>
                        <option value="FDE Career Path & Interview Fast-Track">
                          FDE Career Path & Interview Fast-Track
                        </option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className={`${buttonStyles.primary} w-full !h-11 justify-center text-sm font-semibold`}
                      >
                        <span>Confirm Free Reservation</span>
                        <ArrowRight className="size-4 ml-1.5" />
                      </button>
                    </div>

                    <p className="text-center font-mono text-[11px] text-ink-low">
                      Free session. Zero sales pitch. You'll receive the direct Zoom & calendar invite.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold-tint text-gold-deep">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-navy">
                    You're on the priority list!
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mid">
                    Thanks <span className="font-semibold text-navy">{formData.name}</span>! We've saved your spot. As soon as the live date is scheduled, we'll send the calendar invite to <span className="font-semibold text-navy">{formData.email}</span>.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-button border border-line bg-canvas-alt px-6 py-2 text-sm font-semibold text-navy hover:bg-white"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
