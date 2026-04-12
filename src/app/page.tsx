import Image from "next/image";
import { HeroSlider } from "../components/hero-slider";
import { MenuCarousel } from "../components/menu-carousel";

const navigationItems = [
  "Home",
  "About Us",
  "Menus",
  "Bowls & Delivery",
  "Catering Service",
  "Contact Us",
];

const heroSlides = [
  {
    image: "/photos/Banner1.jpg",
    alt: "Fresh Fuel Poke signature bowl spread",
  },
  {
    image: "/photos/Banner2.jpg",
    alt: "Close-up of salmon poke ingredients",
  },
  {
    image: "/photos/Banner3.jpg",
    alt: "Prepared ingredients for poke bowls",
  },
];

const bowlItems = [
  {
    name: "Bliss",
    image: "/photos/Bliss.png",
    accent: "Best Seller",
    calories: "Balanced Fuel",
    protein: "Protein Forward",
    description:
      "A colorful salmon bowl with avocado, edamame, greens, and a clean finish.",
  },
  {
    name: "Low Calories",
    image: "/photos/Low%20Calories.png",
    accent: "Light Favorite",
    calories: "Low Calorie",
    protein: "Clean Finish",
    description:
      "Built for lighter cravings with bright crunch, lean toppings, and a refreshing bite.",
  },
  {
    name: "Cardio Crunch",
    image: "/photos/Cardio%20Crunch.png",
    accent: "Crunchy & Fresh",
    calories: "Midday Energy",
    protein: "Texture Rich",
    description:
      "A lively bowl with crisp vegetables, layered crunch, and bold dressing notes.",
  },
  {
    name: "Fuel Up Energy",
    image: "/photos/Fuel%20Up%20Energy.png",
    accent: "Power Bowl",
    calories: "High Energy",
    protein: "Recovery Ready",
    description:
      "A fuller bowl for post-work fuel with vibrant toppings and satisfying depth.",
  },
];

const ingredientItems = [
  { name: "Salmon Fillet", image: "/photos/Salmon%20Fillet.png" },
  { name: "Chicken Breast", image: "/photos/Chicken%20Breast.png" },
  { name: "Tofu", image: "/photos/Tofu.png" },
  { name: "Avocado", image: "/photos/Avacado.png" },
  { name: "Kimchi", image: "/photos/Kimchi.png" },
  { name: "Ginger Miso", image: "/photos/Giner%20Miso.png" },
  { name: "Honey Lime", image: "/photos/Honey%20Lime.png" },
  { name: "Ponzu Tajin", image: "/photos/Ponzu%20Tajin.png" },
];

const featuredBowls = [
  {
    name: "Bliss",
    image: "/photos/Bliss.png",
    benefits: ["Inflammation Control", "Metabolic Support", "Muscle Recovery"],
    ingredients: [
      "Quinoa",
      "Chicken",
      "Spinach",
      "Kale",
      "Edamame",
      "Carrot",
      "Cucumber",
      "Pineapple",
      "Avocado",
      "Sesame Seed",
      "Ginger",
      "Seaweed",
    ],
  },
  {
    name: "Low Calorie",
    image: "/photos/Low%20Calories.png",
    benefits: ["Big Portion", "Low Calories", "Satiety", "Metabolism Booster"],
    ingredients: [
      "Spinach",
      "Salmon",
      "Purple Cabbage",
      "Ginger",
      "Sesame Oil",
      "Sesame Seed",
    ],
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="relative z-30 border-b border-stone-200/80 bg-(--paper) shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="mx-auto  px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/photos/logo.png"
                  alt="Fresh Fuel Poke logo"
                  width={160}
                  height={77}
                  preload
                  className="h-auto w-28 sm:w-36"
                />
              </div>
              <button
                type="button"
                className="rounded-full bg-(--brand-red) px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white xl:hidden"
              >
                Order Today
              </button>
            </div>

            <div className="flex flex-col gap-3 xl:items-end">
              <div className="hidden items-center gap-2 lg:flex">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full p-4 text-sm font-semibold text-stone-800 transition hover:border-stone-900 hover:bg-stone-50"
                  >
                    {item}
                  </button>
                ))}
                <button
                  type="button"
                  className="ml-2 rounded-full bg-(--brand-red) px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white transition hover:translate-y-[-2px]"
                >
                  Order Today
                </button>
              </div>

              <div className="flex flex-wrap gap-2 lg:hidden">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-[90svh] overflow-hidden bg-stone-950 text-white">
        <HeroSlider slides={heroSlides} />
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10">
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-(--butter) opacity-70 blur-3xl" />
        <div className="absolute -left-24 top-48 h-64 w-64 rounded-full bg-(--peach) opacity-[0.45] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-center">
          <div className="relative min-h-[420px]">
            <div className="absolute inset-x-0 top-0 h-[82%] rounded-[56px] bg-white shadow-[0_26px_90px_rgba(33,26,12,0.08)]" />
            <div className="absolute left-4 top-6 h-[70%] w-[72%] overflow-hidden rounded-[48px] rounded-br-[180px]">
              <Image
                src="/photos/Banner2.jpg"
                alt="Fresh ingredients prepared for poke bowls"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-(--butter) sm:h-72 sm:w-72" />
            <div className="absolute right-10 top-10 w-36 rounded-full border-8 border-white bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:w-44">
              <Image
                src="/photos/Fuel%20Up%20Energy.png"
                alt="Fuel Up Energy poke bowl"
                width={260}
                height={264}
                sizes="176px"
                className="h-auto w-full rounded-full"
              />
            </div>
          </div>

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--brand-red)">
              Our Story
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-stone-900 sm:text-5xl">
              Healthy should still feel generous, fresh, and craveable.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-700 sm:text-lg">
              Fresh Fuel Poke serves bright, satisfying bowls built with fresh
              proteins, crisp vegetables, and house-made sauces that keep every
              bite balanced and full of flavor.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-700 sm:text-lg">
              Whether you are stopping in for lunch, ordering dinner, or feeding
              a group, the menu is built to feel clean, filling, and easy to
              come back to.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Flavor
                </p>
                <p className="mt-3 text-lg font-semibold text-stone-950">
                  Bright sauces and contrast-driven toppings
                </p>
              </div>
              <div className="rounded-[28px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Speed
                </p>
                <p className="mt-3 text-lg font-semibold text-stone-950">
                  Lunch-ready service and delivery-first clarity
                </p>
              </div>
              <div className="rounded-[28px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">
                  Flexibility
                </p>
                <p className="mt-3 text-lg font-semibold text-stone-950">
                  Bowls, combo sets, and catering trays for groups
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/70 bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--brand-red)">
                Signature Menu
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-stone-950 sm:text-5xl">
                The bowls our guests come back for.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
                From lighter salmon bowls to fuller post-workout favorites,
                every signature dish is built fresh to order and easy to enjoy
                any time of day.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-full border border-stone-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-stone-900 transition hover:border-stone-900"
              >
                Fresh Daily
              </button>
              <button
                type="button"
                className="rounded-full bg-stone-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:translate-y-[-2px]"
              >
                Catering Ready
              </button>
            </div>
          </div>
          <div className="mt-12">
            <MenuCarousel bowls={bowlItems} />
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--brand-red)]">
              Ingredients
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-stone-950 sm:text-5xl">
              Ingredients people recognize, layered with sauces that keep things
              lively.
            </h2>
            <p className="mt-6 text-base leading-8 text-stone-700 sm:text-lg">
              We keep the ingredient list simple: quality proteins, fresh
              produce, and bold sauces that add brightness without covering up
              the bowl underneath.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Lean proteins",
                "Colorful toppings",
                "House dressings",
                "Catering trays",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {ingredientItems.map((ingredient, index) => (
              <div
                key={ingredient.name}
                className="group rounded-[30px] bg-white p-5 shadow-[0_14px_45px_rgba(0,0,0,0.06)] transition duration-300 hover:translate-y-[-6px]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#fffdf6_0%,#f7f1dd_100%)]">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 18vw"
                    className="object-contain p-3 transition duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-bold uppercase tracking-[0.22em] text-stone-500">
                  {ingredient.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {featuredBowls.map((bowl) => (
            <article
              key={bowl.name}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-3xl font-bold uppercase tracking-[0.2em] text-[#c88005] sm:text-4xl">
                {bowl.name}
              </h3>
              <div className="relative mt-8 aspect-square w-full max-w-[340px] sm:max-w-[420px]">
                <Image
                  src={bowl.image}
                  alt={bowl.name}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 420px, 32vw"
                  className="object-contain drop-shadow-[0_18px_40px_rgba(112,124,151,0.28)]"
                />
              </div>
              <div className="mt-8 max-w-md space-y-6 text-[#4f6877]">
                <div>
                  <p className="text-2xl font-medium tracking-[0.08em]">
                    Benifits:
                  </p>
                  <p className="mt-2 text-xl leading-9 tracking-[0.08em]">
                    {bowl.benefits.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-medium tracking-[0.08em]">
                    Key Ingredients:
                  </p>
                  <p className="mt-2 text-xl leading-9 tracking-[0.08em]">
                    {bowl.ingredients.join(", ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[var(--lime)] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:items-end">
          <div className="flex flex-col items-start gap-4 md:justify-self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/95">
              Follow Us
            </p>
            <button
              type="button"
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/90 bg-transparent transition hover:bg-white/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-8 w-8"
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
            </button>
          </div>

          <div className="md:justify-self-center md:self-end">
            <p className="text-center text-sm font-semibold tracking-[0.18em] text-white/95">
              ©Copyright Freshfuelpoke 2026
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end md:justify-self-end">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/95">
              Delivery Service By
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/photos/food%20panda.webp"
                alt="foodpanda"
                width={92}
                height={65}
                sizes="92px"
                className="h-auto w-[84px]"
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
      </footer>
    </main>
  );
}
