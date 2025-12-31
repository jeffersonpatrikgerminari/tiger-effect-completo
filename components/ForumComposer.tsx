"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Send } from "lucide-react";
import { useI18n } from "@/components/LangProvider";

export default function ForumComposer({ onCreated }: { onCreated: () => void }) {
  const { t } = useI18n();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function publish() {
    setError(null);
    if (!title.trim() || !body.trim()) {
      setError("Preencha título e mensagem.");
      return;
    }

    setBusy(true);
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      const { error: insErr } = await supabase.from("forum_topics").insert({
        title,
        body,
        author_email: user?.email ?? null
      });

      if (insErr) throw insErr;

      setTitle("");
      setBody("");
      onCreated();
    } catch (e: any) {
      setError(e?.message ?? "Erro ao publicar.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold">{t("community.newTopic")}</div>

      <div className="mt-4 grid gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("community.topicTitle")}
          className="w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm outline-none focus:border-gold/40"
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={t("community.topicBody")}
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm outline-none focus:border-gold/40 resize-none"
        />

        {error ? <div className="text-sm text-alert">{error}</div> : null}

        <button
          onClick={publish}
          disabled={busy}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-gold-soft hover:bg-gold/15 transition disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {busy ? t("common.loading") : t("community.publish")}
        </button>
      </div>
    </div>
  );
}
