import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sources - SuppVis",
  description:
    "Every claim on the SuppVis site links back to a peer-reviewed study or authoritative industry source.",
};

const researchSources = [
  {
    name: "PubMed",
    institution: "National Library of Medicine",
    description:
      "Peer-reviewed biomedical research articles across every domain we track.",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    name: "ClinicalTrials.gov",
    institution: "National Library of Medicine",
    description:
      "Registry of publicly and privately supported clinical trials. Source for emerging peptide and drug evidence.",
    url: "https://clinicaltrials.gov",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
  },
  {
    name: "RxNorm",
    institution: "National Library of Medicine",
    description:
      "Standard nomenclature for clinical drugs. Used to normalize every medication in our database.",
    url: "https://www.nlm.nih.gov/research/umls/rxnorm/index.html",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <path d="m8.5 8.5 7 7" />
      </svg>
    ),
  },
  {
    name: "RxClass",
    institution: "National Library of Medicine",
    description:
      "Drug classification system linking medications to pharmacological classes and mechanisms.",
    url: "https://mor.nlm.nih.gov/RxClass/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" /><line x1="12" y1="8" x2="12" y2="14" />
        <circle cx="6" cy="19" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="12" y1="14" x2="6" y2="16" /><line x1="12" y1="14" x2="18" y2="16" />
      </svg>
    ),
  },
  {
    name: "DailyMed",
    institution: "NLM and FDA",
    description:
      "Official source for FDA-approved drug labeling. Backbone of our drug-supplement interaction data.",
    url: "https://dailymed.nlm.nih.gov",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: "MedlinePlus",
    institution: "National Library of Medicine",
    description:
      "Patient-facing health information reviewed by physicians. Source for condition descriptions.",
    url: "https://medlineplus.gov",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
      </svg>
    ),
  },
  {
    name: "NIH Office of Dietary Supplements",
    institution: "National Institutes of Health",
    description:
      "Federal authority on dietary supplement research, dosing, and safety.",
    url: "https://ods.od.nih.gov",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s1.5 2.5-.8 6.5C18 11 20 12 20 12s-2 3-5 4c-1.5.5-2.5.5-4 4Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    name: "NIH Dietary Supplement Label Database",
    institution: "National Institutes of Health",
    description:
      "Comprehensive database of supplement product labels, ingredients, and barcodes.",
    url: "https://dsld.od.nih.gov",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect x="7" y="7" width="3" height="10" rx="0.5" /><rect x="14" y="7" width="3" height="10" rx="0.5" />
        <rect x="10.5" y="7" width="3" height="10" rx="0.5" />
      </svg>
    ),
  },
  {
    name: "Semantic Scholar",
    institution: "Allen Institute for AI",
    description:
      "AI-powered academic search. Surfaces relevant research that pure keyword indexing misses.",
    url: "https://www.semanticscholar.org",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
  },
];

const homepageSources = [
  {
    id: 1,
    claim: "$69.3B spent on supplements in 2024",
    citation:
      'Nutrition Business Journal, "State of Supplements" report, 2024. Reported via Nutraceuticals World, April 2025.',
    url: "https://www.nutraceuticalsworld.com/exclusives/the-state-of-supplements-u-s-market-approaches-70-billion/",
  },
  {
    id: 2,
    claim:
      "1 in 3 U.S. adults takes a prescription medication alongside a supplement",
    citation:
      'Farina EK, Austin KG, Lieberman HR. "Concomitant dietary supplement and prescription medication use is prevalent among US adults with doctor-informed medical conditions." J Acad Nutr Diet. 2014;114(11):1784-90.',
    url: "https://pubmed.ncbi.nlm.nih.gov/24703929/",
  },
  {
    id: 3,
    claim: "Only 26.9% of supplements were recommended by a doctor",
    citation:
      'NHANES 2011\u20132018 dataset analysis. "Quantity, Duration, Adherence, and Reasons for Dietary Supplement Use among Adults." Nutrients. 2024.',
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11206876/",
  },
  {
    id: 4,
    claim: "16% of U.S. adults take four or more supplements daily",
    citation:
      'NHANES 2021\u20132023 cycle data. "Trends in dietary supplement use among U.S. adults between 2011 and 2023." European Journal of Nutrition. 2025.',
    url: "https://pubmed.ncbi.nlm.nih.gov/41128907/",
  },
];

export default function SourcesPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Page header */}
          <div className="max-w-[760px]">
            <h1 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4 leading-tight">
              Sources
            </h1>
            <p className="text-text-secondary text-[15px] leading-[1.75] mb-16">
              Every claim on this site links back to a peer-reviewed study or
              authoritative industry source. If you ever spot something we got
              wrong, email{" "}
              <a
                href="mailto:tannerhaslinger@suppvis.health"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                tannerhaslinger@suppvis.health
              </a>
              .
            </p>
          </div>

          {/* Research Sources section */}
          <section className="mb-20">
            <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-4">
              Where Our Research Comes From
            </h2>
            <p className="text-text-secondary text-[15px] leading-[1.75] max-w-[760px] mb-10">
              Every supplement, drug, condition, and habit in SuppVis is grounded
              in research from authoritative public databases. We index, classify,
              and link evidence so every claim traces back to its source.
            </p>

            {/* 9-card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {researchSources.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-bg-secondary border border-white/[0.05] p-6 hover:border-white/[0.15] hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3 relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {s.icon}
                  </div>
                  <h3 className="font-headline font-semibold text-lg text-text-primary">
                    {s.name}
                  </h3>
                  <p className="text-xs text-text-muted uppercase tracking-wide">
                    {s.institution}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {s.description}
                  </p>
                  <span className="absolute top-4 right-4 text-xs text-text-muted opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Visit
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            {/* Methodology note */}
            <p className="text-sm text-text-muted max-w-prose mt-12">
              Studies are classified by type (randomized controlled trials,
              meta-analyses, systematic reviews, observational, animal,
              mechanistic) and weighted toward higher-evidence study types in our
              recommendations. The corpus updates continuously.
            </p>

            {/* Legal disclaimer */}
            <p className="text-xs text-text-muted/70 max-w-prose mt-6 italic">
              These sources are publicly accessible authoritative databases used
              by SuppVis to inform its platform. SuppVis is not affiliated with,
              sponsored by, or endorsed by the National Library of Medicine, the
              National Institutes of Health, the U.S. Department of Health and
              Human Services, the FDA, the Allen Institute for AI, or any other
              listed organization. Inclusion of a source does not imply
              endorsement by that source.
            </p>
          </section>

          {/* Existing Homepage citations */}
          <div className="max-w-[760px]">
            <h2 className="font-headline font-bold text-xl md:text-2xl text-text-primary mb-8">
              Homepage
            </h2>

            <ol className="space-y-10">
              {homepageSources.map((s) => (
                <li key={s.id}>
                  <p className="text-text-secondary text-[15px] leading-[1.75]">
                    <span className="text-accent font-semibold">[{s.id}]</span>{" "}
                    <span className="font-semibold text-text-primary">
                      {s.claim}
                    </span>
                  </p>
                  <p className="text-text-muted text-[15px] leading-[1.75] mt-1">
                    {s.citation}
                  </p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover text-[15px] transition-colors inline-flex items-center gap-1 mt-1"
                  >
                    View source &rarr;
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
