export default function DashboardPreview() {
  const green = "#10b981";
  const amber = "#e5a537";

  const goals = [
    {
      name: "STRESS",
      score: 68,
      delta: 3,
      color: amber,
      // Choppy but trending down (management score up)
      trend: "M 0,9 C 4,5 8,10 12,4 C 16,8 20,3 24,7 C 28,2 32,6 36,3 C 40,5 44,2 48,3",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      name: "PERFORMANCE",
      score: 76,
      delta: 2,
      color: green,
      // Steady climb
      trend: "M 0,10 C 4,9 8,8 12,9 C 16,7 20,8 24,6 C 28,7 32,5 36,4 C 40,5 44,3 48,3",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11c0-2 1-4 4-5" /><path d="M11 6c0-2.5 2-4 4-4 0 2-1 3.5-2 4.5" /><path d="M13 6.5c1.5 0 3 1 3 3.5 0 3-2 5-4 7" /><path d="M12 17c-3-1-5-4-5-7" /><path d="M7 11c-1 0-2 .5-2.5 1.5S4 15 5 16" /><path d="M5 16c0 2 1 4 3 5l4 1" />
        </svg>
      ),
    },
    {
      name: "ENERGY",
      score: 71,
      delta: 1,
      color: amber,
      // Volatile but improving
      trend: "M 0,8 C 4,4 8,10 12,3 C 16,9 20,5 24,8 C 28,3 32,7 36,4 C 40,6 44,3 48,4",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      name: "SLEEP",
      score: 78,
      delta: 4,
      color: green,
      // Trending up with some dips
      trend: "M 0,10 C 4,8 8,9 12,6 C 16,8 20,5 24,6 C 28,4 32,5 36,3 C 40,4 44,2 48,2",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="rounded-2xl bg-bg-secondary border border-white/[0.06] p-5 shadow-xl shadow-black/20">
        {/* Top row: label only */}
        <div className="mb-3">
          <span className="text-text-muted text-[10px] font-medium tracking-[0.15em] uppercase">
            Vitality Score
          </span>
        </div>

        {/* Score row */}
        <div className="flex items-baseline gap-1.5 mb-1">
          <span className="font-headline font-extrabold text-[52px] leading-none text-accent">74</span>
          <span className="text-text-muted text-lg font-medium">/100</span>
          <div className="flex items-center gap-1 ml-3 px-2 py-0.5 rounded bg-accent/10">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M5 2L8 7H2L5 2Z" fill="#14B8A6" />
            </svg>
            <span className="text-[11px] text-accent font-medium">3 this week</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden mb-1.5">
          <div className="h-full rounded-full bg-accent" style={{ width: "74%" }} />
        </div>
        <div className="text-text-muted text-[10px] mb-5">7-day average</div>

        {/* Goals header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-text-primary font-headline font-bold text-base">Goals</span>
          <span className="text-accent text-xs font-medium">See All Goals →</span>
        </div>

        {/* Goals 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {goals.map((g) => {
            const goalCirc = 2 * Math.PI * 18;
            const goalPct = g.score / 100;
            return (
              <div key={g.name} className="rounded-xl bg-[#0A0F14] border border-white/[0.06] p-3">
                {/* Top row: icon + name + delta badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    {g.icon}
                    <span className="text-text-muted text-[9px] font-semibold tracking-[0.08em] uppercase leading-none">
                      {g.name}
                    </span>
                  </div>
                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#10b981]/15">
                    <svg width="6" height="6" viewBox="0 0 10 10"><path d="M5 2L8 7H2L5 2Z" fill="#10b981" /></svg>
                    <span className="text-[8px] text-[#10b981] font-bold">{g.delta}</span>
                  </span>
                </div>

                {/* Score + ring + sparkline row */}
                <div className="flex items-center justify-between">
                  {/* Circular arc + score */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <svg viewBox="0 0 44 44" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                      <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                      <circle
                        cx="22" cy="22" r="18"
                        fill="none"
                        stroke={g.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${goalCirc * goalPct} ${goalCirc * (1 - goalPct)}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-headline font-bold text-lg leading-none" style={{ color: g.color }}>
                        {g.score}
                      </span>
                    </div>
                  </div>

                  {/* Sparkline */}
                  <div className="flex flex-col items-end gap-0.5 flex-1 ml-2">
                    <span className="text-text-muted text-[7px] tracking-[0.1em] uppercase font-medium">7-day trend</span>
                    <svg width="52" height="18" viewBox="0 0 48 12" className="opacity-70">
                      <path d={g.trend} fill="none" stroke={g.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="text-text-muted text-[8px] mt-1.5 text-center opacity-50">tap for breakdown</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
