import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Dine-in & Delivery", href: "#menu-section" },
  { label: "Catering", href: "#" },
  { label: "Contact Us", href: "#" },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    src: "/photos/i.png",
    width: 60,
    height: 60,
    className: "w-10 md:w-11",
  },
  {
    label: "Facebook",
    href: "#",
    src: "/photos/Facebook.png",
    width: 60,
    height: 60,
    className: "w-10 md:w-11",
  },
] as const;

const deliveryPlatforms = [
  {
    label: "foodpanda",
    src: "/photos/foopanda.png",
    width: 110,
    height: 78,
    className: "ml-2 w-[96px] md:ml-3 md:w-[110px]",
  },
  {
    label: "Keeta",
    src: "/photos/keeta.png",
    width: 92,
    height: 47,
    className: "w-[76px] md:w-[92px]",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#111922] px-8 pb-7 pt-8 text-white md:px-16 md:pt-10 lg:px-24 lg:pt-9">
      <Reveal className="mx-auto custom-container" delay={80}>
        <div className="grid gap-10 md:grid-cols-2 md:items-start lg:grid-cols-[0.85fr_0.9fr_0.95fr_1fr] lg:gap-14">
          <nav aria-label="Footer" className="pt-1">
            <ul className="space-y-5">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[1.05rem] font-semibold leading-none text-white underline decoration-white/90 underline-offset-[3px] transition hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:justify-self-start lg:pt-6">
            <Link href="/" aria-label="Fresh Fuel Poke home">
              <Image
                src="/photos/logo.png"
                alt="Fresh Fuel Poke logo"
                width={170}
                height={82}
                priority={false}
                className="h-auto w-[138px] md:w-[170px]"
              />
            </Link>
          </div>

          <div className="text-center lg:pt-2">
            <p className="text-[1.05rem] font-semibold text-white">
              Follow Us on
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 ml-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="transition opacity-90 hover:opacity-100"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={item.width}
                    height={item.height}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center lg:justify-self-end lg:pt-2">
            <p className="text-[1.05rem] font-semibold text-white">
              Delivery Platforms
            </p>
            <div className="mt-4 flex items-center justify-center gap-5 ml-4">
              {deliveryPlatforms.map((item) => (
                <Image
                  key={item.label}
                  src={item.src}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                  className={`h-auto ${item.className}`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-[0.95rem] font-semibold uppercase tracking-[0.01em] text-white md:mt-10">
          &copy; COPYRIGHT FRESHFUELPOKE 2026
        </p>
      </Reveal>
    </footer>
  );
}
