"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ExternalLink, ShoppingCart, X } from "lucide-react";
import { useI18n } from "@/components/LangProvider";
import GlowCard from "@/components/GlowCard";
import {
  buyLinks,
  type BookKey,
  type Format,
  type Store
} from "@/lib/buyLinks";

type OpenArgs = {
  bookKey?: BookKey;
  store?: Store;
  format?: Format;
};

type BuyCtx = {
  openBuy: (args?: OpenArgs) => void;
  closeBuy: () => void;
};

const Ctx = createContext<BuyCtx | null>(null);

function getDefaultStore(lang: "pt" | "en"): Store {
  return lang === "pt" ? "BR" : "US";
}

function getBookTitle(t: (path: string) => any, bookKey: BookKey) {
  const data = t(`bookPages.${bookKey}`) as any;
  return String(data?.title || "Efeito Tigre");
}

function getBookSubtitle(t: (path: string) => any, bookKey: BookKey) {
  const data = t(`bookPages.${bookKey}`) as any;
  return String(data?.subtitle || "");
}

export default function BuyModalProvider({ children }: { children: React.ReactNode }) {
  const { t, lang } = useI18n();

  const [isOpen, setIsOpen] = useState(false);
  const [bookKey, setBookKey] = useState<BookKey>("efeitoTigre");
  const [store, setStore] = useState<Store>(() => getDefaultStore(lang));

  // When language changes, keep the current choice, but default on first open.
  useEffect(() => {
    if (!isOpen) setStore((s) => s || getDefaultStore(lang));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const closeBuy = () => setIsOpen(false);

  const openBuy = (args?: OpenArgs) => {
    const nextBook = args?.bookKey || "efeitoTigre";
    setBookKey(nextBook);
    setStore(args?.store || getDefaultStore(lang));
    setIsOpen(true);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const value = useMemo<BuyCtx>(() => ({ openBuy, closeBuy }), [isOpen, lang]);

  const title = getBookTitle(t, bookKey);
  const subtitle = getBookSubtitle(t, bookKey);
  const linkSet = buyLinks[bookKey]?.[store];
  const kindleUrl = linkSet?.kindle || "";
  const printUrl = linkSet?.print || "";

  return (
    <Ctx.Provider value={value}>
      {children}

      {isOpen ? (
        <div className="fixed inset-0 z-[80]">
          <button
            aria-label={t("buy.close")}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeBuy}
          />

          <div className="relative mx-auto mt-24 w-[92vw] max-w-[640px]">
            <GlowCard className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(201,162,39,.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(239,68,68,.12),transparent_40%)]" />
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono tracking-widest text-gold/80">
                      {t("buy.kicker")}
                    </div>
                    <div className="mt-2 text-2xl font-semibold leading-tight">{title}</div>
                    {subtitle ? (
                      <div className="mt-1 text-sm text-white/60">{subtitle}</div>
                    ) : null}
                  </div>

                  <button
                    onClick={closeBuy}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition"
                    aria-label={t("buy.close")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold">{t("buy.selectStore")}</div>
                  <div className="mt-3 inline-flex rounded-2xl border border-white/10 bg-white/5 p-1">
                    <button
                      onClick={() => setStore("BR")}
                      className={
                        store === "BR"
                          ? "rounded-2xl px-4 py-2 text-sm font-semibold bg-gold/20 border border-gold/25 text-gold-soft"
                          : "rounded-2xl px-4 py-2 text-sm text-white/75 hover:text-white"
                      }
                    >
                      🇧🇷 {t("buy.storeBR")}
                    </button>
                    <button
                      onClick={() => setStore("US")}
                      className={
                        store === "US"
                          ? "rounded-2xl px-4 py-2 text-sm font-semibold bg-gold/20 border border-gold/25 text-gold-soft"
                          : "rounded-2xl px-4 py-2 text-sm text-white/75 hover:text-white"
                      }
                    >
                      🇺🇸 {t("buy.storeUS")}
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold">{t("buy.selectFormat")}</div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <a
                      href={kindleUrl || undefined}
                      target={kindleUrl ? "_blank" : undefined}
                      rel={kindleUrl ? "noopener noreferrer" : undefined}
                      aria-disabled={!kindleUrl}
                      className={
                        kindleUrl
                          ? "group rounded-2xl border border-gold/25 bg-gold/10 p-4 hover:bg-gold/15 transition"
                          : "rounded-2xl border border-white/10 bg-white/5 p-4 opacity-60 cursor-not-allowed"
                      }
                      onClick={(e) => {
                        if (!kindleUrl) e.preventDefault();
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">
                            <ShoppingCart className="h-4 w-4" />
                            {t("buy.kindle")}
                          </div>
                          <div className="mt-1 text-xs text-white/60">
                            {kindleUrl ? t("buy.openInAmazon") : t("buy.comingSoon")}
                          </div>
                        </div>
                        {kindleUrl ? (
                          <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white/80 transition" />
                        ) : null}
                      </div>
                    </a>

                    <a
                      href={printUrl || undefined}
                      target={printUrl ? "_blank" : undefined}
                      rel={printUrl ? "noopener noreferrer" : undefined}
                      aria-disabled={!printUrl}
                      className={
                        printUrl
                          ? "group rounded-2xl border border-gold/25 bg-gold/10 p-4 hover:bg-gold/15 transition"
                          : "rounded-2xl border border-white/10 bg-white/5 p-4 opacity-60 cursor-not-allowed"
                      }
                      onClick={(e) => {
                        if (!printUrl) e.preventDefault();
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">
                            <ShoppingCart className="h-4 w-4" />
                            {t("buy.print")}
                          </div>
                          <div className="mt-1 text-xs text-white/60">
                            {printUrl ? t("buy.openInAmazon") : t("buy.comingSoon")}
                          </div>
                        </div>
                        {printUrl ? (
                          <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white/80 transition" />
                        ) : null}
                      </div>
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-white/55">{t("buy.note")}</p>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      ) : null}
    </Ctx.Provider>
  );
}

export function useBuyModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBuyModal must be used within BuyModalProvider");
  return ctx;
}
