"use client";

import Link from "next/link";
import { MessageSquareText, Clock, ChevronRight, ShieldAlert } from "lucide-react";
import { useI18n } from "@/components/LangProvider";

export type Topic = {
  id: string;
  title: string;
  body: string;
  created_at: string;
  author_email?: string | null;
  is_deleted?: boolean | null;
};

export default function ForumPost({ topic }: { topic: Topic }) {
  const { t } = useI18n();
  const date = new Date(topic.created_at);
  const removed = Boolean(topic.is_deleted);

  return (
    <Link href={`/community/forum/${topic.id}`} className="block">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
              <MessageSquareText className="h-4 w-4 text-gold-soft" />
              <span className="font-mono">{topic.author_email ?? "anon"}</span>

              {removed ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-alert/40 bg-alert/10 px-2 py-0.5 text-alert">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  {t("community.removedTag")}
                </span>
              ) : null}
            </div>

            <h3 className="mt-2 text-lg font-semibold leading-snug break-words">
              {topic.title}
            </h3>

            <p className="mt-2 text-sm text-white/70 whitespace-pre-wrap break-words">
              {removed ? t("community.removedContent") : topic.body}
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-end gap-2 text-xs text-white/50">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-mono">{date.toLocaleDateString()}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-white/40" />
          </div>
        </div>
      </div>
    </Link>
  );
}
