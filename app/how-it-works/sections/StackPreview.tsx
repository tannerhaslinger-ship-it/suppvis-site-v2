export default function StackPreview() {
  /* SVG icons for time groups */
  const SunIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
  const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
  const MoonIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
  const RefreshIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );

  const groups: {
    label: string;
    sublabel: string;
    icon: React.ReactNode;
    items: { name: string; dose: string; tags: string[]; note: string; research?: boolean }[];
  }[] = [
    {
      label: "Morning",
      sublabel: "Start of day",
      icon: <SunIcon />,
      items: [
        { name: "Lion's Mane", dose: "1g", tags: ["Focus", "Longevity"], note: "Morning with breakfast" },
      ],
    },
    {
      label: "With Meal",
      sublabel: "With food",
      icon: <ClockIcon />,
      items: [
        { name: "Vitamin D3", dose: "5000IU", tags: ["Immunity", "Hormone Health", "+1"], note: "Morning with fatty meal" },
      ],
    },
    {
      label: "Afternoon",
      sublabel: "12-5 PM",
      icon: <SunIcon />,
      items: [
        { name: "Creatine Monohydrate", dose: "5g", tags: ["Energy", "Focus", "Recovery"], note: "Post-workout" },
      ],
    },
    {
      label: "Evening",
      sublabel: "After 6 PM",
      icon: <MoonIcon />,
      items: [
        { name: "Apigenin", dose: "50mg", tags: ["Sleep"], note: "30 min before bed" },
      ],
    },
    {
      label: "Daily",
      sublabel: "Anytime",
      icon: <RefreshIcon />,
      items: [
        { name: "BPC-157", dose: "250mcg", tags: ["Recovery", "Inflammation"], note: "", research: true },
      ],
    },
  ];

  const habits = [
    { name: "Resistance Training", tag: "Movement & Exercise" },
    { name: "Morning Sunlight", tag: "Sleep & Circadian" },
    { name: "Cold Exposure", tag: "Recovery & Stress" },
  ];

  const tagColor = (tag: string) => {
    if (tag.startsWith("+")) return "bg-white/[0.08] text-text-muted";
    return "bg-[#10b981]/20 text-white";
  };

  return (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="rounded-2xl bg-bg-secondary border border-white/[0.06] p-5 shadow-xl shadow-black/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-text-primary font-headline font-bold text-base italic">Today&apos;s Stack</span>
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] font-medium">
            + Ask about stack
          </span>
        </div>
        <div className="text-accent text-[11px] mb-3">0 of 5 taken</div>

        {/* Teal separator */}
        <div className="h-px bg-accent/30 mb-4" />

        {/* Time Groups */}
        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.label}>
              {/* Time group header */}
              <div className="flex items-center gap-1.5 mb-2">
                {group.icon}
                <span className="text-text-primary text-[11px] font-medium">{group.label}</span>
                <span className="text-text-muted text-[11px]">· {group.sublabel}</span>
              </div>

              {/* Supplement cards */}
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-xl bg-[#0A0F14] border border-white/[0.06] p-3 flex gap-3">
                    {/* Checkbox + Skip */}
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-0.5">
                      <div
                        className="w-6 h-6 rounded-md border-2"
                        style={{ borderColor: item.research ? "rgba(139,92,246,0.5)" : "rgba(20,184,166,0.4)" }}
                      />
                      <span className="text-[7px] text-text-muted tracking-[0.1em] uppercase font-medium">Skip</span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-text-primary text-sm font-semibold leading-snug">{item.name}</span>
                        {item.research && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase bg-[#8b5cf6]/20 text-[#8b5cf6]">
                            Research
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap mt-1">
                        <span className="text-text-muted text-[11px]">{item.dose}</span>
                        {item.tags.map((tag) => (
                          <span key={tag} className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${tagColor(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      {item.note && (
                        <div className="flex items-center gap-1 mt-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] flex-shrink-0" />
                          <span className="text-[#f59e0b] text-[10px] font-medium">{item.note}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* My Habits */}
        <div className="mt-5 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-text-primary font-headline font-bold text-base">My Habits</span>
            <span className="text-accent text-xs font-medium">Manage →</span>
          </div>
          <div className="space-y-2">
            {habits.map((h) => (
              <div
                key={h.name}
                className="rounded-xl bg-[#0A0F14] border border-amber-500/25 p-3 flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-md border-2 border-amber-500/40 flex-shrink-0" />
                <span className="text-text-primary text-sm flex-1">{h.name}</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-amber-500/15 text-amber-400 flex-shrink-0">
                  {h.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
