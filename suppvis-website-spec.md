# SuppVis Landing Page - Final Copy & Build Specification
## Locked Copy + Technical Requirements for Claude Code

---

## OVERVIEW

SuppVis.health landing page redesign. Single-page marketing site with a scrolling app demo as the centerpiece. Dark premium aesthetic matching the iOS app (dark backgrounds, teal #14B8A6 accent, DM Sans body, Outfit headlines). The goal is waitlist signups. Every section serves the narrative arc: hook → problem → product demo → founders → close.

**Design references:** Whoop.com, functionhealth.com. Dark, confident, generous whitespace, bold typography, product-forward.

**Tech stack:** Static HTML/CSS/JS (or Next.js static export to match existing Vercel deployment). No React dependencies on the marketing site unless needed for the scroll interaction. Tailwind v4 for styling consistency with the app.

**Fonts:** 
- Headlines: Outfit (700, 800 weight)
- Body: DM Sans (400, 500, 600)
- Import from Google Fonts

**Colors:**
- Background: #0A0F14 (primary), #0D1117 (secondary/cards)
- Text primary: #F0F4F8
- Text secondary: #9BAFBF
- Text muted: #5A7089
- Accent: #14B8A6 (teal)
- Accent hover: #0EA593
- Warning/attention: #FF8C42
- Error: #FF6B6B

**Global rules:**
- No em dashes anywhere in copy. Use periods or commas instead.
- Max content width: 1200px centered
- Mobile-first responsive (375px → 768px → 1024px → 1440px)
- Smooth scroll behavior on the entire page
- Page load under 2 seconds
- All animations use CSS where possible, JS only for scroll-triggered interactions
- No stock photos anywhere

---

## NAV

Fixed top nav, transparent background that gets a subtle dark blur on scroll.

Left: SuppVis logo (text wordmark in Outfit 700)
Center/Right links: How It Works | Shop | Blog | About
Far right: "Get Early Access" button (teal background, dark text, rounded)

Mobile: hamburger menu.

"How It Works" scrolls to the product demo section on the same page.
Shop, Blog, About link to their respective pages.
"Get Early Access" scrolls to the waitlist section at the bottom OR opens a modal.

---

## SECTION 1: THE HOOK

**Layout:** Full viewport height. Content vertically centered. Clean, minimal, confident.

**Headline (Outfit 800, large):**
Your stack, scored. Your biology, decoded.

**Subline (DM Sans 400, 18-20px, secondary text color):**
SuppVis tracks your supplements, goals, and daily data to show you exactly what's moving the needle. Evidence-based. Brand-agnostic. Built for people who take their health seriously.

**CTA button (teal, prominent):**
Get Early Access

**Trust bar (horizontal row, below CTA, muted styling):**
Four items with subtle dividers:
Brand-Agnostic · Evidence-Based · 600+ Supplements · 60,000+ Studies

**Animation:** 
- Headline fades in and translates up (0.6s ease)
- Subline fades in (0.8s, 0.15s delay)
- CTA fades in (1.0s, 0.3s delay)
- Trust bar fades in (1.0s, 0.45s delay)
- Staggered cascade, not everything at once

**Scroll indicator:** Subtle animated chevron or "scroll" indicator at the bottom of the viewport to signal there's more below.

---

## SECTION 2: THE PROBLEM

**Layout:** Centered text section. Section header, then four items in a 2x2 grid (desktop) or stacked (mobile).

**Section header (Outfit 700, medium-large):**
The supplement industry wasn't built for you.

**Four problem cards:**
Each card has a single stat/line of copy. No paragraphs. No icons needed, but subtle accent coloring on the key number/stat.

Card 1:
$15B wasted annually on supplements that don't work for the people taking them.

Card 2:
95% of multi-supplement users have never checked for dangerous interactions.

Card 3:
Every recommendation you see online was paid for by a brand.

Card 4:
Your biology is unique. Your stack should be too.

**Animation:** Cards stagger in on scroll-enter (0.1s delay between each). Subtle fade + translate up.

**Design notes:** These should feel like punchy facts, not marketing fluff. The numbers ($15B, 95%) should be visually prominent (larger font weight or teal accent color). The rest of the sentence is secondary text color.

---

## SECTION 3: THE PRODUCT DEMO (Scrolling Phone)

**This is the centerpiece of the entire page.**

**Section header (Outfit 700, centered above the phone):**
One platform. Complete clarity.

**Layout:** 
A phone mockup (iPhone frame) pinned/sticky in the center of the viewport. As the user scrolls, the screen inside the phone transitions between 7 app screenshots. To the left or right of the phone (alternating sides, or consistently on one side), a text block with the section title and one-line description appears for each scroll position.

On mobile: the phone stays centered and the text appears above or below the phone, transitioning with each scroll position.

**Technical requirements for the scroll interaction:**
- The phone frame stays fixed/sticky in the viewport for the duration of all 7 scroll positions
- Each scroll position occupies roughly 100vh of scroll distance (so the total sticky section is ~700vh)
- The app screenshot inside the phone crossfades or slides between positions (0.3-0.4s transition)
- The accompanying text fades in/out with each position change
- A progress indicator (dots, thin progress bar, or numbered steps) shows which position the user is on
- Smooth, performant. Use Intersection Observer or scroll-driven animations. No jank.
- On reduced-motion preference: skip animations, show static screenshots with text

**Scroll Position 1 - Dashboard:**
Title: Your command center.
Description: Every health goal scored and trended. Your wellness score, goal breakdown, and weekly momentum in one glance.
Screenshot: [dashboard.png - to be provided]

**Scroll Position 2 - Goal Analysis:**
Title: The "why" behind every score.
Description: Tap any goal. See which supplements are supporting it, which are limiting it, and the data behind each one.
Screenshot: [goal-analysis.png - to be provided]

**Scroll Position 3 - Today's Stack:**
Title: Your daily protocol, timed and tracked.
Description: Organized by when to take each supplement. Check off your morning stack, build streaks, stay consistent.
Screenshot: [todays-stack.png - to be provided]

**Scroll Position 4 - Insights:**
Title: Patterns you'd never catch yourself.
Description: Tolerance detection, synergy alerts, and trend analysis across your entire stack. Surfaced automatically.
Screenshot: [insights.png - to be provided]

**Scroll Position 5 - AI Advisor:**
Title: Ask anything about your stack.
Description: Get answers grounded in your personal data, your active goals, and 60,000+ peer-reviewed studies.
Screenshot: [ai-chat.png - to be provided]

**Scroll Position 6 - Shop:**
Title: Buy smarter, not more.
Description: Recommendations based on your weakest goals and stack gaps. Conflict-checked against what you already take.
Screenshot: [shop.png - to be provided]

**Scroll Position 7 - Learn:**
Title: Evidence-based, not algorithm-fed.
Description: Articles matched to your goals. New research weekly. The education layer that makes every decision sharper.
Screenshot: [learn.png - to be provided]

**Design notes:**
- The phone frame should have a subtle shadow/glow that matches the teal accent
- Screenshots must be real app screens with rich data (not empty states)
- The progress indicator should use teal for the active position and muted for inactive
- Consider a subtle parallax on the phone frame itself (very slight float/tilt on scroll)

---

## SECTION 4: THE FOUNDERS

**Layout:** Two-column on desktop (photo left, text right). Stacked on mobile (photo top, text below).

**Section header (Outfit 700):**
Built by two brothers who needed this to exist.

**Photo:** Real photo of Tanner and Connor. Not stock. This is the most important image on the site after the app screenshots.
[founders.jpg - to be provided]

**Body copy (DM Sans 400, 16px, secondary text color):**

Paragraph 1:
Tanner was diagnosed with Type 1 diabetes and needed to know exactly how every supplement affected his body. Not what a brand claimed. Not what an influencer promoted. What actually worked, for him, backed by real data.

Paragraph 2:
Connor is studying naturopathic medicine and kept seeing patients confused by contradictory supplement advice with no way to track what was actually helping.

Paragraph 3:
They built SuppVis to solve both problems. No brand affiliations dictating recommendations. No generic advice. Just a system that watches what you take, tracks how you respond, and tells you the truth.

**Closing line (DM Sans 600, slightly larger, primary text color):**
SuppVis isn't funded by supplement companies. It's built by two people who take supplements and got tired of guessing.

**Animation:** Photo and text fade in on scroll-enter. Subtle, not dramatic. The content speaks for itself here.

---

## SECTION 5: THE WAITLIST CLOSE

**Layout:** Full-width section with centered content. This is the conversion moment.

**Headline (Outfit 800, large):**
Your stack is already costing you. Find out if it's paying off.

**Subline (DM Sans 400, secondary text color):**
Join the beta. Get founding member access and a direct line to the team building it.

**Form:**
- First Name (text input)
- Email Address (text input, required)
- Primary Health Goal (dropdown: Energy & Focus, Sleep Optimization, Athletic Performance, Longevity & Vitality, Stress & Recovery, Body Composition, General Wellness)
- CTA button: "Get Early Access" (teal, full width of form)
- Small text below: "No spam, ever. Unsubscribe anytime."

**Success state:**
Replace form with: "You're in. We'll reach out with beta access details soon."

**Three value props below the form (horizontal row):**
Free during beta · Founding pricing locked forever · Your feedback shapes the product

**Animation:** Section fades in on scroll. Form elements stagger slightly. Success state has a subtle teal glow/pulse on transition.

---

## FOOTER

**Simple, clean. One footer, not two.**

Left column: SuppVis wordmark + tagline "Clarity over complexity. Science over hype."

Middle columns:
Product: How It Works, Shop, Blog
Company: About, Partnerships
Legal: Privacy Policy, Terms of Use, Affiliate Disclosure, Medical Disclaimer

Right column: Email subscribe (simple inline input + button)

Bottom bar:
© 2026 SuppVis. All rights reserved. Not medical advice. Always consult your healthcare provider.
Amazon Associates disclosure (small, muted text).

---

## PAGES TO KEEP (separate from landing page)

### /shop
The shop page stays as-is for now. Will be upgraded when Amazon Creators API access is live. Current static affiliate links continue working.

### /blog  
Blog page stays. Needs updated article dates and fresh content before launch. The blog is the SEO engine and should have a new article cadence visible.

### /about
The about page keeps the founders story in expanded form. The landing page has the condensed version that links to "Read our full story" on the about page.

### /how-it-works (optional)
Could be a dedicated page with the full product walkthrough for users who want more detail than the scrolling demo provides. Lower priority.

---

## PAGES TO REMOVE

### /suppvis-ai-chat.html
Remove the public AI chat page. The AI is a product feature, not a marketing tool. It lives inside the app only.

---

## TECHNICAL IMPLEMENTATION NOTES

### Scroll interaction library options:
- GSAP ScrollTrigger (most reliable for pinned scroll animations)
- Vanilla Intersection Observer + CSS transitions (lighter, no dependency)
- Framer Motion (if using React/Next.js)

Recommendation: GSAP ScrollTrigger. It handles the sticky phone + crossfade pattern extremely well, is battle-tested for exactly this type of interaction, and degrades gracefully. The minified bundle is ~30KB which is acceptable.

### Image optimization:
- App screenshots should be exported at 2x resolution for retina
- Use WebP format with PNG fallback
- Lazy load everything below the fold
- The phone frame can be a CSS-rendered element (border-radius, shadow) rather than an image to reduce payload

### Performance targets:
- Lighthouse performance score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total page weight: < 2MB including all screenshots

### SEO:
- Page title: "SuppVis - Track Your Supplements. See What's Working."
- Meta description: "SuppVis is an AI-powered platform that tracks your supplements, scores your health goals, and shows you exactly what's moving the needle. Evidence-based. Brand-agnostic."
- Open Graph image: custom social share card (dark background, headline, phone mockup)
- Canonical URL: https://suppvis.health/

### Analytics:
- Track: page scroll depth, waitlist form submissions, CTA clicks, scroll demo completion rate (did they reach position 7?)
- These metrics tell you if the narrative is working

---

## ASSETS NEEDED BEFORE BUILD

1. [ ] App screenshots (7 screens, rich data states, iPhone resolution):
   - Dashboard with wellness score + goal cards
   - Goal analysis page (mood or sleep breakdown)
   - Today's Stack with supplements organized by time
   - Insights page showing tolerance/synergy detection
   - AI chat with a personalized conversation
   - Shop with personalized product recommendations
   - Learn/blog page with articles
   
2. [ ] Founders photo (Tanner + Connor, real photo, high quality)

3. [ ] SuppVis logo/wordmark (SVG format for crisp rendering)

4. [ ] Open Graph social share image (1200x630px)

---

## BUILD ORDER

Phase 1 (build now, no screenshots needed):
- Nav, Section 1 (Hook), Section 2 (Problem), Section 4 (Founders with photo placeholder), Section 5 (Waitlist Close), Footer
- This gives you a complete, functional landing page immediately

Phase 2 (when screenshots are ready):
- Section 3 (Scrolling Phone Demo) with real app screenshots
- This is the premium centerpiece that elevates everything

Phase 3 (polish):
- Animation timing refinement
- Performance optimization
- Mobile testing across devices
- SEO tags and Open Graph
- Analytics integration
