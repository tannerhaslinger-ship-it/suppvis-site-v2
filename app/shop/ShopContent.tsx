"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Product } from "../lib/api";
import ProductImage from "./ProductImage";

const TIERS = ["All Tiers", "Premium", "Value", "Budget"];

const SORT_OPTIONS = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
];

const PAGE_SIZE = 30;

const TIER_STYLES: Record<string, { color: string; bg: string }> = {
  premium: { color: "#14B8A6", bg: "rgba(20,184,166,0.12)" },
  value: { color: "#FF8C42", bg: "rgba(255,140,66,0.12)" },
  budget: { color: "#6B7F95", bg: "rgba(255,255,255,0.06)" },
};

export default function ShopContent({ products }: { products: Product[] }) {
  const [tier, setTier] = useState("All Tiers");
  const [goal, setGoal] = useState("All Goals");
  const [sort, setSort] = useState("price-asc");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Extract unique goals
  const allGoals = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.goals?.forEach((g) => set.add(g)));
    return Array.from(set).sort();
  }, [products]);

  // Filter + sort
  const filtered = useMemo(() => {
    let result = [...products];

    if (tier !== "All Tiers") {
      result = result.filter(
        (p) => p.tier?.toLowerCase() === tier.toLowerCase()
      );
    }

    if (goal !== "All Goals") {
      result = result.filter((p) => p.goals?.includes(goal));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.supplementName?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.productName?.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      switch (sort) {
        case "price-desc":
          return (b.price ?? 0) - (a.price ?? 0);
        case "name-asc":
          return (a.productName ?? "").localeCompare(b.productName ?? "");
        default:
          return (a.price ?? 0) - (b.price ?? 0);
      }
    });

    return result;
  }, [products, tier, goal, search, sort]);

  const displayed = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const resetAndSet = (setter: (v: string) => void, value: string) => {
    setter(value);
    setVisible(PAGE_SIZE);
  };

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-bg-primary/90 backdrop-blur-lg -mx-6 px-6 py-4 border-b border-white/5 space-y-4">
        {/* Row 1: Tier + Search + Sort */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Tier filter - segmented control on desktop, dropdown on mobile */}
          <div className="hidden md:flex gap-2 shrink-0">
            {TIERS.map((t) => (
              <button
                key={t}
                onClick={() => resetAndSet(setTier, t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  tier === t
                    ? "bg-accent text-bg-primary"
                    : "border border-white/10 text-text-muted hover:text-text-secondary hover:border-white/20"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          {/* Mobile tier dropdown */}
          <select
            value={tier}
            onChange={(e) => resetAndSet(setTier, e.target.value)}
            className="md:hidden w-full rounded-xl bg-bg-secondary border border-white/10 px-4 py-2.5 text-sm text-text-primary appearance-none"
          >
            {TIERS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <div className="flex gap-3 flex-1 md:justify-end">
            {/* Search */}
            <input
              type="text"
              placeholder="Search supplements..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              className="flex-1 md:max-w-[260px] rounded-xl bg-bg-secondary border border-white/10 px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
            />
            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl bg-bg-secondary border border-white/10 px-4 py-2.5 text-sm text-text-primary appearance-none shrink-0"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Goal filter chips */}
        <ScrollableRow>
          <button
            onClick={() => resetAndSet(setGoal, "All Goals")}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              goal === "All Goals"
                ? "bg-accent text-bg-primary"
                : "border border-white/10 text-text-muted hover:text-text-secondary hover:border-white/20"
            }`}
          >
            All Goals
          </button>
          {allGoals.map((g) => (
            <button
              key={g}
              onClick={() => resetAndSet(setGoal, g)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                goal === g
                  ? "bg-accent text-bg-primary"
                  : "border border-white/10 text-text-muted hover:text-text-secondary hover:border-white/20"
              }`}
            >
              {g}
            </button>
          ))}
        </ScrollableRow>
      </div>

      {/* Product count */}
      <p className="text-sm text-text-muted mt-6 mb-6">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Product grid */}
      {displayed.length === 0 ? (
        <p className="text-center text-text-muted py-20 text-lg">
          No products match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="px-8 py-3 rounded-full border border-white/10 text-text-secondary text-sm font-medium hover:border-white/20 hover:text-text-primary transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 6 15 12 9 18" />
      )}
    </svg>
  );
}

function ScrollableRow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const hasDragged = useRef(false);

  const updateArrows = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollStart.current = ref.current?.scrollLeft ?? 0;
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !ref.current) return;
      const dx = e.clientX - startX.current;
      if (Math.abs(dx) > 3) hasDragged.current = true;
      ref.current.scrollLeft = scrollStart.current - dx;
    };
    const onMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "";
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onClickCapture = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/scroll">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-bg-primary/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-colors"
          aria-label="Scroll left"
        >
          <Chevron direction="left" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-bg-primary/80 border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-white/20 transition-colors"
          aria-label="Scroll right"
        >
          <Chevron direction="right" />
        </button>
      )}
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        onClickCapture={onClickCapture}
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {children}
      </div>
    </div>
  );
}

function TierBadge({ tier }: { tier: string }) {
  const style = TIER_STYLES[tier?.toLowerCase()] ?? TIER_STYLES.budget;
  return (
    <span
      className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wide z-10"
      style={{ color: style.color, backgroundColor: style.bg }}
    >
      {tier}
    </span>
  );
}

function TestedBadge() {
  return (
    <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold bg-accent/[.12] text-accent z-10">
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
      Tested
    </span>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const maxGoals = 2;
  const visibleGoals = product.goals?.slice(0, maxGoals) ?? [];
  const remaining = (product.goals?.length ?? 0) - maxGoals;

  return (
    <a
      href={`/shop/${product.id}`}
      className="group rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] overflow-hidden hover:-translate-y-0.5 hover:border-white/[.12] transition-all duration-200 flex flex-col animate-fade-in"
      style={{ animationDelay: `${(index % PAGE_SIZE) * 0.03}s` }}
    >
      {/* Image area — navigates to detail page (same as card) */}
      <div className="relative aspect-square bg-white p-6 flex items-center justify-center">
        <TierBadge tier={product.tier} />
        {product.thirdPartyTested && <TestedBadge />}
        <ProductImage
          src={product.imageUrl}
          alt={product.productName}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] text-text-muted font-normal mb-1 uppercase tracking-wide">
          {product.brand}
        </p>
        <h3 className="font-headline font-semibold text-[15px] text-[#E8EFF5] leading-snug line-clamp-2 group-hover:text-accent transition-colors mb-1">
          {product.productName}
        </h3>
        {product.supplementName &&
          product.supplementName !== product.productName && (
            <p className="text-xs text-[#6B7F95] mb-1">
              {product.supplementName}
            </p>
          )}
        {product.keyBenefit && (
          <p className="text-xs text-[#7B90A5] leading-relaxed line-clamp-2 mb-2">
            {product.keyBenefit}
          </p>
        )}

        {/* Goal tags */}
        {visibleGoals.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {visibleGoals.map((g) => (
              <span
                key={g}
                className="text-[9px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium"
              >
                {g}
              </span>
            ))}
            {remaining > 0 && (
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-text-muted">
                +{remaining} more
              </span>
            )}
          </div>
        )}

        {/* Price + bottom */}
        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-headline font-bold text-lg text-accent">
              ${product.price?.toFixed(2)}
            </span>
            <span className="text-[11px] text-text-muted">on Amazon</span>
          </div>
          {product.servings > 0 && (
            <p className="text-[11px] text-text-muted mb-3">
              {product.servings} servings
            </p>
          )}
          <span
            role="link"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(product.affiliateUrl, "_blank", "noopener,noreferrer");
            }}
            className="text-xs text-accent hover:text-accent-hover font-medium transition-colors cursor-pointer"
          >
            View on Amazon &rarr;
          </span>
        </div>
      </div>
    </a>
  );
}
