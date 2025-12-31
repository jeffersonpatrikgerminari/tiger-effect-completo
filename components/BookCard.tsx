"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, BookOpen } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";

type Book = {
  vol: string;
  title: string;
  titleEnHint?: string;
  cover: string;
  logline: string;
  synopsis: string;
  buyUrl?: string;
};

export default function BookCard({ book }: { book: Book }) {
  const { t } = useI18n();
const ASSET_V = "20251231";
const withV = (src: string) => (src?.includes("?") ? `${src}&v=${ASSET_V}` : `${src}?v=${ASSET_V}`);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <GlowCard className="h-full overflow-hidden group">
        {/* cover */}
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image
  src={withV(book.cover)}
  alt={book.title}
  fill
  unoptimized
  className="object-cover transition duration-500 group-hover:scale-[1.03]"
  sizes="(max-width: 1024px) 100vw, 33vw"
/>
          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(201,162,39,.22),transparent_35%),linear-gradient(to_top,rgba(0,0,0,.82),transparent_55%)]" />

          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-mono text-white/75 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {book.vol}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-xs font-mono text-gold-soft/90">{book.logline}</div>
            <div className="mt-1 text-xl font-semibold leading-tight">{book.title}</div>
            {book.titleEnHint ? (
              <div className="mt-1 text-xs text-white/55">{book.titleEnHint}</div>
            ) : null}
          </div>
        </div>

        {/* copy */}
        <p className="mt-4 text-sm text-white/70 line-clamp-5">
          {book.synopsis}
        </p>

        {/* actions */}
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={book.buyUrl || "#"}
            className="inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold-soft hover:bg-gold/15 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            {t("common.buy")}
          </a>

          <a
            href="/trilogy"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
          >
            <BookOpen className="h-4 w-4" />
            {t("common.learnMore")}
          </a>
        </div>
      </GlowCard>
    </motion.article>
  );
}

