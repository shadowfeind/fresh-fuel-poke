import Image from "next/image";
import { BowlCarousel } from "@/components/design5/bowl-carousel";
import { HeroCarousel } from "@/components/restaurant/hero-carousel";
import { Reveal } from "@/components/restaurant/reveal";
import { SiteHeader } from "@/components/restaurant/site-header";

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

const heroSlides = [
  {
    src: "/photos/Banner1.jpg",
    alt: "Fresh Fuel Poke restaurant spread",
    label: "Signature Dishes",
  },
  {
    src: "/photos/Banner2.jpg",
    alt: "Fresh Fuel Poke preparation scene",
    label: "Fresh energy",
  },
  {
    src: "/photos/Banner3.jpg",
    alt: "Fresh ingredients being prepared",
    label: "Fresh prep",
  },
] as const;

export default function Design2Page() {
  return (
    <main className="bg-white text-[#121212]">
      <SiteHeader menuCategories={menuCategories} />

      <HeroCarousel
        slides={heroSlides}
        eyebrow="Bold & Trendy"
        title={["Bowls", "Built"]}
        accent="for the feed."
        description="Freshly prepared poke bowls, vibrant toppings, and feel-good meals made for lunch runs, dinner cravings, and easy group orders."
      />

      <section className="px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
        <Reveal delay={80}>
          <div className="mx-auto max-w-375 bg-white px-0 py-0 text-[#121212] md:px-10 md:py-12 lg:rounded-lg lg:border lg:border-stone-200 lg:px-10 lg:py-12 lg:shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
              <div className="max-w-xl py-2 md:px-0 md:py-0 lg:pb-10">
                <h2 className="mt-4 font-serif text-5xl  leading-[0.94] tracking-[-0.03em] text-stone-950 md:text-7xl">
                  Our Story
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-8 tracking-[0.08em] text-stone-600 md:text-base">
                  Fresh Fuel Poke was born from a simple idea that fast food
                  does not have to be junk food.We saw a world of people on the
                  go, striving to be their best but lacking access to meals that
                  were both convenient and genuinely nourishing.We bridge that
                  gap. We bring the vibrant, fresh fla-vour of the Pacific to
                  the heart of the city, offering a fuel stop for modern life.
                  We aim to be the world's leading fresh, fast cau-sual brand by
                  making vibrant, nutrient dense faad thp most accessible,
                  appealing, delicious and exciting choice to fuel modern,
                  active life-styles.
                </p>
              </div>

              <div className="hidden rounded-lg border border-stone-200 bg-[#f4f5f1] p-4 sm:p-6 lg:block">
                <div className="relative hidden min-h-180 overflow-hidden lg:block">
                  <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[5rem] font-black uppercase leading-none tracking-[0.32em] text-stone-900/4 lg:text-[6.5rem]">
                    Fresh Fuel
                  </div>
                  <div className="pulse-halo absolute left-[6%] top-[8%] h-44 w-44 rounded-full bg-(--brand-red)/20 blur-3xl" />
                  <div className="pulse-halo absolute bottom-[12%] right-[8%] h-52 w-52 rounded-full bg-(--lime)/18 blur-3xl" />

                  {floatingHighlights.map((item, index) => (
                    <article
                      key={item.title}
                      className={`absolute rounded-lg border border-stone-200 bg-white p-4 text-[#121212] shadow-[0_30px_70px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-2 ${
                        index === 0
                          ? "floating-soft left-[3%] top-[12%] w-[34%] max-w-62.5 rotate-[-5deg]"
                          : index === 1
                            ? "floating-medium left-1/2 top-[16%] z-10 w-[44%] max-w-90 -translate-x-1/2"
                            : "floating-slow right-[3%] bottom-[8%] w-[35%] max-w-65 rotate-[5deg]"
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden rounded-md bg-[#f5f4ef] ${
                          item.size === "large" ? "aspect-square" : "aspect-4/5"
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
                          <h3 className="mt-2 font-serif text-2xl text-stone-950">
                            {item.title}
                          </h3>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-(--brand-red)">
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
          </div>
        </Reveal>
      </section>

      <section className="border-y border-stone-200 py-20 md:py-28">
        <Reveal delay={80}>
          <BowlCarousel />
        </Reveal>
      </section>

      <section
        id="menu-section"
        className="bg-[#121212] px-8 py-24 text-white md:px-16 md:py-40 lg:px-24"
      >
        <Reveal className="mx-auto max-w-300" delay={80}>
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
        </Reveal>
      </section>

      <section className="px-8 py-24 md:px-16 md:py-40 lg:px-24">
        <Reveal
          className="mx-auto grid max-w-300 gap-16 lg:grid-cols-2 lg:gap-24"
          delay={80}
        >
          <div>
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 md:text-xs">
              Visit
            </p>
            <h2 className="mb-8 font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Hours &<br />
              Location
            </h2>
            <p className="mb-12 max-w-md text-sm leading-relaxed tracking-wide text-stone-500 md:text-base">
              Walk in, call ahead, or order for delivery. We seat on a
              first-come basis for parties under four.
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
            <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
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
        </Reveal>
      </section>
    </main>
  );
}
