"use client";

import { startTransition, useEffect, useState } from "react";

export function RootMobileMenu({ items }: { items: readonly string[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMenu = () => {
    startTransition(() => {
      setOpen((current) => !current);
    });
  };

  const closeMenu = () => {
    startTransition(() => {
      setOpen(false);
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-(--brand-red) text-white shadow-[0_10px_24px_rgba(207,51,40,0.24)] xl:hidden"
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-70 transition xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close navigation menu"
        />

        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-[320px] bg-(--paper) px-5 py-5 shadow-[-18px_0_40px_rgba(0,0,0,0.16)] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-500">
              Menu
            </p>
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-900"
              aria-label="Close menu"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {items.map((item) => (
              <button
                key={item}
                type="button"
                onClick={closeMenu}
                className="rounded-full border border-stone-300 bg-white px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-stone-700"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={closeMenu}
            className="mt-6 w-full rounded-full bg-(--brand-red) px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-white"
          >
            Order Today
          </button>
        </aside>
      </div>
    </>
  );
}
