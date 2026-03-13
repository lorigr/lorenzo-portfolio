"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title: "Project Alpha",
    description:
      "Placeholder: describe what this project does, the problem it solves, and who it helps. Replace with your real project.",
    link: "https://github.com",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Beta",
    description:
      "Placeholder: a short and compelling description of the project. Mention the stack, the challenge, and the result.",
    link: "https://github.com",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Gamma",
    description:
      "Placeholder: describe what makes this project interesting. Open source? Significant performance gains? Solve a real pain point?",
    link: "https://github.com",
    tags: ["Python", "Docker", "AWS"],
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
