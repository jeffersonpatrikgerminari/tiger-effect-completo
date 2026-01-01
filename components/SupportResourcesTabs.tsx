"use client";

import React, { useMemo, useState } from "react";
import { useI18n } from "@/components/LangProvider";
import { supportChannels, toolsAndDevices, SupportSection } from "@/lib/supportResources";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Section({ section }: { section: SupportSection }) {
  const { lang, t } = useI18n();
  const heading = section.title[lang];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{heading}</div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {section.items.map((it) => {
          const name = it.name[lang];
          const what = it.whatItDoes[lang];
          const notes = it.notes ? it.notes[lang] : null;
          return (
            <div
              key={name}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition"
            >
              <div className="font-medium">{name}</div>
              <div className="mt-1 text-sm text-white/70">{what}</div>
              {notes ? <div className="mt-2 text-sm text-white/60">{notes}</div> : null}

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                {it.phone ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {t("community.resources.phone")}: {it.phone}
                  </span>
                ) : null}
                {it.whatsapp ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {t("community.resources.whatsapp")}: {it.whatsapp}
                  </span>
                ) : null}
                {it.email ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {t("community.resources.email")}: {it.email}
                  </span>
                ) : null}
              </div>

              {it.url ? (
                <a
                  href={it.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold hover:bg-gold/15"
                >
                  {t("community.resources.open")}
                </a>
              ) : (
                <div className="mt-3 text-xs text-white/50">{t("community.resources.noLink")}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SupportResourcesTabs() {
  const { t } = useI18n();
  const [tab, setTab] = useState<"channels" | "tools">("channels");

  const data = useMemo(() => {
    return tab === "channels" ? supportChannels : toolsAndDevices;
  }, [tab]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono text-xs tracking-widest text-gold/80">{t("community.resources.kicker")}</div>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{t("community.resources.title")}</h2>
          <p className="mt-2 max-w-3xl text-sm text-white/70">{t("community.resources.lead")}</p>
          <p className="mt-2 max-w-3xl text-xs text-white/55">{t("community.resources.disclaimer")}</p>
        </div>

        <div className="inline-flex rounded-full border border-white/10 bg-black/20 p-1">
          <button
            onClick={() => setTab("channels")}
            className={cx(
              "rounded-full px-4 py-2 text-xs font-semibold transition",
              tab === "channels" ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
            )}
          >
            {t("community.resources.tabChannels")}
          </button>
          <button
            onClick={() => setTab("tools")}
            className={cx(
              "rounded-full px-4 py-2 text-xs font-semibold transition",
              tab === "tools" ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
            )}
          >
            {t("community.resources.tabTools")}
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {data.map((section) => (
          <Section key={section.title.pt} section={section} />
        ))}
      </div>
    </div>
  );
}
