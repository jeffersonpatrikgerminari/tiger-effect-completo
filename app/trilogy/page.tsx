"use client";

import SectionHeader from "@/components/SectionHeader";
import BookCard from "@/components/BookCard";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";

export default function TrilogyPage() {
  const { t } = useI18n();
  const books = t("trilogy.books") as any[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeader title={t("trilogy.title")} lead={t("trilogy.lead")} />

      <div className="mt-8 grid lg:grid-cols-3 gap-4">
        {books.map((b) => (
          <BookCard key={b.title} book={b} />
        ))}
      </div>

      <div className="mt-10">
        <GlowCard>
          <div className="font-mono text-xs tracking-widest text-gold/80">BOX NOTE</div>
          <p className="mt-2 text-white/75">{t("trilogy.boxText")}</p>
        </GlowCard>
      </div>
    </div>
  );
}
