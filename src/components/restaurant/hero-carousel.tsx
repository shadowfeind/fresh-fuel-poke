"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  label: string;
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

      <div className="relative z-10 px-8 pb-16 md:px-16 md:pb-24 lg:px-24">
        <p className="text-[10px] uppercase tracking-[0.34em] text-(--lime) md:text-xs">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-white">
          {title.map((line) => (
            <span
              key={line}
              className="block text-6xl font-black uppercase leading-[0.86] tracking-[-0.05em] md:text-8xl lg:text-[10rem]"
            >
              {line}
            </span>
          ))}
          <span className="block font-(family-name:--font-display) text-5xl italic font-light leading-[0.92] tracking-[-0.04em] text-white/78 md:text-7xl lg:text-[7rem]">
            {accent}
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm tracking-[0.12em] text-white/65 md:text-base">
            {description}
          </p>

          <div className="min-w-[280px] rounded-[28px] border border-white/14 bg-black/18 p-4 text-white backdrop-blur-sm md:min-w-[360px] md:p-5">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">
                  Fresh Fuel
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/78 md:text-base">
                  {currentSlide?.label}
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setSlide((activeIndex - 1 + slides.length) % slides.length)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/6 transition hover:bg-white hover:text-stone-950"
                aria-label="Previous hero image"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex flex-1 gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={`h-11 flex-1 rounded-full border text-[10px] font-semibold uppercase tracking-[0.24em] transition ${
                      index === activeIndex
                        ? "border-white bg-white text-stone-950"
                        : "border-white/14 bg-white/6 text-white/72 hover:bg-white/12"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSlide((activeIndex + 1) % slides.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/6 transition hover:bg-white hover:text-stone-950"
                aria-label="Next hero image"
              >
                <svg
                  width="18"
                  height="18"
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
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="h-12 w-px bg-white/30" />
      </div>
    </section>
  );
}
