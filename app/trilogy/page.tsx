"use client";

import SectionHeader from "@/components/SectionHeader";
import BookCard from "@/components/BookCard";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";

export default function TrilogyPage() {
  const { t } = useI18n();
  const booksRaw = t("trilogy.books") as any;
  const hrefByVol: Record<string, string> = {
    "Vol. 1": "/trilogy/nas-garras-do-tigre",
    "Vol. 2": "/trilogy/a-fome-do-tigre",
    "Vol. 3": "/trilogy/o-tigre-de-vidro"
  };
  const books = (Array.isArray(booksRaw) ? booksRaw : []).map((b: any) => ({
    ...b,
    href: b?.href || (b?.vol ? hrefByVol[String(b.vol)] : undefined) || "/trilogy"
  }));

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
          <a
            href="/trilogy/efeito-tigre"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
          >
            {t("common.learnMore")}
          </a>
        </GlowCard>
      </div>
    </div>
  );
}
