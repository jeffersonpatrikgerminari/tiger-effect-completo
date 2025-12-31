"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ForumPost, { Topic } from "@/components/ForumPost";
import ForumComposer from "@/components/ForumComposer";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/LangProvider";

export default function ForumPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setErr(null);
    setLoading(true);

    const { data: u } = await supabase.auth.getUser();
    if (!u.user) {
      router.push("/community/login");
      return;
    }

    const { data, error } = await supabase
      .from("forum_topics")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setErr(error.message);
    if (!error && data) setTopics(data as Topic[]);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const guide = t("community.forumGuideBullets") as string[];

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <div className="mb-4">
          <div className="text-2xl font-semibold">{t("community.forumTitle")}</div>
          <p className="mt-1 text-white/70">{t("community.forumLead")}</p>
        </div>

        {loading ? (
          <div className="text-white/60">{t("common.loading")}</div>
        ) : err ? (
          <div className="rounded-2xl border border-alert/25 bg-alert/10 p-6 text-white/90">
            {err}
          </div>
        ) : topics.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
            {t("community.emptyForum")}
          </div>
        ) : (
          <div className="grid gap-3">
            {topics.map((topic) => (
              <ForumPost key={topic.id} topic={topic} />
            ))}
          </div>
        )}
      </div>

      <div className="lg:sticky lg:top-24 h-fit">
        <ForumComposer onCreated={load} />
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <div className="font-semibold">{t("community.forumGuideTitle")}</div>
          <ul className="mt-2 space-y-2">
            {guide.map((g) => (
              <li key={g}>• {g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
