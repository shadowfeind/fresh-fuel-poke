"use client";

import Image from "next/image";
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

export type BannerSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function BannerCarousel({
  slides,
  autoAdvanceMs = 6000,
}: {
  slides: readonly BannerSlide[];
  autoAdvanceMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useEffectEvent((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const width = scroller.clientWidth;
    scroller.scrollTo({
      left: width * index,
      behavior: "smooth",
    });

    startTransition(() => {
      setActiveIndex(index);
    });
  });

  const clampIndex = (index: number) =>
    (index + slides.length) % Math.max(1, slides.length);

  const handleScroll = useEffectEvent(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const width = scroller.clientWidth || 1;
    const nextIndex = Math.round(scroller.scrollLeft / width);
    startTransition(() => {
      setActiveIndex(clampIndex(nextIndex));
    });
  });

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        handleScroll();
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      scrollToIndex(clampIndex(activeIndex + 1));
    }, autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [activeIndex, autoAdvanceMs, scrollToIndex, slides.length]);

  const current = slides[activeIndex];
  const goPrev = () => scrollToIndex(clampIndex(activeIndex - 1));
  const goNext = () => scrollToIndex(clampIndex(activeIndex + 1));
  const goTo = (index: number) => scrollToIndex(clampIndex(index));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_26px_80px_rgba(15,23,42,0.08)]"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Banner carousel"
      >
        <div className="absolute inset-x-0 top-0 z-10 h-[3px] bg-black/5">
          <div
            key={`progress-${activeIndex}`}
            className="progress-fill h-full bg-(--brand-red)"
            style={
              {
                ["--progress-ms" as string]: `${autoAdvanceMs}ms`,
              } as React.CSSProperties
            }
          />
        </div>

        <div
          ref={scrollerRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {slides.map((slide) => (
            <div
              key={slide.src}
              className="relative w-full shrink-0 snap-center"
            >
              <div className="relative aspect-[16/9] w-full bg-[#fbfaf6] md:aspect-[21/9]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={slide.src === slides[0]?.src}
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/12 via-transparent to-transparent" />

        <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2">
          <span className="rounded-md border border-white/35 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-stone-950 backdrop-blur">
            {current?.eyebrow}
          </span>
          <span className="rounded-md border border-white/35 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-stone-950 backdrop-blur">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white/95 text-stone-950 shadow-sm transition hover:bg-white"
            aria-label="Previous banner"
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
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-stone-200 bg-white/95 text-stone-950 shadow-sm transition hover:bg-white"
            aria-label="Next banner"
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

      <div className="mt-8 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end">
        <div key={`copy-${activeIndex}`} className="fade-up min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-stone-500 md:text-xs">
            {current?.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-stone-950 md:text-6xl">
            {current?.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 tracking-[0.08em] text-stone-600 md:text-base">
            {current?.description}
          </p>
        </div>

        <div className="flex items-center gap-2 md:justify-end">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-stone-950"
                  : "w-2.5 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
