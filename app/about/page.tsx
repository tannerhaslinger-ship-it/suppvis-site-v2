import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutHero from "./sections/AboutHero";
import Origin from "./sections/Origin";
import FounderProfiles from "./sections/FounderProfiles";
import Beliefs from "./sections/Beliefs";
import VisQuote from "./sections/VisQuote";
import AboutCta from "./sections/AboutCta";

export const metadata: Metadata = {
  title: "About - SuppVis",
  description:
    "SuppVis was built by two brothers. One managing Type 1 diabetes, the other studying naturopathic medicine. Both frustrated by an industry that sells confidence but delivers confusion.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutHero />
        <Origin />
        <FounderProfiles />
        <Beliefs />
        <VisQuote />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
