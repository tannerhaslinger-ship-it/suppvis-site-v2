interface Stats {
  total_articles: number;
  high_quality_articles: number;
  supplements_covered: number;
  last_updated: string | null;
}

interface ResearchHeroProps {
  stats: Stats | null;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

function formatLastUpdated(iso: string | null): { date: string; year: string } {
  if (!iso) return { date: "Recently", year: "" };
  try {
    const date = new Date(iso);
    return {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      year: date.toLocaleDateString("en-US", { year: "numeric" }),
    };
  } catch {
    return { date: "Recently", year: "" };
  }
}

export default function ResearchHero({ stats }: ResearchHeroProps) {
  const lastUpdated = stats ? formatLastUpdated(stats.last_updated) : null;

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Subtle accent glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center max-w-[900px] mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-6">
            Research
          </p>
          <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-text-primary">
            Built on research.
          </h1>
          <p className="mt-8 max-w-[600px] mx-auto text-lg text-text-secondary leading-relaxed">
            Every recommendation in SuppVis is grounded in peer-reviewed studies.
            We curate research from PubMed and Semantic Scholar, then classify
            and link it to the supplements you take.
          </p>
        </div>

        {stats && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Featured tile: Total studies */}
            <div className="md:col-span-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative h-full bg-bg-secondary border border-accent/20 rounded-3xl p-8 sm:p-10 overflow-hidden">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline font-extrabold text-6xl sm:text-7xl lg:text-8xl text-text-primary leading-none tracking-tight">
                    {formatNumber(stats.total_articles)}
                  </span>
                </div>
                <div className="text-sm text-text-secondary uppercase tracking-wider mt-4">
                  Studies indexed
                </div>
                {/* Bottom decoration */}
                <div className="mt-8 flex items-center gap-2 text-xs text-text-muted">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Live corpus, updated continuously
                </div>
              </div>
            </div>

            {/* Right column: stacked smaller tiles */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-bg-secondary border border-white/5 rounded-3xl p-6 sm:p-7">
                <div className="font-headline font-extrabold text-4xl sm:text-5xl text-text-primary leading-none tracking-tight">
                  {formatNumber(stats.high_quality_articles)}
                </div>
                <div className="mt-3 text-xs text-text-muted leading-snug">
                  RCTs, meta-analyses & systematic reviews
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/5 rounded-3xl p-6 sm:p-7">
                <div className="font-headline font-extrabold text-4xl sm:text-5xl text-text-primary leading-none tracking-tight">
                  {formatNumber(stats.supplements_covered)}
                </div>
                <div className="mt-3 text-xs text-text-muted leading-snug">
                  Supplements covered
                </div>
              </div>

              <div className="bg-bg-secondary border border-white/5 rounded-3xl p-6 sm:p-7">
                <div className="font-headline font-extrabold text-4xl sm:text-5xl text-text-primary leading-none tracking-tight">
                  {lastUpdated?.date}
                </div>
                <div className="font-headline font-bold text-sm text-text-secondary mt-1">
                  {lastUpdated?.year}
                </div>
                <div className="mt-3 text-xs text-text-muted leading-snug">
                  Last updated
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
