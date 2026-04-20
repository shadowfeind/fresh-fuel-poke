import Image from "next/image";
import { BowlCarousel } from "@/components/design5/bowl-carousel";
import { HeroCarousel } from "@/components/restaurant/hero-carousel";
import { Reveal } from "@/components/restaurant/reveal";
import { SiteHeader } from "@/components/restaurant/site-header";

const floatingHighlights = [
  {
    title: "Precision Prep",
    image: "/photos/our-story-1.jpg",
    note: "Ingredients are carefully weighed to guarantee perfect nutritional balance.",
    accent: "Balance",
    size: "small",
    position: "right center",
  },
  {
    title: "Expert Cuts",
    image: "/photos/our-story-2.jpg",
    note: "Sized and sliced with intention to deliver the ultimate texture in every bite.",
    accent: "Texture",
    size: "large",
  },
  {
    title: "Peak Freshness",
    image: "/photos/our-story-3.jpg",
    note: "Preserved and stored in optimal conditions so every bowl stays crisp and bold.",
    accent: "Quality",
    size: "medium",
  },
] as const;

const menuCategories = [
  {
    title: "Signature Bowls",
    note: "House bowls built for balance.",
    items: [
      { name: "Signature Bowl", price: "" },
      { name: "Cardio Crunch", price: "" },
      { name: "Fuel up Energy", price: "" },
      { name: "Gut Guardian", price: "" },
      { name: "Neuro Fuel", price: "" },
      { name: "Muscle Recovery", price: "" },
      { name: "Immunity Booster", price: "" },
    ],
  },
  {
    title: "Add On Side Dish",
    note: "Extra protein, fresh mix-ins, and classic sides.",
    items: [
      { name: "Tofu", price: "" },
      { name: "Apple Pineapple Mix", price: "" },
      { name: "Salmon Fillet", price: "" },
      { name: "Avocado", price: "" },
      { name: "Chicken Breast", price: "" },
      { name: "Kimchi", price: "" },
    ],
  },
  {
    title: "Drinks",
    note: "Fresh mixes and house blends.",
    items: [
      { name: "12.8 Plum Soda", price: "" },
      { name: "Classic", price: "" },
      { name: "Spicy Flush", price: "" },
      { name: "Coconut Water", price: "" },
      { name: "Cold Brew", price: "" },
      { name: "Metabolism Booster", price: "" },
      { name: "Matchaka Coconut", price: "" },
      { name: "Aqua Panna Still water", price: "" },
      { name: "S. Pellegrino Sparkling Water", price: "" },
      { name: "Homemade Lemonade", price: "" },
    ],
  },
  {
    title: "Sauce Options",
    note: "Our house-made dressings.",
    items: [
      { name: "Ginger Miso", price: "" },
      { name: "Honey Lime", price: "" },
      { name: "Ponzu Tajin", price: "" },
      { name: "Turmeric", price: "" },
      { name: "Coco", price: "" },
    ],
  },
] as const;

const hours = [
  { label: "SUN - MON", value: "10:00 am - 4:00 pm (Dine-in)" },
  { label: "SUN - MON", value: "10:00 am - 4:00 pm (Pickup or Delivery)" },
] as const;

const heroSlides = [
  {
    src: "/photos/Banner1.jpg",
    alt: "Fresh Fuel Poke restaurant spread",
    label: "Signature Dishes",
    title: ["Signature", "Bowls"] as const,
    accent: "made fresh.",
    description:
      "Our most-loved bowls, built to order with vibrant toppings and house sauces.",
  },
  {
    src: "/photos/Banner2.jpg",
    alt: "Fresh Fuel Poke preparation scene",
    label: "Fresh energy",
    title: ["Fuel your purpose"] as const,
    accent: "Eat with intention",
    description:
      "Crisp veg, clean proteins, and bright sauces prepped fast so your bowl stays bold.",
  },
  {
    src: "/photos/Banner3.jpg",
    alt: "Fresh ingredients being prepared",
    label: "Fresh prep",
    title: ["Bright", "Ingredients"] as const,
    accent: "real taste.",
    description:
      "Color, crunch, and balance from simple ingredients that still feel generous.",
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
          <div className="mx-auto custom-container bg-white px-0 py-0 text-[#121212] md:px-10 md:py-12 lg:rounded-lg lg:border lg:border-stone-200 lg:px-10 lg:py-12 lg:shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
              <div className="max-w-xl py-2 md:px-0 md:py-0 lg:pb-10">
                <h2 className="mt-4 font-serif text-4xl leading-[0.94] tracking-[-0.03em] text-stone-950 md:text-5xl">
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
                          className="object-cover transition duration-500 hover:scale-105"
                          style={{
                            objectPosition: (item as any).position || "center",
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="font-serif text-2xl text-stone-950">
                          {item.title}
                        </h3>
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

      <section className="border-t border-stone-200 py-20 md:py-28">
        <Reveal delay={80}>
          <BowlCarousel />
        </Reveal>
      </section>

      <section
        id="menu-section"
        className="what-we-serve-section"
      >
        <Reveal delay={80}>
          <div className="what-we-serve-wrapper">
            <Image
              src="/photos/banner.jpg"
              alt="Fresh Fuel Poke bowls"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

            <div className="what-we-serve-overlay mx-auto custom-container">
              <h2 className="what-we-serve-title">What We Serve</h2>

              <div className="what-we-serve-grid">
                {menuCategories.map((category) => (
                  <div key={category.title} className="what-we-serve-column">
                    <h3 className="what-we-serve-category">{category.title}</h3>
                    <ul className="what-we-serve-list">
                      {category.items.map((item) => (
                        <li key={item.name} className="what-we-serve-item">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-8 py-24 md:px-16 md:py-40 lg:px-24">
        <Reveal
          className="mx-auto grid custom-container gap-16 lg:grid-cols-2 lg:gap-24"
          delay={80}
        >
          <div>
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 md:text-xs">
              Visit
            </p>
            <h2 className="mb-8 font-serif text-3xl leading-tight text-stone-900 md:text-4xl">
              Hours &<br />
              Location
            </h2>
            <p className="mb-12 max-w-md text-sm leading-relaxed tracking-wide text-stone-500 md:text-base">
              Walk-in, call ahead, or order for delivery. We also arrange for
              party take away service on prior booking.
            </p>

            <div className="space-y-4">
              {hours.map((hour) => (
                <div
                  key={`${hour.label}-${hour.value}`}
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

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f5f1] text-stone-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                    Location
                  </p>
                  <p className="text-sm font-medium leading-relaxed tracking-wide text-stone-800">
                    G/F, 19 Amoy Street
                    <br />
                    Wanchai, Hong Kong
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f5f1] text-stone-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                    Contact
                  </p>
                  <p className="text-sm font-medium leading-relaxed tracking-wide text-stone-800">
                    Tel: 2345 6786
                    <br />
                    WhatsApp: 5674 6533
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-stone-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <iframe
                title="Fresh Fuel Poke Location Map"
                width="100%"
                height="100%"
                className="absolute inset-0 border-0"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=19%20Amoy%20Street,%20Wanchai,%20Hong%20Kong&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
