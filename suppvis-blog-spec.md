# SuppVis Blog Page - Copy & Build Specification

---

## OVERVIEW

The blog is the SEO engine for SuppVis. It pulls articles dynamically from the backend API and renders them in a premium, magazine-style layout. Two page types: the listing page (/blog) and individual article pages (/blog/[slug]).

This is a public, non-personalized experience. No user data. No login required. The goal is: attract organic search traffic, establish SuppVis as a credible authority in supplement science, and drive visitors to the waitlist or app download.

**Tech:**
- Listing page: app/blog/page.tsx
- Article page: app/blog/[slug]/page.tsx
- API base URL: https://suppvis-platform.vercel.app (or whatever the platform deployment URL is)
- List endpoint: GET /api/learn/articles (returns articles without content)
- Detail endpoint: GET /api/learn/articles/[slug] (returns full article with markdown content)
- Facts endpoint: GET /api/learn/facts (returns quick facts)
- All endpoints are public, no auth required

**IMPORTANT:** The API base URL needs to be configured as an environment variable (NEXT_PUBLIC_API_URL) since suppvis-site and suppvis-platform are separate deployments. Add this to .env.local for development and Vercel environment variables for production.

**Design:** Same system as landing page and about page (dark theme, Outfit headlines, DM Sans body, teal #14B8A6 accent)

---

## BLOG LISTING PAGE (/blog)

### Layout Structure

```
Nav (shared component)
Hero header
Category filter chips
Article grid
Footer (shared component)
```

### Hero Header

**Headline (Outfit 800, large):**
The SuppVis Journal

**Subline (DM Sans 400, secondary text color):**
Evidence-based supplement science. No brand agendas. No hype. Just research you can use.

**No search bar.** With 14 articles, search adds complexity without value. Add it when you hit 50+ articles.

### Category Filter Chips

Horizontal scrolling row of filter pills. Pulled from the actual categories in the data, not hardcoded.

**Fixed categories based on schema:**
All · Deep Dive · Strategy · Science · Guide · Quick Read

**Active state:** Teal background with dark text (same as nav CTA button style)
**Inactive state:** Subtle border, muted text, transparent background

**Behavior:** Clicking a category filters the article grid client-side. "All" is selected by default. Only one active at a time.

### Article Grid

**Layout:** 
- Desktop: First article is a featured card spanning full width. Remaining articles in a 2-column grid.
- Tablet: All articles in a 2-column grid (no featured).
- Mobile: Single column stack.

**The featured card (first/most recent article):**
- Full width, horizontal layout (text left, category badge right)
- Larger headline (Outfit 700, 28-32px)
- Shows: category badge, title, excerpt (2-3 lines), goal tags, read time, published date
- Subtle teal left border or top accent line
- On click: navigates to /blog/[slug]

**Standard article cards:**
- Vertical card layout
- Shows: category badge (colored by type), title (Outfit 600, 18-20px), excerpt (2 lines max, truncated), goal tags as small pills, read time + date
- Subtle border, rounded corners (16px), slight hover lift effect
- On click: navigates to /blog/[slug]

**Category badge colors:**
```
DEEP DIVE: { color: "#4ECDC4", bg: "rgba(78,205,196,0.1)" }
STRATEGY:  { color: "#FF8C42", bg: "rgba(255,140,66,0.1)" }
SCIENCE:   { color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" }
GUIDE:     { color: "#00C9A7", bg: "rgba(0,201,167,0.1)" }
QUICK READ: { color: "#FFD93D", bg: "rgba(255,217,61,0.1)" }
```

**Goal tags:** Small muted pills showing the goal_tags array values. Displayed in teal if they match common health goals (sleep, energy, focus, mood, stress, recovery). Style: 10px font, slight background, rounded.

**Date formatting:** Show as "Apr 12, 2026" format. Use published_at field.

**Empty state:** If no articles match a category filter, show: "No articles in this category yet. Check back soon."

### Data Fetching

```typescript
// On page load, fetch all published articles
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/learn/articles`);
const data = await res.json();
const articles = data.articles;

// Filter client-side by category when chips are clicked
// Sort by published_at descending (most recent first)
```

**Caching:** Since this is a static marketing site, consider using Next.js revalidation:
```typescript
const res = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
```

### Animation

- Article cards stagger in on initial load (0.05s delay between each)
- Subtle fade + translate up on scroll-enter for cards below the fold
- Category filter change should instantly re-render the grid (no animation on filter, just on initial load)

---

## INDIVIDUAL ARTICLE PAGE (/blog/[slug])

### Layout Structure

```
Nav (shared component)
Back link
Article header (category, title, meta)
Article body (rendered markdown)
Goal tags + related supplements
CTA banner
Footer (shared component)
```

### Back Link

Simple text link at the top: "← Back to Journal"
Links to /blog. Positioned below the nav with comfortable padding.

### Article Header

**Category badge:** Same colored badge as listing page, positioned above the title.

**Title (Outfit 800, 36-44px desktop, 28-32px mobile):**
{article.title}

**Meta row (DM Sans 400, muted text color, 14px):**
{formatted date} · {readTimeMin} min read

### Article Body

**The content field is markdown.** Render it as HTML with proper styling.

Use a markdown renderer (react-markdown or next-mdx-remote) to convert the markdown content to styled HTML.

**Typography for rendered markdown:**

```css
/* Article prose styling */
.article-content {
  max-width: 720px;
  margin: 0 auto;
}

.article-content p {
  font-family: 'DM Sans', sans-serif;
  font-size: 17px;
  line-height: 1.8;
  color: #9BAFBF; /* secondary text */
  margin-bottom: 24px;
}

.article-content h2 {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #F0F4F8; /* primary text */
  margin-top: 48px;
  margin-bottom: 16px;
}

.article-content h3 {
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #F0F4F8;
  margin-top: 36px;
  margin-bottom: 12px;
}

.article-content strong {
  color: #D0DAE4;
  font-weight: 600;
}

.article-content ul, .article-content ol {
  margin-bottom: 24px;
  padding-left: 24px;
  color: #9BAFBF;
}

.article-content li {
  margin-bottom: 8px;
  line-height: 1.7;
  font-size: 16px;
}

.article-content blockquote {
  border-left: 3px solid #14B8A6;
  padding-left: 20px;
  margin: 32px 0;
  font-style: italic;
  color: #7B90A5;
}

.article-content a {
  color: #14B8A6;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article-content code {
  background: rgba(255,255,255,0.06);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 15px;
}
```

The article body should feel like reading a premium online magazine. Generous line-height, comfortable max-width, no wall-of-text feeling.

### Goal Tags + Related Supplements

Below the article body, show a section with the article's metadata:

**If goal_tags exist:**
A row of goal tag pills: "Sleep", "Energy", "Focus", etc.
Label above: "Related goals" (small, muted, uppercase)

**If canonical_keys exist:**
A row of supplement pills: "Magnesium", "Omega-3", etc.
Label above: "Supplements mentioned" (small, muted, uppercase)

These connect the educational content to the product ecosystem without being pushy.

### CTA Banner

Below the tags, a full-width banner encouraging the reader to join:

**Background:** Subtle gradient (same as landing page waitlist section)
**Headline (Outfit 700, 24px):**
Want recommendations based on your goals?

**Subline (DM Sans 400, secondary):**
SuppVis builds a personalized supplement protocol around your unique biology. Join the beta.

**CTA button:** Get Early Access

### Data Fetching

```typescript
// Fetch individual article by slug
const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/learn/articles/${slug}`,
  { next: { revalidate: 3600 } }
);
const data = await res.json();
const article = data.article;
```

**404 handling:** If the API returns no article for a slug, show a clean 404 page: "Article not found. Back to Journal →"

### SEO (Critical for the blog)

Each article page must have proper meta tags generated dynamically:

```typescript
export async function generateMetadata({ params }) {
  const article = await fetchArticle(params.slug);
  return {
    title: `${article.title} | SuppVis Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      tags: article.goalTags,
    },
  };
}
```

This is what makes the blog an SEO engine. Every article gets its own indexed page with proper Open Graph tags.

---

## DEPENDENCIES

Add these to the project:

```
npm install react-markdown remark-gfm
```

react-markdown renders the markdown content field.
remark-gfm adds support for tables, strikethrough, etc.

---

## NAV UPDATE

Update the "Blog" link in the shared nav component to point to /blog instead of /suppvis-blog.html.

---

## ENVIRONMENT VARIABLE

Add to .env.local:
```
NEXT_PUBLIC_API_URL=https://your-suppvis-platform-url.vercel.app
```

Replace with the actual suppvis-platform deployment URL.

---

## BUILD INSTRUCTIONS FOR CLAUDE CODE

1. Install react-markdown and remark-gfm
2. Create app/blog/page.tsx (listing page) following this spec exactly
3. Create app/blog/[slug]/page.tsx (article detail page) following this spec exactly
4. Reuse the shared Nav and Footer components from the landing page
5. Add NEXT_PUBLIC_API_URL to .env.local (use a placeholder URL that can be updated)
6. Update the nav "Blog" link to point to /blog
7. Style the markdown rendering with the prose styles specified above
8. Ensure proper SEO metadata generation on article pages
9. Handle loading states and 404s gracefully
10. Do not modify any existing HTML files in /public
