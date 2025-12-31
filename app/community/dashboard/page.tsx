"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";

export default function DashboardPage() {
  const { t } = useI18n();
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/community/login");
        return;
      }
      setEmail(data.user.email ?? null);
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
        <p className="mt-2 text-white/70">{t("community.dashboardLead")}</p>

        <div className="mt-4 text-sm text-white/60">
          <span className="font-mono">user:</span> {email ?? "…"}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => router.push("/community/forum")}
            className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-gold-soft hover:bg-gold/15 transition"
          >
            {t("community.goForum")}
          </button>
          <button
            onClick={signOut}
            className="rounded-xl border border-alert/25 bg-alert/10 px-4 py-3 text-sm text-white hover:bg-alert/15 transition"
          >
            {t("community.signOut")}
          </button>
        </div>
      </GlowCard>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="font-semibold">{t("community.shortcutsTitle")}</div>
        <ul className="mt-3 text-sm text-white/70 space-y-2">
          {shortcuts.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
