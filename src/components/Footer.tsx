import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border-pink py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-sm text-text-primary">FIZA</p>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-text-secondary">
            AI Enthusiast • Web • AI Marketing
          </p>
        </div>
        <p className="text-xs text-text-secondary">© 2026 {profile.fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
