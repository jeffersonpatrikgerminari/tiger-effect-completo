"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, ShoppingCart, LifeBuoy, ChevronLeft } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";
import { useBuyModal } from "@/components/BuyModalProvider";

export type BookKey =
  | "efeitoTigre"
  | "nasGarrasDoTigre"
  | "aFomeDoTigre"
  | "oTigreDeVidro";

type BookPageData = {
  vol: string;
  title: string;
  subtitle?: string;
  cover: string;
  synopsis: string;
  bullets: string[];
  excerpt: string;
  presentation: string[];
  triggers: string[];
  buyUrl?: string;
};

export default function BookLanding({ bookKey }: { bookKey: BookKey }) {
  const { t } = useI18n();
  const { openBuy } = useBuyModal();
  const data = t(`bookPages.${bookKey}`) as BookPageData;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <Link
          href="/trilogy"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
        >
          <ChevronLeft className="h-4 w-4" />
          {t("bookPages.backToTrilogy")}
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr] items-start">
        <div className="sticky top-24">
          <GlowCard className="overflow-hidden">
            <div className="relative h-[460px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={data.cover}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.85),transparent_55%)]" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-mono text-white/75 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-gold" />
                {data.vol}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xl font-semibold leading-tight">{data.title}</div>
                {data.subtitle ? (
                  <div className="mt-1 text-xs text-white/60">{data.subtitle}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => openBuy({ bookKey })}
                className="inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold-soft hover:bg-gold/15 transition"
              >
                <ShoppingCart className="h-4 w-4" />
                {t("common.buy")}
              </button>

              <a
                href="#sample"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
              >
                <BookOpen className="h-4 w-4" />
                {t("common.readSample")}
              </a>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-xl border border-alert/25 bg-alert/10 px-4 py-2 text-sm text-white/90 hover:bg-alert/15 transition"
              >
                <LifeBuoy className="h-4 w-4" />
                {t("nav.community")}
              </Link>
            </div>
          </GlowCard>
        </div>

        <div>
          <SectionHeader
            eyebrow={t("bookPages.eyebrow")}
            title={data.title}
            lead={data.synopsis}
          />

          <div className="mt-8 grid gap-4">
            <GlowCard>
              <div className="text-sm font-semibold">{t("bookPages.whatYoullFind")}</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {data.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gold/80 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>

            <GlowCard>
              <div className="text-sm font-semibold">{t("bookPages.contentNotice")}</div>
              <p className="mt-2 text-sm text-white/70">{t("bookPages.contentNoticeLead")}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {data.triggers.map((tg) => (
                  <li
                    key={tg}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tg}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>

          <div id="sample" className="mt-10">
            <SectionHeader title={t("bookPages.sampleTitle")} lead={t("bookPages.sampleLead")} />
            <div className="mt-4 rounded-3xl border border-white/10 bg-black/30 p-6 shadow-glow backdrop-blur">
              <div className="text-xs font-mono tracking-widest text-gold/80">{t("bookPages.microExcerpt")}</div>
              <blockquote className="mt-3 text-lg md:text-xl text-white/85 leading-relaxed">
                “{data.excerpt}”
              </blockquote>
            </div>
          </div>

          <div className="mt-10">
            <SectionHeader title={t("bookPages.presentationTitle")} />
            <div className="mt-4 space-y-4 text-sm text-white/70">
              {data.presentation.map((p, i) => {
                const isSubhead = p.length <= 48 && !/[.!?]/.test(p);
                const isSignoff = p.length <= 24 && /!$/.test(p);

                if (isSubhead) {
                  return (
                    <div
                      key={`${i}-sub`}
                      className="pt-2 text-[11px] font-mono tracking-widest text-gold/80"
                    >
                      {p}
                    </div>
                  );
                }

                return (
                  <p
                    key={`${i}-p`}
                    className={isSignoff ? "italic text-white/65" : undefined}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
