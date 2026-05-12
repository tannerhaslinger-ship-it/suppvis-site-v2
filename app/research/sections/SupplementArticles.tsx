interface GoalRelation {
  goal: string;
  direction: "positive" | "negative" | "mixed" | "no_effect";
}

interface Article {
  title: string;
  year: number | null;
  journal: string | null;
  authors: string | null;
  study_type: string | null;
  sample_size: number | null;
  summary: string | null;
  goal_relations: GoalRelation[];
  article_url: string;
  source_type: string;
}

interface SupplementArticlesProps {
  articles: Article[];
}

function formatStudyType(type: string | null): string {
  if (!type) return "Study";
  const map: Record<string, string> = {
    rct: "RCT",
    meta_analysis: "Meta-analysis",
    systematic_review: "Systematic review",
    observational: "Observational",
    cohort: "Cohort study",
    case_control: "Case-control",
    cross_sectional: "Cross-sectional",
    in_vitro: "In vitro",
    animal: "Animal study",
    narrative_review: "Review",
    case_report: "Case report",
    other: "Study",
  };
  return map[type] ?? type;
}

function formatGoalLabel(slug: string): string {
  return slug
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function directionSymbol(d: string): string {
  if (d === "positive") return "↑";
  if (d === "negative") return "↓";
  if (d === "mixed") return "↕";
  return "-";
}

function directionClass(d: string): string {
  if (d === "positive") return "text-accent";
  if (d === "negative") return "text-warning";
  return "text-text-muted";
}

export default function SupplementArticles({ articles }: SupplementArticlesProps) {
  if (articles.length === 0) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto text-center text-text-muted">
          No studies available yet.
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pb-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10">
          <h2 className="font-headline font-bold text-2xl text-text-primary">
            Studies
          </h2>
          <p className="text-text-muted text-sm mt-1">
            Sorted by quality and recency
          </p>
        </div>

        <div className="space-y-4">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.article_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bg-secondary border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs text-text-muted">
                {article.year && (
                  <span className="font-medium text-text-secondary">
                    {article.year}
                  </span>
                )}
                {article.journal && (
                  <>
                    <span className="text-text-muted/40">&middot;</span>
                    <span>{article.journal}</span>
                  </>
                )}
                {article.authors && (
                  <>
                    <span className="text-text-muted/40">&middot;</span>
                    <span className="truncate max-w-[300px]">
                      {article.authors}
                    </span>
                  </>
                )}
              </div>

              <h3 className="font-headline font-bold text-lg sm:text-xl text-text-primary group-hover:text-accent transition-colors leading-snug mb-4">
                {article.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-xs text-text-secondary font-medium">
                  {formatStudyType(article.study_type)}
                </span>
                {article.sample_size && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-xs text-text-secondary">
                    n = {article.sample_size.toLocaleString()}
                  </span>
                )}
                {article.goal_relations.map((g, gi) => (
                  <span
                    key={gi}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-xs ${directionClass(g.direction)}`}
                  >
                    {formatGoalLabel(g.goal)} {directionSymbol(g.direction)}
                  </span>
                ))}
              </div>

              {article.summary && (
                <p className="text-sm text-text-secondary leading-relaxed">
                  {article.summary}
                </p>
              )}

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-text-muted uppercase tracking-wider">
                  {article.source_type === "pubmed" ? "PubMed" : "Semantic Scholar"}
                </span>
                <span className="text-xs text-text-muted group-hover:text-accent transition-colors flex items-center gap-1">
                  Read on {article.source_type === "pubmed" ? "PubMed" : "Semantic Scholar"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
