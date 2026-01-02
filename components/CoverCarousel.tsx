"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/components/LangProvider";

export type CoverCarouselItem = {
  vol: string;
  title: string;
  cover: string;
  href: string;
};

export default function CoverCarousel({ items }: { items: CoverCarouselItem[] }) {
  const { t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="relative">
      {/* arrows (desktop) */}
      <div className="hidden md:flex absolute -top-12 right-0 items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-white/80" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center hover:bg-white/10 transition"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-white/80" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-4 px-4 overflow-x-auto flex gap-4 snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it) => (
          <motion.div
            key={it.href}
            whileHover={{ rotate: -0.7, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="snap-start shrink-0 w-[230px] sm:w-[260px] md:w-[300px]"
          >
            <Link
              href={it.href}
              className="group block rounded-3xl border border-white/10 bg-white/5 shadow-glow backdrop-blur overflow-hidden"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={it.cover}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 300px"
                  priority={false}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_15%,rgba(201,162,39,.14),transparent_55%),linear-gradient(to_top,rgba(0,0,0,.82),transparent_55%)]" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-mono text-white/75 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {it.vol}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-mono text-gold-soft/90">
                    {t("trilogy.title")}
                  </div>
                  <div className="mt-1 text-lg font-semibold leading-tight">
                    {it.title}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-2 text-sm text-white/75 group-hover:text-white/90 transition">
                    {t("common.learnMore")}
                    <span className="opacity-60 group-hover:opacity-100 transition">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
