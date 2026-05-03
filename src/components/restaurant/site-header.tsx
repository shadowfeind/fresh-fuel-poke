"use client";

import Link from "next/link";
import { startTransition, useEffect, useEffectEvent, useState } from "react";
import { RestaurantLogo } from "./common";
import { DishModal, type DishDetails } from "./dish-modal";

import { bowls } from "@/components/design5/bowl-carousel";

type MenuCategory = {
  readonly title: string;
  readonly note: string;
  readonly items: readonly {
    readonly name: string;
    readonly price: string;
  }[];
};

const addOnImages: Record<string, string> = {
  "Salmon Fillet": "/photos/Add-On/Salmon%20Fillet.png",
  "Chicken Breast": "/photos/Add-On/Chicken%20Breast.png",
  "Tofu": "/photos/Add-On/Tofu.png",
  "Kimchi": "/photos/Add-On/Kimchi.png",
  "Avocado": "/photos/Add-On/Avacado.png",
  "Apple & Pineapple Mix": "/photos/Add-On/Apple%20%26%20Pineapple%20Mix.png",
};

const sauceImages: Record<string, string> = {
  "Ginger Miso": "/photos/Sauce/Giner%20Miso.png",
  "Honey Lime": "/photos/Sauce/Honey%20Lime.png",
  "Ponzu Tajin": "/photos/Sauce/Ponzu%20Tajin.png",
  "Turmeric Coco": "/photos/Sauce/Turmeric%20CCoco.png",
};

export function SiteHeader({
  menuCategories,
}: {
  menuCategories: readonly MenuCategory[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState<"menu" | null>(null);
  const [selectedItem, setSelectedItem] = useState<DishDetails | null>(null);

  const handleItemClick = (item: { name: string; price: string }, categoryTitle: string) => {
    // Check if this item exists in our signature bowls
    const signatureBowl = bowls.find(
      (b) => b.name.toLowerCase() === item.name.toLowerCase(),
    );

    if (signatureBowl) {
      setSelectedItem({ ...signatureBowl as any, price: item.price || signatureBowl.price, isSignature: true });
      return;
    }

    let image = "/photos/Cardio%20Crunch.png";
    if (categoryTitle === "Add On Side Dish" && addOnImages[item.name]) {
      image = addOnImages[item.name];
    } else if (categoryTitle === "Sauce Options" && sauceImages[item.name]) {
      image = sauceImages[item.name];
    }

    setSelectedItem({
      name: item.name,
      image,
      description: "",
      ingredients: "",
      price: item.price,
      isSignature: false,
      category: categoryTitle === "Sauce Options" ? "sauce" : undefined,
    });
  };

  const updateScrolled = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, [updateScrolled]);

  useEffect(() => {
    document.body.style.overflow = activeDrawer ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDrawer]);

  const openMenu = () => {
    startTransition(() => {
      setActiveDrawer("menu");
    });
  };

  const closeDrawer = () => {
    startTransition(() => {
      setActiveDrawer(null);
    });
  };

  return (
    <>
      <DishModal 
        isOpen={selectedItem !== null} 
        onClose={() => setSelectedItem(null)} 
        bowl={selectedItem} 
      />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-16 lg:px-24">
        <div
          className={`mx-auto flex custom-container items-center justify-between rounded-lg border transition-all duration-300 ${
            isScrolled
              ? "border-stone-200 bg-white/92 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-md md:px-5"
              : "border-white/14 bg-black/18 px-5 py-4 backdrop-blur-sm md:px-7"
          }`}
        >
          <button
            type="button"
            onClick={openMenu}
            className={`rounded-md border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] transition md:px-6 ${
              isScrolled
                ? "border-stone-300 bg-white text-stone-950 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                : "border-white bg-white text-stone-950 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            }`}
          >
            Menu
          </button>

          <Link href="/" aria-label="Fresh Fuel Poke home">
            <RestaurantLogo
              className={`transition-all duration-300 ${
                isScrolled ? "w-16 md:w-20" : "w-20 md:w-24"
              }`}
              priority
            />
          </Link>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className={`rounded-md bg-[var(--brand-red)] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_12px_30px_rgba(207,51,40,0.22)] transition md:px-6 ${
              isScrolled ? "opacity-65" : "opacity-70"
            } cursor-not-allowed`}
          >
            Order
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition ${
          activeDrawer ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!activeDrawer}
      >
        <button
          type="button"
          onClick={closeDrawer}
          className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            activeDrawer ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close drawer"
        />

        <aside
          className={`absolute left-0 top-0 h-full w-full max-w-[520px] overflow-y-auto bg-[#f8f4eb] px-6 py-6 text-stone-950 shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-transform duration-300 md:px-8 ${
            activeDrawer === "menu" ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between gap-6 border-b border-stone-200 pb-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Fresh Fuel Poke
              </p>
              <h2 className="mt-3 text-4xl leading-none text-stone-950 md:text-5xl">
                Menu
              </h2>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-stone-300 bg-white transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-8 space-y-8">
            {menuCategories.map((category) => (
              <section key={category.title}>
                <div className="border-b border-stone-200 pb-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-400">
                    {category.note}
                  </p>
                  <h3 className="mt-3 text-2xl text-stone-950 md:text-3xl">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-4 space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between border-b border-stone-200/80 pb-3 cursor-pointer group"
                      onClick={() => handleItemClick(item, category.title)}
                    >
                      <span className="text-sm tracking-[0.08em] text-stone-700 md:text-base group-hover:text-stone-950 transition-colors">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-stone-200 pt-6">
            <Link
              href="#menu-section"
              onClick={closeDrawer}
              className="rounded-md border border-stone-300 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              Full Menu
            </Link>
            <Link
              href="/contact"
              onClick={closeDrawer}
              className="rounded-md border border-stone-300 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              Contact
            </Link>
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="cursor-not-allowed rounded-md bg-[var(--brand-red)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white opacity-65 shadow-[0_12px_30px_rgba(207,51,40,0.18)]"
            >
              Order
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
