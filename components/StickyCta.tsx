"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ShoppingCart, LifeBuoy } from "lucide-react";
import { useI18n } from "@/components/LangProvider";
import { useBuyModal } from "@/components/BuyModalProvider";
import type { BookKey } from "@/lib/buyLinks";
import { sampleHrefForBook } from "@/lib/bookRoutes";

function isHiddenPath(pathname: string) {
  // Hide on authenticated/community areas to keep the interface clean.
  return (
    pathname.startsWith("/community") ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/api")
  );
}

export default function StickyCta() {
  const pathname = usePathname() || "/";
  const { t } = useI18n();
  const { openBuy } = useBuyModal();

  if (isHiddenPath(pathname)) return null;

  const bookKey: BookKey =
    pathname === "/trilogy/nas-garras-do-tigre"
      ? "nasGarrasDoTigre"
      : pathname === "/trilogy/a-fome-do-tigre"
        ? "aFomeDoTigre"
        : pathname === "/trilogy/o-tigre-de-vidro"
          ? "oTigreDeVidro"
          : "efeitoTigre";

  const sampleHref = sampleHrefForBook(bookKey);
  const supportHref = "/community";

  return (
    <>
      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => openBuy({ bookKey })}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold/20 border border-gold/30 px-4 py-3 text-sm font-semibold text-gold-soft hover:bg-gold/25 transition"
            >
              <ShoppingCart className="h-4 w-4" />
              {t("stickyCta.buy")}
            </button>
            <Link
              href={sampleHref}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <BookOpen className="h-4 w-4" />
              {t("stickyCta.sample")}
            </Link>
          </div>

          <div className="mt-2 flex items-center justify-center">
            <Link
              href={supportHref}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/55 hover:text-white/75 transition"
            >
              <LifeBuoy className="h-3.5 w-3.5" />
              {t("stickyCta.support")}
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop floating card */}
      <div className="hidden md:block fixed bottom-6 right-6 z-[60]">
        <div className="w-[320px] rounded-3xl border border-white/10 bg-black/55 backdrop-blur shadow-glow p-4">
          <div className="text-xs font-mono tracking-widest text-gold/80">
            {t("stickyCta.label")}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => openBuy({ bookKey })}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold/20 border border-gold/30 px-4 py-2.5 text-sm font-semibold text-gold-soft hover:bg-gold/25 transition"
            >
              <ShoppingCart className="h-4 w-4" />
              {t("stickyCta.buy")}
            </button>
            <Link
              href={sampleHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <BookOpen className="h-4 w-4" />
              {t("stickyCta.sample")}
            </Link>
          </div>
          <div className="mt-2">
            <Link
              href={supportHref}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/55 hover:text-white/75 transition"
            >
              <LifeBuoy className="h-3.5 w-3.5" />
              {t("stickyCta.support")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
