"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" lines={["Where I'm applying it."]} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid md:grid-cols-[auto_1fr] gap-x-10 gap-y-2 max-w-3xl"
        >
          <span className="font-mono text-sm text-accent-secondary">{experience.period}</span>
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary">
              {experience.role} — {experience.company}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{experience.companyDescription}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary max-w-xl">
              {experience.overview}
            </p>

            <ol className="mt-6 space-y-3">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-4 text-[14px] leading-relaxed text-text-secondary">
                  <span className="font-mono text-accent-primary shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
