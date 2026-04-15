"use client";

import { useState } from "react";

const reviews = [
  {
    quote:
      "The bowls feel fresh and generous without being heavy. It is the kind of place you can revisit every week.",
    name: "Mia L.",
    context: "Regular lunch guest",
  },
  {
    quote:
      "Great for quick dinners and group orders. The flavors stay bright even when we order delivery.",
    name: "Arjun K.",
    context: "Evening takeaway customer",
  },
  {
    quote:
      "Clean food, strong portions, and a menu that actually feels considered. We keep coming back for Bliss.",
    name: "Sophie W.",
    context: "Weekend diner",
  },
];

export function TestimonialCarousel({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  const eyebrowClass = tone === "dark" ? "text-white/45" : "text-stone-400";
  const quoteClass = tone === "dark" ? "text-white" : "text-stone-800";
  const nameClass = tone === "dark" ? "text-white/86" : "text-stone-700";
  const contextClass = tone === "dark" ? "text-white/45" : "text-stone-400";
  const controlClass =
    tone === "dark"
      ? "border-white/12 text-white hover:border-white hover:bg-white hover:text-stone-950"
      : "border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white";
  const activeDotClass = tone === "dark" ? "bg-[var(--lime)]" : "bg-stone-900";
  const inactiveDotClass =
    tone === "dark"
      ? "bg-white/20 hover:bg-white/35"
      : "bg-stone-300 hover:bg-stone-400";

  if (!review) return null;

  return (
    <div className="relative max-w-5xl mx-auto text-center">
      <p
        className={`mb-12 text-[10px] uppercase tracking-[0.3em] md:mb-20 md:text-xs ${eyebrowClass}`}
      >
        Guest Reviews
      </p>

      {/* Quote */}
      <div className="min-h-[200px] md:min-h-[260px] flex items-center justify-center">
        <blockquote
          key={current}
          className={`animate-[fadeUp_0.5s_ease-out] font-serif text-2xl italic leading-[1.3] md:text-4xl lg:text-5xl ${quoteClass}`}
        >
          &ldquo;{review.quote}&rdquo;
        </blockquote>
      </div>

      {/* Attribution */}
      <div className="mt-10 md:mt-14">
        <p
          className={`text-xs font-medium uppercase tracking-[0.3em] ${nameClass}`}
        >
          {review.name}
        </p>
        <p className={`mt-2 text-xs tracking-[0.2em] ${contextClass}`}>
          {review.context}
        </p>
      </div>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${controlClass}`}
          aria-label="Previous review"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? `w-8 ${activeDotClass}`
                  : `w-1.5 ${inactiveDotClass}`
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${controlClass}`}
          aria-label="Next review"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
