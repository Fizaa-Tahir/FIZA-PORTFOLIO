"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[12px] tracking-[0.14em] uppercase transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-accent-primary text-text-primary hover:bg-accent-secondary hover:shadow-[0_0_28px_rgba(255,0,122,0.45)]"
      : "border border-border-pink text-text-primary hover:border-accent-secondary hover:bg-white/[0.03]";

  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles}`} {...linkProps}>
      {children}
      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
