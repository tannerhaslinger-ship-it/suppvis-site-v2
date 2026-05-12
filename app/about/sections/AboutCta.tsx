"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function AboutCta() {
  const ref = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[160px] px-6">
      <div ref={ref} className="scroll-reveal max-w-[600px] mx-auto text-center">
        <h2 className="font-headline font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
          Built by people who take this personally.
        </h2>
        <p className="text-text-secondary text-lg mb-10">
          Join the beta and get a direct line to the team building it.
        </p>

        <a
          href="/#waitlist"
          className="inline-flex items-center px-10 py-4.5 rounded-full bg-accent text-bg-primary text-lg font-semibold hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
        >
          Get Early Access
        </a>

        <div className="mt-12 flex flex-col items-center gap-3 text-[15px] text-text-secondary">
          <span>Free during beta</span>
          <span>Founding pricing locked forever</span>
          <span>Your feedback shapes the product</span>
        </div>
      </div>
    </section>
  );
}
