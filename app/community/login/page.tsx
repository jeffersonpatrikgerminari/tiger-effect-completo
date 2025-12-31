"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/LangProvider";

export default function LoginPage() {
  const { t } = useI18n();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function signIn() {
    setMsg(null);
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push("/community/dashboard");
    } catch (e: any) {
      setMsg(e?.message ?? "Erro ao entrar.");
    } finally {
      setBusy(false);
    }
  }

  async function signUp() {
    setMsg(null);
    setBusy(true);
    try {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/community/login` } });
      if (error) throw error;
      setMsg(t("community.createdMsg"));
    } catch (e: any) {
      setMsg(e?.message ?? "Erro ao cadastrar.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xl font-semibold">{t("community.loginTitle")}</div>

      <div className="mt-5 grid gap-3">
        <label className="text-xs text-white/60">{t("community.email")}</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm outline-none focus:border-gold/40"
          placeholder="you@email.com"
        />

        <label className="text-xs text-white/60">{t("community.password")}</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full rounded-xl border border-white/10 bg-noir px-4 py-3 text-sm outline-none focus:border-gold/40"
          placeholder="••••••••"
        />

        {msg ? <div className="text-sm text-white/75">{msg}</div> : null}

        <div className="mt-2 grid sm:grid-cols-2 gap-3">
          <button
            onClick={signIn}
            disabled={busy}
            className="rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-gold-soft hover:bg-gold/15 transition disabled:opacity-60"
          >
            {busy ? t("common.loading") : t("community.signIn")}
          </button>

          <button
            onClick={signUp}
            disabled={busy}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition disabled:opacity-60"
          >
            {busy ? t("common.loading") : t("community.signUp")}
          </button>
        </div>
      </div>
    </div>
  );
}
