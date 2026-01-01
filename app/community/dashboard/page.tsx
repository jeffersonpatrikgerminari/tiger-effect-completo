"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useSearchParams } from "next/navigation";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";
import Link from "next/link";

function validateNicknameOrThrow(t: (k: string) => any, value: string) {
  const v = value.trim();
  if (!v) throw new Error(t("community.nicknameRequired"));
  if (v.length < 2 || v.length > 24) throw new Error(t("community.nicknameInvalid"));
  if (!/^[\p{L}\p{N}_\- ]+$/u.test(v)) throw new Error(t("community.nicknameInvalid"));
  return v;
}

function DashboardInner() {
  const { t } = useI18n();
  const router = useRouter();
  const params = useSearchParams();

  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/community/login");
        return;
      }

      setEmail(data.user.email ?? null);

      // admin?
      const { data: adminRow } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", data.user.id)
        .maybeSingle();
      setIsAdmin(Boolean(adminRow?.user_id));

      // profile (nickname)
      const { data: prof } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("user_id", data.user.id)
        .maybeSingle();

      if (prof?.display_name) {
        setDisplayName(prof.display_name);
      } else {
        const meta = (data.user.user_metadata as any)?.display_name;
        if (meta && typeof meta === "string" && meta.trim()) {
          const v = meta.trim();
          await supabase.from("profiles").upsert({ user_id: data.user.id, display_name: v });
          setDisplayName(v);
        } else {
          setDisplayName("");
        }
      }

      setProfileLoaded(true);
    })();
  }, [router]);

  const needsSetup = useMemo(() => {
    return params.get("setup") === "1";
  }, [params]);

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/community/login");
  }

  async function saveNickname() {
    setNote(null);
    setSaving(true);
    try {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/community/login");
        return;
      }
      const safeNick = validateNicknameOrThrow(t, displayName);

      const { error } = await supabase.from("profiles").upsert({
        user_id: data.user.id,
        display_name: safeNick,
        updated_at: new Date().toISOString()
      });

      if (error) throw error;
      setDisplayName(safeNick);
      setNote(t("community.nicknameSaved"));
    } catch (e: any) {
      setNote(e?.message ?? String(e));
    } finally {
      setSaving(false);
    }
  }

  const shortcuts = t("community.shortcutsBullets") as string[];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <GlowCard className="md:col-span-2">
        <div className="text-xl font-semibold">{t("community.dashboardTitle")}</div>
        <div className="mt-2 text-sm text-white/70">{t("community.dashboardLead")}</div>

        {needsSetup ? (
          <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-4 text-sm text-gold-soft">
            {t("community.needNickname")}
          </div>
        ) : null}

        <div className="mt-4 grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">{t("community.nickname")}</div>

            <div className="mt-3 grid gap-2">
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm outline-none focus:border-gold/40"
                placeholder={t("community.nicknamePlaceholder")}
                disabled={!profileLoaded}
              />
              <div className="text-xs text-white/45">{t("community.nicknameHint")}</div>

              <div className="flex items-center gap-2">
                <button
                  onClick={saveNickname}
                  disabled={saving || !profileLoaded}
                  className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-soft hover:bg-gold/15 transition disabled:opacity-60"
                >
                  {saving ? t("common.loading") : t("community.saveNickname")}
                </button>

                <button
                  onClick={signOut}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
                >
                  {t("community.signOut")}
                </button>

                {isAdmin ? (
                  <Link
                    href="/community/admin/reports"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
                  >
                    {t("community.adminReports")}
                  </Link>
                ) : null}
              </div>

              {note ? <div className="text-sm text-white/75">{note}</div> : null}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
            <div className="text-white/60">{t("community.email")}</div>
            <div className="mt-1 font-mono text-white/90">{email ?? "—"}</div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/community/forum"
              className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold-soft hover:bg-gold/15 transition"
            >
              {t("community.goForum")}
            </Link>
          </div>
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

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-white/70">Carregando…</div>}>
      <DashboardInner />
    </Suspense>
  );
}
