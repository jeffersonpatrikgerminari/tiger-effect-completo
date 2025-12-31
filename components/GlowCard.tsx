import { cn } from "@/lib/utils";

export default function GlowCard({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-white/5 shadow-glow backdrop-blur transition",
        "hover:border-white/15 hover:bg-white/[0.06]",
        "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
        "before:bg-[radial-gradient(circle_at_30%_10%,rgba(201,162,39,.18),transparent_40%),radial-gradient(circle_at_70%_90%,rgba(239,68,68,.10),transparent_45%)]",
        "after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:opacity-0 after:transition",
        "after:bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,39,.22),transparent_45%)] group-hover:after:opacity-100",
        className
      )}
    >
      <div className="relative p-6">{children}</div>
    </div>
  );
}
