"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";
import { samples } from "@/lib/samples";

export default function SamplesIndex() {
  const { t, lang } = useI18n();

  const title = lang === "pt" ? "Amostras" : "Samples";
  const lead =
    lang === "pt"
      ? "Leia uma amostra curta de cada volume (sem spoilers relevantes) e veja qual fala com você."
      : "Read a short sample from each volume (no major spoilers) and see which one speaks to you.";

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeader title={title} lead={lead} />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {samples.map((s) => {
          const cover = t(`bookPages.${s.bookKey}.cover`) as string;
          const label = lang === "pt" ? s.title.pt : s.title.en;
          const sub = s.subtitle ? (lang === "pt" ? s.subtitle.pt : s.subtitle.en) : "";

          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
            >
              <GlowCard className="overflow-hidden">
                <div className="flex gap-4">
                  <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <Image
                      src={cover}
                      alt={label}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-mono text-gold/80">{sub}</div>
                    <div className="mt-1 text-lg font-semibold leading-tight">{label}</div>
                    <p className="mt-2 text-sm text-white/70 line-clamp-3">{lang === "pt" ? s.lead.pt : s.lead.en}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        href={`/samples/${s.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                      >
                        {t("common.readSample")}
                      </Link>
                      <Link
                        href={`/trilogy/${s.slug === "efeito-tigre" ? "efeito-tigre" : s.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
                      >
                        {t("common.learnMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
