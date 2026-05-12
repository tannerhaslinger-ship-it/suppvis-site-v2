"use client";

import { Product } from "../../lib/api";
import ProductImage from "../ProductImage";

const TIER_STYLES: Record<string, { color: string; bg: string; label: string }> = {
  premium: { color: "#14B8A6", bg: "rgba(20,184,166,0.12)", label: "Premium" },
  value: { color: "#FF8C42", bg: "rgba(255,140,66,0.12)", label: "Value" },
  budget: { color: "#6B7F95", bg: "rgba(255,255,255,0.06)", label: "Budget" },
};

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const tierStyle =
    TIER_STYLES[product.tier?.toLowerCase()] ?? TIER_STYLES.budget;

  return (
    <>
      {/* Back link */}
      <a
        href="/shop"
        className="inline-flex items-center text-sm text-text-muted hover:text-text-secondary transition-colors mb-8"
      >
        &larr; Back to Shop
      </a>

      {/* Product header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-16">
        {/* Image — static display, no link */}
        <div className="aspect-square bg-bg-secondary rounded-2xl p-8 flex items-center justify-center">
          <ProductImage
            src={product.imageUrl}
            alt={product.productName}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-[11px] text-text-muted uppercase tracking-wide mb-2">
            {product.brand}
          </p>
          <h1 className="font-headline font-bold text-2xl md:text-[28px] text-text-primary leading-tight mb-2">
            {product.productName}
          </h1>
          {product.supplementName &&
            product.supplementName !== product.productName && (
              <p className="text-base text-accent font-medium mb-4">
                {product.supplementName}
              </p>
            )}

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide"
              style={{ color: tierStyle.color, backgroundColor: tierStyle.bg }}
            >
              {tierStyle.label}
            </span>
            {product.thirdPartyTested && (
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-accent/[.12] text-accent flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                3rd Party Tested
              </span>
            )}
            {product.noProprietaryBlend && (
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white/5 text-text-secondary">
                No Proprietary Blend
              </span>
            )}
          </div>

          {/* Price */}
          <p className="font-headline font-extrabold text-[32px] text-accent mb-1">
            ${product.price?.toFixed(2)}
          </p>
          <p className="text-[11px] text-text-muted mb-4">
            Approximate price on Amazon
          </p>

          {/* Servings info */}
          <p className="text-sm text-text-secondary mb-8">
            {product.servings > 0 && <>{product.servings} servings</>}
            {product.dosePerServing && (
              <> &middot; {product.dosePerServing} per serving</>
            )}
            {product.form && <> &middot; {product.form}</>}
          </p>

          {/* Buy CTAs */}
          <div className="space-y-3">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 rounded-xl bg-accent text-bg-primary font-semibold text-lg hover:bg-accent-hover transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              Buy on Amazon &middot; ${product.price?.toFixed(2)}
            </a>
            {product.iHerbUrl && (
              <a
                href={product.iHerbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3.5 rounded-xl border border-white/10 text-text-secondary font-medium hover:border-white/20 hover:text-text-primary transition-colors"
              >
                Find on iHerb
              </a>
            )}
          </div>
          <p className="text-[10px] text-text-muted/60 italic mt-3">
            Prices are approximate and may vary. As an Amazon Associate, SuppVis
            earns from qualifying purchases.
          </p>
        </div>
      </div>

      {/* Product details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Key benefit */}
        {product.keyBenefit && (
          <div className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] p-6">
            <h3 className="font-headline font-semibold text-[11px] text-text-muted uppercase tracking-widest mb-3">
              Why This Supplement
            </h3>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              {product.keyBenefit}
            </p>
            {product.formNote && (
              <p className="text-sm text-text-muted italic mt-3">
                {product.formNote}
              </p>
            )}
          </div>
        )}

        <div className="space-y-6">
          {/* Goals */}
          {product.goals?.length > 0 && (
            <div className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] p-6">
              <h3 className="font-headline font-semibold text-[11px] text-text-muted uppercase tracking-widest mb-3">
                Supports These Goals
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.goals.map((g) => (
                  <span
                    key={g}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          {product.categories?.length > 0 && (
            <div className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] p-6">
              <h3 className="font-headline font-semibold text-[11px] text-text-muted uppercase tracking-widest mb-3">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mb-8">
          <h2 className="font-headline font-semibold text-xl text-text-primary mb-6">
            Similar Supplements
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {related.map((p) => (
              <a
                key={p.id}
                href={`/shop/${p.id}`}
                className="shrink-0 w-[220px] rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] overflow-hidden hover:-translate-y-0.5 hover:border-white/[.12] transition-all duration-200"
              >
                <div className="aspect-square bg-bg-secondary p-4 flex items-center justify-center">
                  <ProductImage
                    src={p.imageUrl}
                    alt={p.productName}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-text-muted uppercase tracking-wide mb-1">
                    {p.brand}
                  </p>
                  <h3 className="text-sm text-text-primary font-medium line-clamp-2 mb-2 leading-snug">
                    {p.productName}
                  </h3>
                  <p className="font-headline font-bold text-accent">
                    ${p.price?.toFixed(2)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile sticky buy button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-bg-primary/95 backdrop-blur-lg border-t border-white/5 p-4">
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3.5 rounded-xl bg-accent text-bg-primary font-semibold hover:bg-accent-hover transition-colors"
        >
          Buy on Amazon &middot; ${product.price?.toFixed(2)}
        </a>
      </div>
      {/* Spacer for mobile sticky button */}
      <div className="md:hidden h-20" />
    </>
  );
}
