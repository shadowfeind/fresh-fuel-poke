import Image from "next/image";
import { BowlCarousel } from "../../components/design5/bowl-carousel";
import { IngredientStrip } from "../../components/design5/ingredient-strip";
import { TestimonialCarousel } from "../../components/design5/testimonial-carousel";

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
];

const hours = [
  { label: "Mon — Thu", value: "11:00 — 21:30" },
  { label: "Friday", value: "11:00 — 22:30" },
  { label: "Saturday", value: "10:30 — 22:30" },
  { label: "Sunday", value: "10:30 — 21:00" },
];

export default function Design5() {
  return (
    <main className="bg-[#FAFAF8] text-[#121212] selection:bg-stone-200">
      {/* ─── Header ─── */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="flex justify-between items-center px-8 md:px-16 lg:px-24 py-8">
          <a
            href="#menu-section"
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-white/80 hover:text-white transition-colors"
          >
            Menu
          </a>
          <Image
            src="/photos/logo.png"
            alt="Fresh Fuel Poke"
            width={140}
            height={60}
            className="w-24 md:w-32 invert"
            priority
          />
          <a
            href="#reserve"
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-white/80 hover:text-white transition-colors"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/Banner1.jpg"
            alt="Fresh Fuel Poke restaurant spread"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-24">
          <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-[0.88] tracking-tight">
            The Art
            <br />
            of <span className="italic font-light opacity-70">Poke.</span>
          </h1>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <p className="text-sm md:text-base tracking-[0.1em] text-white/60 max-w-md leading-relaxed">
              A refined approach to fresh bowls, elevating everyday sustenance
              into a curated culinary experience.
            </p>
            <a
              href="#reserve"
              className="bg-white text-[#121212] px-10 md:px-14 py-5 uppercase text-[10px] md:text-xs tracking-[0.3em] font-medium hover:bg-stone-100 transition duration-300 shrink-0"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/30" />
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="py-24 md:py-40 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">
                Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.08] text-stone-900 mb-8">
                We source meticulously, preserving the integrity of every
                ingredient.
              </h2>
              <p className="text-sm md:text-base text-stone-500 leading-relaxed max-w-lg tracking-wide">
                Minimal intervention. Precise flavor profiles. Everything is
                built around the ingredient — not around the kitchen. What you
                taste is what was grown.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/photos/Banner2.jpg"
                  alt="Culinary preparation at Fresh Fuel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <p className="absolute -left-4 md:-left-10 bottom-16 uppercase text-[10px] tracking-[0.3em] text-stone-400 rotate-180 [writing-mode:vertical-rl]">
                Daily Sourced
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mt-20 md:mt-32 border-t border-stone-200 pt-12">
            {[
              { number: "12+", label: "Signature bowls" },
              { number: "100%", label: "Fresh daily" },
              { number: "30min", label: "Average delivery" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-serif text-3xl md:text-5xl text-stone-900">
                  {stat.number}
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-stone-400 mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bowl Carousel ─── */}
      <section className="py-20 md:py-32 border-t border-stone-200">
        <BowlCarousel />
      </section>

      {/* ─── Full-width image break ─── */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/photos/Banner3.jpg"
          alt="Fresh ingredients being prepared"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
            Crafted with intention
          </p>
        </div>
      </section>

      {/* ─── Full Menu ─── */}
      <section
        id="menu-section"
        className="py-24 md:py-40 px-8 md:px-16 lg:px-24 bg-[#121212] text-white"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-20 md:mb-28">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">
                Full Menu
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-stone-100 leading-tight">
                What We Serve
              </h2>
            </div>
            <p className="hidden md:block text-xs tracking-[0.15em] text-stone-500 max-w-xs text-right leading-relaxed">
              Each dish is assembled to order. Allergen notes available on
              request.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
            {menuCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="font-serif text-2xl md:text-3xl text-stone-100 mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs tracking-[0.15em] text-stone-500 mb-10">
                  {cat.note}
                </p>
                <div className="space-y-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex justify-between items-baseline border-b border-stone-800/50 pb-5 hover:border-stone-500 transition-colors duration-300"
                    >
                      <span className="text-base md:text-lg text-stone-200 group-hover:text-white transition-colors">
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

      {/* ─── Ingredients ─── */}
      <section className="py-20 md:py-32 bg-[#1a1a1a] text-white">
        <IngredientStrip />
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-28 md:py-44 px-8 md:px-16 lg:px-24 border-b border-stone-200">
        <TestimonialCarousel />
      </section>

      {/* ─── Hours & Location ─── */}
      <section className="py-24 md:py-40 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-400 font-medium mb-8">
              Visit
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight mb-8">
              Hours &<br />
              Location
            </h2>
            <p className="text-sm md:text-base text-stone-500 leading-relaxed tracking-wide max-w-md mb-12">
              Walk in, call ahead, or reserve online. We seat on a first-come
              basis for parties under four.
            </p>

            {/* Hours */}
            <div className="space-y-4">
              {hours.map((h) => (
                <div
                  key={h.label}
                  className="flex justify-between items-baseline border-b border-stone-200 pb-4"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
                    {h.label}
                  </span>
                  <span className="text-sm text-stone-900 font-medium tracking-wide">
                    {h.value}
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
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">
                Address
              </p>
              <p className="text-sm md:text-base text-stone-700 leading-relaxed tracking-wide">
                Central, Hong Kong
                <br />
                Dine-in · Takeaway · Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section
        id="reserve"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/photos/Banner1.jpg"
            alt="Restaurant ambiance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-8 max-w-2xl">
          <h2 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]">
            Join Us
          </h2>
          <p className="text-sm md:text-base tracking-[0.15em] text-white/60 mb-12 leading-relaxed">
            Reserve your table and experience bowls crafted with precision and
            care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="bg-white text-[#121212] px-12 py-5 md:py-6 uppercase text-[10px] md:text-xs tracking-[0.3em] font-medium hover:bg-stone-100 transition duration-300"
            >
              Reserve a Table
            </button>
            <button
              type="button"
              className="border border-white/40 text-white px-12 py-5 md:py-6 uppercase text-[10px] md:text-xs tracking-[0.3em] font-medium hover:bg-white/10 transition duration-300"
            >
              Order Delivery
            </button>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#121212] text-white py-16 md:py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-end">
            {/* Logo & copyright */}
            <div>
              <Image
                src="/photos/logo.png"
                alt="Fresh Fuel Poke"
                width={120}
                height={50}
                className="w-24 md:w-28 invert opacity-60 mb-4"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                © {new Date().getFullYear()} Fresh Fuel Poke
              </p>
            </div>

            {/* Delivery */}
            <div className="md:text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-4">
                Delivery by
              </p>
              <div className="flex md:justify-center gap-4 items-center">
                <Image
                  src="/photos/food%20panda.webp"
                  alt="foodpanda"
                  width={80}
                  height={56}
                  className="w-16 h-auto invert opacity-50"
                />
                <Image
                  src="/photos/keeta.png"
                  alt="Keeta"
                  width={40}
                  height={40}
                  className="w-9 h-auto rounded-lg invert opacity-50"
                />
              </div>
            </div>

            {/* Social */}
            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-4">
                Follow
              </p>
              <div className="flex md:justify-end gap-6">
                <a
                  href="#"
                  className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
