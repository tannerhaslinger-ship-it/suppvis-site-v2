"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

function IntelCard({
  title,
  description,
  icon,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="scroll-reveal rounded-[18px] bg-bg-secondary border border-white/[0.06] p-8 md:p-10 flex flex-col"
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
        {icon}
      </div>
      <h3 className="font-headline font-bold text-lg text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function IntelligenceLayer() {
  const headRef = useScrollReveal();
  const subRef = useScrollReveal(0.1);

  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 md:mb-20">
          <h2
            ref={headRef}
            className="scroll-reveal font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-5"
          >
            Intelligence That Adapts With You
          </h2>
          <p
            ref={subRef}
            className="scroll-reveal text-text-secondary text-lg leading-relaxed"
          >
            Your plan evolves as your data grows. More days tracked means sharper
            insights, better recommendations, and fewer supplements you don&apos;t need.
          </p>
        </div>

        {/* Cards - top row of 3, bottom row of 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <IntelCard
            delay={0}
            title="SuppVis AI"
            description="Trained on 25,000+ peer-reviewed studies. Knows your stack, your goals, your conditions, your medications. Every answer grounded in research, not marketing."
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            }
          />

          <IntelCard
            delay={0.1}
            title="Stack Optimization"
            description="Analyzes what you're taking and cuts what isn't pulling its weight. Fills gaps backed by research for your specific goals. Budget-aware."
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            }
          />

          <IntelCard
            delay={0.2}
            title="Interaction Safety"
            description="Checks every supplement against your medications. 14,000+ drugs and 457 supplements in the interaction graph. Catches conflicts 95% of users miss."
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[calc(66.666%-0.5rem)] md:mx-auto">
          <IntelCard
            delay={0.25}
            title="Optimal Timing"
            description="When you take it matters as much as what you take. Absorption conflicts, synergistic pairings, and a schedule built around your routine."
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />

          <IntelCard
            delay={0.3}
            title="Research Transparency"
            description="No black boxes. Every recommendation shows the evidence behind it. Regulatory, clinical trial, observational, animal, and mechanistic: you see the tier and the studies."
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
