"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/LangProvider";

/**
 * Minimal wordmark to reinforce brand identity without competing with the hero headline.
 * Uses i18n so it matches the current language (PT/EN).
 */
export default function BrandWordmark({ className }: { className?: string }) {
  const { t, lang } = useI18n();

  const title = (t("brand.title") as string) || "Efeito Tigre";
  const parts = title.split(/\s+/).filter(Boolean);

  // Keep the visual emphasis on "Tigre/Tiger".
  const highlightIndex = lang === "en" ? 0 : Math.max(0, parts.length - 1);

  return (
    <div className={cn("inline-flex items-center", className)} aria-label={title}>
      <div className="relative">
        <div className="font-mono text-[11px] md:text-xs tracking-[0.42em] uppercase text-white/80">
          {parts.map((p, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 ? " " : ""}
              {idx === highlightIndex ? (
                <span className="text-gold-soft">{p}</span>
              ) : (
                <span>{p}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-2 h-px w-28 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
      </div>
    </div>
  );
}
