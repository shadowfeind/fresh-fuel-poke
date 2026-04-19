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
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[8000ms] ease-out ${
                index === activeIndex ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full px-8 pb-16 md:px-16 md:pb-24 lg:px-24">
        <div className="mx-auto custom-container grid items-end">
          <div className="col-start-1 row-start-1 w-fit">
            <div className="grid rounded-2xl bg-black/30 p-6 backdrop-blur-md md:p-10">
              {slides.map((slide, index) => {
                const slideTitle = slide.title ?? title;
                const slideAccent = slide.accent ?? accent;
                const slideDescription = slide.description ?? description;
                const slideLabel = slide.label ?? eyebrow;

                return (
                  <div
                    key={`text-${slide.src}`}
                    className={`col-start-1 row-start-1 transform-gpu transition-all duration-1000 ease-out will-change-[opacity,transform] ${
                      index === activeIndex
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-8 opacity-0"
                    }`}
                  >
                    <p className="mb-4 text-[7px] uppercase tracking-[0.34em] text-(--lime) md:text-[9px]">
                      {slideLabel}
                    </p>
                    <h1 className="text-white">
                      <span className="block text-4xl font-black uppercase leading-[0.86] tracking-[-0.05em] md:text-5xl lg:text-[5.5rem]">
                        {slideTitle.join(" ")}
                      </span>
                      <span className="mt-2 block font-serif text-3xl italic font-light leading-[0.92] tracking-[-0.04em] text-white/78 md:text-4xl lg:text-[4rem]">
                        {slideAccent}
                      </span>
                    </h1>
                    <p className="mt-6 max-w-md text-sm tracking-[0.12em] text-white/90 md:text-base">
                      {slideDescription}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
              <div className="flex-1" />
              {/* Invisible spacer to maintain layout matching the dots */}
              <div className="invisible flex h-2.5 items-center gap-3" aria-hidden="true">
                {slides.map((_, i) => (
                  <div key={i} className="h-2.5 w-2.5" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots Overlay */}
          <div className="col-start-1 row-start-1 pointer-events-none flex flex-col justify-end">
            <div className="mt-12 flex justify-center md:mt-16">
              <div className="pointer-events-auto flex items-center gap-3">
                {slides.map((slide, index) => (
                  <button
                    key={`dot-${slide.src}`}
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
      </div>

    </section>
  );
}
