"use client";

import { useI18n } from "@/components/LangProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">{t("brand.title")}</div>
            <p className="mt-2 text-sm text-white/60">{t("footer.note")}</p>
          </div>
          <div className="text-sm text-white/60">
            <div className="font-mono text-xs tracking-widest text-gold/80">LINKS</div>
            <ul className="mt-3 space-y-2">
              <li><a className="hover:text-white" href="/trilogy">{t("nav.trilogy")}</a></li>
              <li><a className="hover:text-white" href="/algorithm">{t("nav.algorithm")}</a></li>
              <li><a className="hover:text-white" href="/community">{t("nav.community")}</a></li>
              <li><a className="hover:text-white" href="/authors">{t("nav.authors")}</a></li>
            </ul>
          </div>
          <div className="text-sm text-white/60">
            <div className="font-mono text-xs tracking-widest text-gold/80">CONTACT</div>
            <p className="mt-3">
              contato@efeito-tigre.com
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
