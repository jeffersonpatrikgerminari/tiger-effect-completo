"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Send } from "lucide-react";
import { useI18n } from "@/components/LangProvider";
import { useRouter } from "next/navigation";

export default function ForumComposer({ onCreated }: { onCreated: () => void }) {
  const { t } = useI18n();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function publish() {
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

      if (!title.trim()) throw new Error(t("common.required"));
      if (!body.trim()) throw new Error(t("common.required"));

      const { data, error } = await supabase
        .from("forum_topics")
        .insert({
          title: title.trim(),
          body: body.trim(),
          author_id: u.user.id
        })
        .select("id")
        .single();

      if (error) throw error;

      setTitle("");
      setBody("");
      onCreated();

      if (data?.id) {
        router.push(`/community/forum/${data.id}`);
      }
    } catch (e: any) {
      setError(e?.message ?? t("community.publishError"));
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
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-gold-soft hover:bg-gold/15 transition disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {busy ? t("common.loading") : t("community.publish")}
        </button>
      </div>
    </div>
  );
}
