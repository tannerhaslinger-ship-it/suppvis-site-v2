import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Medical Disclaimer - SuppVis",
  description:
    "Important information about the limitations of SuppVis as an educational supplement platform.",
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24 px-6">
        <article className="max-w-[760px] mx-auto">
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4 leading-tight">
            Medical Disclaimer
          </h1>
          <p className="text-text-muted text-sm mb-12">
            Last updated: May 3, 2026
          </p>

          <div className="space-y-10 text-[15px] text-text-secondary leading-[1.75]">
            <p>
              SuppVis is an educational platform that helps people make more
              informed decisions about dietary supplements. The information
              available through suppvis.health, the SuppVis iOS application, and
              any related services is intended for general informational and
              educational purposes only.
            </p>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Not medical advice
              </h2>
              <p>
                Nothing provided through SuppVis is medical advice, diagnosis, or
                treatment. Personalized recommendations, supplement explanations,
                research summaries, articles, product listings, and any other
                content are educational in nature and are not a substitute for
                professional advice from a licensed healthcare provider who knows
                your personal health history. SuppVis is not a medical service
                and does not establish a doctor-patient relationship.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Supplements are not drugs
              </h2>
              <p>
                Dietary supplements are not evaluated or approved by the United
                States Food and Drug Administration for the prevention,
                treatment, or cure of any disease or medical condition.
                Statements about supplements made through SuppVis reflect
                published scientific literature and do not constitute clinical
                claims.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                What our interaction screening does and does not do
              </h2>
              <p className="mb-4">
                SuppVis screens recommendations against the medications and
                conditions you have logged in the app before showing them to you.
                This screening is designed to help you make safer decisions, but
                it has important limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  It can only check against information you have shared with us.
                  Medications, conditions, allergies, or other health factors you
                  have not entered will not be screened.
                </li>
                <li>
                  It is not a substitute for the judgment of a qualified
                  healthcare provider, who has access to your full medical
                  history and can interpret risk in context.
                </li>
                <li>
                  The accuracy of our screening depends on the accuracy of the
                  information you provide. Incomplete or inaccurate health
                  information will produce incomplete or inaccurate results.
                </li>
                <li>
                  The interaction screen is a tool to support informed decisions,
                  not a guarantee of safety.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Consult your healthcare provider
              </h2>
              <p>
                Always consult a qualified healthcare professional before
                starting, stopping, or changing any supplement regimen. This is
                especially important if you are pregnant, nursing, planning to
                become pregnant, have a pre-existing medical condition, are
                scheduled for surgery, or are taking prescription or
                over-the-counter medications. Some supplements can interact with
                medications, affect underlying conditions, or carry risks that
                are not appropriate for every person.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Individual results vary
              </h2>
              <p>
                Supplement responses vary significantly between individuals based
                on genetics, diet, lifestyle, health status, gut microbiome,
                medication use, supplement quality, and many other factors.
                SuppVis does not guarantee any specific outcome from following
                our recommendations.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Research limitations
              </h2>
              <p>
                SuppVis is built on peer-reviewed research, clinical guidelines,
                and condition-specific evidence. The science of nutrition and
                supplementation is continuously evolving, and individual studies
                have limitations in sample size, duration, population, and
                methodology. SuppVis does not guarantee the accuracy,
                completeness, or currency of any referenced research, and updated
                science may change recommendations over time.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                How we use AI
              </h2>
              <p>
                SuppVis uses artificial intelligence to generate written
                explanations and educational content around the recommendations
                our system produces. AI does not make medical decisions on your
                behalf. Recommendations are generated by our recommendation
                engine from a curated dataset of supplements, conditions, and
                research; AI helps explain those recommendations in plain
                language.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Not for emergencies
              </h2>
              <p>
                SuppVis is not intended for medical emergencies. If you believe
                you are experiencing a medical emergency, call your local
                emergency number or seek immediate medical attention. Do not rely
                on SuppVis for urgent health decisions.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Acknowledgment
              </h2>
              <p>
                By using SuppVis, you acknowledge that you have read and
                understood this disclaimer. Your use of the platform is also
                governed by our{" "}
                <a
                  href="/terms"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Privacy Policy
                </a>
                . SuppVis is not liable for any decisions made or actions taken
                based on information provided through the platform, except where
                liability cannot be limited under applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-headline font-bold text-xl text-text-primary mb-4">
                Questions
              </h2>
              <p>
                For questions about this disclaimer, contact us at{" "}
                <a
                  href="mailto:hello@suppvis.health"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  hello@suppvis.health
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
