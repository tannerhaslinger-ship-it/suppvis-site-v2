"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const headlineRef = useScrollReveal();
  const subRef = useScrollReveal(0.15);
  const descRef = useScrollReveal(0.3);
  const vizRef = useScrollReveal(0.2);

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,184,166,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h1
              ref={headlineRef}
              className="scroll-reveal font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary leading-[1.08] tracking-tight"
            >
              Prove What Works.
              <br />
              <span className="text-accent">Drop What Doesn&apos;t.</span>
            </h1>
            <p
              ref={subRef}
              className="scroll-reveal mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-[520px]"
            >
              Most people guess whether their supplements help. SuppVis replaces
              guesswork with personal data. Track how you feel, see what
              correlates, and know (not hope) that your stack is working.
            </p>
            <p
              ref={descRef}
              className="scroll-reveal mt-4 text-base text-accent/80 leading-relaxed max-w-[480px]"
            >
              The first platform that lets you run real experiments on your own
              biology. Daily tracking, correlation analysis, and AI grounded in
              25,000+ peer-reviewed studies.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div ref={vizRef} className="scroll-reveal relative flex items-center justify-center">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
