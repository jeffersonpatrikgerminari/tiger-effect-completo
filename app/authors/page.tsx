"use client";

import SectionHeader from "@/components/SectionHeader";
import GlowCard from "@/components/GlowCard";
import { useI18n } from "@/components/LangProvider";
import { UserRound } from "lucide-react";
import Image from "next/image";

export default function AuthorsPage() {
  const { t } = useI18n();
  const people = t("authors.people") as any[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionHeader title={t("authors.title")} lead={t("authors.lead")} />

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {people.map((p) => (
          <GlowCard key={p.name}>
            <div className="flex items-start gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {p.photo ? (
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center">
                    <UserRound className="h-5 w-5 text-gold-soft" />
                  </div>
                )}
              </div>

              <div>
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-sm text-white/60">{p.role}</div>
                <p className="mt-3 text-sm text-white/70">{p.bio}</p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
