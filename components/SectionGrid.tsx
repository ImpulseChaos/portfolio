type GlowPos = "top-right" | "bottom-left" | "top-left" | "none";
interface Dot { top: string; left: string }
interface SectionGridProps {
  glow?: GlowPos;
  dots?: Dot[];
}

const GLOW_POS: Record<Exclude<GlowPos, "none">, string> = {
  "top-right":   "-top-28 -right-28",
  "bottom-left": "-bottom-28 -left-28",
  "top-left":    "-top-28 -left-28",
};

export function SectionGrid({ glow = "none", dots = [] }: SectionGridProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Short centered divider — 50px, 1px, accent color */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-cyan-400/70" />

      {/* Ambient glow blob */}
      {glow !== "none" && (
        <div className={`absolute w-80 h-80 rounded-full blur-3xl opacity-[0.08] bg-cyan-500 ${GLOW_POS[glow]}`} />
      )}

      {/* Tiny accent dots */}
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full blur-[2px] bg-cyan-400/50"
          style={{ top: d.top, left: d.left }}
        />
      ))}
    </div>
  );
}
