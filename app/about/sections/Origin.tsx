"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Origin() {
  const ref = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div ref={ref} className="scroll-reveal max-w-[680px] mx-auto">
        <h2 className="font-headline font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] text-text-primary mb-10 md:text-center">
          Why SuppVis exists
        </h2>

        <div className="space-y-6 text-[16px] md:text-[17px] text-text-secondary leading-[1.7]">
          <p>
            The supplement industry generates over $70 billion a year. Most of
            that money is spent on trust. Trust in a brand. Trust in an
            influencer. Trust in a label that says &ldquo;clinically
            studied&rdquo; without telling you what that actually means.
          </p>
          <p>
            We spent years on both sides of that problem. Tanner as someone
            whose life depends on understanding exactly what goes into his body.
            Connor as someone being trained to help patients navigate health
            decisions with evidence, not marketing.
          </p>
          <p>
            The thing that kept frustrating us was simple: there was no tool that
            connected what you take to how you actually feel. No system that
            tracked your supplements, measured your outcomes, and told you the
            truth about what was working.
          </p>
          <p>So we built one.</p>
          <p>
            SuppVis is not a supplement brand. We don&rsquo;t sell pills. We
            don&rsquo;t take money from brands to promote their products. We
            built an independent platform that watches what you take, tracks how
            you respond, and gives you clarity you can&rsquo;t get anywhere
            else.
          </p>
        </div>
      </div>
    </section>
  );
}
