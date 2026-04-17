"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

export type GlassHeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function GlassHeroCarousel({
  slides,
  autoAdvanceMs = 6000,
}: {
  slides: readonly GlassHeroSlide[];
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

  const goToPrev = useEffectEvent(() => {
    setSlide((activeIndex - 1 + slides.length) % slides.length);
  });

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      goToNext();
    }, autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [autoAdvanceMs, goToNext, slides.length]);

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-black pt-20">
      {/* Blurred background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={`bg-${slide.src}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-60" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover blur-[80px] scale-125"
            />
          </div>
        ))}
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 w-full px-8 py-20 md:px-16 lg:px-24">
        <div className="mx-auto custom-container grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Left Text */}
          <div className="relative flex flex-col justify-center min-h-[380px] text-white">
            <div className="relative flex-1">
              {slides.map((slide, index) => (
                <div
                  key={`text-${slide.src}`}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full transition-all duration-700 ease-out ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "pointer-events-none opacity-0 -translate-x-8"
                  }`}
                >
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.34em] text-(--lime)">
                    {slide.eyebrow}
                  </p>
                  <h1 className="mb-6 font-serif text-4xl leading-[1.1] md:text-6xl lg:text-[4.5rem]">
                    {slide.title}
                  </h1>
                  <p className="max-w-md text-sm leading-8 tracking-wide text-white/75 md:text-base">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    onClick={() => setSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="relative flex w-full justify-center lg:justify-end">
            <div className="floating-soft w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black/40">
                {slides.map((slide, index) => (
                  <Image
                    key={`img-${slide.src}`}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 70vw"
                    className={`object-cover transition-transform duration-[1500ms] ease-out ${
                      index === activeIndex
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-(--brand-red)/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-(--lime)/20 blur-[100px]" />
    </section>
  );
}
