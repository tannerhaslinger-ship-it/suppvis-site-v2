"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const cards = [
  {
    stat: "$69B",
    text: "spent on supplements in the U.S. last year. Most of it on stacks no one verified would work for the person taking them.",
  },
  {
    stat: "1 in 4",
    text: "U.S. adults take a prescription medication alongside a supplement, and most never check whether the combination is safe.",
  },
  {
    stat: "Only 27%",
    text: "of supplements Americans take were recommended by a doctor. The rest came from ads, influencers, or guesswork.",
  },
  {
    stat: "Your biology",
    text: "is unique. Your stack should be too.",
  },
];

export default function Problem() {
  const headerRef = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2
          ref={headerRef}
          className="scroll-reveal font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-center text-text-primary mb-16"
        >
          The supplement industry wasn&rsquo;t built for you.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ProblemCard key={i} stat={card.stat} text={card.text} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  stat,
  text,
  delay,
}: {
  stat: string;
  text: string;
  delay: number;
}) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="scroll-reveal rounded-2xl bg-bg-secondary border border-white/5 p-8 md:p-10"
    >
      <p className="text-text-secondary text-lg leading-relaxed">
        <span className="text-accent font-headline font-bold text-2xl md:text-3xl">
          {stat}
        </span>{" "}
        {text}
      </p>
    </div>
  );
}
