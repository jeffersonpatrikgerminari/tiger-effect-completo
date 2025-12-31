"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";
import { Activity, Droplets } from "lucide-react";

export default function AlgorithmPage() {
  const { t } = useI18n();
  const blocks = t("algorithm.blocks") as any[];
  const bullets = t("algorithm.bullets") as string[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeader title={t("algorithm.title")} lead={t("algorithm.lead")} />

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <GlowCard>
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-gold-soft" />
              <div>
                <div className="text-lg font-semibold">{blocks[0].title}</div>
                <div className="text-sm text-white/60">{blocks[0].subtitle}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">{blocks[0].body}</p>
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <GlowCard>
            <div className="flex items-center gap-3">
              <Droplets className="h-5 w-5 text-alert" />
              <div>
                <div className="text-lg font-semibold">{blocks[1].title}</div>
                <div className="text-sm text-white/60">{blocks[1].subtitle}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">{blocks[1].body}</p>
          </GlowCard>
        </motion.div>
      </div>

      <div className="mt-12">
        <SectionHeader title={t("algorithm.section2Title")} />
        <div className="mt-6 grid md:grid-cols-2 gap-3">
          {bullets.map((b) => (
            <div
              key={b}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
