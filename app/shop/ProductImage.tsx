"use client";

import { useState } from "react";

function PillIcon({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10.5 1.5a4.5 4.5 0 0 0-3.18 7.68l8.5 8.5A4.5 4.5 0 0 0 22.14 11.36l-8.5-8.5A4.48 4.48 0 0 0 10.5 1.5z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  );
}

export default function ProductImage({
  src,
  alt,
  className = "",
  loading,
}: {
  src?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <PillIcon className="text-text-muted/40" />
        <span className="text-xs text-text-muted/60 text-center px-4 line-clamp-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
