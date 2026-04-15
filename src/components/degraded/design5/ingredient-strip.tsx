"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";

type Ingredient = {
  name: string;
  image: string;
  category: string;
};

const proteins: Ingredient[] = [
  {
    name: "Salmon Fillet",
    image: "/photos/Salmon%20Fillet.png",
    category: "Protein",
  },
  {
    name: "Chicken Breast",
    image: "/photos/Chicken%20Breast.png",
    category: "Protein",
  },
  { name: "Tofu", image: "/photos/Tofu.png", category: "Protein" },
];

const toppings: Ingredient[] = [
  { name: "Avocado", image: "/photos/Avacado.png", category: "Topping" },
  { name: "Kimchi", image: "/photos/Kimchi.png", category: "Topping" },
];

const sauces: Ingredient[] = [
  { name: "Ginger Miso", image: "/photos/Giner%20Miso.png", category: "Sauce" },
  { name: "Honey Lime", image: "/photos/Honey%20Lime.png", category: "Sauce" },
  {
    name: "Ponzu Tajin",
    image: "/photos/Ponzu%20Tajin.png",
    category: "Sauce",
  },
];

const allIngredients = [...proteins, ...toppings, ...sauces];
const loopedIngredients = [
  ...allIngredients,
  ...allIngredients,
  ...allIngredients,
];

export function IngredientStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sampleCardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(allIngredients.length);
  const [stepSize, setStepSize] = useState(204);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    const measure = () => {
      const card = sampleCardRef.current;
      const track = trackRef.current;
      if (!card || !track) return;

      const computedStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(computedStyles.gap || "24");
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

  const scrollTo = (direction: "prev" | "next") => {
    if (direction === "next") {
      setActiveIndex((currentIndex) => currentIndex + 1);
    } else {
      setActiveIndex((currentIndex) => currentIndex - 1);
    }
  };

  const autoplay = useEffectEvent(() => {
    scrollTo("next");
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      autoplay();
    }, 4200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [autoplay]);

  const handleTransitionEnd = () => {
    const firstLoopIndex = allIngredients.length;
    const lastLoopIndex = allIngredients.length * 2 - 1;

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
    ((activeIndex % allIngredients.length) + allIngredients.length) %
    allIngredients.length;

  return (
    <div>
      {/* Header row */}
      <div className="flex items-end justify-between mb-12 px-8 md:px-16 lg:px-24">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">
            Sourced Daily
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 leading-tight">
            Ingredients
          </h2>
        </div>

        <div className="hidden items-end gap-6 md:flex">
          <p className="max-w-xs text-right text-xs leading-relaxed tracking-[0.15em] text-stone-500 md:text-sm">
            Premium proteins, vibrant toppings, and house-made sauces with
            personality.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollTo("prev")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-all duration-300 hover:border-stone-100 hover:bg-stone-100 hover:text-stone-950"
              aria-label="Previous ingredient"
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
            <button
              type="button"
              onClick={() => scrollTo("next")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-all duration-300 hover:border-stone-100 hover:bg-stone-100 hover:text-stone-950"
              aria-label="Next ingredient"
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
      </div>

      {/* Categories label bar */}
      <div className="flex gap-8 px-8 md:px-16 lg:px-24 mb-8">
        {["Protein", "Topping", "Sauce"].map((cat) => (
          <span
            key={cat}
            className="text-[10px] uppercase tracking-[0.3em] text-stone-600 border-b border-stone-700 pb-2"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Carousel track */}
      <div className="overflow-hidden px-8 pb-6 md:px-16 lg:px-24">
        <div
          ref={trackRef}
          className={`flex gap-6 ${
            isTransitionEnabled
              ? "transition-transform duration-500 ease-out"
              : ""
          }`}
          style={{
            transform: `translate3d(-${activeIndex * stepSize}px, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopedIngredients.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              ref={index === 0 ? sampleCardRef : null}
              className="group w-[180px] shrink-0 md:w-[220px]"
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-sm border border-stone-700/30 bg-stone-800/50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="220px"
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-stone-500">
                {item.category}
              </p>
              <p className="text-sm font-light tracking-wide text-stone-300">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 px-8 md:hidden">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("prev")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-all duration-300 hover:border-stone-100 hover:bg-stone-100 hover:text-stone-950"
            aria-label="Previous ingredient"
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
          <div className="relative h-px flex-1 bg-stone-800">
            <div
              className="absolute left-0 top-0 h-px bg-[var(--lime)] transition-all duration-500"
              style={{
                width: `${((displayIndex + 1) / allIngredients.length) * 100}%`,
              }}
            />
          </div>
          <button
            type="button"
            onClick={() => scrollTo("next")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition-all duration-300 hover:border-stone-100 hover:bg-stone-100 hover:text-stone-950"
            aria-label="Next ingredient"
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

      <div className="mt-4 hidden px-8 md:block md:px-16 lg:px-24">
        <div className="relative h-px bg-stone-800">
          <div
            className="absolute left-0 top-0 h-px bg-stone-100 transition-all duration-500"
            style={{
              width: `${((displayIndex + 1) / allIngredients.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
