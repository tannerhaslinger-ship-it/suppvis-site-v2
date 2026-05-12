export default function GoalAnalysisPreview() {
  const helpingItems = [
    { name: "Magnesium Glycin...", width: 80, impact: "+2.3", badge: "+ High", badgeColor: "#14B8A6" },
    { name: "Apigenin", width: 55, impact: "+1.8", badge: "+ Med", badgeColor: "#14B8A6" },
    { name: "Morning Sunlight", width: 35, impact: "+1.1", badge: "+ Low", badgeColor: "#14B8A6" },
    { name: "Lion's Mane", width: 20, impact: "+0.4", badge: "+ Low", badgeColor: "#14B8A6" },
  ];

  const hurtingItems = [
    { name: "Late Caffeine", width: 60, impact: "-1.9", badge: "- Med", badgeColor: "#ef4444" },
    { name: "Alcohol", width: 15, impact: "-0.5", badge: "- Low", badgeColor: "#ef4444" },
  ];

  const supportCards = [
    {
      name: "Magnesium Glycinate",
      days: 127,
      desc: "Magnesium is a cofactor in GABA synthesis and NMDA receptor modulation, supporting pathways involved in sleep onset and maintenance.",
    },
    {
      name: "Lion's Mane",
      days: 127,
      desc: "Human_rct evidence overall, though not primarily studied for sleep; your dose (1000mg) is within the research range (500-3000 mg).",
    },
    {
      name: "Apigenin",
      days: 89,
      desc: "Preliminary research suggests anxiolytic and sleep-promoting effects via GABA modulation. Your dose (50mg) aligns with commonly studied protocols.",
    },
  ];

  const recommendations = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Review your sleep stack",
      desc: "2 supplements show negative correlations with sleep. Timing or dose adjustments may help.",
      action: "Ask about this",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: "Connect a wearable for sleep insights",
      desc: "Wearable data would let the app validate your supplement correlations with objective metrics.",
      action: "Connect",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
        </svg>
      ),
      title: "Melatonin may support sleep",
      desc: "Backed by 58 studies for sleep.",
      action: "Explore this",
    },
  ];

  /* Sparkle SVG used for tab + CTA button */
  const Sparkle = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="#14B8A6">
      <path d="M8 0 L9.5 5.5 L16 6.5 L11 10.5 L12.5 16 L8 12.5 L3.5 16 L5 10.5 L0 6.5 L6.5 5.5 Z" />
    </svg>
  );

  /* Moon icon SVG */
  const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="rounded-2xl bg-bg-secondary border border-white/[0.06] p-5 shadow-xl shadow-black/20">
        {/* Nav header */}
        <div className="flex items-center justify-center mb-5 relative">
          <svg className="absolute left-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A7089" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="text-text-primary text-sm font-medium">Goal Analysis</span>
        </div>

        {/* Sleep + THRIVING badge */}
        <div className="flex items-center gap-2 mb-1">
          <MoonIcon />
          <span className="text-text-primary font-headline font-bold text-xl">Sleep</span>
          <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-[10px] font-bold tracking-wide uppercase">
            Thriving
          </span>
        </div>

        {/* Score + insight row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-headline font-extrabold text-[52px] leading-none text-accent">78</span>
            <span className="text-text-muted text-sm ml-1.5">this week</span>
          </div>
          <div className="rounded-xl bg-[#151c24] border border-white/[0.06] px-3 py-2.5 max-w-[160px] mt-2">
            <p className="text-text-secondary text-[11px] leading-relaxed">
              Your strongest sleep signal is Magnesium Glycinate.
            </p>
          </div>
        </div>

        {/* Impact Breakdown */}
        <div className="mb-5">
          <div className="text-text-muted text-[9px] font-medium tracking-[0.15em] uppercase mb-3">
            Impact Breakdown
          </div>

          {/* Helping */}
          <div className="mb-4">
            <div className="text-[11px] text-[#10b981] font-bold tracking-wider uppercase mb-2.5">Helping</div>
            <div className="space-y-3">
              {helpingItems.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="text-text-secondary text-[11px] w-[110px] text-right flex-shrink-0 truncate">
                    {item.name}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.width}%`,
                        backgroundColor: "#14B8A6",
                      }}
                    />
                  </div>
                  <span
                    className="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                    style={{
                      backgroundColor: `${item.badgeColor}20`,
                      color: item.badgeColor,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hurting */}
          <div>
            <div className="text-[11px] text-[#ef4444] font-bold tracking-wider uppercase mb-2.5">Hurting</div>
            <div className="space-y-3">
              {hurtingItems.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="text-text-secondary text-[11px] w-[110px] text-right flex-shrink-0 truncate">
                    {item.name}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-white/[0.04] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.width}%`,
                        background: "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #f59e0b 100%)",
                      }}
                    />
                  </div>
                  <span
                    className="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                    style={{
                      backgroundColor: `${item.badgeColor}20`,
                      color: item.badgeColor,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-accent/15 text-accent text-xs font-medium">
            <Sparkle size={10} />
            Supports ({supportCards.length})
          </div>
          <div className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-text-muted text-xs font-medium">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="4" x2="12" y2="12" /><line x1="12" y1="4" x2="4" y2="12" />
            </svg>
            Limiting ({hurtingItems.length})
          </div>
        </div>

        {/* Support detail cards */}
        <div className="space-y-2.5 mb-5">
          {supportCards.map((card) => (
            <div key={card.name} className="rounded-xl bg-[#0A0F14] border border-white/[0.06] p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-primary text-sm font-bold">{card.name}</span>
                <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[9px] font-semibold">
                  {card.days} days of data
                </span>
              </div>
              <p className="text-text-muted text-[11px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Personalized Recommendations */}
        <div className="mb-5">
          <div className="text-text-muted text-[9px] font-medium tracking-[0.15em] uppercase mb-3">
            Personalized Recommendations
          </div>
          <div className="space-y-2.5">
            {recommendations.map((rec) => (
              <div key={rec.title} className="rounded-xl bg-[#0A0F14] border border-white/[0.06] p-3.5">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">{rec.icon}</div>
                  <div>
                    <div className="text-text-primary text-xs font-bold mb-1">{rec.title}</div>
                    <p className="text-text-muted text-[11px] leading-relaxed mb-2">{rec.desc}</p>
                    <span className="inline-block px-3 py-1 rounded-full border border-accent/40 text-accent text-[10px] font-medium">
                      {rec.action}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - outline style */}
        <div className="rounded-xl border border-accent/40 py-3 flex items-center justify-center gap-2">
          <Sparkle size={14} />
          <span className="text-accent text-sm font-medium">Ask AI about your sleep score</span>
        </div>
      </div>
    </div>
  );
}
