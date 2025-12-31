"use client";

import { ShieldAlert, Cpu, Users } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import BookCard from "@/components/BookCard";
import HeroBestseller from "@/components/HeroBestseller";
import { useI18n } from "@/components/LangProvider";

export default function HomePage() {
  const { t } = useI18n();

  const allBooks = (t("trilogy.books") as any[]) ?? [];
  const booksNoBox = allBooks.filter(
    (b) => String(b?.vol).toUpperCase() !== "BOX"
  );

  const proofPoints = (t("home.proofPoints") as string[]) ?? [];
  const proofLabels = Array.isArray(t("home.proofLabels"))
    ? (t("home.proofLabels") as string[])
    : ["Queda", "Arquitetura", "Recuperação"];

  const v1 = booksNoBox[0]?.vol ?? "Vol. 1";
  const v2 = booksNoBox[1]?.vol ?? "Vol. 2";
  const v3 = booksNoBox[2]?.vol ?? "Vol. 3";

  return (
    <div>
      {/* Premium hero */}
      <HeroBestseller
        books={allBooks.map((b) => ({
          vol: b.vol,
          title: b.title,
          cover: b.cover,
          logline: b.logline
        }))}
      />

      {/* Proof points */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader title={t("home.proofTitle")} />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <GlowCard>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                <ShieldAlert className="h-5 w-5 text-alert" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/55">{v1}</div>
                <div className="font-semibold">{proofLabels[0] ?? "Queda"}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">{proofPoints[0]}</p>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                <Cpu className="h-5 w-5 text-gold-soft" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/55">{v2}</div>
                <div className="font-semibold">
                  {proofLabels[1] ?? "Arquitetura"}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">{proofPoints[1]}</p>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                <Users className="h-5 w-5 text-white/80" />
              </div>
              <div>
                <div className="text-xs font-mono text-white/55">{v3}</div>
                <div className="font-semibold">
                  {proofLabels[2] ?? "Recuperação"}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">{proofPoints[2]}</p>
          </GlowCard>
        </div>
      </section>

      {/* Trilogy showcase */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader title={t("trilogy.title")} lead={t("trilogy.lead")} />
        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {booksNoBox.map((b) => (
            <BookCard key={b.title} book={b} />
          ))}
        </div>

        {/* Premium callout banner */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-glow backdrop-blur">
          <div className="max-w-2xl">
            <div className="font-mono text-xs tracking-widest text-gold/80">
              {String(t("nav.community") ?? "COMMUNITY").toUpperCase()}
            </div>

            <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
              {t("community.title")}
            </div>

            <p className="mt-3 text-white/70">{t("community.lead")}</p>

            <Link
              href="/community"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-5 py-3 text-sm text-gold-soft hover:bg-gold/15 transition"
            >
              {t("home.ctaCommunity")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


