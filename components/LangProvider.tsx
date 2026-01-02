"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict, Lang } from "@/translations/i18n";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => any;
};

const Ctx = createContext<I18nCtx | null>(null);

function getByPath(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    // Default: English. Only switch if user has explicitly saved a preference.
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") setLang(saved);
    } catch {
      // If storage is blocked, keep English.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}

    // Also persist as a cookie so server-side metadata and bots can pick it up.
    // (Safe no-op if cookies are blocked.)
    try {
      document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  }, [lang]);

  const value = useMemo<I18nCtx>(() => {
    const t = (path: string) => getByPath(dict[lang], path);
    return { lang, setLang, t };
  }, [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within LangProvider");
  return ctx;
}
