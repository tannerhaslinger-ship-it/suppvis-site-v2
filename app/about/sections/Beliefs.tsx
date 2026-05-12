"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

const beliefs = [
  {
    headline: "Built around your biology, not a catalog.",
    body: "Most \u201Cpersonalized\u201D supplements just pick from a handful of pre-made stacks. SuppVis recommends the specific compounds your body actually needs, based on your conditions, goals, medications, and how you\u2019ve responded over time. Your stack is yours, down to the molecule.",
  },
  {
    headline: "Screened against what you\u2019ve told us.",
    body: "Every recommendation is checked against the medications and conditions you\u2019ve logged before it reaches your stack. The more you share with SuppVis, the sharper the screen.",
  },
  {
    headline: "Science you can audit.",
    body: "Every recommendation traces back to peer-reviewed research, clinical guidelines, and condition-specific evidence. Not influencer opinions. Not marketing claims. If the science doesn\u2019t support it, we don\u2019t recommend it.",
  },
];

export default function Beliefs() {
  const headerRef = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2
          ref={headerRef}
          className="scroll-reveal font-headline font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] text-text-primary mb-12 md:mb-16 md:text-center"
        >
          What drives every decision we make
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beliefs.map((belief, i) => (
            <BeliefCard key={i} belief={belief} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeliefCard({
  belief,
  delay,
}: {
  belief: (typeof beliefs)[number];
  delay: number;
}) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="scroll-reveal rounded-[18px] bg-bg-secondary border border-white/[0.06] p-8 md:p-10"
    >
      <h3 className="font-headline font-bold text-lg text-accent mb-3">
        {belief.headline}
      </h3>
      <p className="text-[15px] text-text-secondary leading-[1.65]">
        {belief.body}
      </p>
    </div>
  );
}
