"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

export type BlurHeroSlide = {
  bannerSrc: string;
  bannerAlt: string;
  dishSrc: string;
  dishAlt: string;
  eyebrow: string;
  title: readonly string[];
  accent: string;
  description: string;
};

export function BlurHeroCarousel({
  slides,
  autoAdvanceMs = 5500,
}: {
  slides: readonly BlurHeroSlide[];
  autoAdvanceMs?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const setSlide = (index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  const goToNext = useEffectEvent(() => {
    setSlide((activeIndex + 1) % slides.length);
  });

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      goToNext();
    }, autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [autoAdvanceMs, goToNext, slides.length]);

  const current = slides[activeIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.bannerSrc}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.bannerSrc}
              alt={slide.bannerAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover blur-[40px] opacity-70 transition-transform duration-[8000ms] ease-out ${
                index === activeIndex ? "scale-125" : "scale-110"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-black/86 via-black/55 to-black/18" />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-8 py-24 pt-28 md:px-16 md:py-28 md:pt-36 lg:px-24">
        <div className="mx-auto w-full custom-container">
          <div className="grid items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative grid min-h-[380px] max-w-[720px]">
              {slides.map((slide, index) => (
                <div
                  key={`text-${slide.bannerSrc}`}
                  className={`col-start-1 row-start-1 flex flex-col justify-center transition-all duration-1000 ease-out ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-8 opacity-0"
                  }`}
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-(--lime) md:text-xs">
                      {slide.eyebrow}
                    </p>
                    <h1 className="mt-5 max-w-3xl text-white">
                      {slide.title.map((line) => (
                        <span
                          key={line}
                          className="block text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl lg:text-8xl"
                        >
                          {line}
                        </span>
                      ))}
                      <span className="mt-3 block text-xl font-semibold tracking-[0.12em] text-white/85 md:text-2xl">
                        {slide.accent}
                      </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-sm leading-8 tracking-[0.08em] text-white/70 md:text-base">
                      {slide.description}
                    </p>
                  </div>

                  {/* Invisible spacer to maintain dots layout */}
                  <div
                    className="invisible mt-10 flex h-2.5 items-center gap-3"
                    aria-hidden="true"
                  >
                    {slides.map((_, i) => (
                      <div key={i} className="h-2.5 w-10" />
                    ))}
                  </div>
                </div>
              ))}

              {/* Navigation Dots Overlay */}
              <div className="pointer-events-none col-start-1 row-start-1 flex flex-col justify-end">
                <div className="pointer-events-auto flex items-center gap-3">
                  {slides.map((slide, index) => (
                    <button
                      key={`dot-${slide.bannerSrc}`}
                      type="button"
                      onClick={() => setSlide(index)}
                      aria-label={`Show slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-10 bg-white"
                          : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="floating-soft w-full max-w-[520px] rounded-lg border border-white/14 bg-white/6 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-8">
                <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white/10">
                  {slides.map((slide, index) => (
                    <div
                      key={`dish-${slide.bannerSrc}`}
                      className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                        index === activeIndex
                          ? "translate-y-0 scale-100 opacity-100"
                          : "pointer-events-none translate-y-12 scale-90 opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.dishSrc}
                        alt={slide.dishAlt}
                        fill
                        sizes="(max-width: 1024px) 80vw, 520px"
                        className="object-contain p-8 md:p-10"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pulse-halo pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-(--brand-red)/28 blur-3xl" />
      <div className="pulse-halo pointer-events-none absolute -bottom-14 -left-14 h-64 w-64 rounded-full bg-(--lime)/18 blur-3xl" />
    </section>
  );
}
