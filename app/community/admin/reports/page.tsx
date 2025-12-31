"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, ShieldAlert, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useI18n } from "@/components/LangProvider";

type Report = {
  id: string;
  topic_id: string | null;
  reply_id: string | null;
  reason: string;
  details: string | null;
  status: "open" | "resolved";
  created_at: string;
  reporter_id: string;

  forum_topics?: any;
  forum_replies?: any;
};

export default function AdminReportsPage() {
  const { t } = useI18n();
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);
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

    const { data: adminRow } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", u.user.id)
      .maybeSingle();

    if (!adminRow?.user_id) {
      router.push("/community/dashboard");
      return;
    }

    setIsAdmin(true);

    const { data, error } = await supabase
      .from("forum_reports")
      .select(
        "id,topic_id,reply_id,reason,details,status,created_at,reporter_id, forum_topics(id,title,body,is_deleted), forum_replies(id,topic_id,body,is_deleted)"
      )
      .order("created_at", { ascending: false });

    if (error) setErr(error.message);
    setReports((data as Report[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openReports = useMemo(
    () => reports.filter((r) => r.status === "open"),
    [reports]
  );

  async function markResolved(id: string) {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;

    const { error } = await supabase
      .from("forum_reports")
      .update({
        status: "resolved",
        resolved_at: new Date().toISOString(),
        resolved_by: u.user.id
      })
      .eq("id", id);

    if (!error) load();
  }

  async function removeContent(report: Report) {
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;

    if (report.topic_id) {
      const { error } = await supabase
        .from("forum_topics")
        .update({
          is_deleted: true,
          deleted_at: new Date().toISOString(),
          deleted_by: u.user.id
        })
        .eq("id", report.topic_id);
      if (error) setErr(error.message);
    } else if (report.reply_id) {
      const { error } = await supabase
        .from("forum_replies")
        .update({
          is_deleted: true,
          deleted_at: new Date().toISOString(),
          deleted_by: u.user.id
        })
        .eq("id", report.reply_id);
      if (error) setErr(error.message);
    }

    await markResolved(report.id);
  }

  if (loading) {
    return <div className="font-mono text-white/70">{t("common.loading")}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-2xl font-semibold">{t("community.adminReportsTitle")}</div>
          <div className="mt-1 text-sm text-white/70">
            {t("community.adminReportsLead")}
          </div>
        </div>

        <Link
          href="/community/dashboard"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
        >
          {t("common.back")}
        </Link>
      </div>

      {err ? (
        <div className="rounded-2xl border border-alert/30 bg-alert/10 p-4 text-alert">
          {err}
        </div>
      ) : null}

      {isAdmin ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-white/70">
            {t("community.openReports")}{" "}
            <span className="font-mono text-white/90">{openReports.length}</span>
          </div>
        </div>
      ) : null}

      <div className="space-y-3">
        {reports.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            {t("community.noReports")}
          </div>
        ) : null}

        {reports.map((r) => {
          const target =
            r.topic_id ? r.forum_topics : r.reply_id ? r.forum_replies : null;
          const removed = Boolean(target?.is_deleted);

          return (
            <div key={r.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                    <span className="font-mono">{r.reason}</span>
                    <span className="font-mono">•</span>
                    <span className="font-mono">{new Date(r.created_at).toLocaleString()}</span>
                    {removed ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-alert/40 bg-alert/10 px-2 py-0.5 text-alert">
                        <ShieldAlert className="h-3.5 w-3.5" />
                        {t("community.removedTag")}
                      </span>
                    ) : null}
                    <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono">
                      {r.status}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-white/80 whitespace-pre-wrap break-words">
                    {r.details ? r.details : t("community.noDetails")}
                  </div>

                  <div className="mt-3 rounded-xl border border-white/10 bg-noir/60 p-3 text-sm text-white/80 whitespace-pre-wrap break-words">
                    {target ? (
                      r.topic_id ? (
                        <div>
                          <div className="font-semibold">{target.title}</div>
                          <div className="mt-1 text-white/70">{target.body}</div>
                        </div>
                      ) : (
                        <div>{target.body}</div>
                      )
                    ) : (
                      <div className="text-white/60">{t("community.targetMissing")}</div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col gap-2">
                  <button
                    onClick={() => markResolved(r.id)}
                    disabled={r.status === "resolved"}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition disabled:opacity-60"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold-soft" />
                    {t("community.markResolved")}
                  </button>

                  <button
                    onClick={() => removeContent(r)}
                    disabled={removed}
                    className="inline-flex items-center gap-2 rounded-xl border border-alert/30 bg-alert/10 px-3 py-2 text-xs font-semibold text-alert hover:bg-alert/15 transition disabled:opacity-60"
                  >
                    <Trash2 className="h-4 w-4" />
                    {t("community.adminRemove")}
                  </button>

                  {r.topic_id ? (
                    <Link
                      href={`/community/forum/${r.topic_id}`}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition text-center"
                    >
                      {t("community.openTopic")}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
