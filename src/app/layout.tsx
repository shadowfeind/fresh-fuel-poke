import type { Metadata } from "next";
import { Allura } from "next/font/google";
import "./globals.css";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Fuel Poke",
  description:
    "Fresh Fuel Poke landing page with signature bowls, catering highlights, and vibrant ingredient-driven design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${allura.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
