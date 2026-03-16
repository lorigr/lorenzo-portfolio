"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title: "DataWave",
    description:
      "A Next.js app that analyzes CSV files and builds a chart-based dashboard with AI-assisted insights powered by the Vercel AI SDK.",
    link: "https://github.com/lorigr/datawave",
    tags: ["Next.js", "CSV Analysis", "Dashboard", "Vercel AI SDK"],
  },
  {
    title: "Voice Presentation",
    description:
      "A real-time tool that transcribes live speech with an LLM and generates a presentation deck as you speak. It also explores a Chrome extension to capture tab audio as input.",
    link: "https://github.com/lorigr/voice-presentation",
    tags: ["LLM", "Real-time", "Speech-to-Text", "Chrome Extension"],
  },
  {
    title: "Recipe Finder",
    description:
      "A mobile-first PWA that suggests recipes from ingredients available in your fridge or pantry, taking expiration dates into account and using an LLM to generate personalized ideas.",
    link: "https://github.com/lorigr/recipe-finder",
    tags: ["PWA", "Mobile", "LLM", "Food Tech"],
  },
  {
    title: "Welbemo.com",
    description:
      "Former startup product: a web app that tracks employee mental well-being, then returns data-driven insights and suggested actions for companies.",
    link: "https://github.com/lorigr/buddywork-landing",
    titleLink: "https://buddywork-landing-inky.vercel.app/",
    tags: ["Startup", "Web App", "Analytics", "Mental Well-being"],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const getScrollStep = () => {
    const container = scrollContainerRef.current;
    if (!container) return 320;

    const firstCard = container.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(container).columnGap || "0") || 0;
    if (!firstCard) return Math.max(container.clientWidth * 0.8, 280);

    return firstCard.getBoundingClientRect().width + gap;
  };

  const scrollProjects = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const amount = getScrollStep();
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const next =
      direction === "left"
        ? Math.max(container.scrollLeft - amount, 0)
        : Math.min(container.scrollLeft + amount, maxScrollLeft);

    container.scrollBy({
      left: next - container.scrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isHoveringCarousel) return;

    const interval = window.setInterval(() => {
      const step = getScrollStep();
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = container.scrollLeft + step;

      if (next >= maxScrollLeft - 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      container.scrollTo({ left: next, behavior: "smooth" });
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isHoveringCarousel]);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-black border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left label */}
          <div>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              04 / Projects
            </span>
          </div>

          {/* Right content */}
          <div ref={ref} className="min-w-0 flex flex-col gap-8">
            <div className="flex items-end justify-between">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              >
                Selected work
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <button
                  type="button"
                  aria-label="Scroll projects left"
                  onClick={() => scrollProjects("left")}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 hover:border-white/35 hover:text-white transition-colors"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  type="button"
                  aria-label="Scroll projects right"
                  onClick={() => scrollProjects("right")}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 hover:border-white/35 hover:text-white transition-colors"
                >
                  <ChevronRight size={14} />
                </button>
                <a
                  href="https://github.com/lorigr?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/30 hover:text-white transition-colors font-mono"
                >
                  <Github size={14} />
                  All repos
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-full overflow-hidden"
              onMouseEnter={() => setIsHoveringCarousel(true)}
              onMouseLeave={() => setIsHoveringCarousel(false)}
            >
              <HoverEffect
                items={projects}
                horizontal
                scrollRef={scrollContainerRef}
                className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
