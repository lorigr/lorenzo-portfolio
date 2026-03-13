"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
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
    tags: ["Startup", "Web App", "Analytics", "Mental Well-being"],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <div ref={ref} className="flex flex-col gap-8">
            <div className="flex items-end justify-between">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
              >
                Selected work
              </motion.h2>

              <motion.a
                href="https://github.com/lorigr?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-1.5 text-sm text-white/30 hover:text-white transition-colors font-mono"
              >
                <Github size={14} />
                All repos
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <HoverEffect items={projects} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
