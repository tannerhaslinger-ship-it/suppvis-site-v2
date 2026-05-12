"use client";

import { useState, FormEvent } from "react";

const PARTNER_TYPES = [
  "Brand Partner",
  "Research Partner",
  "Distribution or Integration",
  "Other",
];

const YES_NO_SOME = ["Yes", "No", "Some"];

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partnerType, setPartnerType] = useState("");

  const isBrand = partnerType === "Brand Partner";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {
      // Still show success state for now
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-bg-secondary border border-accent/20 p-10 text-center">
        <p className="text-text-primary text-xl font-semibold">
          Message received. We&rsquo;ll be in touch within five business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl bg-bg-secondary border border-white/10 px-5 py-3.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors text-sm";

  const selectClass =
    "w-full rounded-xl bg-bg-secondary border border-white/10 px-5 py-3.5 text-text-muted focus:text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors appearance-none text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="p-name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="p-name"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="p-company" className="sr-only">
            Company or organization
          </label>
          <input
            type="text"
            id="p-company"
            name="company"
            placeholder="Company or organization"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Email + Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="p-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="p-email"
            name="email"
            required
            placeholder="you@yourcompany.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="p-website" className="sr-only">
            Website or URL
          </label>
          <input
            type="url"
            id="p-website"
            name="website"
            placeholder="Website or URL of relevant work"
            className={inputClass}
          />
        </div>
      </div>

      {/* Partnership type */}
      <div>
        <label htmlFor="p-type" className="sr-only">
          Partnership type
        </label>
        <select
          id="p-type"
          name="partnerType"
          required
          defaultValue=""
          onChange={(e) => setPartnerType(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            Select partnership type
          </option>
          {PARTNER_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional brand questions */}
      {isBrand && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="p-tested"
              className="block text-xs text-text-muted mb-1.5 pl-1"
            >
              Are your products third-party tested?
            </label>
            <select
              id="p-tested"
              name="thirdPartyTested"
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select
              </option>
              {YES_NO_SOME.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="p-blends"
              className="block text-xs text-text-muted mb-1.5 pl-1"
            >
              Do any products use proprietary blends?
            </label>
            <select
              id="p-blends"
              name="proprietaryBlends"
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Select
              </option>
              {YES_NO_SOME.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="p-message" className="sr-only">
          Message
        </label>
        <textarea
          id="p-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your brand, your products, and what you have in mind."
          className={`${inputClass} resize-vertical min-h-[140px] leading-relaxed`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-accent text-bg-primary font-semibold text-lg py-4 hover:bg-accent-hover transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
