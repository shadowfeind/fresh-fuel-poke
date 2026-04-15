import Image from "next/image";
import { Reveal } from "./reveal";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#faf7ef] px-8 py-16 text-stone-950 md:px-16 lg:px-24">
      <Reveal
        className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_0.85fr_0.95fr] lg:items-start"
        delay={80}
      >
        <div>
          <Image
            src="/photos/logo.png"
            alt="Fresh Fuel Poke logo"
            width={160}
            height={77}
            className="h-auto w-28 md:w-36"
          />
          <p className="mt-6 max-w-md text-sm leading-8 tracking-[0.08em] text-stone-600 md:text-base">
            Fresh bowls, bright ingredients, and feel-good meals for dine-in,
            takeaway, and delivery in Central.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              aria-label="Instagram"
              className="flex items-center gap-3 rounded-md border border-stone-300 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4.1" />
                <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
              </svg>
              Instagram
            </button>
            <button
              type="button"
              aria-label="Facebook"
              className="flex items-center gap-3 rounded-md border border-stone-300 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-stone-950 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.66c0-.93.25-1.56 1.58-1.56H16.7V3.24c-.3-.04-1.3-.12-2.47-.12-2.45 0-4.13 1.49-4.13 4.24v2.36H7.3v3.2h2.8V21h3.4Z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
            Visit
          </p>
          <div className="mt-5 space-y-4 rounded-lg border border-stone-200 bg-white p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                Location
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Central, Hong Kong
                <br />
                Dine-in · Takeaway · Delivery
              </p>
            </div>
            <div className="h-px bg-stone-200" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                Hours
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Mon - Thu: 11:00 - 21:30
                <br />
                Fri - Sun: 10:30 - 22:30
              </p>
            </div>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
            Delivery Partners
          </p>
          <div className="mt-5 rounded-lg border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              Order through our delivery platforms
            </p>
            <div className="mt-5 flex items-center gap-4">
              <Image
                src="/photos/food%20panda.webp"
                alt="foodpanda"
                width={92}
                height={65}
                sizes="92px"
                className="h-auto w-[82px]"
              />
              <Image
                src="/photos/keeta.png"
                alt="Keeta"
                width={52}
                height={52}
                sizes="52px"
                className="h-auto w-11 rounded-md"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal
        className="mx-auto mt-12 max-w-[1400px] border-t border-stone-200 pt-6"
        delay={160}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          © Copyright Freshfuelpoke 2026
        </p>
      </Reveal>
    </footer>
  );
}
