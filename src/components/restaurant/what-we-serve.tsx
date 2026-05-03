"use client";

import Image from "next/image";
import { useState } from "react";
import { DishModal, type DishDetails } from "./dish-modal";

import { bowls } from "@/components/design5/bowl-carousel";

type MenuItem = {
  readonly name: string;
  readonly price?: string;
};

type MenuCategory = {
  readonly title: string;
  readonly note?: string;
  readonly items: readonly MenuItem[];
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

export function WhatWeServe({ menuCategories }: { menuCategories: readonly MenuCategory[] }) {
  const [selectedItem, setSelectedItem] = useState<DishDetails | null>(null);

  const handleItemClick = (item: MenuItem, categoryTitle: string) => {
    // Check if this item exists in our signature bowls
    const signatureBowl = bowls.find(b => b.name.toLowerCase() === item.name.toLowerCase());

    if (signatureBowl) {
      setSelectedItem({
        ...signatureBowl as any,
        price: item.price || signatureBowl.price,
        isSignature: true
      });
      return;
    }

    // Resolve image based on category
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

  return (
    <>
      <DishModal 
        isOpen={selectedItem !== null} 
        onClose={() => setSelectedItem(null)} 
        bowl={selectedItem} 
      />
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
                    <li 
                      key={item.name} 
                      className="what-we-serve-item cursor-pointer"
                      onClick={() => handleItemClick(item, category.title)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
