import Image from "next/image";
import { BowlCarousel } from "@/components/design5/bowl-carousel";
import { IngredientStrip } from "@/components/design5/ingredient-strip";
import { TestimonialCarousel } from "@/components/design5/testimonial-carousel";
import { ActionButtons } from "@/components/restaurant/common";
import { restaurantInfo } from "@/components/restaurant/content";
import { HeroCarousel } from "@/components/restaurant/hero-carousel";
import { ImageMarquee } from "@/components/restaurant/image-marquee";
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
          <div className="mx-auto max-w-[1500px] rounded-[44px] border border-stone-200 bg-white px-6 py-8 text-[#121212] shadow-[0_28px_80px_rgba(15,23,42,0.08)] md:px-10 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
              <div className="max-w-xl lg:pb-10">
                <p className="text-[10px] uppercase tracking-[0.32em] text-(--lime) md:text-xs">
                  Fresh Fuel Poke
                </p>
                <h2 className="mt-4 font-(family-name:--font-display) text-5xl italic leading-[0.94] tracking-[-0.03em] text-stone-950 md:text-7xl">
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

              <div className="rounded-[38px] border border-stone-200 bg-[#f4f5f1] p-4 sm:p-6">
                <div className="mb-6 inline-flex rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-stone-500 backdrop-blur-sm lg:absolute lg:left-6 lg:top-6">
                  Our favorites
                </div>

                <div className="space-y-4 lg:hidden">
                  {floatingHighlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[30px] border border-stone-200 bg-white p-4 text-[#121212] shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                    >
                      <div
                        className={`relative overflow-hidden rounded-[24px] bg-[#f5f4ef] ${
                          item.size === "large"
                            ? "aspect-square"
                            : "aspect-[4/5]"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="100vw"
                          className="object-contain p-5"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                            {item.accent}
                          </p>
                          <h3 className="mt-2 font-(family-name:--font-display) text-2xl text-stone-950">
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

                <div className="relative hidden min-h-[720px] overflow-hidden lg:block">
                  <div className="pointer-events-none absolute inset-x-0 top-8 text-center text-[5rem] font-black uppercase leading-none tracking-[0.32em] text-stone-900/4 lg:text-[6.5rem]">
                    Fresh Fuel
                  </div>
                  <div className="pulse-halo absolute left-[6%] top-[8%] h-44 w-44 rounded-full bg-(--brand-red)/20 blur-3xl" />
                  <div className="pulse-halo absolute bottom-[12%] right-[8%] h-52 w-52 rounded-full bg-(--lime)/18 blur-3xl" />

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
                          item.size === "large"
                            ? "aspect-square"
                            : "aspect-[4/5]"
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
                          <h3 className="mt-2 font-(family-name:--font-display) text-2xl text-stone-950">
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

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-[1500px] px-8 md:px-16 lg:px-24">
          <Reveal delay={80}>
            <p className="text-[10px] uppercase tracking-[0.32em] text-(--brand-red) md:text-xs">
              Continuous Motion
            </p>
            <h2 className="mt-4 font-(family-name:--font-display) text-5xl italic leading-[0.95] tracking-[-0.03em] text-stone-950 md:text-7xl">
              Fresh bowls, bright flavors, and kitchen energy in motion.
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
        <Reveal delay={80}>
          <BowlCarousel />
        </Reveal>
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
        <Reveal
          className="absolute inset-0 flex items-center justify-center px-8"
          delay={80}
        >
          <p className="max-w-xl text-center text-[10px] uppercase tracking-[0.42em] text-white md:text-xs">
            Crafted with intention. Built for the camera. Still made to taste
            real.
          </p>
        </Reveal>
      </section>

      <section
        id="menu-section"
        className="bg-[#121212] px-8 py-24 text-white md:px-16 md:py-40 lg:px-24"
      >
        <Reveal className="mx-auto max-w-[1200px]" delay={80}>
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

      <section className="bg-[#121212] py-20 text-white md:py-28">
        <Reveal delay={80}>
          <IngredientStrip />
        </Reveal>
      </section>

      <section className="border-b border-stone-200 py-24 md:py-40">
        <Reveal delay={80}>
          <TestimonialCarousel />
        </Reveal>
      </section>

      <section className="px-8 py-24 md:px-16 md:py-40 lg:px-24">
        <Reveal
          className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-2 lg:gap-24"
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
          <p className="text-[10px] uppercase tracking-[0.32em] text-(--lime) md:text-xs">
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

      <footer className="border-t border-stone-200 bg-[#faf7ef] px-8 py-16 text-stone-950 md:px-16 lg:px-24">
        <Reveal
          className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_0.85fr_0.95fr] lg:items-start"
          delay={80}
        >
          <div>
            <Image
              src="/photos/logo.png"
              alt="Fresh Fuel Poke logo"
              width={160}
              height={77}
              className="h-auto w-28 md:w-36"
            />
            <p className="mt-6 max-w-md text-sm leading-8 tracking-[0.08em] text-stone-600 md:text-base">
              Fresh bowls, bright ingredients, and feel-good meals for dine-in,
              takeaway, and delivery in Central.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                aria-label="Instagram"
                className="flex items-center gap-3 rounded-full border border-stone-300 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.1" />
                  <circle
                    cx="17.4"
                    cy="6.7"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                Instagram
              </button>
              <button
                type="button"
                aria-label="Facebook"
                className="flex items-center gap-3 rounded-full border border-stone-300 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.66c0-.93.25-1.56 1.58-1.56H16.7V3.24c-.3-.04-1.3-.12-2.47-.12-2.45 0-4.13 1.49-4.13 4.24v2.36H7.3v3.2h2.8V21h3.4Z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Visit
            </p>
            <div className="mt-5 space-y-4 rounded-[28px] border border-stone-200 bg-white p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                  Location
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Central, Hong Kong
                  <br />
                  Dine-in · Takeaway · Delivery
                </p>
              </div>
              <div className="h-px bg-stone-200" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                  Hours
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Mon - Thu: 11:00 - 21:30
                  <br />
                  Fri - Sun: 10:30 - 22:30
                </p>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Delivery Partners
            </p>
            <div className="mt-5 rounded-[28px] border border-stone-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                Order through our delivery platforms
              </p>
              <div className="mt-5 flex items-center gap-4">
                <Image
                  src="/photos/food%20panda.webp"
                  alt="foodpanda"
                  width={92}
                  height={65}
                  sizes="92px"
                  className="h-auto w-[82px]"
                />
                <Image
                  src="/photos/keeta.png"
                  alt="Keeta"
                  width={52}
                  height={52}
                  sizes="52px"
                  className="h-auto w-11 rounded-xl"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="mx-auto mt-12 max-w-[1400px] border-t border-stone-200 pt-6"
          delay={160}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            © Copyright Freshfuelpoke 2026
          </p>
        </Reveal>
      </footer>
    </main>
  );
}
