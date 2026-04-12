import Image from "next/image";
import {
  ActionButtons,
  RestaurantFooter,
  RestaurantLogo,
} from "@/components/restaurant/common";
import { restaurantInfo } from "@/components/restaurant/content";
import { ImageMarquee } from "@/components/restaurant/image-marquee";
import { Reveal } from "@/components/restaurant/reveal";
import { BowlCarousel } from "@/components/design5/bowl-carousel";
import { IngredientStrip } from "@/components/design5/ingredient-strip";
import { TestimonialCarousel } from "@/components/design5/testimonial-carousel";

const floatingHighlights = [
  {
    title: "Meal Set",
    image: "/photos/Meal%20Set.png",
    note: "Fast, photogenic, and easy to share.",
    accent: "Set",
    size: "small",
  },
  {
    title: "Bliss",
    image: "/photos/Bliss.png",
    note: "The bowl that anchors the whole visual identity.",
    accent: "Signature",
    size: "large",
  },
  {
    title: "Low Calorie",
    image: "/photos/Low%20Calories.png",
    note: "Lighter profile, still bright enough to stand out.",
    accent: "Favorite",
    size: "medium",
  },
] as const;

const menuCategories = [
  {
    title: "Starters",
    note: "Small plates to open.",
    items: [
      { name: "Kimchi Slaw", price: "8" },
      { name: "Ginger Cucumber Cup", price: "7" },
      { name: "Seaweed Salad", price: "9" },
    ],
  },
  {
    title: "Signature Bowls",
    note: "House bowls built for balance.",
    items: [
      { name: "Bliss", price: "24" },
      { name: "Low Calorie", price: "22" },
      { name: "Cardio Crunch", price: "23" },
      { name: "Fuel Up Energy", price: "26" },
      { name: "Gut Guardian", price: "25" },
      { name: "Neuro Fuel", price: "27" },
    ],
  },
  {
    title: "Drinks",
    note: "Fresh mixes and house blends.",
    items: [
      { name: "Honey Lime", price: "6" },
      { name: "Apple & Pineapple Mix", price: "7" },
      { name: "Turmeric Coco", price: "7" },
    ],
  },
] as const;

const hours = [
  { label: "Mon — Thu", value: "11:00 — 21:30" },
  { label: "Friday", value: "11:00 — 22:30" },
  { label: "Saturday", value: "10:30 — 22:30" },
  { label: "Sunday", value: "10:30 — 21:00" },
] as const;

const marqueeRows = [
  [
    {
      src: "/photos/Banner2.jpg",
      alt: "Fresh Fuel Poke preparation scene",
    },
    {
      src: "/photos/Bliss.png",
      alt: "Bliss bowl",
    },
    {
      src: "/photos/Meal%20Set.png",
      alt: "Fresh Fuel Poke meal set",
    },
    {
      src: "/photos/Banner3.jpg",
      alt: "Fresh ingredients being prepared",
    },
  ],
  [
    {
      src: "/photos/Low%20Calories.png",
      alt: "Low Calorie bowl",
    },
    {
      src: "/photos/Banner1.jpg",
      alt: "Fresh Fuel Poke restaurant spread",
    },
    {
      src: "/photos/Fuel%20Up%20Energy.png",
      alt: "Fuel Up Energy bowl",
    },
    {
      src: "/photos/Cardio%20Crunch.png",
      alt: "Cardio Crunch bowl",
    },
  ],
];

export default function Design2Page() {
  return (
    <main className="bg-white text-[#121212]">
      <header className="fixed left-0 top-0 z-50 w-full mix-blend-difference">
        <div className="flex items-center justify-between px-8 py-8 md:px-16 lg:px-24">
          <button
            type="button"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white"
          >
            Menu
          </button>
          <RestaurantLogo className="w-24 invert md:w-32" priority />
          <button
            type="button"
            className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white"
          >
            Reserve
          </button>
        </div>
      </header>

      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/photos/Banner1.jpg"
            alt="Fresh Fuel Poke restaurant spread"
            fill
            priority
            sizes="100vw"
            className="slow-pan object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        </div>

        <div className="relative z-10 px-8 pb-16 md:px-16 md:pb-24 lg:px-24">
          <Reveal delay={60}>
            <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--lime)] md:text-xs">
              Bold & Trendy
            </p>
            <h1 className="mt-5 text-white">
              <span className="block text-6xl font-black uppercase leading-[0.86] tracking-[-0.05em] md:text-8xl lg:text-[10rem]">
                Bowls
              </span>
              <span className="block text-6xl font-black uppercase leading-[0.86] tracking-[-0.05em] md:text-8xl lg:text-[10rem]">
                Built
              </span>
              <span className="block font-[family-name:var(--font-display)] text-5xl italic font-light leading-[0.92] tracking-[-0.04em] text-white/78 md:text-7xl lg:text-[7rem]">
                for the feed.
              </span>
            </h1>
          </Reveal>

          <Reveal
            className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between"
            delay={160}
          >
            <p className="max-w-md text-sm tracking-[0.12em] text-white/65 md:text-base">
              {restaurantInfo.tagline} A sharper, more editorial layout built to
              feel exciting before the first scroll.
            </p>

            <ActionButtons
              primaryClassName="rounded-full bg-[var(--brand-red)] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_12px_30px_rgba(207,51,40,0.28)] transition hover:-translate-y-1"
              secondaryClassName="rounded-full bg-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#121212] transition hover:bg-stone-100"
            />
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <div className="h-12 w-px bg-white/30" />
        </div>
      </section>

      <section className="px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
        <Reveal delay={80}>
          <div className="mx-auto max-w-[1500px] rounded-[44px] border border-stone-200 bg-white px-6 py-8 text-[#121212] shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:px-10 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
              <div className="max-w-xl lg:pb-10">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--lime)] md:text-xs">
                  Floating Favorites
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.94] tracking-[-0.05em] text-stone-950 md:text-6xl">
                  A sharper floating lineup with one hero bowl and two orbiting
                  hits.
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-8 tracking-[0.08em] text-stone-600 md:text-base">
                  This now plays like a spotlight moment instead of a pale
                  content box. The centerpiece stays dominant, the side bowls
                  drift around it, and the whole drop keeps the energy high
                  after the hero.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {floatingHighlights.map((item) => (
                    <span
                      key={item.title}
                      className="rounded-full border border-stone-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500"
                    >
                      {item.accent} {item.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[720px] overflow-hidden rounded-[38px] border border-stone-200 bg-[#f4f5f1] p-4 sm:p-6">
                <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[3.8rem] font-black uppercase leading-none tracking-[0.32em] text-stone-900/[0.04] sm:text-[5rem] lg:text-[6.5rem]">
                  Fresh Fuel
                </div>
                <div className="pulse-halo absolute left-[6%] top-[8%] h-44 w-44 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
                <div className="pulse-halo absolute bottom-[12%] right-[8%] h-52 w-52 rounded-full bg-[var(--lime)]/18 blur-3xl" />
                <div className="absolute left-6 top-6 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-500 backdrop-blur-sm">
                  Social favorites
                </div>
                <div className="absolute bottom-6 left-6 rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-500 backdrop-blur-sm">
                  Real bowls. No filler.
                </div>

                {floatingHighlights.map((item, index) => (
                  <article
                    key={item.title}
                    className={`absolute rounded-[34px] border border-stone-200 bg-white p-4 text-[#121212] shadow-[0_30px_70px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-2 ${
                      index === 0
                        ? "floating-soft left-[3%] top-[12%] w-[34%] max-w-[250px] rotate-[-5deg]"
                        : index === 1
                          ? "floating-medium left-1/2 top-[16%] z-10 w-[44%] max-w-[360px] -translate-x-1/2"
                          : "floating-slow right-[3%] bottom-[8%] w-[35%] max-w-[260px] rotate-[5deg]"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[28px] bg-[#f5f4ef] ${
                        item.size === "large" ? "aspect-square" : "aspect-[4/5]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 28vw"
                        className="object-contain p-5 transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                          {item.accent}
                        </p>
                        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-stone-950">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
                        Fresh Fuel
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 tracking-[0.06em] text-stone-500">
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1500px] px-8 md:px-16 lg:px-24">
          <Reveal delay={80}>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--brand-red)] md:text-xs">
              Continuous Motion
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-stone-950 md:text-6xl">
              Continuous horizontal motion that keeps the restaurant feeling
              alive.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 tracking-[0.08em] text-stone-500 md:text-base">
              This brings back the side-to-side movement you liked, using only
              the real bowl and kitchen assets so the section feels active
              without turning into filler.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 space-y-4 md:mt-12" delay={180}>
          <ImageMarquee images={marqueeRows[0]} speedClass="marquee-left" />
          <ImageMarquee images={marqueeRows[1]} speedClass="marquee-right" />
        </Reveal>
      </section>

      <section className="border-y border-stone-200 py-20 md:py-28">
        <BowlCarousel />
      </section>

      <section className="relative h-[50vh] overflow-hidden md:h-[72vh]">
        <Image
          src="/photos/Banner3.jpg"
          alt="Fresh ingredients being prepared"
          fill
          sizes="100vw"
          className="slow-pan object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p className="max-w-xl text-center text-[10px] uppercase tracking-[0.42em] text-white md:text-xs">
            Crafted with intention. Built for the camera. Still made to taste
            real.
          </p>
        </div>
      </section>

      <section
        id="menu-section"
        className="bg-[#121212] px-8 py-24 text-white md:px-16 md:py-40 lg:px-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-20 flex items-end justify-between md:mb-28">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-stone-500 md:text-xs">
                Full Menu
              </p>
              <h2 className="font-serif text-4xl leading-tight text-stone-100 md:text-6xl">
                What We Serve
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs leading-relaxed tracking-[0.15em] text-stone-500 md:block">
              Each dish is assembled to order. Allergen notes available on
              request.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-3 lg:gap-20">
            {menuCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-2 font-serif text-2xl text-stone-100 md:text-3xl">
                  {category.title}
                </h3>
                <p className="mb-10 text-xs tracking-[0.15em] text-stone-500">
                  {category.note}
                </p>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-baseline justify-between border-b border-stone-800/50 pb-5 transition-colors duration-300 hover:border-stone-500"
                    >
                      <span className="text-base text-stone-200 transition-colors group-hover:text-white md:text-lg">
                        {item.name}
                      </span>
                      <span className="font-mono text-sm tracking-widest text-stone-500">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] py-20 text-white md:py-28">
        <IngredientStrip />
      </section>

      <section className="border-b border-stone-200 py-24 md:py-40">
        <TestimonialCarousel />
      </section>

      <section className="px-8 py-24 md:px-16 md:py-40 lg:px-24">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 md:text-xs">
              Visit
            </p>
            <h2 className="mb-8 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Hours &<br />
              Location
            </h2>
            <p className="mb-12 max-w-md text-sm leading-relaxed tracking-wide text-stone-500 md:text-base">
              Walk in, call ahead, or reserve online. We seat on a first-come
              basis for parties under four.
            </p>

            <div className="space-y-4">
              {hours.map((hour) => (
                <div
                  key={hour.label}
                  className="flex items-baseline justify-between border-b border-stone-200 pb-4"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                    {hour.label}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-stone-900">
                    {hour.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Image
                src="/photos/Banner2.jpg"
                alt="Inside Fresh Fuel Poke"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-stone-400">
                Address
              </p>
              <p className="text-sm leading-relaxed tracking-wide text-stone-700 md:text-base">
                Central, Hong Kong
                <br />
                Dine-in · Takeaway · Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reserve"
        className="relative flex min-h-[64vh] items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/photos/Banner1.jpg"
            alt="Fresh Fuel Poke restaurant ambiance"
            fill
            sizes="100vw"
            className="slow-pan object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <Reveal
          className="relative z-10 px-8 text-center text-white md:px-16"
          delay={60}
        >
          <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--lime)] md:text-xs">
            Final CTA
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
            Reserve a table before the night gets busy.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 tracking-[0.08em] text-white/72 md:text-base">
            {restaurantInfo.shortTagline}
          </p>
          <div className="mt-10 flex justify-center">
            <ActionButtons
              primaryClassName="rounded-full bg-[var(--brand-red)] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_12px_30px_rgba(207,51,40,0.28)] transition hover:-translate-y-1"
              secondaryClassName="rounded-full bg-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#121212] transition hover:bg-stone-100"
            />
          </div>
        </Reveal>
      </section>

      <RestaurantFooter variant="bold" />
    </main>
  );
}
