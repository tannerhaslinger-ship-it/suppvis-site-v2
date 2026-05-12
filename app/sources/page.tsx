import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sources - SuppVis",
  description:
    "Every claim on the SuppVis site links back to a peer-reviewed study or authoritative industry source.",
};

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
        <div className="max-w-[760px] mx-auto">
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
      </main>
      <Footer />
    </>
  );
}
