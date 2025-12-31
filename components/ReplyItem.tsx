"use client";

import { Clock, MessageCircle, ShieldAlert, Trash2 } from "lucide-react";
import { useI18n } from "@/components/LangProvider";
import ReportButton from "@/components/ReportButton";
import { supabase } from "@/lib/supabaseClient";

export type Reply = {
  id: string;
  topic_id: string;
  body: string;
  created_at: string;
  author_email?: string | null;
  author_id?: string | null;
  is_deleted?: boolean | null;
};

export default function ReplyItem({
  reply,
  isAdmin,
  onChanged
}: {
  reply: Reply;
  isAdmin: boolean;
  onChanged: () => void;
}) {
  const { t } = useI18n();
  const date = new Date(reply.created_at);
  const removed = Boolean(reply.is_deleted);

  async function remove() {
    if (!isAdmin) return;
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) return;

    const { error } = await supabase
      .from("forum_replies")
      .update({
        is_deleted: true,
        deleted_at: new Date().toISOString(),
        deleted_by: u.user.id
      })
      .eq("id", reply.id);

    if (!error) onChanged();
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <MessageCircle className="h-4 w-4 text-gold-soft" />
            <span className="font-mono">{reply.author_email ?? "anon"}</span>

            {removed ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-alert/40 bg-alert/10 px-2 py-0.5 text-alert">
                <ShieldAlert className="h-3.5 w-3.5" />
                {t("community.removedTag")}
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-sm text-white/80 whitespace-pre-wrap break-words">
            {removed ? t("community.removedContent") : reply.body}
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
            <Clock className="h-4 w-4" />
            <span className="font-mono">{date.toLocaleString()}</span>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <ReportButton replyId={reply.id} />
          {isAdmin ? (
            <button
              onClick={remove}
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
  );
}
