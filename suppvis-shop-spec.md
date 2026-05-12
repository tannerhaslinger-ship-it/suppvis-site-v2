# SuppVis Shop Page - Copy & Build Specification

---

## OVERVIEW

The shop is the revenue engine. It pulls 589 active products from the backend API and presents them in a premium, curated marketplace experience. No user personalization (no login required). The shop's job: establish SuppVis as a credible, independent supplement authority and drive affiliate clicks.

This is a public marketing page. No auth. No user data. Products are browsable by anyone.

**Key differentiator from Amazon:** SuppVis curates by quality tier, goal relevance, and testing status. Amazon shows everything. SuppVis shows the right things.

**URL:** /shop (Next.js route: app/shop/page.tsx)
**Product detail:** /shop/[id] (Next.js route: app/shop/[id]/page.tsx)
**API endpoint:** GET https://suppvis-platform.vercel.app/api/public/shop/products
**Filters available:** ?goal=, ?canonical_key=
**Design:** Same system as rest of site (dark theme, Outfit headlines, DM Sans body, teal #14B8A6 accent)

---

## AMAZON ASSOCIATES COMPLIANCE (NON-NEGOTIABLE)

These rules must be followed on every page that displays Amazon product data:

1. Affiliate disclosure must be visible: "As an Amazon Associate, SuppVis earns from qualifying purchases."
2. Prices labeled as approximate unless pulled live from Creators API: "Prices shown are approximate and may vary on Amazon."
3. Product images must link to the Amazon product page (the affiliate URL)
4. Do not modify Amazon product images
5. Do not make health claims beyond what the product listing states
6. The affiliate tag (suppvis-20) must be in every Amazon URL

---

## SHOP LISTING PAGE (/shop)

### Hero Header

**Layout:** Clean, minimal. No large images. Text-driven.

**Headline (Outfit 800, large):**
Curated for science. Not profit.

**Subline (DM Sans 400, secondary text color, max-width 640px):**
589 supplements across every category. Ranked by quality, third-party testing, and clinical dosing. Brand-agnostic. Never influenced by commission rates.

**Trust indicators (horizontal row below subline, muted styling):**
Brand-Agnostic · Third-Party Tested Options · Clinical Dosing · 589 Products

---

### Filter System

**Layout:** Sticky filter bar that stays visible when scrolling through products.

**Row 1: Tier filter (segmented control style)**
Three options, only one active at a time:
- All Tiers (default)
- Premium (products where tier === "premium")
- Value (products where tier === "value")
- Budget (products where tier === "budget")

Styling: The active tier has teal background. Inactive are subtle bordered buttons.

**Row 2: Goal filter chips (horizontal scroll)**
Extract unique goals from all products across the dataset. Display as scrollable pills.
Common goals to expect: "Immune Defense", "Energy & Stamina", "Stress & Anxiety Management", "Cognition, Mindset & Focus", "Improve Sleep", "Heart Health & Cardiovascular Support", "Gut Health & Digestion", "Muscle Recovery & Performance", "Longevity & Anti-Aging", "Hormonal Balance", "Enhance Appearance (skin/hair)", etc.

Add an "All Goals" chip as the first option (default active).

**Row 3: Sort dropdown**
Options:
- Price: Low to High (default)
- Price: High to Low
- Name: A-Z

**Search bar:**
Simple text input: "Search supplements..."
Filters products client-side by supplementName, brand, or productName.
Position: Right-aligned on desktop next to the sort dropdown, full-width on mobile above the grid.

**Product count:**
Below the filters, show: "{X} products" where X updates based on active filters.
Muted text, small. E.g., "147 products" when filtered to a specific goal.

---

### Product Grid

**Layout:**
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: 1-column stack (or 2-column with compact cards)

**Product Card Design:**

Each card contains:

1. **Product image** (top of card)
   - Use imageUrl from API
   - Fixed aspect ratio container (square or 4:3)
   - Image should be contained/centered with padding
   - Dark subtle background behind the image (#0D1117 or slightly lighter)
   - Rounded top corners matching card radius
   - THE ENTIRE IMAGE AREA IS A LINK to the affiliate URL (opens in new tab)

2. **Tier badge** (overlaid on top-left of image)
   - Premium: teal badge (#14B8A6 text, rgba(20,184,166,0.12) bg)
   - Value: orange badge (#FF8C42 text, rgba(255,140,66,0.12) bg)  
   - Budget: muted badge (#6B7F95 text, rgba(255,255,255,0.06) bg)

3. **Third-party tested badge** (overlaid on top-right of image, only if thirdPartyTested === true)
   - Small shield icon or checkmark
   - "Tested" in small text
   - Green/teal coloring

4. **Brand** (below image, small, muted text)
   - DM Sans 400, 11px, #5A7089

5. **Product name** (below brand)
   - Outfit 600, 15px, #E8EFF5
   - Max 2 lines, truncated with ellipsis

6. **Supplement name** (if different from product name, show as subtitle)
   - DM Sans 400, 12px, #6B7F95

7. **Key benefit** (one line)
   - DM Sans 400, 12px, #7B90A5
   - Max 2 lines, truncated

8. **Goal tags** (horizontal, max 2 visible + "+X more" if needed)
   - Small pills, teal text on subtle teal bg
   - 9-10px font

9. **Price + servings** (bottom of card)
   - Price: Outfit 700, 18px, teal (#14B8A6)
   - "on Amazon" text next to price, muted, small
   - Servings: "100 servings" in muted text, 11px

10. **"View on Amazon" link** (bottom of card)
    - Subtle text link or small button
    - Opens affiliateUrl in new tab
    - This is the conversion action

**Card styling:**
- Background: rgba(255,255,255,0.03)
- Border: 1px solid rgba(255,255,255,0.06)
- Border-radius: 16px
- Hover: subtle lift (translateY(-2px)) + border color lightens
- Transition: 0.2s ease

**Pagination or Infinite Scroll:**
With 589 products, do NOT load all at once. Options:
- Show 30 products initially, "Load More" button at bottom (preferred for SEO)
- Or paginate with "Page 1 of 20" controls

"Load More" is the premium feel. Each click loads 30 more products with a stagger animation.

---

### Data Fetching

```typescript
// Fetch all products on page load
const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/public/shop/products`,
  { next: { revalidate: 3600 } }
);
const data = await res.json();
const products = data.products; // 589 products

// All filtering, sorting, searching, and pagination happens client-side
// The API returns the full sorted list (premium first, then by price)
```

---

## PRODUCT DETAIL PAGE (/shop/[id])

When a user clicks a product card, they go to a detail page. This is where the conversion happens.

### Layout

```
Nav (shared)
Back link ("← Back to Shop")
Product header (image + info)
Product details (specs, benefit, goals)
Buy CTA
Related products
Compliance footer
Footer (shared)
```

### Product Header

**Two-column on desktop (image left, info right). Stacked on mobile.**

**Left: Product image**
- Large, centered in a dark container
- Rounded corners
- Clicking the image opens the Amazon product page

**Right: Product info**

Brand (muted, small):
{brand}

Product Name (Outfit 700, 28px):
{productName}

Supplement Name (DM Sans 500, 16px, teal):
{supplementName}

Badges row:
- Tier badge (Premium/Value/Budget)
- "3rd Party Tested" badge (if thirdPartyTested === true)
- "No Proprietary Blend" badge (if noProprietaryBlend === true)

Price (Outfit 800, 32px, teal):
${price}

"Approximate price on Amazon" (muted, 11px, below price)

Servings info (DM Sans 400, 14px, secondary):
{servings} servings · {dosePerServing} per serving · {form}

---

### Product Details Section

**Key Benefit card:**
```
Background: subtle card (rgba(255,255,255,0.03))
Border: 1px solid rgba(255,255,255,0.06)
Rounded: 16px
Padding: 20px
```

Header: "Why This Supplement" (Outfit 600, small, muted uppercase)
Body: {keyBenefit} (DM Sans 400, 15px, secondary text)

If formNote exists, show below in italic muted text.

**Goals section:**
Header: "Supports These Goals" (small, muted uppercase)
Goal pills displayed as a wrapping row of tags.

**Categories section:**
Header: "Category" (small, muted uppercase)  
Category pills.

---

### Buy CTA Section

**Primary CTA (full-width teal button):**
"Buy on Amazon · ${price}"
Opens affiliateUrl in new tab.
Style: Same as landing page CTA but full-width.

**Secondary CTA (if iHerbUrl exists):**
"Find on iHerb"
Subtle bordered button below the Amazon button.
Opens iHerbUrl in new tab.

**Disclosure (below buttons, small muted italic):**
"Prices are approximate and may vary. As an Amazon Associate, SuppVis earns from qualifying purchases."

---

### Related Products

Show 4 products that share the same canonicalKey or the same primary goal.

Header: "Similar Supplements" (Outfit 600)

4 compact product cards in a horizontal row (scrollable on mobile).
Each card: image, brand, name, price, "View" link.

---

### SEO Metadata

```typescript
export async function generateMetadata({ params }) {
  const product = findProductById(params.id);
  return {
    title: `${product.productName} by ${product.brand} | SuppVis Shop`,
    description: `${product.keyBenefit}. ${product.servings} servings, ${product.dosePerServing} per serving. ${product.form}.`,
    openGraph: {
      title: `${product.productName} - ${product.brand}`,
      description: product.keyBenefit,
      images: [{ url: product.imageUrl }],
    },
  };
}
```

---

## DESIGN NOTES

### Premium Feel Checklist:
- Generous whitespace between product cards (16-20px gap)
- Product images should have consistent sizing (no jagged grids)
- The filter bar should feel like a premium e-commerce experience (think SSENSE, Mr Porter level)
- No clutter. Each card shows only essential info. Details live on the detail page.
- Hover states on every interactive element
- Smooth transitions on filter changes (cards fade/reflow, don't jump)

### Color Application:
- Tier badges use distinct colors so users can instantly scan quality levels
- Third-party tested badge is always green/teal (trust signal)
- Prices are always teal (the action color)
- Goal tags are always teal-tinted (connecting to the app's goal system)

### Typography:
- Product names: Outfit 600 (cards) / Outfit 700 (detail page)
- Brand names: DM Sans 400, muted
- Prices: Outfit 700, teal
- Body/descriptions: DM Sans 400, secondary color
- All caps for section headers and badge labels

### Mobile Considerations:
- Filter bar collapses: tier buttons become a dropdown, goal chips stay scrollable
- Product grid goes to 1 or 2 columns
- Search bar goes full-width above everything
- Product detail page stacks vertically (image above info)
- Buy button is sticky at the bottom on mobile (always visible)

### Animation:
- Products stagger in on initial load (0.03s delay between each, fade + translate up)
- "Load More" products animate in the same way
- Filter changes: instant re-render (no animation on filter, just on new loads)
- Product card hover: subtle lift + border glow

---

## COMPLIANCE FOOTER (on both listing and detail pages)

A small section above the main footer:

```
Prices shown are approximate and may vary on Amazon. Product images and data are provided 
for informational purposes. SuppVis does not manufacture or sell supplements directly. 
As an Amazon Associate, SuppVis earns from qualifying purchases.
```

Small, muted, italic. 10-11px. Centered.

---

## FUTURE-PROOFING FOR CREATORS API

When the Amazon Creators API is available:

1. Replace approximate prices with live prices from the API
2. Replace static product images with live images from the API  
3. Add Prime badge for Prime-eligible products
4. Add deal badges for products on sale
5. Remove "Prices are approximate" disclaimers
6. Add stock status indicators

The current architecture supports this by:
- Keeping all Amazon data (ASIN, affiliate URL) as separate fields
- Using the price field as a display value that can be swapped for live data
- Using imageUrl that can be replaced by API-provided URLs
- The product card component just renders what it receives, it doesn't care where the data came from

---

## BUILD INSTRUCTIONS FOR CLAUDE CODE

1. Create app/shop/page.tsx (listing page) following this spec exactly
2. Create app/shop/[id]/page.tsx (product detail page) following this spec exactly
3. Reuse shared Nav and Footer components
4. Fetch products from the public shop API endpoint
5. Implement client-side filtering (tier, goal, search), sorting, and "Load More" pagination
6. Ensure all Amazon links open in new tabs with rel="noopener noreferrer"
7. Ensure all Amazon links use the affiliateUrl field (which includes the suppvis-20 tag)
8. Include the compliance disclosure on both pages
9. Generate SEO metadata on product detail pages
10. Update the nav "Shop" link to point to /shop
11. Do not modify any existing HTML files in /public
12. Style the filter bar to be sticky on scroll
13. Product images must link to the affiliateUrl
