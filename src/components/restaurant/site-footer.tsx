import Image from "next/image";
import { Reveal } from "./reveal";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-800 bg-[#121212] px-8 pt-16 text-white md:px-16 lg:px-24">
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
            Our Socials
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-stone-700 bg-stone-900 text-stone-300 transition hover:border-white hover:bg-white hover:text-stone-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4.1" />
                <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-stone-700 bg-stone-900 text-stone-300 transition hover:border-white hover:bg-white hover:text-stone-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="currentColor"
              >
                <path d="M13.5 21v-8.1h2.7l.4-3.2h-3.1V7.66c0-.93.25-1.56 1.58-1.56H16.7V3.24c-.3-.04-1.3-.12-2.47-.12-2.45 0-4.13 1.49-4.13 4.24v2.36H7.3v3.2h2.8V21h3.4Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-stone-700 bg-stone-900 text-stone-300 transition hover:border-white hover:bg-white hover:text-stone-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.8.1V9.01a6.27 6.27 0 00-.8-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-stone-700 bg-stone-900 text-stone-300 transition hover:border-white hover:bg-white hover:text-stone-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.05 2C6.532 2 2.05 6.478 2.05 11.993c0 1.762.46 3.478 1.333 4.992L2 22l5.233-1.237a9.87 9.87 0 004.817 1.23C17.568 21.993 22.05 17.515 22.05 12.001 22.05 6.487 17.565 2 12.05 2zm0 18.054a8.11 8.11 0 01-4.417-1.3l-.316-.188-3.286.862.877-3.202-.206-.328A8.07 8.07 0 013.99 12c0-4.46 3.627-8.085 8.06-8.085 4.434 0 8.062 3.625 8.062 8.085 0 4.46-3.628 8.054-8.062 8.054z" />
              </svg>
            </a>
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

      <div
        className="mx-auto mt-12 custom-container border-t border-stone-800 py-8"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          © Copyright Freshfuelpoke 2026
        </p>
      </div>
    </footer>
  );
}
