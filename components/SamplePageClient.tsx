"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Download, LifeBuoy, ShoppingCart } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/components/LangProvider";
import { useBuyModal } from "@/components/BuyModalProvider";
import { getSampleBySlug } from "@/lib/samples";

export default function SamplePageClient({ slug }: { slug: string }) {
  const { lang, t } = useI18n();
  const { openBuy } = useBuyModal();
  const sample = getSampleBySlug(slug);

  if (!sample) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeader
          title={lang === "pt" ? "Amostra não encontrada" : "Sample not found"}
          lead={lang === "pt" ? "Volte para a lista de amostras." : "Go back to the samples list."}
        />
        <div className="mt-6">
          <Link
            href="/samples"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
          >
            <BookOpen className="h-4 w-4" />
            {lang === "pt" ? "Ver amostras" : "See samples"}
          </Link>
        </div>
      </div>
    );
  }

  const cover = t(`bookPages.${sample.bookKey}.cover`) as string;
  const title = lang === "pt" ? sample.title.pt : sample.title.en;
  const subtitle = sample.subtitle ? (lang === "pt" ? sample.subtitle.pt : sample.subtitle.en) : "";
  const lead = lang === "pt" ? sample.lead.pt : sample.lead.en;
  const notice = lang === "pt" ? sample.contentNotice.pt : sample.contentNotice.en;
  const pdfUrl = lang === "pt" ? sample.pdfUrl.pt : sample.pdfUrl.en;
  const excerpt = lang === "pt" ? sample.excerpt.pt : sample.excerpt.en;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <Link
          href="/samples"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
        >
          <BookOpen className="h-4 w-4" />
          {lang === "pt" ? "Voltar para Amostras" : "Back to Samples"}
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr] items-start">
        <div className="sticky top-24">
          <GlowCard className="overflow-hidden">
            <div className="relative h-[460px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={cover}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.85),transparent_55%)]" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xl font-semibold leading-tight">{title}</div>
                {subtitle ? <div className="mt-1 text-xs text-white/60">{subtitle}</div> : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => openBuy({ bookKey: sample.bookKey })}
                className="inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold-soft hover:bg-gold/15 transition"
              >
                <ShoppingCart className="h-4 w-4" />
                {t("common.buy")}
              </button>

              <a
                href={pdfUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
              >
                <Download className="h-4 w-4" />
                {lang === "pt" ? "Baixar PDF" : "Download PDF"}
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
          <SectionHeader title={title} lead={lead} />

          <GlowCard className="mt-6">
            <div className="text-xs font-mono tracking-widest text-gold/80">
              {lang === "pt" ? "AVISO DE CONTEÚDO" : "CONTENT NOTE"}
            </div>
            <p className="mt-2 text-sm text-white/75">{notice}</p>
          </GlowCard>

          <div className="mt-8 space-y-4">
            {excerpt.map((p) => (
              <p key={p} className="text-white/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <GlowCard>
              <div className="text-sm font-semibold">{lang === "pt" ? "Quer continuar?" : "Want to continue?"}</div>
              <p className="mt-2 text-sm text-white/70">
                {lang === "pt"
                  ? "Você pode baixar uma amostra em PDF ou ir direto para a página do livro para ver mais detalhes."
                  : "You can download a PDF sample or go to the book page for more details."}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/trilogy/${sample.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
                >
                  <BookOpen className="h-4 w-4" />
                  {t("common.learnMore")}
                </Link>
                <a
                  href={pdfUrl}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                >
                  <Download className="h-4 w-4" />
                  {lang === "pt" ? "Baixar PDF" : "Download PDF"}
                </a>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}
