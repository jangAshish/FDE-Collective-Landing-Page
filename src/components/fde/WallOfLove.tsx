import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, Pause, Play, X } from "lucide-react";
import { Reveal, SectionShell } from "./primitives";

import christopherChatImg from "@/assets/wall-of-love/review-christopher-chat.png";
import andresG2Img from "@/assets/wall-of-love/review-andres-g2.jpg";
import saeeLinkedinImg from "@/assets/wall-of-love/review-saee-linkedin.png";
import prathameshLinkedinImg from "@/assets/wall-of-love/review-prathamesh-linkedin.jpg";
import mayurLinkedinImg from "@/assets/wall-of-love/review-mayur-linkedin.jpg";

export const reviews = [
  {
    id: "christopher-chat",
    title: "Christopher Kunnur - Live Session Feedback",
    author: "Christopher Kunnur",
    role: "Live Workshop Participant",
    source: "Live Chat",
    image: christopherChatImg,
  },
  {
    id: "andres-g2",
    title: "Andres G. - G2 Review",
    author: "Andres G.",
    role: "Head of Data at Dentsu Aegis Network",
    source: "G2 Review",
    image: andresG2Img,
  },
  {
    id: "saee-linkedin",
    title: "Saee Kumbhar - Lyzr Agent Labs",
    author: "Saee Kumbhar",
    role: "AI Builder & Engineer",
    source: "LinkedIn",
    image: saeeLinkedinImg,
  },
  {
    id: "prathamesh-linkedin",
    title: "Prathamesh Patil - Lyzr Workshop",
    author: "Prathamesh Patil",
    role: "Full-Stack Engineer",
    source: "LinkedIn",
    image: prathameshLinkedinImg,
  },
  {
    id: "mayur-linkedin",
    title: "Mayur Shinde - Lyzr Agent Labs",
    author: "Mayur Shinde",
    role: "Campus Ambassador at Unstop",
    source: "LinkedIn",
    image: mayurLinkedinImg,
  },
];

export function WallOfLove() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tempPause, setTempPause] = useState(false);
  const tempPauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Overall effective pause state
  const isPaused = isManuallyPaused || isHovered || tempPause;

  // 4 sets of reviews for seamless infinite right-to-left scrolling
  const multiReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  // Set initial scroll offset to allow bi-directional scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 4;
    el.scrollLeft = singleSetWidth;
  }, []);

  // Continuous right-to-left auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let lastTime = performance.now();

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && el) {
        // ~45px/second smooth right-to-left scroll speed
        const speed = 0.045;
        el.scrollLeft += delta * speed;

        const singleSetWidth = el.scrollWidth / 4;
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Pause on manual click so the user can read the card they just scrolled to
  const triggerStepPause = () => {
    setTempPause(true);
    if (tempPauseTimerRef.current) clearTimeout(tempPauseTimerRef.current);
    tempPauseTimerRef.current = setTimeout(() => {
      setTempPause(false);
    }, 4500);
  };

  // Measure card width dynamically for responsive step navigation
  const getStepWidth = () => {
    const el = scrollRef.current;
    if (!el) return 360;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    return card ? card.offsetWidth + 20 : 360;
  };

  // "Go and stop" to the previous review
  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    triggerStepPause();
    const singleSetWidth = el.scrollWidth / 4;
    if (el.scrollLeft <= singleSetWidth) {
      el.scrollLeft += singleSetWidth;
    }
    el.scrollBy({ left: -getStepWidth(), behavior: "smooth" });
  };

  // "Go and stop" to the next review
  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    triggerStepPause();
    const singleSetWidth = el.scrollWidth / 4;
    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    }
    el.scrollBy({ left: getStepWidth(), behavior: "smooth" });
  };

  // Toggle continuous auto-scroll play/pause
  const togglePlayPause = () => {
    if (isManuallyPaused) {
      setIsManuallyPaused(false);
      setTempPause(false);
    } else {
      setIsManuallyPaused(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (tempPauseTimerRef.current) clearTimeout(tempPauseTimerRef.current);
    };
  }, []);

  return (
    <SectionShell id="testimonials" className="bg-[#0a0b0e] text-canvas">
      {/* Header with requested title and navigation controls */}
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-[780px]">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Wall of Love
            </p>
            <h2 className="mt-3 text-h2-m font-semibold tracking-tight text-white md:text-h2">
              Trusted by builders from workshops and live field sessions.
            </h2>
          </div>

          {/* Navigation Controls: Prev (go & stop), Play/Pause, Next (go & stop) */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous review (step and pause)"
              title="Previous review"
              className="flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-all hover:border-white/35 hover:bg-white/15 active:scale-95"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={togglePlayPause}
              aria-label={isManuallyPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              title={isManuallyPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              className="flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-all hover:border-white/35 hover:bg-white/15 active:scale-95"
            >
              {isManuallyPaused ? (
                <Play className="size-4 fill-current ml-0.5" />
              ) : (
                <Pause className="size-4 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next review (step and pause)"
              title="Next review"
              className="flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-all hover:border-white/35 hover:bg-white/15 active:scale-95"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Moving Right-to-Left Continuous Track */}
      <Reveal delay={0.08}>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsHovered(false), 2200);
          }}
          className="mt-12 flex gap-5 overflow-x-auto py-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {multiReviews.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              data-review-card
              onClick={() => setSelectedImage(review.image)}
              className="group relative w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#12141a] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-2xl sm:w-[320px] md:w-[340px]"
            >
              <div className="relative aspect-[819/1024] w-full overflow-hidden bg-[#181a22]">
                <img
                  src={review.image}
                  alt={review.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Hover expand badge */}
              <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                <Maximize2 className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-[92vw] overflow-hidden rounded-2xl border border-white/20 bg-[#111218] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
            <img
              src={selectedImage}
              alt="Review full preview"
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
