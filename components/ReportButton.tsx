"use client";

import { useState } from "react";
import { Flag } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useI18n } from "@/components/LangProvider";

const REASONS = [
  "spam",
  "hate",
  "harassment",
  "self_harm",
  "illegal",
  "other"
] as const;

type Reason = (typeof REASONS)[number];

export default function ReportButton({
  topicId,
  replyId,
  onReported
}: {
  topicId?: string;
  replyId?: string;
  onReported?: () => void;
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<Reason>("other");
  const [details, setDetails] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function submit() {
    setMsg(null);
    setBusy(true);

    try {
      const { data: u, error: ue } = await supabase.auth.getUser();
      if (ue) throw ue;
      if (!u.user) throw new Error(t("community.loginRequired"));

      const payload: any = {
        reason,
        details: details.trim() || null,
        reporter_id: u.user.id
      };

      if (topicId) payload.topic_id = topicId;
      if (replyId) payload.reply_id = replyId;

      const { error } = await supabase.from("forum_reports").insert(payload);
      if (error) throw error;

      setMsg(t("community.reportSent"));
      setDetails("");
      setReason("other");
      onReported?.();
      setTimeout(() => setOpen(false), 700);
    } catch (e: any) {
      setMsg(e?.message ?? t("community.reportError"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition"
        title={t("community.report")}
      >
        <Flag className="h-4 w-4 text-alert" />
        <span className="hidden sm:inline">{t("community.report")}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-11 z-50 w-[320px] rounded-2xl border border-white/10 bg-noir/95 p-4 shadow-glow backdrop-blur">
          <div className="text-sm font-semibold">{t("community.reportTitle")}</div>

          <label className="mt-3 block text-xs text-white/60">
            {t("community.reportReason")}
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value as Reason)}
            className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-3 py-2 text-sm outline-none focus:border-gold/40"
            disabled={busy}
          >
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {t(`community.reportReasons.${r}` as any)}
              </option>
            ))}
          </select>

          <label className="mt-3 block text-xs text-white/60">
            {t("community.reportDetails")}
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
            className="mt-2 w-full rounded-xl border border-white/10 bg-noir px-3 py-2 text-sm outline-none focus:border-gold/40 resize-none"
            placeholder={t("community.optionalDetails")}
            disabled={busy}
          />

          {msg ? (
            <div className="mt-2 text-xs text-alert">{msg}</div>
          ) : null}

          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition"
              disabled={busy}
            >
              {t("common.back")}
            </button>

            <button
              onClick={submit}
              className="flex-1 rounded-xl border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-semibold text-gold-soft hover:bg-gold/15 transition disabled:opacity-60"
              disabled={busy}
            >
              {busy ? t("common.loading") : t("community.sendReport")}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
