"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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

interface ResearchBrowserProps {
  supplements: SupplementSummary[];
}

export default function ResearchBrowser({ supplements }: ResearchBrowserProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return supplements;
    return supplements.filter((s) =>
      s.supplement_name.toLowerCase().includes(q),
    );
  }, [query, supplements]);

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[700px] mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Browse the corpus
          </p>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight">
            See what's behind every supplement.
          </h2>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search supplements..."
            className="w-full bg-bg-secondary border border-white/10 rounded-2xl px-6 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>

        {/* Result count */}
        <p className="text-sm text-text-muted mb-6">
          Showing {filtered.length.toLocaleString()} of{" "}
          {supplements.length.toLocaleString()} supplements
        </p>

        {/* Supplement grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-text-muted">
            No supplements match "{query}".
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s) => (
              <Link
                key={s.canonical_key}
                href={`/research/${s.canonical_key}`}
                className="bg-bg-secondary border border-white/5 rounded-2xl p-6 text-left hover:border-accent/30 transition-colors group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-headline font-bold text-lg text-text-primary leading-tight">
                    {s.supplement_name}
                  </h3>
                  <div className="font-headline font-bold text-2xl text-accent">
                    {s.total_articles}
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
                  {s.study_type_breakdown.rct > 0 && (
                    <span>{s.study_type_breakdown.rct} RCTs</span>
                  )}
                  {s.study_type_breakdown.meta_analysis > 0 && (
                    <span>{s.study_type_breakdown.meta_analysis} meta-analyses</span>
                  )}
                  {s.study_type_breakdown.systematic_review > 0 && (
                    <span>{s.study_type_breakdown.systematic_review} reviews</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
