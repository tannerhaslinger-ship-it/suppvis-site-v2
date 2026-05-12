const sources = [
  {
    id: 1,
    text: 'Nutrition Business Journal, "State of Supplements" report, 2024. Reported via Nutraceuticals World.',
    url: "https://www.nutraceuticalsworld.com/exclusives/the-state-of-supplements-u-s-market-approaches-70-billion/",
  },
  {
    id: 2,
    text: "Farina EK, Austin KG, Lieberman HR. \u201CConcomitant dietary supplement and prescription medication use is prevalent among US adults with doctor-informed medical conditions.\u201D J Acad Nutr Diet. 2014;114(11):1784-90.",
    url: "https://pubmed.ncbi.nlm.nih.gov/24703929/",
  },
  {
    id: 3,
    text: "NHANES 2011\u20132018 analysis. \u201CQuantity, Duration, Adherence, and Reasons for Dietary Supplement Use among Adults.\u201D Nutrients. 2024.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11206876/",
  },
  {
    id: 4,
    text: "NHANES 2021\u20132023 data. \u201CTrends in dietary supplement use among U.S. adults between 2011 and 2023.\u201D European Journal of Nutrition. 2025.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41128907/",
  },
];

export default function Sources() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="uppercase tracking-widest text-xs font-semibold text-text-muted mb-8">
          Sources
        </h3>
        <ol className="space-y-4">
          {sources.map((s) => (
            <li
              key={s.id}
              id={`source-${s.id}`}
              className="text-sm text-text-muted leading-relaxed scroll-mt-24"
            >
              <span className="mr-1.5">{s.id}.</span>
              {s.text}{" "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                View source
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
