import { BlurHeroCarousel } from "@/components/restaurant/blur-hero-carousel";
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
    bannerSrc: "/photos/Banner1.jpg",
    bannerAlt: "Fresh Fuel Poke restaurant spread",
    dishSrc: "/photos/Bliss.png",
    dishAlt: "Bliss bowl",
    eyebrow: "Signature Dishes",
    title: ["Signature", "Bowls"] as const,
    accent: "made fresh.",
    description:
      "Our most-loved bowls, built to order with vibrant toppings and house sauces.",
  },
  {
    bannerSrc: "/photos/Banner2.jpg",
    bannerAlt: "Fresh Fuel Poke preparation scene",
    dishSrc: "/photos/Meal%20Set.png",
    dishAlt: "Meal set",
    eyebrow: "Fresh energy",
    title: ["Fresh", "Prep"] as const,
    accent: "Fuel your purpose. Eat with intention",
    description:
      "Clean prep, quick assembly, and bright flavors that still feel generous.",
  },
  {
    bannerSrc: "/photos/Banner3.jpg",
    bannerAlt: "Fresh ingredients being prepared",
    dishSrc: "/photos/Low%20Calories.png",
    dishAlt: "Low Calorie bowl",
    eyebrow: "Fresh ingredients",
    title: ["Bright", "Ingredients"] as const,
    accent: "real taste.",
    description:
      "A blurred ambient background with animated copy and a featured dish that floats in.",
  },
] as const;

export default function Carousel2Page() {
  return (
    <main className="bg-white text-[#121212]">
      <SiteHeader menuCategories={menuCategories} />

      <BlurHeroCarousel slides={slides} />
    </main>
  );
}
