import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { fetchArticles } from "../lib/api";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "The SuppVis Journal - Evidence-Based Supplement Science",
  description:
    "Evidence-based supplement science. No brand agendas. No hype. Just research you can use.",
};

export default async function BlogPage() {
  const articles = await fetchArticles();

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary mb-4">
              The SuppVis Journal
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Evidence-based supplement science. No brand agendas. No hype. Just
              research you can use.
            </p>
          </div>

          <BlogContent articles={articles} />
        </div>
      </main>
      <Footer />
    </>
  );
}
