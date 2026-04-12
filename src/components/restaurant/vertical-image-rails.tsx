"use client";

import Image from "next/image";

type RailImage = {
  src: string;
  alt: string;
};

type RailColumn = {
  speedClass: "marquee-up" | "marquee-down";
  items: RailImage[];
};

export function VerticalImageRails({
  columns,
  tone = "dark",
}: {
  columns: RailColumn[];
  tone?: "dark" | "light";
}) {
  const cardClass =
    tone === "dark"
      ? "border-white/10 bg-white/6"
      : "border-stone-200 bg-white";

  return (
    <div className="grid h-[640px] grid-cols-2 gap-4 overflow-hidden lg:grid-cols-3">
      {columns.map((column, columnIndex) => {
        const items = [...column.items, ...column.items];

        return (
          <div
            key={`${column.speedClass}-${columnIndex}`}
            className="overflow-hidden"
          >
            <div
              className={`flex min-h-max flex-col gap-4 ${column.speedClass}`}
            >
              {items.map((image, imageIndex) => {
                const isPng =
                  image.src.endsWith(".png") || image.src.endsWith(".webp");

                return (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className={`relative h-52 overflow-hidden rounded-[28px] border ${cardClass} shadow-[0_18px_45px_rgba(0,0,0,0.08)]`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className={isPng ? "object-contain p-5" : "object-cover"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
