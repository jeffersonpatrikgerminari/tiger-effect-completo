"use client";

import { useI18n } from "@/components/LangProvider";

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <div className="font-mono text-xs tracking-widest text-gold/80">COMMUNITY</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{t("community.title")}</h1>
        <p className="mt-2 text-white/70">{t("community.lead")}</p>
      </div>
      {children}
    </div>
  );
}
