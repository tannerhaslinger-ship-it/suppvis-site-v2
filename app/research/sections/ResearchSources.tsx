interface SourceCount {
  pubmed: number;
  semantic_scholar: number;
}

interface ResearchSourcesProps {
  counts?: SourceCount;
}

export default function ResearchSources({ counts }: ResearchSourcesProps) {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[700px] mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Sources
          </p>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight">
            Where the research comes from.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-bg-secondary border border-white/5 rounded-3xl p-10 hover:border-accent/30 transition-all overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="font-headline font-extrabold text-3xl tracking-tight">
                  <span className="text-[#326295]">Pub</span>
                  <span className="text-text-primary">Med</span>
                </div>
                <span className="text-text-muted group-hover:text-accent transition-colors text-sm flex items-center gap-1">
                  Visit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                U.S. National Library of Medicine's database of biomedical
                literature, citing over 35 million peer-reviewed articles.
              </p>

              <div className="pt-6 border-t border-white/5 flex items-baseline gap-2">
                <span className="font-headline font-bold text-2xl text-text-primary">
                  Curated by NIH
                </span>
              </div>
            </div>
          </a>

          <a
            href="https://www.semanticscholar.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-bg-secondary border border-white/5 rounded-3xl p-10 hover:border-accent/30 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="font-headline font-extrabold text-3xl tracking-tight text-text-primary">
                  Semantic<span className="text-[#1857B6]">Scholar</span>
                </div>
                <span className="text-text-muted group-hover:text-accent transition-colors text-sm flex items-center gap-1">
                  Visit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                Allen Institute for AI's free, AI-powered research database
                covering over 200 million academic papers.
              </p>

              <div className="pt-6 border-t border-white/5 flex items-baseline gap-2">
                <span className="font-headline font-bold text-2xl text-text-primary">
                  Built by AI2
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
