interface SupplementInfo {
  canonical_key: string;
  supplement_name: string;
  total_articles: number;
}

interface SupplementSummary {
  canonical_key: string;
  supplement_name: string;
  total_articles: number;
  high_quality_articles: number;
  study_type_breakdown: {
    rct: number;
    meta_analysis: number;
    systematic_review: number;
    observational: number;
  };
}

interface SupplementHeroProps {
  supplement: SupplementInfo;
  summary: SupplementSummary | null;
}

export default function SupplementHero({ supplement, summary }: SupplementHeroProps) {
  const breakdown = summary?.study_type_breakdown;
  const total = supplement.total_articles;

  // Calculate percentages for the quality breakdown bar.
  // Order matters: highest-quality designs first (left side of bar).
  const segments = breakdown && total > 0
    ? [
        {
          key: "meta_analysis",
          label: "Meta-analyses",
          count: breakdown.meta_analysis,
          color: "bg-accent",
        },
        {
          key: "systematic_review",
          label: "Systematic reviews",
          count: breakdown.systematic_review,
          color: "bg-accent/70",
        },
        {
          key: "rct",
          label: "RCTs",
          count: breakdown.rct,
          color: "bg-accent/40",
        },
        {
          key: "observational",
          label: "Observational",
          count: breakdown.observational,
          color: "bg-text-muted/40",
        },
      ].filter((s) => s.count > 0)
    : [];

  return (
    <section className="relative px-6 pt-8 pb-16 overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
          Research
        </p>
        <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-text-primary mb-6">
          {supplement.supplement_name}
        </h1>
        <p className="text-lg text-text-secondary mb-12">
          {supplement.total_articles.toLocaleString()} peer-reviewed studies
          curated from PubMed and Semantic Scholar.
        </p>

        {breakdown && (
          <div className="bg-bg-secondary border border-white/5 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="font-headline font-extrabold text-3xl sm:text-4xl text-text-primary">
                  {breakdown.meta_analysis.toLocaleString()}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-2">
                  Meta-analyses
                </div>
              </div>
              <div>
                <div className="font-headline font-extrabold text-3xl sm:text-4xl text-text-primary">
                  {breakdown.systematic_review.toLocaleString()}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-2">
                  Systematic reviews
                </div>
              </div>
              <div>
                <div className="font-headline font-extrabold text-3xl sm:text-4xl text-text-primary">
                  {breakdown.rct.toLocaleString()}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-2">
                  RCTs
                </div>
              </div>
              <div>
                <div className="font-headline font-extrabold text-3xl sm:text-4xl text-text-primary">
                  {(breakdown.observational + (total - (breakdown.meta_analysis + breakdown.systematic_review + breakdown.rct + breakdown.observational))).toLocaleString()}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-2">
                  Other studies
                </div>
              </div>
            </div>

            {/* Quality breakdown bar */}
            {segments.length > 0 && (
              <div>
                <div className="flex h-2 rounded-full overflow-hidden bg-bg-primary mb-4">
                  {segments.map((seg) => (
                    <div
                      key={seg.key}
                      className={seg.color}
                      style={{ width: `${(seg.count / total) * 100}%` }}
                      title={`${seg.label}: ${seg.count}`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
                  {segments.map((seg) => (
                    <div key={seg.key} className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${seg.color}`} />
                      <span className="text-text-secondary">
                        {seg.label}{" "}
                        <span className="text-text-muted">
                          ({Math.round((seg.count / total) * 100)}%)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
