"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Users } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import SectionHeader from "@/components/SectionHeader";
import { useI18n } from "@/components/LangProvider";

type Step = {
  vol: string;
  icon: React.ReactNode;
  label: string;
  body: string;
};

export default function StoryScroll() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<number>(0);

  const labels = useMemo(() => {
    const v = t("home.pillarLabels") as any;
    return Array.isArray(v) ? (v as string[]) : [];
  }, [t]);

  const points = useMemo(() => {
    const v = t("home.proofPoints") as any;
    return Array.isArray(v) ? (v as string[]) : [];
  }, [t]);

  const steps: Step[] = useMemo(() => {
    return [
      {
        vol: "Vol. 1",
        icon: <ShieldAlert className="h-5 w-5 text-alert" />,
        label: labels[0] || "",
        body: points[0] || ""
      },
      {
        vol: "Vol. 2",
        icon: <Cpu className="h-5 w-5 text-gold-soft" />,
        label: labels[1] || "",
        body: points[1] || ""
      },
      {
        vol: "Vol. 3",
        icon: <Users className="h-5 w-5 text-white/80" />,
        label: labels[2] || "",
        body: points[2] || ""
      }
    ].filter((s) => s.label && s.body);
  }, [labels, points]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // progress from when the section starts to enter until it leaves
      const total = rect.height + vh;
      const passed = vh - rect.top;
      const p = Math.min(1, Math.max(0, passed / total));
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!cardRefs.current?.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (!visible) return;
        const idx = Number((visible.target as HTMLElement).dataset.index || 0);
        if (!Number.isNaN(idx)) setActive(idx);
      },
      { threshold: [0.35, 0.55, 0.75] }
    );

    cardRefs.current.forEach((node) => node && obs.observe(node));

    return () => obs.disconnect();
  }, [steps.length]);

  if (steps.length === 0) return null;

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl px-4 py-14 relative">
      <SectionHeader title={t("home.proofTitle")} lead={t("home.proofLead")} />

      {/* progress + dots */}
      <div className="mt-6 sticky top-16 z-20">
        <div className="relative h-px bg-white/10">
          <div
            className="absolute left-0 top-0 h-px bg-gold/70"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s.vol} className="flex items-center gap-2">
              <span
                className={[
                  "h-2.5 w-2.5 rounded-full border transition",
                  i <= active ? "bg-gold border-gold/70" : "bg-transparent border-white/20"
                ].join(" ")}
              />
              <span
                className={[
                  "text-[11px] font-mono tracking-widest transition",
                  i === active ? "text-white/80" : "text-white/40"
                ].join(" ")}
              >
                {s.vol}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.vol}
            ref={(node) => {
              cardRefs.current[i] = node;
            }}
            data-index={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <GlowCard className={i === active ? "border-white/20" : undefined}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-white/55">{s.vol}</div>
                  <div className="font-semibold">{s.label}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.body}</p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
