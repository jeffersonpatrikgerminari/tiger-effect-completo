"use client";

import Link from "next/link";
import { useI18n } from "@/components/LangProvider";
import SupportResourcesTabs from "@/components/SupportResourcesTabs";

export default function CommunityHub() {
  const { t } = useI18n();
  return (
    <div className="space-y-6">
      <SupportResourcesTabs />

      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="/community/login"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
        >
          <div className="font-semibold">{t("community.hub.loginTitle")}</div>
          <div className="mt-2 text-sm text-white/70">{t("community.hub.loginDesc")}</div>
        </Link>

        <Link
          href="/community/dashboard"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
        >
          <div className="font-semibold">{t("community.hub.dashboardTitle")}</div>
          <div className="mt-2 text-sm text-white/70">{t("community.hub.dashboardDesc")}</div>
        </Link>

        <Link
          href="/community/forum"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
        >
          <div className="font-semibold">{t("community.hub.forumTitle")}</div>
          <div className="mt-2 text-sm text-white/70">{t("community.hub.forumDesc")}</div>
        </Link>
      </div>
    </div>
  );
}
