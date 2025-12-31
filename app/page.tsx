"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldAlert, Cpu, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import BookCard from "@/components/BookCard";
import { useI18n } from "@/components/LangProvider";

export default function HomePage() {
  const { t } = useI18n();
  const books = t("trilogy.books") as any[];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-alert/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/70">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {t("home.heroTag")}
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {t("home.heroTitle")}
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/70">
              {t("home.heroLead")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/trilogy"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-5 py-3 text-sm text-gold-soft hover:bg-gold/15 transition"
              >
                {t("home.ctaTrilogy")} <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/algorithm"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition"
              >
                {t("home.ctaAlgorithm")} <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-xl border border-alert/25 bg-alert/10 px-5 py-3 text-sm text-white/90 hover:bg-alert/15 transition"
              >
                {t("home.ctaCommunity")} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 text-xs text-white/50">
              {t("home.warning")}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader title={t("home.proofTitle")} />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <GlowCard>
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-alert" />
              <div className="font-semibold">Vol. 1</div>
            </div>
            <p className="mt-3 text-sm text-white/70">{(t("home.proofPoints") as string[])[0]}</p>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-gold-soft" />
              <div className="font-semibold">Vol. 2</div>
            </div>
            <p className="mt-3 text-sm text-white/70">{(t("home.proofPoints") as string[])[1]}</p>
          </GlowCard>

          <GlowCard>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-white/80" />
              <div className="font-semibold">Vol. 3</div>
            </div>
            <p className="mt-3 text-sm text-white/70">{(t("home.proofPoints") as string[])[2]}</p>
          </GlowCard>
        </div>
      </section>

      {/* Trilogy preview */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader title={t("trilogy.title")} lead={t("trilogy.lead")} />
        <div className="mt-8 grid lg:grid-cols-3 gap-4">
          {books.map((b) => (
            <BookCard key={b.title} book={b} />
          ))}
        </div>
      </section>
    </div>
  );
}
