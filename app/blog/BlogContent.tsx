"use client";

import { useState, useMemo } from "react";
import { Article, formatDate, getCategoryStyle } from "../lib/api";

const CATEGORIES = ["All", "Deep Dive", "Strategy", "Science", "Guide", "Quick Read"];

export default function BlogContent({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("All");

  const sorted = useMemo(
    () =>
      [...articles].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ),
    [articles]
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? sorted
        : sorted.filter(
            (a) => a.category.toUpperCase() === active.toUpperCase()
          ),
    [sorted, active]
  );

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Category filter chips */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-10 md:mb-14 scrollbar-hide md:justify-center">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent text-bg-primary"
                  : "border border-white/10 text-text-muted hover:text-text-secondary hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Article grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-text-muted py-20 text-lg">
          No articles in this category yet. Check back soon.
        </p>
      ) : (
        <div>
          {/* Featured card */}
          {featured && <FeaturedCard article={featured} />}

          {/* Remaining articles grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {rest.map((article, i) => (
                <ArticleCard key={article.id ?? article.slug} article={article} index={i} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const style = getCategoryStyle(category);
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
      style={{ color: style.color, backgroundColor: style.bg }}
    >
      {category}
    </span>
  );
}

function GoalTags({ tags }: { tags: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  return (
    <a
      href={`/blog/${article.slug}`}
      className="group block rounded-2xl bg-bg-secondary border border-white/5 p-8 md:p-10 border-l-accent/50 border-l-[3px] hover:border-white/10 transition-colors animate-fade-in"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <CategoryBadge category={article.category} />
          <h2 className="font-headline font-bold text-[24px] sm:text-[28px] md:text-[32px] text-text-primary mt-4 mb-3 group-hover:text-accent transition-colors leading-tight">
            {article.title}
          </h2>
          <p className="text-text-secondary leading-relaxed line-clamp-3 mb-4">
            {article.excerpt}
          </p>
          <GoalTags tags={article.goalTags} />
          <p className="text-sm text-text-muted mt-4">
            {formatDate(article.publishedAt)} &middot; {article.readTimeMin}{" "}
            min read
          </p>
        </div>
      </div>
    </a>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <a
      href={`/blog/${article.slug}`}
      className="group block rounded-2xl bg-bg-secondary border border-white/5 p-6 md:p-8 hover:border-white/10 hover:-translate-y-0.5 transition-all animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <CategoryBadge category={article.category} />
      <h3 className="font-headline font-semibold text-lg md:text-xl text-text-primary mt-4 mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
        {article.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
        {article.excerpt}
      </p>
      <GoalTags tags={article.goalTags} />
      <p className="text-xs text-text-muted mt-4">
        {formatDate(article.publishedAt)} &middot; {article.readTimeMin} min
        read
      </p>
    </a>
  );
}
