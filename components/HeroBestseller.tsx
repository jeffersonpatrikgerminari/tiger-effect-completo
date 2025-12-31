"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useI18n } from "@/components/LangProvider";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type Book = {
  vol: string;
  title: string;
  cover: string;
  logline: string;
};

function withAltExts(src: string) {
  if (!src) return [];
  const hasExt = /\.[a-zA-Z0-9]+$/.test(src);
  if (!hasExt) return [`${src}.png`, `${src}.jpg`, `${src}.jpeg`, `${src}.webp`];

  return [
    src,
    src.replace(/\.png$/i, ".jpg"),
    src.replace(/\.png$/i, ".jpeg"),
    src.replace(/\.png$/i, ".webp"),
    src.replace(/\.jpg$/i, ".png"),
    src.replace(/\.jpeg$/i, ".png"),
    src.replace(/\.webp$/i, ".png")
  ];
}

export default function HeroBestseller({ books }: { books: Book[] }) {
  const { t } = useI18n();

  // tenta achar o BOX na lista
  const boxFromList =
    books?.find((b) => String(b.vol).toUpperCase() === "BOX")?.cover || "";

  // fallback: pega do i18n (trilogy.boxCover ou home.heroCover)
  const boxCover =
    boxFromList ||
    ((t("trilogy.boxCover") as string) ?? "") ||
    ((t("home.heroCover") as string) ?? "") ||
    "";

  const boxCandidates = useMemo(() => {
    const base = [
      ...withAltExts(boxCover),
      "/books/pt/box.png",
      "/books/en/box.png"
    ];
    return Array.from(new Set(base.filter(Boolean)));
  }, [boxCover]);

  const [boxIdx, setBoxIdx] = useState(0);
  useEffect(() => setBoxIdx(0), [boxCover]);

  const boxSrc = boxCandidates[boxIdx] || "";

  // só os 3 livros (sem o BOX)
  const stack = (books || [])
    .filter((b) => String(b.vol).toUpperCase() !== "BOX")
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      {/* glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-gold/12 blur-3xl" />
        <div className="absolute -bottom-52 right-[-120px] h-[620px] w-[620px] rounded-full bg-alert/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
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
                href="/community"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition"
              >
                {t("home.ctaCommunity")} <ChevronRight className="h-4 w-4" />
              </Link>

              <Link
                href="/algorithm"
                className="inline-flex items-center gap-2 rounded-xl border border-alert/25 bg-alert/10 px-5 py-3 text-sm text-white/90 hover:bg-alert/15 transition"
              >
                {t("home.ctaAlgorithm")} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 text-xs text-white/50">{t("home.warning")}</div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto h-[420px] w-[340px] md:ml-auto">
              {/* base plate */}
              <div className="absolute inset-0 z-0 rounded-[28px] border border-white/10 bg-white/5 shadow-glow backdrop-blur" />
              <div className="absolute inset-0 z-0 rounded-[28px] [mask-image:radial-gradient(circle_at_60%_20%,black,transparent_70%)] bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,39,.20),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(239,68,68,.12),transparent_42%)]" />

              {/* ✅ BOX atrás (agora com next/image) */}
              {boxSrc ? (
                <motion.div
                  className="absolute inset-0 z-[1] rounded-[28px] overflow-hidden pointer-events-none"
                  animate={{ y: [0, -8, 0], rotate: [-1.3, 1.3, -1.3] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-8 md:inset-10 rounded-[22px] overflow-hidden">
                    <Image
                      key={boxSrc}
                      src={boxSrc}
                      alt="Box set cover"
                      fill
                      sizes="420px"
                      className="object-cover opacity-[0.92] scale-[1.02]"
                      priority
                      onError={() =>
                        setBoxIdx((i) => (i + 1 < boxCandidates.length ? i + 1 : i))
                      }
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.35),transparent_65%)]" />
                  </div>
                </motion.div>
              ) : null}

              {/* livros na frente */}
              {stack.map((b, i) => {
                const rotate = i === 0 ? -10 : i === 1 ? 0 : 10;
                const x = i === 0 ? -22 : i === 1 ? 0 : 22;
                const z = i === 1 ? 30 : 10;
                const zIndex = i === 1 ? 30 : i === 0 ? 20 : 10;

                return (
                  <motion.div
                    key={b.title}
                    className={cn(
                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                      "w-[210px] h-[310px] md:w-[220px] md:h-[324px]"
                    )}
                    style={{ transformStyle: "preserve-3d", zIndex }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div
                      className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10"
                      style={{
                        transform: `translateX(${x}px) rotate(${rotate}deg) translateZ(${z}px)`,
                        boxShadow:
                          "0 30px 70px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.08)"
                      }}
                    >
                      <Image
                        src={b.cover}
                        alt={b.title}
                        fill
                        className="object-cover"
                        sizes="240px"
                        priority={i === 1}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.78),transparent_55%)]" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] font-mono tracking-widest text-gold-soft/90">
                          {b.vol}
                        </div>
                        <div className="mt-1 text-sm font-semibold leading-tight">
                          {b.title}
                        </div>
                        <div className="mt-1 text-[11px] text-white/65">
                          {b.logline}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


