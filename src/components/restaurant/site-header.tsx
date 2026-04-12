"use client";

import { startTransition, useEffect, useEffectEvent, useState } from "react";
import { RestaurantLogo } from "./common";

type MenuCategory = {
  title: string;
  note: string;
  items: readonly {
    name: string;
    price: string;
  }[];
};

export function SiteHeader({
  menuCategories,
}: {
  menuCategories: readonly MenuCategory[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState<"menu" | "reserve" | null>(
    null,
  );

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

  const openReserve = () => {
    startTransition(() => {
      setActiveDrawer("reserve");
    });
  };

  const closeDrawer = () => {
    startTransition(() => {
      setActiveDrawer(null);
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 lg:px-10">
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between rounded-full border transition-all duration-300 ${
            isScrolled
              ? "border-stone-200 bg-white/92 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-md md:px-5"
              : "border-white/14 bg-black/18 px-5 py-4 backdrop-blur-sm md:px-7"
          }`}
        >
          <button
            type="button"
            onClick={openMenu}
            className={`rounded-full border px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] transition md:px-6 ${
              isScrolled
                ? "border-stone-300 bg-white text-stone-950 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                : "border-white bg-white text-stone-950 hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            }`}
          >
            Menu
          </button>

          <a href="#top" aria-label="Fresh Fuel Poke home">
            <RestaurantLogo
              className={`transition-all duration-300 ${
                isScrolled ? "w-16 md:w-20" : "w-20 md:w-24"
              }`}
              priority
            />
          </a>

          <button
            type="button"
            onClick={openReserve}
            className={`rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] transition md:px-6 ${
              isScrolled
                ? "bg-[var(--brand-red)] text-white shadow-[0_12px_30px_rgba(207,51,40,0.22)] hover:-translate-y-0.5"
                : "bg-[var(--brand-red)] text-white shadow-[0_12px_30px_rgba(207,51,40,0.28)] hover:-translate-y-0.5"
            }`}
          >
            Reserve
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
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
                      className="flex items-baseline justify-between border-b border-stone-200/80 pb-3"
                    >
                      <span className="text-sm tracking-[0.08em] text-stone-700 md:text-base">
                        {item.name}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-stone-200 pt-6">
            <a
              href="#menu-section"
              onClick={closeDrawer}
              className="rounded-full border border-stone-300 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              Full Menu
            </a>
            <button
              type="button"
              onClick={openReserve}
              className="rounded-full bg-[var(--brand-red)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_12px_30px_rgba(207,51,40,0.18)] transition hover:-translate-y-0.5"
            >
              Reserve
            </button>
          </div>
        </aside>

        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-[520px] overflow-y-auto bg-white px-6 py-6 text-stone-950 shadow-[-30px_0_80px_rgba(0,0,0,0.18)] transition-transform duration-300 md:px-8 ${
            activeDrawer === "reserve" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between gap-6 border-b border-stone-200 pb-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
                Table Booking
              </p>
              <h2 className="mt-3 text-4xl leading-none text-stone-950 md:text-5xl">
                Reserve
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-stone-500">
                A clean booking request for lunch, dinner, or group dining. Fill
                in the details and we will get back to you shortly.
              </p>
            </div>

            <button
              type="button"
              onClick={closeDrawer}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              aria-label="Close booking form"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-2xl border border-stone-200 bg-[#faf8f3] px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950"
                />
              </label>

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Phone
                </span>
                <input
                  type="tel"
                  placeholder="+852"
                  className="mt-3 w-full rounded-2xl border border-stone-200 bg-[#faf8f3] px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Date
                </span>
                <input
                  type="date"
                  className="mt-3 w-full rounded-2xl border border-stone-200 bg-[#faf8f3] px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950"
                />
              </label>

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Time
                </span>
                <select className="mt-3 w-full rounded-2xl border border-stone-200 bg-[#faf8f3] px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950">
                  <option>11:30</option>
                  <option>12:30</option>
                  <option>18:30</option>
                  <option>19:30</option>
                  <option>20:30</option>
                </select>
              </label>

              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                  Guests
                </span>
                <select className="mt-3 w-full rounded-2xl border border-stone-200 bg-[#faf8f3] px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Notes
              </span>
              <textarea
                rows={5}
                placeholder="Dietary notes, seating preference, or special occasion"
                className="mt-3 w-full rounded-[24px] border border-stone-200 bg-[#faf8f3] px-4 py-3 text-sm text-stone-950 outline-none transition focus:border-stone-950"
              />
            </label>

            <div className="rounded-[28px] border border-stone-200 bg-[#faf8f3] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Booking Notes
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Reservations are confirmed manually. For same-day large groups,
                please call the restaurant directly.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                className="rounded-full bg-[var(--brand-red)] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_12px_30px_rgba(207,51,40,0.18)] transition hover:-translate-y-0.5"
              >
                Request Booking
              </button>
              <button
                type="button"
                onClick={closeDrawer}
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </aside>
      </div>
    </>
  );
}
