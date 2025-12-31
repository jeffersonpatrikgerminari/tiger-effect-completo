"use client";

import { useI18n } from "@/components/LangProvider";

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      <button
        onClick={() => setLang("pt")}
        className={`px-3 py-1 text-xs font-mono rounded-full transition ${
          lang === "pt" ? "bg-gold/20 text-gold-soft" : "text-white/60 hover:text-white"
        }`}
        aria-label={t("common.pt")}
      >
        PT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-xs font-mono rounded-full transition ${
          lang === "en" ? "bg-gold/20 text-gold-soft" : "text-white/60 hover:text-white"
        }`}
        aria-label={t("common.en")}
      >
        EN
      </button>
    </div>
  );
}
