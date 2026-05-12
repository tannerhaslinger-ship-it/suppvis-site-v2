import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { fetchProducts } from "../lib/api";
import ShopContent from "./ShopContent";
import ComplianceFooter from "./ComplianceFooter";

export const metadata: Metadata = {
  title: "Shop - Curated Supplements | SuppVis",
  description:
    "589 supplements ranked by quality, third-party testing, and clinical dosing. Brand-agnostic. Never influenced by commission rates.",
};

export default async function ShopPage() {
  const products = await fetchProducts();

  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero header */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary mb-4">
              Curated for science. Not profit.
            </h1>
            <p className="text-lg text-text-secondary max-w-[640px] mx-auto mb-6">
              {products.length} supplements across every category. Ranked by
              quality, third-party testing, and clinical dosing. Brand-agnostic.
              Never influenced by commission rates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
              <span>Brand-Agnostic</span>
              <span className="text-text-muted/40">&middot;</span>
              <span>Third-Party Tested Options</span>
              <span className="text-text-muted/40">&middot;</span>
              <span>Clinical Dosing</span>
              <span className="text-text-muted/40">&middot;</span>
              <span>{products.length} Products</span>
            </div>
          </div>

          <ShopContent products={products} />
        </div>
      </main>
      <ComplianceFooter />
      <Footer />
    </>
  );
}
