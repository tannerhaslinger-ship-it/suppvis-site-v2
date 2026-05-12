import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "./sections/Hero";
import FindYourFrequency from "./sections/FindYourFrequency";
import IntelligenceLayer from "./sections/IntelligenceLayer";
import CallToAction from "./sections/CallToAction";

export const metadata: Metadata = {
  title: "How It Works - SuppVis",
  description:
    "How SuppVis correlates your supplements against how you feel, surfaces what's working, and grounds every insight in 24,500+ peer-reviewed supplement studies.",
  openGraph: {
    title: "How It Works - SuppVis",
    description:
      "How SuppVis correlates your supplements against how you feel, surfaces what's working, and grounds every insight in 24,500+ peer-reviewed supplement studies.",
    url: "https://suppvis.health/how-it-works",
    siteName: "SuppVis",
    type: "website",
  },
  twitter: {
    description:
      "How SuppVis correlates your supplements against how you feel, surfaces what's working, and grounds every insight in 24,500+ peer-reviewed supplement studies.",
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
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
