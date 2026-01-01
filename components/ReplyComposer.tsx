"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useI18n } from "@/components/LangProvider";
import { useRouter } from "next/navigation";

export default function ReplyComposer({
  topicId,
  onCreated,
  disabled
}: {
  topicId: string;
  onCreated: () => void;
  disabled?: boolean;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function publish() {
    if (disabled) return;
    setError(null);
    setBusy(true);

    try {
      const { data: u, error: ue } = await supabase.auth.getUser();
      if (ue) throw ue;
      if (!u.user) throw new Error(t("community.loginRequired"));

const { data: prof } = await supabase
  .from("profiles")
  .select("display_name")
  .eq("user_id", u.user.id)
  .maybeSingle();

if (!prof?.display_name) {
  router.push("/community/dashboard?setup=1");
  throw new Error(t("community.needNickname"));
}

      if (!body.trim()) throw new Error(t("common.required"));

      const { error } = await supabase.from("forum_replies").insert({
        topic_id: topicId,
        body: body.trim(),
        author_id: u.user.id
      });

      if (error) throw error;

      setBody("");
      onCreated();
    } catch (e: any) {
      setError(e?.message ?? t("community.replyError"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold">{t("community.replyTitle")}</div>

      <div className="mt-4 grid gap-3">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={t("community.replyPlaceholder")}
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm outline-none focus:border-gold/40 resize-none disabled:opacity-60"
          disabled={busy || disabled}
        />

        {error ? <div className="text-sm text-alert">{error}</div> : null}

        <button
          onClick={publish}
          disabled={busy || disabled}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-gold-soft hover:bg-gold/15 transition disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {busy ? t("common.loading") : t("community.publishReply")}
        </button>
      </div>
    </div>
  );
}
