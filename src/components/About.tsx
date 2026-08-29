"use client";

import { motion } from "framer-motion";
import { about, education } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <SectionHeading eyebrow="About" lines={about.headline} />
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-[15px] leading-relaxed text-text-secondary max-w-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border-pink bg-bg-secondary/60 p-7 h-fit"
        >
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-secondary">
            Education
          </span>
          <p className="mt-4 font-display text-lg font-semibold text-text-primary leading-snug">
            {education.degree}
          </p>
          <div className="mt-3 space-y-1.5 text-sm text-text-secondary">
            <p>{education.university}</p>
            <p>
              {education.status} · {education.cgpa}
            </p>
            <p>Expected graduation: {education.expectedGraduation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
