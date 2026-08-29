"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" lines={["What I work with."]} />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl border border-border-pink bg-bg-primary/60 p-6 transition-colors duration-300 hover:border-accent-primary/50"
            >
              <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent-secondary">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-pink px-3 py-1.5 text-[13px] text-text-primary transition-all duration-200 group-hover:border-border-pink-strong"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
