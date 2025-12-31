"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, ShieldAlert, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useI18n } from "@/components/LangProvider";
import type { Topic } from "@/components/ForumPost";
import ReplyComposer from "@/components/ReplyComposer";
import ReplyItem, { Reply } from "@/components/ReplyItem";
import ReportButton from "@/components/ReportButton";

export default function TopicDetailPage() {
  const { t } = useI18n();
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [topic, setTopic] = useState<Topic | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const removed = Boolean(topic?.is_deleted);

  const dateLabel = useMemo(() => {
    if (!topic) return "";
    const d = new Date(topic.created_at);
    return d.toLocaleString();
  }, [topic]);

  async function loadAll() {
    if (!id) return;
    setErr(null);
    setLoading(true);

    const { data: u } = await supabase.auth.getUser();
    if (!u.user) {
      router.push("/community/login");
      return;
    }

    // admin check: user sees their own row only if they are admin
    const { data: adminRow } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", u.user.id)
      .maybeSingle();

    setIsAdmin(Boolean(adminRow?.user_id));

    const { data: topicData, error: te } = await supabase
      .from("forum_topics")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (te) {
      setErr(te.message);
      setLoading(false);
      return;
    }

    if (!topicData) {
      setErr(t("community.topicNotFound"));
      setLoading(false);
      return;
    }

    setTopic(topicData as Topic);

    const { data: repliesData, error: re } = await supabase
      .from("forum_replies")
      .select("*")
      .eq("topic_id", id)
      .order("created_at", { ascending: true });

    if (re) setErr(re.message);
    setReplies((repliesData as Reply[]) ?? []);
    setLoading(false);
  }

  async function removeTopic() {
    if (!topic || !isAdmin) return;
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;

    const { error } = await supabase
      .from("forum_topics")
      .update({
        is_deleted: true,
        deleted_at: new Date().toISOString(),
        deleted_by: u.user.id
      })
      .eq("id", topic.id);

    if (!error) loadAll();
  }

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <div className="text-white/70 font-mono">{t("common.loading")}</div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <Link
          href="/community/forum"
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("common.back")}
        </Link>

        {err ? (
          <div className="rounded-2xl border border-alert/30 bg-alert/10 p-4 text-alert">
            {err}
          </div>
        ) : null}

        {topic ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span className="font-mono">{topic.author_email ?? "anon"}</span>
                  {removed ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-alert/40 bg-alert/10 px-2 py-0.5 text-alert">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      {t("community.removedTag")}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-mono">{dateLabel}</span>
                  </span>
                </div>

                <h1 className="mt-3 text-2xl font-semibold leading-snug break-words">
                  {topic.title}
                </h1>

                <p className="mt-3 text-sm text-white/80 whitespace-pre-wrap break-words">
                  {removed ? t("community.removedContent") : topic.body}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <ReportButton topicId={topic.id} />
                {isAdmin && !removed ? (
                  <button
                    onClick={removeTopic}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition"
                    title={t("community.adminRemove")}
                  >
                    <Trash2 className="h-4 w-4 text-alert" />
                    <span className="hidden sm:inline">{t("community.adminRemove")}</span>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          <div className="text-sm text-white/70">
            {t("community.replies")}{" "}
            <span className="font-mono text-white/90">{replies.length}</span>
          </div>
        </div>

        <div className="space-y-3">
          {replies.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              {t("community.noReplies")}
            </div>
          ) : null}

          {replies.map((r) => (
            <ReplyItem key={r.id} reply={r} isAdmin={isAdmin} onChanged={loadAll} />
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-24 h-fit space-y-4">
        <ReplyComposer topicId={id as string} onCreated={loadAll} disabled={removed} />

        {removed ? (
          <div className="rounded-2xl border border-alert/30 bg-alert/10 p-4 text-sm text-alert">
            {t("community.replyDisabledRemoved")}
          </div>
        ) : null}

        {isAdmin ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
            <div className="font-semibold">{t("community.adminTools")}</div>
            <div className="mt-2">
              <Link
                href="/community/admin/reports"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-soft hover:bg-gold/15 transition"
              >
                {t("community.openReports")}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
