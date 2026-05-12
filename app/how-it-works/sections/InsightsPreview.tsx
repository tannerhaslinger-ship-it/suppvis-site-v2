export default function InsightsPreview() {
  const goalPills = [
    { name: "Focus", score: 74, active: false },
    { name: "Sleep", score: 73, active: true },
    { name: "Energy", score: 69, active: false },
    { name: "Stress", score: 68, active: false },
  ];

  /* Static oscillating waves — smooth EEG/oscilloscope style, NOT trending */
  const tealWave =
    "M 0,22 C 8,10 16,34 24,22 C 32,10 40,32 48,20 C 56,8 64,34 72,22 C 80,12 88,30 96,18 C 104,6 112,32 120,20 C 128,10 136,30 144,18 C 152,8 160,28 168,16 C 176,6 184,26 192,18";
  const redWave =
    "M 0,22 C 10,30 20,14 30,24 C 40,34 50,12 60,26 C 70,36 80,14 90,28 C 100,36 110,16 120,28 C 130,34 140,14 150,26 C 160,32 170,16 180,24 C 190,30 192,22 192,22";
  const subtleWave1 =
    "M 0,22 C 12,18 24,26 36,20 C 48,14 60,28 72,22 C 84,16 96,26 108,20 C 120,14 132,28 144,22 C 156,18 168,26 180,20 C 192,16 192,22 192,22";
  const subtleWave2 =
    "M 0,22 C 14,26 28,18 42,24 C 56,28 70,16 84,22 C 98,28 112,16 126,22 C 140,26 154,18 168,24 C 182,28 192,20 192,22";

  /* Legend: row 1 = 4 items, row 2 = 3 items centered */
  const legendRow1 = [
    { label: "Helping", color: "#10b981", type: "wave" },
    { label: "Hurting", color: "#ef4444", type: "wave" },
    { label: "Synergy", color: "#10b981", type: "double" },
    { label: "Danger", color: "#ef4444", type: "zigzag" },
  ];
  const legendRow2 = [
    { label: "Tolerance", color: "#6b7280", type: "dashed" },
    { label: "Anomaly", color: "#f59e0b", type: "bolt" },
    { label: "Cross User Resonance", color: "#a855f7", type: "wave" },
  ];

  const factors = [
    {
      name: "Magnesium Glycinate",
      impact: "+1.7",
      synergy: "Synergizes with L-Theanine",
      confidence: 0.7,
      wave: "M 0,10 C 6,4 12,16 18,10 C 24,4 30,14 36,8 C 42,2 48,14 54,8 C 60,4 66,12 72,6 C 78,2 84,10 88,6",
    },
    {
      name: "L-Theanine",
      impact: "+1.4",
      synergy: "Synergizes with Magnesium Glycinate",
      confidence: 0.55,
      wave: "M 0,12 C 6,6 12,16 18,10 C 24,5 30,15 36,9 C 42,3 48,13 54,7 C 60,2 66,12 72,8 C 78,4 84,10 88,7",
    },
  ];

  const renderLegendIcon = (type: string, color: string) => (
    <svg width="16" height="8" viewBox="0 0 16 8">
      {type === "wave" && (
        <path d="M 0,4 C 3,1 5,7 8,4 C 11,1 13,7 16,4" fill="none" stroke={color} strokeWidth="1.5" />
      )}
      {type === "double" && (
        <>
          <path d="M 0,2 C 3,0 5,4 8,2 C 11,0 13,4 16,2" fill="none" stroke={color} strokeWidth="1" />
          <path d="M 0,6 C 3,4 5,8 8,6 C 11,4 13,8 16,6" fill="none" stroke={color} strokeWidth="1" />
        </>
      )}
      {type === "dashed" && (
        <line x1="0" y1="4" x2="16" y2="4" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
      )}
      {type === "zigzag" && (
        <polyline points="0,6 4,2 8,6 12,2 16,6" fill="none" stroke={color} strokeWidth="1.2" />
      )}
      {type === "bolt" && (
        <path d="M 7,0 L 5,3.5 L 9,3.5 L 7,8" fill="none" stroke={color} strokeWidth="1.2" />
      )}
    </svg>
  );

  return (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="rounded-2xl bg-bg-secondary border border-white/[0.06] p-5 shadow-xl shadow-black/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-text-primary font-headline font-bold text-lg">Insights</span>
          <span className="text-text-muted text-[11px]">Updated 2h ago</span>
        </div>

        {/* Goal pills row — boxed pills matching app screenshot */}
        <div className="flex gap-2 mb-5 overflow-x-auto scrollbar-hide">
          {goalPills.map((g) => (
            <div
              key={g.name}
              className={`flex-shrink-0 flex flex-col items-center rounded-lg border px-3 py-1.5 ${
                g.active
                  ? "border-accent/30 bg-accent/[0.06]"
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                <span className={g.active ? "text-text-primary font-medium" : "text-text-muted"}>
                  {g.name}
                </span>
                <span className={g.active ? "text-text-primary font-bold" : "text-text-muted font-medium"}>
                  {g.score}
                </span>
              </div>
              {g.active && <div className="w-full h-0.5 rounded-full bg-accent mt-1" />}
            </div>
          ))}
        </div>

        {/* Sleep Frequency header */}
        <div className="mb-2">
          <div className="text-text-muted text-[10px] font-medium tracking-[0.15em] uppercase mb-1">
            Sleep Frequency
          </div>
          <span className="font-headline font-bold text-4xl text-accent leading-none">73</span>
        </div>

        {/* Static frequency wave chart */}
        <div className="rounded-xl bg-[#0A0F14] border border-white/[0.06] p-3 mb-3">
          <svg viewBox="0 0 192 44" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Background subtle waves */}
            <path d={subtleWave1} fill="none" stroke="rgba(168,85,247,0.12)" strokeWidth="1" strokeLinecap="round" />
            <path d={subtleWave2} fill="none" stroke="rgba(107,114,128,0.1)" strokeWidth="1" strokeLinecap="round" />
            {/* Red hurting wave */}
            <path d={redWave} fill="none" stroke="rgba(239,68,68,0.45)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Teal helping wave (primary) */}
            <path d={tealWave} fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Legend — row 1 (4 items centered), row 2 (3 items centered) */}
        <div className="flex flex-col items-center gap-1.5 mb-5">
          <div className="flex gap-x-4">
            {legendRow1.map((l) => (
              <div key={l.label} className="flex items-center gap-1">
                {renderLegendIcon(l.type, l.color)}
                <span className="text-text-muted text-[8px]">{l.label}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-x-4">
            {legendRow2.map((l) => (
              <div key={l.label} className="flex items-center gap-1">
                {renderLegendIcon(l.type, l.color)}
                <span className="text-text-muted text-[8px]">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sleep Factors header */}
        <div className="text-text-muted text-[10px] font-medium tracking-[0.15em] uppercase mb-3">
          Sleep Factors
        </div>

        {/* Factor cards — 2 positive helping factors */}
        <div className="space-y-2.5">
          {factors.map((f) => (
            <div key={f.name} className="rounded-xl bg-[#0A0F14] border border-white/[0.06] overflow-hidden">
              {/* Mini green wave at top */}
              <div className="px-3 pt-2">
                <svg viewBox="0 0 88 20" className="w-full h-4" preserveAspectRatio="none">
                  <path
                    d={f.wave}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </div>

              <div className="px-3 pb-3">
                {/* Name + impact value */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-text-primary text-sm font-semibold">{f.name}</span>
                  <span className="font-headline font-bold text-xl text-[#10b981]">{f.impact}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.03] text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="text-text-primary">Activation Phase: 24h</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#8b5cf6]/15 text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                    <span className="text-[#c4b5fd]">{f.synergy}</span>
                  </span>
                </div>

                {/* Confidence bar */}
                <div>
                  <span className="text-text-muted text-[8px] tracking-wide">Confidence Level</span>
                  <div className="h-1 rounded-full bg-white/[0.06] mt-1 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${f.confidence * 100}%`, opacity: 0.7 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
