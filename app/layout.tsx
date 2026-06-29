import type { Metadata } from "next";
import { Inter, Syne, Cormorant, Bebas_Neue, Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollRestoration from "@/components/ScrollRestoration";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "Ben Appleyard — Designer, Builder, Strategist",
  description:
    "Portfolio of Ben Appleyard — designer, builder and strategist working at the intersection of craft, clarity, and commercial impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${cormorant.variable} ${bebasNeue.variable} ${fraunces.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <ScrollRestoration />
          <Nav />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
