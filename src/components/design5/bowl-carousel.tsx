"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { DishModal } from "@/components/restaurant/dish-modal";

export type Bowl = {
  name: string;
  image: string;
  description: string;
  ingredients: string;
  nutrition: {
    calories: string;
    protein: string;
    fats: string;
    carbs: string;
    vitC: string;
  };
  price: string;
  tags: string[];
  isSignature?: boolean;
};

export const bowls: Bowl[] = [
  {
    name: "Bliss",
    image: "/photos/Bliss.png",
    description: "Inflammation Control, Metabolic Support, Muscle Recovery",
    ingredients: "Quinoa, Chicken, Spinach, Kale, Edamame, Carrot, Cucumber, Pineapple, Avocado, Sesame Seed, Ginger, Seaweed",
    nutrition: {
      calories: "565.04",
      protein: "37.3",
      fats: "23.44",
      carbs: "46.72",
      vitC: "56.46 MG"
    },
    price: "$98",
    tags: ["Best Seller", "Protein Forward"],
    isSignature: true,
  },
  {
    name: "Low Calories",
    image: "/photos/Low%20Calories.png",
    description: "Big Portion, Low Calories, Satiety, Metabolism Booster",
    ingredients: "Spinach, Salmon, Purple Cabbage, Cucumber, Ginger, Sesame Oil, Sesame Seed",
    nutrition: {
      calories: "340.53",
      protein: "27.51",
      fats: "22.4",
      carbs: "13.64",
      vitC: "73.25 mg"
    },
    price: "$98",
    tags: ["Light", "Low Calorie"],
    isSignature: true,
  },
  {
    name: "Cardio Crunch",
    image: "/photos/Cardio%20Crunch.png",
    description: "Colesterol Control, Clean Energy, Circulation Support",
    ingredients: "Quinoa, Salmon, Broccoli, Avocado, Lemon, Dry Fruits, Flax Seed, Olive oil",
    nutrition: {
      calories: "533.41",
      protein: "29.70",
      fats: "30.41",
      carbs: "35.21",
      vitC: "51.67 MG"
    },
    price: "$108",
    tags: ["Crunchy", "Texture Rich"],
    isSignature: true,
  },
  {
    name: "Fuel Up Energy",
    image: "/photos/Fuel%20Up%20Energy.png",
    description: "Instant Fuel, Sustained Power, Crash Protection",
    ingredients: "Quinoa, Sweet Potato, Salmon, Avocado, Edamame, Cucumber, Purple Cabbage, Ginger, Wasabi, Sesame Seed",
    nutrition: {
      calories: "556.37",
      protein: "34.36",
      fats: "29.23",
      carbs: "44.07",
      vitC: "58.66 mg"
    },
    price: "$108",
    tags: ["Power Bowl", "Recovery"],
    isSignature: true,
  },
  {
    name: "Gut Guardian",
    image: "/photos/Gut%20Guardian.png",
    description: "Microbiome Support, Digestive Comfort, Complete Nutrition",
    ingredients: "Quinoa, Tofu, Edamame, Kimchi, Cucumber, Carrot, Purple Cabbage",
    nutrition: {
      calories: "283.64",
      protein: "17.06",
      fats: "13.43",
      carbs: "23.53",
      vitC: "48.21 mg"
    },
    price: "$98",
    tags: ["Probiotic", "Gut Health"],
    isSignature: true,
  },
  {
    name: "Neuro Fuel",
    image: "/photos/Neouro%20Fuel.png",
    description: "Brain Power, Heart Protection, Focus Fuel",
    ingredients: "Quinoa, Salmon, Avocado, Cucumber, Bell Pepper, Lollo Rosso, Almond, Sesame Oil",
    nutrition: {
      calories: "517.53",
      protein: "28.10",
      fats: "35.19",
      carbs: "23.16",
      vitC: "70.17 mg"
    },
    price: "$98",
    tags: ["Brain Food", "Omega Rich"],
    isSignature: true,
  },
  {
    name: "Muscle Recovery",
    image: "/photos/Muscle%20Recovery.png",
    description: "Lean Protein, Inflammation Defense, Recovery Carb Blend",
    ingredients: "Quinoa, Sweet Potato, Chicken, Broccoli, Purple Cabbage, Almond, Turmeric, Black Pepper, Olive oil",
    nutrition: {
      calories: "489.52",
      protein: "30.63",
      fats: "38.31",
      carbs: "58.73",
      vitC: "52.62"
    },
    price: "$98",
    tags: ["High Protein", "Post-Workout"],
    isSignature: true,
  },
  {
    name: "Immunity Booster",
    image: "/photos/Immunity%20Booster.png",
    description: "Virus Shield, White Blood Cell Boost, Mucous Me, Brain Armor",
    ingredients: "Quinoa, Salmon, Kale, Ginger, Carrot, Cilantro, Garlic, Sesame Seed",
    nutrition: {
      calories: "476.52",
      protein: "29.36",
      fats: "16.45",
      carbs: "50.87",
      vitC: "102.48 MG"
    },
    price: "$98",
    tags: ["Immunity", "Superfoods"],
    isSignature: true,
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

  const [selectedBowl, setSelectedBowl] = useState<Bowl | null>(null);

  return (
    <div>
      <DishModal 
        isOpen={selectedBowl !== null} 
        onClose={() => setSelectedBowl(null)} 
        bowl={selectedBowl as any} 
      />
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
              className="group w-[85vw] shrink-0 sm:w-105 lg:w-96 cursor-pointer"
              onClick={() => setSelectedBowl(bowl)}
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
                  className="object-contain p-16 transition-transform duration-700 group-hover:scale-105"
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
              <div className="mb-4">
                <h3
                  className={`font-serif text-2xl md:text-3xl ${headingClass}`}
                >
                  {bowl.name}
                </h3>
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
              Previous
            </span>
            <span
              className={`font-mono text-[10px] tracking-widest ${priceClass}`}
            >
              Next
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
