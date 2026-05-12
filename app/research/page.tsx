import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ResearchHero from "./sections/ResearchHero";
import ResearchMethodology from "./sections/ResearchMethodology";
import ResearchSources from "./sections/ResearchSources";
import ResearchBrowser from "./sections/ResearchBrowser";

export const metadata: Metadata = {
  title: "Research - SuppVis",
  description:
    "SuppVis is built on peer-reviewed research. Browse the studies behind every recommendation. Curated from PubMed and Semantic Scholar, classified for quality, linked to specific supplements and outcomes.",
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://suppvis-platform.vercel.app";

interface Stats {
  total_articles: number;
  high_quality_articles: number;
  supplements_covered: number;
  last_updated: string | null;
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

async function fetchStats(): Promise<Stats | null> {
  try {
    const res = await fetch(`${API_BASE}/api/public/research/stats`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchSupplements(): Promise<SupplementSummary[]> {
  try {
    const res = await fetch(
      `${API_BASE}/api/public/research/supplements?limit=500`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.supplements ?? [];
  } catch {
    return [];
  }
}

export default async function ResearchPage() {
  const [stats, supplements] = await Promise.all([
    fetchStats(),
    fetchSupplements(),
  ]);

  return (
    <>
      <Nav />
      <main>
        <ResearchHero stats={stats} />
        <ResearchMethodology />
        <ResearchSources />
        <ResearchBrowser supplements={supplements} />
      </main>
      <Footer />
    </>
  );
}
