import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - SuppVis",
  description:
    "How SuppVis earns revenue through affiliate relationships and commercial partnerships.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 px-6">
        <article className="max-w-[760px] mx-auto">
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4 leading-tight">
            Affiliate Disclosure
          </h1>
          <p className="text-text-muted text-sm mb-12">
            Last updated: May 3, 2026
          </p>

          <div className="space-y-10 text-[15px] text-text-secondary leading-[1.75]">
            <p>
              SuppVis earns revenue in part through affiliate relationships and
              commercial partnerships with supplement retailers and brands. We
              believe in being upfront about how this works.
            </p>

            {/* What we participate in */}
            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                What we participate in
              </h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-text-primary">
                    Amazon Associates Program.
                  </strong>{" "}
                  SuppVis is a participant in the Amazon Services LLC Associates
                  Program, an affiliate advertising program designed to provide a
                  means for sites to earn advertising fees by advertising and
                  linking to Amazon.com. Our Amazon affiliate tag is suppvis-20.
                </p>
                <p>
                  <strong className="text-text-primary">
                    Direct brand partnerships.
                  </strong>{" "}
                  SuppVis may have direct affiliate or commercial relationships
                  with select supplement brands and retailers outside of Amazon.
                  Where these exist, we disclose them here and on relevant pages
                  of the platform.
                </p>
              </div>
            </section>

            {/* What this means for you */}
            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                What this means for you
              </h2>
              <p>
                When you click a product link in SuppVis and complete a
                qualifying purchase, SuppVis may earn a commission at no
                additional cost to you. The price you pay is exactly the same
                whether you use our link or go to the retailer directly.
              </p>
            </section>

            {/* What it does not mean */}
            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                What it does not mean
              </h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-text-primary">
                    Personalized recommendations are not for sale.
                  </strong>{" "}
                  When SuppVis generates a recommendation specifically for you
                  based on your health profile, conditions, medications, and
                  goals, that recommendation is produced by our recommendation
                  engine based on the underlying evidence. Brands cannot pay to
                  be recommended to a specific user.
                </p>
                <p>
                  <strong className="text-text-primary">
                    Generic surfaces may include sponsored placement.
                  </strong>{" "}
                  In non-personalized parts of SuppVis such as the shop, browse
                  pages, or featured product sections, partner brands may receive
                  prominent placement as part of a commercial arrangement. Where
                  this is the case, we identify those placements as sponsored,
                  partnered, or otherwise commercial, in accordance with FTC
                  guidance.
                </p>
              </div>
            </section>

            {/* How we choose products */}
            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                How we choose products
              </h2>
              <p>
                Products that appear in SuppVis are evaluated on bioavailability
                of the ingredient form, third-party certifications such as NSF
                Certified for Sport or USP Verified, absence of proprietary
                blends, clinical dosing supported by published research, and
                brand manufacturing standards. Affiliate commission rates and
                partnership status do not affect personalized recommendations.
              </p>
            </section>

            {/* Questions */}
            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Questions
              </h2>
              <p className="mb-4">
                For questions about our affiliate relationships or product
                selection methodology, contact us at{" "}
                <a
                  href="mailto:hello@suppvis.health"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  hello@suppvis.health
                </a>
                .
              </p>
              <p>
                For brands or retailers interested in partnering with SuppVis,
                contact us at{" "}
                <a
                  href="mailto:partner@suppvis.health"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  partner@suppvis.health
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
