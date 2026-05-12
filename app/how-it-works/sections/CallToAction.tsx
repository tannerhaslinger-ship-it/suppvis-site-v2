"use client";

import Link from "next/link";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function CallToAction() {
  const headRef = useScrollReveal();
  const ctaRef = useScrollReveal(0.15);

  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Radial glow behind CTA */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(20,184,166,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[640px] mx-auto text-center">
        <h2
          ref={headRef}
          className="scroll-reveal font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-6"
        >
          Your biology is unique.
          <br />
          <span className="text-text-secondary">
            Your supplement strategy should be too.
          </span>
        </h2>

        <div ref={ctaRef} className="scroll-reveal">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/suppvis-waitlist"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-medium text-base transition-colors duration-200"
            >
              Join the Beta Waitlist
            </Link>
            <Link
              href="/suppvis-ai-chat"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.12] hover:border-accent/40 text-text-primary font-medium text-base transition-colors duration-200"
            >
              Try SuppVis AI
            </Link>
          </div>

          <p className="mt-6 text-text-muted text-sm">
            Free to start. No credit card required. Privacy-first.
          </p>
        </div>
      </div>
    </section>
  );
}
