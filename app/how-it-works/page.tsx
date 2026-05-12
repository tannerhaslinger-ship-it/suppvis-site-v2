import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";
import FindYourFrequency from "./sections/FindYourFrequency";
import IntelligenceLayer from "./sections/IntelligenceLayer";
import ResearchFoundation from "./sections/ResearchFoundation";
import CallToAction from "./sections/CallToAction";

export const metadata: Metadata = {
  title: "How It Works - SuppVis",
  description:
    "SuppVis tracks your supplements, correlates them with your health goals, and proves what actually works for your biology. Powered by 25,000+ peer-reviewed studies.",
  openGraph: {
    title: "How It Works - SuppVis",
    description:
      "SuppVis tracks your supplements, correlates them with your health goals, and proves what actually works for your biology. Powered by 25,000+ peer-reviewed studies.",
    url: "https://suppvis.health/how-it-works",
    siteName: "SuppVis",
    type: "website",
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FindYourFrequency />
        <IntelligenceLayer />
        <ResearchFoundation />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
