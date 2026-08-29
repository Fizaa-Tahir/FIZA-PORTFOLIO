"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/SectionHeading";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * -10 });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent-primary/20 glow-blob animate-drift" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-accent-secondary/10 glow-blob animate-drift" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>{profile.eyebrow}</Eyebrow>

          <h1 className="font-display font-semibold text-5xl sm:text-6xl leading-[1.05] text-text-primary">
            {profile.heroHeading}
          </h1>

          <p className="mt-5 font-display text-2xl sm:text-3xl leading-tight text-text-secondary">
            {profile.heroStatement.map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="text-accent-secondary">{line}</span> : line}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-secondary">
            {profile.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Connect
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right column — portrait, signature treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto"
        >
          <div
            ref={imgRef}
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            className="relative w-[280px] sm:w-[360px] mx-auto"
            style={{ perspective: "800px" }}
          >
            {/* glow behind */}
            <div className="absolute -inset-6 rounded-[48%_52%_55%_45%/45%_48%_52%_55%] bg-accent-primary/25 glow-blob" />

            <motion.div
              animate={{ rotateX: tilt.y, rotateY: tilt.x }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="relative rounded-[48%_52%_55%_45%/45%_48%_52%_55%] overflow-hidden border border-border-pink-strong shadow-[0_0_60px_rgba(255,0,122,0.18)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/portrait.png"
                alt={profile.portraitAlt}
                width={720}
                height={880}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
