"use client";

import SectionHeader from "@/components/SectionHeader";
import StoryScroll from "@/components/StoryScroll";
import BookCard from "@/components/BookCard";
import HeroBestseller from "@/components/HeroBestseller";
import { useI18n } from "@/components/LangProvider";

export default function HomePage() {
  const { t } = useI18n();
  const books = t("trilogy.books") as any[];

  return (
    <div>
      {/* Premium hero */}
      <HeroBestseller
        books={books.map((b) => ({
          vol: b.vol,
          title: b.title,
          cover: b.cover,
          logline: b.logline
        }))}
      />

      {/* Proof points */}
      <StoryScroll />

{/* Trilogy showcase */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader title={t("trilogy.title")} lead={t("trilogy.lead")} />
        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {books.map((b) => (
            <BookCard key={b.title} book={b} />
          ))}
        </div>

        {/* Premium callout banner */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-glow backdrop-blur">
          <div className="max-w-2xl">
            <div className="font-mono text-xs tracking-widest text-gold/80">
              {t("home.supportCard.kicker")}
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
              {t("home.supportCard.title")}
            </div>
            <p className="mt-3 text-white/70">
              {t("home.supportCard.lead")}
            </p>
            <a
              href="/community"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-5 py-3 text-sm text-gold-soft hover:bg-gold/15 transition"
            >
              {t("home.supportCard.cta")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
