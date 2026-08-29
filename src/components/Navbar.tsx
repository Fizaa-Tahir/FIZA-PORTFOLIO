"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-bg-secondary/80 backdrop-blur-md border border-border-pink"
              : "border border-transparent"
          }`}
        >
          <a href="#home" className="font-display font-semibold text-sm tracking-wide text-text-primary">
            FIZA<span className="text-accent-primary">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                  active === item.href ? "text-accent-secondary" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-text-primary p-1"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border-pink bg-bg-secondary/95 backdrop-blur-md p-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 font-mono text-xs tracking-[0.12em] uppercase text-text-secondary hover:text-accent-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
