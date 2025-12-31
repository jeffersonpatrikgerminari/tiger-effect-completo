"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/components/LangProvider";

export default function Navbar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { href: "/", label: t("nav.home") },
      { href: "/trilogy", label: t("nav.trilogy") },
      { href: "/algorithm", label: t("nav.algorithm") },
      { href: "/community", label: t("nav.community") },
      { href: "/authors", label: t("nav.authors") }
    ],
    [t]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-noir/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center">
            <span className="font-mono text-xs text-gold-soft">TE</span>
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">{t("brand.title")}</div>
            <div className="text-xs text-white/60">{t("brand.subtitle")}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "relative px-3 py-2 text-sm rounded-lg transition",
                  active ? "text-gold-soft" : "text-white/70 hover:text-white"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-0 rounded-lg bg-gold/10 border border-gold/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{it.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            className="md:hidden h-10 w-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-noir">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm",
                  pathname === it.href ? "bg-gold/10 text-gold-soft" : "text-white/75 hover:bg-white/5"
                )}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
