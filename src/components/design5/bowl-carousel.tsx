"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";

type Bowl = {
  name: string;
  image: string;
  description: string;
  price: string;
  tags: string[];
};

const bowls: Bowl[] = [
  {
    name: "Bliss",
    image: "/photos/Bliss.png",
    description:
      "Wild salmon, edamame, avocado, micro-greens, finished with a subtle citrus note.",
    price: "24",
    tags: ["Best Seller", "Protein Forward"],
  },
  {
    name: "Low Calorie",
    image: "/photos/Low%20Calories.png",
    description:
      "Lean salmon over spinach, purple cabbage, ginger, sesame — clean and light.",
    price: "22",
    tags: ["Light", "Under 400 cal"],
  },
  {
    name: "Cardio Crunch",
    image: "/photos/Cardio%20Crunch.png",
    description:
      "Crisp vegetables layered with bold dressing notes and satisfying crunch.",
    price: "23",
    tags: ["Crunchy", "Texture Rich"],
  },
  {
    name: "Fuel Up Energy",
    image: "/photos/Fuel%20Up%20Energy.png",
    description:
      "A fuller bowl for post-workout recovery with vibrant toppings and depth.",
    price: "26",
    tags: ["Power Bowl", "Recovery"],
  },
  {
    name: "Gut Guardian",
    image: "/photos/Gut%20Guardian.png",
    description:
      "Fermented vegetables, miso, and prebiotic-rich ingredients for gut health.",
    price: "25",
    tags: ["Probiotic", "Gut Health"],
  },
  {
    name: "Neuro Fuel",
    image: "/photos/Neouro%20Fuel.png",
    description:
      "Omega-rich salmon, seeds, dark greens — built for focus and mental clarity.",
    price: "27",
    tags: ["Brain Food", "Omega-3"],
  },
];
const loopedBowls = [...bowls, ...bowls, ...bowls];

export function BowlCarousel({ tone = "light" }: { tone?: "light" | "dark" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sampleCardRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(bowls.length);
  const [stepSize, setStepSize] = useState(512);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const eyebrowClass = tone === "dark" ? "text-white/48" : "text-stone-500";
  const headingClass = tone === "dark" ? "text-white" : "text-stone-900";
  const controlClass =
    tone === "dark"
      ? "border-white/12 text-white hover:border-white hover:bg-white hover:text-stone-950"
      : "border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white";
  const imageClass =
    tone === "dark" ? "bg-white/6 ring-1 ring-white/8" : "bg-[#f4f1eb]";
  const tagClass =
    tone === "dark"
      ? "border-white/10 text-white/52"
      : "border-stone-200 text-stone-500";
  const descriptionClass = tone === "dark" ? "text-white/68" : "text-stone-500";
  const priceClass = tone === "dark" ? "text-white/42" : "text-stone-400";
  const progressTrackClass = tone === "dark" ? "bg-white/10" : "bg-stone-200";
  const progressFillClass =
    tone === "dark" ? "bg-[var(--lime)]" : "bg-stone-900";

  useEffect(() => {
    const measure = () => {
      const card = sampleCardRef.current;
      const track = trackRef.current;
      if (!card || !track) return;

      const computedStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(computedStyles.gap || "32");
      setStepSize(card.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (isTransitionEnabled) return;

    const frame = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isTransitionEnabled]);

  const goTo = (direction: "prev" | "next") => {
    setActiveIndex((currentIndex) =>
      direction === "next" ? currentIndex + 1 : currentIndex - 1,
    );
  };

  const autoplay = useEffectEvent(() => {
    goTo("next");
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      autoplay();
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoplay]);

  const handleTransitionEnd = () => {
    const firstLoopIndex = bowls.length;
    const lastLoopIndex = bowls.length * 2 - 1;

    if (activeIndex > lastLoopIndex) {
      setIsTransitionEnabled(false);
      setActiveIndex(firstLoopIndex);
      return;
    }

    if (activeIndex < firstLoopIndex) {
      setIsTransitionEnabled(false);
      setActiveIndex(lastLoopIndex);
    }
  };

  const displayIndex =
    ((activeIndex % bowls.length) + bowls.length) % bowls.length;

  return (
    <div>
      {/* Header */}
      <div className="w-full px-8 md:px-16 lg:px-24 mb-16">
        <div className="mx-auto custom-container flex items-end justify-between">
          <div>
            <p
              className={`mb-4 text-[10px] uppercase tracking-[0.3em] md:text-xs ${eyebrowClass}`}
            >
              Signature Bowls
            </p>
            <h2
              className={`font-serif text-3xl leading-[0.95] md:text-5xl lg:text-5xl ${headingClass}`}
            >
              Our Signature
              <br />
              Dishes
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => goTo("prev")}
              className={`flex h-14 w-14 items-center justify-center rounded-md border transition-all duration-300 ${controlClass}`}
              aria-label="Previous bowl"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo("next")}
              className={`flex h-14 w-14 items-center justify-center rounded-md border transition-all duration-300 ${controlClass}`}
              aria-label="Next bowl"
            >
              <svg
                width="20"
                height="20"
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
      </div>

      {/* Carousel */}
      <div className="overflow-hidden px-8 pb-8 md:px-16 lg:px-24">
        <div
          ref={trackRef}
          className={`flex gap-8 ${
            isTransitionEnabled
              ? "transition-transform duration-500 ease-out"
              : ""
          }`}
          style={{
            transform: `translate3d(-${activeIndex * stepSize}px, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopedBowls.map((bowl, index) => (
            <article
              key={`${bowl.name}-${index}`}
              ref={index === 0 ? sampleCardRef : null}
              className="group w-[85vw] shrink-0 sm:w-105 lg:w-120"
            >
              {/* Bowl image */}
              <div
                className={`relative mb-8 aspect-square overflow-hidden rounded-sm ${imageClass}`}
              >
                <Image
                  src={bowl.image}
                  alt={bowl.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 480px"
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {bowl.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] ${tagClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div className="flex justify-between items-baseline mb-4">
                <h3
                  className={`font-serif text-2xl md:text-3xl ${headingClass}`}
                >
                  {bowl.name}
                </h3>
                <span
                  className={`font-mono text-sm tracking-widest ${priceClass}`}
                >
                  {bowl.price}
                </span>
              </div>

              <p
                className={`max-w-md text-sm leading-relaxed md:text-base ${descriptionClass}`}
              >
                {bowl.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full px-8 md:px-16 lg:px-24 mt-4">
        <div className="mx-auto custom-container">
          <div className={`relative h-px ${progressTrackClass}`}>
            <div
              className={`absolute left-0 top-0 h-px transition-all duration-500 ${progressFillClass}`}
              style={{ width: `${((displayIndex + 1) / bowls.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span
              className={`font-mono text-[10px] tracking-widest ${priceClass}`}
            >
              {String(displayIndex + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-mono text-[10px] tracking-widest ${priceClass}`}
            >
              {String(bowls.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
