"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/lorigr",
    handle: "@lorigr",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lorenzo-grassi-4b6683165/",
    handle: "Lorenzo Grassi",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:9lorenzograssi9@gmail.com",
    handle: "9lorenzograssi9@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left label */}
          <div>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
              05 / Contact
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
              Let&apos;s work
              <br />
              <span className="text-white/30">together.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/40 text-base leading-relaxed max-w-md"
            >
              Whether you have a project in mind, want to collaborate, or just
              want to connect — my inbox is always open.
            </motion.p>

            {/* Main CTA */}
            <motion.a
              href="mailto:your@email.com"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium rounded-full w-fit hover:bg-white/90 transition-all duration-200"
            >
              <Mail size={16} />
              Say hello
              <ArrowUpRight
                size={14}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 pt-4 border-t border-white/5"
            >
              {socials.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + idx * 0.08 }}
                  className="group flex items-center justify-between max-w-sm py-2 text-white/40 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <social.icon size={16} />
                    <span className="text-sm">{social.label}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs text-white/25 group-hover:text-white/50 transition-colors">
                      {social.handle}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-50 transition-opacity"
                    />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
