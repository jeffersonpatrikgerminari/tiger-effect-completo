"use client";

import { useI18n } from "@/components/LangProvider";

type HeroBook = {
  vol: string;
  title: string;
  cover: string;
  logline?: string;
};

export default function HeroBestseller({
  books,
  boxCover
}: {
  books: HeroBook[];
  boxCover?: string;
}) {
  const { t } = useI18n();
  const trio = books.slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="pointer-events-none absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[560px] w-[560px] rounded-full bg-red-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-18 md:pb-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-gold/70" />
              {t("home.heroTag")}
            </div>

            <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl font-semibold tracking-tight text-white">
              {t("home.heroTitle")}
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-white/70">
              {t("home.heroLead")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/#trilogy"
                className="inline-flex items-center justify-center rounded-xl border border-gold/25 bg-gold/10 px-5 py-3 text-sm text-gold-soft hover:bg-gold/15 transition"
              >
                {t("home.ctaTrilogy")}
              </a>
              <a
                href="/#algorithm"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/85 hover:bg-white/10 transition"
              >
                {t("home.ctaAlgorithm")}
              </a>
              <a
                href="/community"
                className="inline-flex items-center justify-center rounded-xl border border-red-500/25 bg-red-500/10 px-5 py-3 text-sm text-white/90 hover:bg-red-500/15 transition"
              >
                {t("home.ctaCommunity")}
              </a>
            </div>

            <p className="mt-6 text-xs text-white/55">
              {t("home.warning")}
            </p>
          </div>

          {/* right: premium frame */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-gold/20 bg-[radial-gradient(120%_120%_at_10%_0%,rgba(200,160,60,0.25),rgba(255,255,255,0.04),rgba(0,0,0,0)_70%)] p-6 shadow-glow backdrop-blur">
              {/* inner frame */}
              <div className="relative h-[360px] md:h-[440px] rounded-[22px] border border-gold/15 bg-gradient-to-b from-[#2a2319]/70 to-black/30">
                {/* ✅ BOX cover behind */}
                <div className="absolute inset-0 grid place-items-center">
                  <img
                    src={boxCover || trio[0]?.cover}
                    alt=""
                    className="pointer-events-none select-none w-[68%] max-w-[340px] opacity-[0.22] saturate-110 contrast-110 blur-[0.2px] rotate-[-6deg] scale-[1.06] drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                  />
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_55%,rgba(200,160,60,0.18),rgba(0,0,0,0)_70%)]" />
                </div>

                {/* ✅ floating trio */}
                <div className="absolute inset-0">
                  {/* base shadow */}
                  <div className="pointer-events-none absolute bottom-7 left-1/2 h-10 w-[240px] -translate-x-1/2 rounded-full bg-black/45 blur-2xl" />

                  {/* stack */}
                  {trio[0] && (
                    <img
                      src={trio[0].cover}
                      alt={trio[0].title}
                      className="bookFloat1 absolute bottom-10 left-1/2 w-[165px] md:w-[190px] -translate-x-[140px] rotate-[-12deg] rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
                    />
                  )}

                  {trio[1] && (
                    <img
                      src={trio[1].cover}
                      alt={trio[1].title}
                      className="bookFloat2 absolute bottom-8 left-1/2 w-[178px] md:w-[205px] -translate-x-1/2 rotate-[2deg] rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
                    />
                  )}

                  {trio[2] && (
                    <img
                      src={trio[2].cover}
                      alt={trio[2].title}
                      className="bookFloat3 absolute bottom-11 left-1/2 w-[165px] md:w-[190px] translate-x-[115px] rotate-[12deg] rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
                    />
                  )}
                </div>

                {/* corner accent */}
                <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rounded-2xl border border-white/10 bg-white/5" />
              </div>

              {/* captions */}
              <div className="mt-5 grid gap-2">
                <div className="text-xs font-mono tracking-widest text-gold/80">
                  BEST-SELLER LOOK & FEEL
                </div>
                <div className="text-sm text-white/65">
                  {trio.map((b) => b.title).join(" • ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        .bookFloat1 {
          animation: float1 5.2s ease-in-out infinite;
        }
        .bookFloat2 {
          animation: float2 5.6s ease-in-out infinite;
        }
        .bookFloat3 {
          animation: float3 5.0s ease-in-out infinite;
        }

        @keyframes float1 {
          0% { transform: translateX(-140px) translateY(0px) rotate(-12deg); }
          50% { transform: translateX(-140px) translateY(-10px) rotate(-10deg); }
          100% { transform: translateX(-140px) translateY(0px) rotate(-12deg); }
        }
        @keyframes float2 {
          0% { transform: translateX(-50%) translateY(0px) rotate(2deg); }
          50% { transform: translateX(-50%) translateY(-12px) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(0px) rotate(2deg); }
        }
        @keyframes float3 {
          0% { transform: translateX(115px) translateY(0px) rotate(12deg); }
          50% { transform: translateX(115px) translateY(-9px) rotate(10deg); }
          100% { transform: translateX(115px) translateY(0px) rotate(12deg); }
        }
      `}</style>
    </section>
  );
}


