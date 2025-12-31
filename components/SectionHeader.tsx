import { cn } from "@/lib/utils";

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  className
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="font-mono text-xs tracking-widest text-gold/80">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 text-base md:text-lg text-white/70">{lead}</p>
      ) : null}
    </div>
  );
}
