"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

const experiences = [
  {
    role: "IT Consultant",
    company: "Connect Reply",
    period: "July 2025 – Present",
    description:
      "Leading frontend development of a PWA platform to manage operational staff in large facilities, including airports. Building interactive dashboards, mobile support with Capacitor, and an AI module that generates analyses and charts from user prompts while collaborating with cross-functional teams in an agile environment.",
    tags: ["PWA", "Frontend", "Capacitor", "AI", "Agile"],
  },
  {
    role: "Co-Founder",
    company: "Welbemo.com",
    link: "https://buddywork-landing-inky.vercel.app/",
    period: "January 2024 – October 2025",
    description:
      "Co-founded Welbemo, a startup born from my master thesis project focused on the design and development of a web application. The platform helps companies monitor and improve employees' mental well-being through validated questionnaires and artificial intelligence.",
    tags: ["Startup", "Product Design", "Web App", "AI", "Mental Well-being"],
  },
  {
    role: "Research Fellow",
    company: "University of Turin",
    period: "January 2025 – July 2025",
    description:
      "Research grant at the Department of Computer Science focused on developing an AI-based application that enables university researchers to consult historical catalogs. The app includes over 200 catalogs and is used by dozens of academics.",
    tags: ["Research", "AI", "Digital Humanities", "Web Application"],
  },
  {
    role: "Intern",
    company: "Leonardo S.p.A.",
    period: "October 2021 – February 2022",
    description:
      "Developed a database and integrated it with the software used for balancing the C-27J aircraft.",
    tags: ["Database", "System Integration", "Aerospace"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-black border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left label */}
          <div>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              03 / Experience
            </span>
          </div>

          {/* Right content */}
          <div ref={ref}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10"
            >
              Where I&apos;ve worked
            </motion.h2>

            <TracingBeam className="pl-6">
              <div className="flex flex-col gap-10">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="group"
                  >
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-xl"
                      >
                        <div className="flex flex-col gap-2 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer">
                          {/* Header row */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <div>
                              <h3 className="text-white font-semibold text-lg">
                                {exp.role}
                              </h3>
                              <p className="text-white/50 text-sm">{exp.company}</p>
                            </div>
                            <span className="font-mono text-xs text-white/25 shrink-0">
                              {exp.period}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-white/40 text-sm leading-relaxed mt-2">
                            {exp.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-xs text-white/30 border border-white/10 rounded-full px-2.5 py-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col gap-2 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                        {/* Header row */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <div>
                            <h3 className="text-white font-semibold text-lg">
                              {exp.role}
                            </h3>
                            <p className="text-white/50 text-sm">{exp.company}</p>
                          </div>
                          <span className="font-mono text-xs text-white/25 shrink-0">
                            {exp.period}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-white/40 text-sm leading-relaxed mt-2">
                          {exp.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs text-white/30 border border-white/10 rounded-full px-2.5 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </div>
    </section>
  );
}
