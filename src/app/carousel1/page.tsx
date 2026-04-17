import { GlassHeroCarousel } from "@/components/restaurant/glass-hero-carousel";
import { SiteHeader } from "@/components/restaurant/site-header";

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

const slides = [
  {
    src: "/photos/Banner1.jpg",
    alt: "Fresh Fuel Poke restaurant spread",
    eyebrow: "Signature Bowls",
    title: "Bright bowls, built to order",
    description:
      "Swipe through our banners without cropping. Full images, clear copy, and simple navigation.",
  },
  {
    src: "/photos/Banner2.jpg",
    alt: "Fresh Fuel Poke preparation scene",
    eyebrow: "Fresh Prep",
    title: "Fuel your purpose. Eat with intention",
    description:
      "Crisp veg, clean proteins, and bright sauces that keep every bowl balanced.",
  },
  {
    src: "/photos/Banner3.jpg",
    alt: "Fresh ingredients being prepared",
    eyebrow: "Ingredients",
    title: "Color, crunch, and real taste",
    description:
      "A banner-first carousel that shows the whole photo, not a background crop.",
  },
] as const;

export default function Carousel1Page() {
  return (
    <main className="bg-white text-[#121212]">
      <SiteHeader menuCategories={menuCategories} />

      <GlassHeroCarousel slides={slides} />
    </main>
  );
}
