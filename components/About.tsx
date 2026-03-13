"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start"
        >
          {/* Left label */}
          <div>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              01 / About
            </span>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              I build things
              <br />
              <span className="text-white/30">that matter.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-base leading-relaxed max-w-xl"
            >
              {/* Placeholder — replace with your real bio */}
              Hi, I&apos;m Lorenzo. I&apos;m a software developer with a passion
              for crafting clean, efficient, and user-focused applications. I
              enjoy working across the full stack, from designing elegant APIs
              to building smooth, responsive interfaces.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-base leading-relaxed max-w-xl"
            >
              When I&apos;m not writing code, I&apos;m exploring new
              technologies, contributing to open source, or thinking about how
              software shapes the way people live and work.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
