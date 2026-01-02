"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal wordmark to reinforce brand identity without competing with the hero headline.
 * The name stays the same in PT/EN, so it doesn't go through i18n.
 */
export default function BrandWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center", className)} aria-label="Efeito Tigre">
      <div className="relative">
        <div className="font-mono text-[11px] md:text-xs tracking-[0.42em] uppercase text-white/80">
          EFEITO <span className="text-gold-soft">TIGRE</span>
        </div>
        <div className="mt-2 h-px w-28 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0" />
      </div>
    </div>
  );
}
