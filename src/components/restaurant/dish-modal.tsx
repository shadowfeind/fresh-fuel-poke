"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type DishNutrition = {
  calories: number | string;
  protein: number | string;
  fats: number | string;
  carbs: number | string;
  vitC: string;
};

export type DishDetails = {
  name: string;
  image: string;
  description: string;
  subtitle?: string;
  ingredients?: string;
  nutrition?: DishNutrition;
};

type DishModalProps = {
  isOpen: boolean;
  onClose: () => void;
  bowl: DishDetails | null;
};

export function DishModal({ isOpen, onClose, bowl }: DishModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !bowl || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      <div 
        className="bg-white border border-stone-100 shadow-2xl w-full max-w-6xl max-h-[95vh] relative flex flex-col rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-5 md:right-5 z-20 bg-white/60 backdrop-blur-md rounded-full text-stone-400 hover:text-stone-900 transition-colors p-2 shadow-sm md:shadow-none md:bg-transparent"
          aria-label="Close modal"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row w-full overflow-y-auto p-6 md:p-14">
          {/* Left Side: Image and Subtitle */}
          <div className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-300 pb-8 md:pb-0 md:pr-14 shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-144 md:h-144 mb-6 md:mb-8">
              <Image
                src={bowl.image}
                alt={bowl.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 pt-6 md:pt-0 md:pl-10 flex flex-col justify-center">
          <h2 className="text-[32px] font-medium text-stone-800 mb-3 font-sans leading-tight">{bowl.name}</h2>
          {bowl.description && (
            <p className="text-stone-400 mb-3 leading-snug text-[17px] font-medium italic">
              {bowl.description}
            </p>
          )}
          <p className="text-stone-400 mb-5 leading-snug text-[17px]">
            {bowl.ingredients}
          </p>

          <div className="mb-6 md:mb-8">
            <h3 className="text-stone-400 underline decoration-stone-400 underline-offset-[6px] mb-3 md:mb-4 text-[16px] md:text-[17px] font-medium">
              Nutrients Facts
            </h3>
            <div className="space-y-0.5 text-[14px] md:text-[15px] font-medium text-stone-400 tracking-wide uppercase">
              <p>CALORIES {bowl.nutrition?.calories || "--"}</p>
              <p>PROTEIN {bowl.nutrition?.protein || "--"}</p>
              <p>FATS {bowl.nutrition?.fats || "--"}</p>
              <p>CARBS {bowl.nutrition?.carbs || "--"}</p>
              <p>VIT C {bowl.nutrition?.vitC || "--"}</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 sm:gap-4 mt-auto pt-4 md:pt-0">
            <button className="flex-1 sm:flex-none bg-[#e7cd61] hover:bg-[#d6bc53] text-stone-900 font-semibold py-1 px-3 md:py-1.5 md:px-4 rounded shadow-sm transition-colors text-[14px] md:text-[15px]">
              Dine-In
            </button>
            <button className="flex-1 sm:flex-none bg-[#e7cd61] hover:bg-[#d6bc53] text-stone-900 font-semibold py-1 px-3 md:py-1.5 md:px-4 rounded shadow-sm transition-colors text-[14px] md:text-[15px]">
              Delivery
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );

  return createPortal(modalContent, document.body);
}
