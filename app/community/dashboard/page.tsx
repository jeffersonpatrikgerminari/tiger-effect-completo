"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";
import Link from "next/link";

export default function DashboardPage() {
  const { t } = useI18n();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/community/login");
        return;
      }

      setEmail(data.user.email ?? null);

      const { data: adminRow } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", data.user.id)
        .maybeSingle();

      setIsAdmin(Boolean(adminRow?.user_id));
    })();
  }, [router]);

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/community/login");
  }

  const shortcuts = t("community.shortcutsBullets") as string[];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <GlowCard className="md:col-span-2">
        <div className="text-xl font-semibold">{t("community.dashboardTitle")}</div>
        <div className="mt-2 text-sm text-white/70">{t("community.dashboardLead")}</div>

        <div className="mt-4 rounded-xl border border-white/10 bg-noir/60 p-4 text-sm">
          <div className="text-white/60">{t("community.email")}</div>
          <div className="mt-1 font-mono text-white/90">{email ?? "—"}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/community/forum"
            className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-soft hover:bg-gold/15 transition"
          >
            {t("community.goForum")}
          </Link>

          {isAdmin ? (
            <Link
              href="/community/admin/reports"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
            >
              {t("community.adminReportsTitle")}
            </Link>
          ) : null}

          <button
            onClick={signOut}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
          >
            {t("community.signOut")}
          </button>
        </div>
      </GlowCard>

      <GlowCard>
        <div className="text-sm font-semibold">{t("community.shortcutsTitle")}</div>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          {shortcuts.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </GlowCard>
    </div>
  );
}
