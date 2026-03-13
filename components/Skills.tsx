"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "CapacitorJS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Coolify", category: "DevOps" },
];

const categories = ["Language", "Frontend", "Backend", "Database", "DevOps"];

const categoryColors: Record<string, string> = {
  Language: "border-white/20 text-white/80",
  Frontend: "border-white/15 text-white/70",
  Backend: "border-white/15 text-white/70",
  Database: "border-white/10 text-white/60",
  DevOps: "border-white/10 text-white/60",
  Cloud: "border-white/10 text-white/60",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left label */}
          <div>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              02 / Skills
            </span>
          </div>

          {/* Right content */}
          <div ref={ref} className="flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Tech I work with
            </motion.h2>

            {/* Skills by category */}
            <div className="flex flex-col gap-6">
              {categories.map((cat, catIdx) => {
                const catSkills = skills.filter((s) => s.category === cat);
                if (!catSkills.length) return null;
                return (
                  <div key={cat} className="flex flex-col gap-3">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIdx * 0.07 }}
                      className="font-mono text-xs text-white/25 tracking-widest uppercase"
                    >
                      {cat}
                    </motion.span>
                    <div className="flex flex-wrap gap-2">
                      {catSkills.map((skill, idx) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: catIdx * 0.07 + idx * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            scale: 1.05,
                            borderColor: "rgba(255,255,255,0.4)",
                          }}
                          className={`px-3 py-1.5 rounded-full border text-sm font-mono cursor-default transition-colors duration-200 ${categoryColors[cat]}`}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
