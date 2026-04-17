"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  label: string;
  title?: readonly string[];
  accent?: string;
  description?: string;
};

export function HeroCarousel({
  slides,
  eyebrow,
  title,
  accent,
  description,
}: {
  slides: readonly HeroSlide[];
  eyebrow: string;
  title: readonly string[];
  accent: string;
  description: string;
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
    const intervalId = window.setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goToNext]);

  const currentSlide = slides[activeIndex];
  const activeTitle = currentSlide?.title ?? title;
  const activeAccent = currentSlide?.accent ?? accent;
  const activeDescription = currentSlide?.description ?? description;

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-1600 ${
                index === activeIndex ? "scale-100" : "scale-105"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 w-full px-8 pb-16 md:px-16 md:pb-24 lg:px-24">
        <div className="mx-auto custom-container">
          <p className="text-[10px] uppercase tracking-[0.34em] text-(--lime) md:text-xs">
            {currentSlide?.label ?? eyebrow}
          </p>
          <h1 className="mt-5 text-white">
            {activeTitle.map((line) => (
              <span
                key={line}
                className="block text-6xl font-black uppercase leading-[0.86] tracking-[-0.05em] md:text-8xl lg:text-[10rem]"
              >
                {line}
              </span>
            ))}
            <span className="block font-serif text-5xl italic font-light leading-[0.92] tracking-[-0.04em] text-white/78 md:text-7xl lg:text-[7rem]">
              {activeAccent}
            </span>
          </h1>

          <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm tracking-[0.12em] text-white/65 md:text-base">
              {activeDescription}
            </p>

            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="h-12 w-px bg-white/30" />
      </div>
    </section>
  );
}
