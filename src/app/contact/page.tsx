import Image from "next/image";
import { Reveal } from "@/components/restaurant/reveal";
import { SiteHeader } from "@/components/restaurant/site-header";

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

export default function ContactPage() {
  return (
    <main className="bg-white text-[#121212]">
      <SiteHeader menuCategories={menuCategories} />

      <section className="relative pt-48 pb-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        <Image
          src="/photos/Banner1.jpg"
          alt="Fresh Fuel Poke restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative mx-auto custom-container">
          <Reveal delay={80}>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 text-white">Contact Us</h1>
            <p className="text-lg text-stone-200 max-w-2xl leading-relaxed">
              Have a question about our menu, catering, or just want to say hi? 
              We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </Reveal>
        </div>
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
