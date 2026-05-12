# SuppVis About Page - Copy & Build Specification

---

## OVERVIEW

The about page is the trust-building page. Its job: make visitors believe in the people behind SuppVis. Lead with the founders, not the company. The story IS the selling point.

**URL:** /about (Next.js route: app/about/page.tsx)
**Design:** Same system as landing page (dark theme, Outfit headlines, DM Sans body, teal accent)
**Nav:** Same fixed nav as landing page

---

## SECTION 1: HERO

**Layout:** Full viewport height. Photo-forward. The founders photo should be the hero image, large and prominent. Not a thumbnail in a circle. A real, generous photo that takes up at least 40-50% of the viewport width on desktop.

**Above the photo (Outfit 800, large):**
We didn't start a company. We built the tool we needed.

**Below or beside the photo (DM Sans 400, secondary color, max-width 600px):**
SuppVis was built by two brothers. One managing Type 1 diabetes, the other studying naturopathic medicine. Both frustrated by an industry that sells confidence but delivers confusion.

**Photo:** [founders.jpg - Tanner and Connor together, real photo]

**Animation:** Photo and text fade in together on load. Simple, not dramatic. The content carries this section.

---

## SECTION 2: THE ORIGIN

**Layout:** Single column, centered text, generous max-width (680px). This reads like a letter, not a brochure.

**Section header (Outfit 700):**
Why SuppVis exists

**Body (DM Sans 400, 16-17px, secondary text color, generous line-height 1.7):**

The supplement industry generates over $70 billion a year. Most of that money is spent on trust. Trust in a brand. Trust in an influencer. Trust in a label that says "clinically studied" without telling you what that actually means.

We spent years on both sides of that problem. Tanner as someone whose life depends on understanding exactly what goes into his body. Connor as someone being trained to help patients navigate health decisions with evidence, not marketing.

The thing that kept frustrating us was simple: there was no tool that connected what you take to how you actually feel. No system that tracked your supplements, measured your outcomes, and told you the truth about what was working.

So we built one.

SuppVis is not a supplement brand. We don't sell pills. We don't take money from brands to promote their products. We built an independent platform that watches what you take, tracks how you respond, and gives you clarity you can't get anywhere else.

---

## SECTION 3: FOUNDER PROFILES

**Layout:** Two cards, side by side on desktop, stacked on mobile. Each card has the founder's initial/avatar, name, title, and their personal story. Clean cards with subtle borders, not heavy boxes.

### Tanner Haslinger
**CEO / Co-Founder**

**Story (DM Sans 400, 15px, secondary text color):**

In 2021, I was diagnosed with Type 1 diabetes. It changed everything about how I think about my body.

Living with T1D means making over 300 health decisions a day that most people never have to think about. Every meal, every workout, every supplement gets calculated. There are no days off from managing your own biology.

That level of awareness made one thing obvious: most people have no idea if their supplements are actually doing anything. They're spending hundreds of dollars a month on faith. I was one of them.

I built SuppVis because I needed a system that would show me, with real data, what was working and what was wasting my time and money. Not what a brand told me. Not what an influencer promoted. What my own body confirmed.

### Connor Haslinger
**COO / Co-Founder**

**Story (DM Sans 400, 15px, secondary text color):**

I started in food science and left frustrated. The answers I was being taught were built around convenience, not truth. That restlessness led me to naturopathic medicine, where I found a philosophy that matched how I see the world: find the root cause, don't just manage the symptom.

In naturopathic medicine, "Vis" refers to the body's vital force. The biological intelligence that governs the balance between resilience and vulnerability. It's the force that either sets your limits or shatters them.

That's where SuppVis gets its name. And its purpose.

I kept seeing patients overwhelmed by contradictory supplement advice with no way to know what was actually helping them. The gap between what science knows and what consumers can access is enormous. SuppVis closes that gap.

---

## SECTION 4: WHAT WE BELIEVE

**Layout:** Three statements in a row (desktop) or stacked (mobile). Each one is a short, punchy belief statement. No paragraphs. These are principles, not explanations.

**Section header (Outfit 700):**
What drives every decision we make

**Three belief cards:**

**Your data belongs to you.**
We don't sell it. We don't share it. We use it to make your recommendations better. That's it.

**Independence is non-negotiable.**
No brand partnerships influence our recommendations. No sponsored placements. Your results are our only incentive.

**If the science doesn't support it, we don't recommend it.**
60,000+ peer-reviewed studies power our engine. Not influencer opinions. Not marketing claims. Research.

---

## SECTION 5: THE NAME

**Layout:** Centered, single column. This is a quiet, meaningful moment on the page. Not flashy.

**Pull quote style, large italic text (Outfit 600 or DM Sans 500 italic, 22-26px, teal color):**

"Vis" is the vital force in naturopathic medicine. The biological intelligence that governs your body's balance between resilience and vulnerability.

**Below, smaller, secondary color:**
SuppVis was built to help you understand and strengthen that force. Through data, not guesswork.

---

## SECTION 6: CTA CLOSE

**Layout:** Same as landing page waitlist close for consistency.

**Headline (Outfit 800):**
Built by people who take this personally.

**Subline:**
Join the beta and get a direct line to the team building it.

**CTA button:** Get Early Access (scrolls to form or links to waitlist)

**Three value props:**
Free during beta · Founding pricing locked forever · Your feedback shapes the product

---

## FOOTER

Same footer as the landing page. Identical component, shared across all pages.

---

## DESIGN NOTES

**Photo treatment:** The founders photo should have a subtle teal-tinted gradient overlay on the edges to blend into the dark background. Don't just slap a photo on a dark page. The photo needs to feel integrated, not pasted.

**Pacing:** This page should feel like reading a short magazine profile, not scanning a corporate website. Generous spacing between sections (120-160px). Let the content breathe. The whitespace communicates confidence.

**Typography scale:**
- Hero headline: 48-56px (desktop), 32-36px (mobile)
- Section headers: 36-42px (desktop), 28-32px (mobile)  
- Body text: 16-17px with 1.7 line-height
- Founder story text: 15-16px with 1.65 line-height

**Card styling for founder profiles:**
- Subtle border (rgba(255,255,255,0.06))
- Background slightly lighter than page (#0D1117 on #0A0F14)
- Rounded corners (16-20px)
- Generous internal padding (32-40px)
- Initial/avatar: 56px circle with teal gradient background and white initial letter

**The "Vis" quote section:**
- Should feel like a design moment, not just text
- Consider a thin teal vertical line to the left of the quote (pull-quote style)
- Or a subtle teal glow behind the text
- This is the most brandable moment on the page. Make it feel intentional.

**Scroll animations:**
- Each section fades in on scroll-enter via IntersectionObserver
- Founder cards stagger (left card first, right card 0.1s later)
- The "Vis" quote fades in with a slight scale (0.98 to 1.0) for subtle emphasis
- Keep animations restrained on this page. The story is the drama, not the motion.

**Mobile considerations:**
- Founders photo goes full-width with slight horizontal padding (16px)
- Founder cards stack vertically
- Belief cards stack vertically
- All text stays left-aligned on mobile (no centered body text on small screens)

---

## BUILD INSTRUCTIONS FOR CLAUDE CODE

Create app/about/page.tsx following this spec exactly. Use the same design system, nav component, and footer component from the landing page. Import shared components where possible. The page should use the same Tailwind tokens and font setup already established.

For the founders photo, use a placeholder image (gray box with "Founders photo" text, same treatment as the landing page placeholder) until the real photo is provided.

Ensure this page is included in the Next.js build output and accessible at /about. Update the nav "About" link to point to /about instead of the old suppvis-about.html.
