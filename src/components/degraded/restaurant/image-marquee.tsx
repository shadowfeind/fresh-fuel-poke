"use client";

import Image from "next/image";

type MarqueeImage = {
  src: string;
  alt: string;
};

export function ImageMarquee({
  images,
  speedClass = "marquee-left",
  tone = "light",
}: {
  images: MarqueeImage[];
  speedClass?: "marquee-left" | "marquee-right";
  tone?: "light" | "dark";
}) {
  const items = [...images, ...images];
  const cardClass =
    tone === "dark"
      ? "border-white/10 bg-white/6"
      : "border-stone-200 bg-white";

  return (
    <div className="overflow-hidden">
      <div className={`flex min-w-max gap-4 ${speedClass}`}>
        {items.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`relative h-52 w-64 shrink-0 overflow-hidden rounded-[28px] border ${cardClass} shadow-[0_18px_45px_rgba(0,0,0,0.08)]`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="256px"
              className={
                image.src.endsWith(".png")
                  ? "object-contain p-4"
                  : "object-cover"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
