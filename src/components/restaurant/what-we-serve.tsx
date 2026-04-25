"use client";

import Image from "next/image";
import { useState } from "react";
import { DishModal, type DishDetails } from "./dish-modal";

type MenuItem = {
  readonly name: string;
  readonly price?: string;
};

type MenuCategory = {
  readonly title: string;
  readonly note?: string;
  readonly items: readonly MenuItem[];
};

export function WhatWeServe({ menuCategories }: { menuCategories: readonly MenuCategory[] }) {
  const [selectedItem, setSelectedItem] = useState<DishDetails | null>(null);

  const handleItemClick = (item: MenuItem) => {
    // Put dummy image and data for now when an item is clicked
    setSelectedItem({
      name: item.name,
      image: "/photos/Cardio%20Crunch.png",
      description: "A freshly prepared dish made to order with our finest ingredients and signature bold flavors.",
      subtitle: "Fresh & Healthy",
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
                      className="what-we-serve-item cursor-pointer hover:text-stone-300 transition-colors"
                      onClick={() => handleItemClick(item)}
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
