"use client";

import Image from "next/image";
import { useRef } from "react";

type Bowl = {
  name: string;
  image: string;
  accent: string;
  calories: string;
  protein: string;
  description: string;
};

export function MenuCarousel({ bowls }: { bowls: Bowl[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const amount = container.clientWidth * 0.82;
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard("prev")}
          className="rounded-full border border-stone-300 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-stone-900 transition hover:border-stone-900"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("next")}
          className="rounded-full bg-(--brand-red) px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:translate-y-[-2px]"
        >
          Next
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {bowls.map((bowl) => (
          <article
            key={bowl.name}
            className="group min-w-[86%] snap-center rounded-[34px] border border-stone-200 bg-[linear-gradient(180deg,#fffdf7_0%,#f9f4e8_100%)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:min-w-[360px] lg:min-w-[31%]"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-(--brand-red)">
                {bowl.accent}
              </p>
              <button
                type="button"
                className="rounded-full border border-stone-900/12 bg-white/75 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-stone-900"
              >
                Menu Only
              </button>
            </div>
            <div className="relative mx-auto mt-6 aspect-square max-w-[320px] overflow-hidden rounded-full">
              <Image
                src={bowl.image}
                alt={bowl.name}
                fill
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 360px, 28vw"
                className="object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-black tracking-[-0.04em] text-stone-950">
                {bowl.name}
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-stone-700">
                {bowl.description}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-[24px] bg-white/70 px-4 py-4 text-center">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-stone-500">
                  Style
                </p>
                <p className="mt-2 text-base font-semibold text-stone-950">
                  {bowl.calories}
                </p>
              </div>
              <div className="rounded-[24px] bg-white/70 px-4 py-4 text-center">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-stone-500">
                  Finish
                </p>
                <p className="mt-2 text-base font-semibold text-stone-950">
                  {bowl.protein}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
