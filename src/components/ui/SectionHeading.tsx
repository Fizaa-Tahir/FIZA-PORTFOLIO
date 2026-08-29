"use client";

import { motion } from "framer-motion";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-8 bg-accent-primary/60" />
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-secondary">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  lines,
  align = "left",
}: {
  eyebrow: string;
  lines: string[];
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center mx-auto" : ""}
    >
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-text-primary">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}
