"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects, Project } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";

const filters = ["All", "AI & Machine Learning", "Web Development", "AI Marketing"] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl border border-border-pink bg-bg-secondary/50 p-7 md:p-9 transition-all duration-300 hover:border-accent-primary/50 hover:bg-bg-secondary/80"
    >
      {project.image && (
        <div className="relative -mx-7 -mt-7 md:-mx-9 md:-mt-9 mb-7 aspect-[16/9] overflow-hidden rounded-t-3xl">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-transparent to-transparent" />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] tracking-[0.16em] text-accent-secondary">
            PROJECT {project.index}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-text-primary">{project.name}</h3>
          <span className="mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && !project.liveUrl.startsWith("[") && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <ExternalLink size={17} />
              <span className="font-mono text-[11px] uppercase tracking-[0.08em]">Live Site</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl.startsWith("[") && (
            <a
              href="#"
              aria-label={`${project.name} live demo`}
              className="text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-[15px] text-text-secondary leading-relaxed">{project.description}</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-5 text-sm">
        <div>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-primary">Problem</span>
          <p className="mt-1.5 text-text-secondary leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-primary">Approach</span>
          <p className="mt-1.5 text-text-secondary leading-relaxed">{project.approach}</p>
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-primary">Build</span>
          <p className="mt-1.5 text-text-secondary leading-relaxed">{project.build}</p>
        </div>
        <div>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-primary">Learning</span>
          <p className="mt-1.5 text-text-secondary leading-relaxed">{project.learning}</p>
        </div>
      </div>

      {project.result && (
        <p className="mt-5 rounded-lg border border-border-pink bg-bg-primary/50 px-4 py-3 text-sm text-text-primary">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent-secondary mr-2">
            Result
          </span>
          {project.result}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-pink px-3 py-1 text-[12px] text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.liveLabel || project.github?.startsWith("[") || project.liveUrl?.startsWith("[")) && (
        <p className="mt-5 font-mono text-[11px] text-text-secondary/70">
          {project.liveLabel ?? "Links to be added"}
        </p>
      )}
    </motion.article>
  );
}

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-28 md:py-36 bg-bg-secondary border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading eyebrow="Work" lines={["Projects, not just", "portfolio filler."]} />

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200 ${
                  filter === f
                    ? "border-accent-primary bg-accent-primary/15 text-accent-secondary"
                    : "border-border-pink text-text-secondary hover:border-border-pink-strong hover:text-text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
