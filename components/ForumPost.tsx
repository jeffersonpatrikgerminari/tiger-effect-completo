"use client";

import { MessageSquareText, Clock } from "lucide-react";

export type Topic = {
  id: string;
  title: string;
  body: string;
  created_at: string;
  author_email?: string | null;
};

export default function ForumPost({ topic }: { topic: Topic }) {
  const date = new Date(topic.created_at);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <MessageSquareText className="h-4 w-4 text-gold-soft" />
            <span className="font-mono">{topic.author_email ?? "anon"}</span>
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-snug">
            {topic.title}
          </h3>
          <p className="mt-2 text-sm text-white/70 whitespace-pre-wrap">
            {topic.body}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 text-xs text-white/50">
          <Clock className="h-4 w-4" />
          <span className="font-mono">{date.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
