import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/restaurant/site-footer";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
