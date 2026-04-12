"use client";

import Image from "next/image";
import { useRef } from "react";

type Ingredient = {
  name: string;
  image: string;
  category: string;
};

const proteins: Ingredient[] = [
  { name: "Salmon Fillet", image: "/photos/Salmon%20Fillet.png", category: "Protein" },
  { name: "Chicken Breast", image: "/photos/Chicken%20Breast.png", category: "Protein" },
  { name: "Tofu", image: "/photos/Tofu.png", category: "Protein" },
];

const toppings: Ingredient[] = [
  { name: "Avocado", image: "/photos/Avacado.png", category: "Topping" },
  { name: "Kimchi", image: "/photos/Kimchi.png", category: "Topping" },
];

const sauces: Ingredient[] = [
  { name: "Ginger Miso", image: "/photos/Giner%20Miso.png", category: "Sauce" },
  { name: "Honey Lime", image: "/photos/Honey%20Lime.png", category: "Sauce" },
  { name: "Ponzu Tajin", image: "/photos/Ponzu%20Tajin.png", category: "Sauce" },
];

const allIngredients = [...proteins, ...toppings, ...sauces];

export function IngredientStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

        <p className="text-xs md:text-sm tracking-[0.15em] text-stone-500 max-w-xs text-right leading-relaxed hidden md:block">
          Premium proteins, vibrant toppings, and house-made sauces with personality.
        </p>
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

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 md:px-16 lg:px-24 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {allIngredients.map((item) => (
          <div
            key={item.name}
            className="group flex-shrink-0 w-[180px] md:w-[220px]"
          >
            <div className="relative aspect-square bg-stone-800/50 rounded-sm overflow-hidden mb-4 border border-stone-700/30">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="220px"
                className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-1">
              {item.category}
            </p>
            <p className="text-sm text-stone-300 font-light tracking-wide">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
