import Image from "next/image";
import { Reveal } from "./reveal";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-[#121212] px-8 py-16 text-white md:px-16 lg:px-24">
      <Reveal
        className="mx-auto grid custom-container gap-12 lg:grid-cols-[1.15fr_0.65fr_0.85fr_0.95fr] lg:items-start"
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
          <p className="mt-6 max-w-md text-sm leading-8 tracking-[0.08em] text-stone-400 md:text-base">
            Fresh bowls, bright ingredients, and feel-good meals for dine-in,
            takeaway, and delivery in Central.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              aria-label="Instagram"
              className="flex items-center gap-3 rounded-md border border-stone-700 bg-stone-900 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-stone-950"
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
              className="flex items-center gap-3 rounded-md border border-stone-700 bg-stone-900 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-stone-950"
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

        <nav aria-label="Footer" className="lg:pt-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Home",
              "About Us",
              "Dine in & Delivery",
              "Catering",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm tracking-[0.06em] text-stone-300 transition hover:text-white"
                >
                  <span className="h-[1px] w-4 bg-stone-700 transition group-hover:w-7 group-hover:bg-white" />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
            Visit
          </p>
          <div className="mt-5 space-y-4 rounded-lg border border-stone-800 bg-stone-900 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Location
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                G/F, 19 Amoy Street, Wanchai
                <br />
                Hong Kong
              </p>
            </div>
            <div className="h-px bg-stone-800" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Contact
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                Tel: 2345 6786
                <br />
                WhatsApp: 5674 6533
              </p>
            </div>
            <div className="h-px bg-stone-800" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                Hours
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                SUN - MON
                <br />
                10:00 am - 4:00 pm (Dine-in)
                <br />
                10:00 am - 4:00 pm (Pickup/Delivery)
              </p>
            </div>
          </div>
        </div>

        <div className="lg:justify-self-end">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
            Delivery Partners
          </p>
          <div className="mt-5 rounded-lg border border-stone-800 bg-stone-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
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
        className="mx-auto mt-12 custom-container border-t border-stone-800 pt-6"
        delay={160}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          © Copyright Freshfuelpoke 2026
        </p>
      </Reveal>
    </footer>
  );
}
