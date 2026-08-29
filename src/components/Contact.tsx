"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/15 glow-blob" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-tight text-text-primary">
            Let&apos;s build something.
          </h2>
          <p className="mt-5 text-[15px] text-text-secondary max-w-md mx-auto leading-relaxed">
            Interested in AI, web development, or building something new? I&apos;d love to connect.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${profile.email}`}>Email Me</Button>
            <Button href={profile.linkedin} variant="secondary" external>
              LinkedIn
            </Button>
            <Button href={profile.github} variant="secondary" external>
              GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
