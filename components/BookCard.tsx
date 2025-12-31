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

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <GlowCard className="h-full">
        <div className="flex gap-5">
          <div className="relative h-36 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover"
              sizes="96px"
              priority={false}
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono text-white/60">
              <span className="text-gold-soft">{book.vol}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{book.logline}</span>
            </div>

            <h3 className="mt-1 text-xl font-semibold leading-tight">
              {book.title}
            </h3>
            {book.titleEnHint ? (
              <div className="mt-1 text-xs text-white/50">
                {book.titleEnHint}
              </div>
            ) : null}

            <p className="mt-3 text-sm text-white/70 line-clamp-4">
              {book.synopsis}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
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
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
