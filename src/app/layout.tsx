import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marrylikeceo.com"),
  title: "Marry Like a CEO — A Roadmap to Marriage for Ambitious Women",
  description:
    "A proven system that applies business strategy to finding — and choosing — the right partner. Join the waitlist for the July 2026 retreat and book launch.",
  keywords: [
    "marriage strategy",
    "ambitious women",
    "relationship coaching",
    "marry like a ceo",
    "dating for professionals",
  ],
  authors: [{ name: "Marry Like a CEO" }],
  openGraph: {
    title: "Marry Like a CEO",
    description: "Business frameworks. Applied to love. Join the waitlist.",
    images: ["/images/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marry Like a CEO",
    description: "Business frameworks. Applied to love.",
    images: ["/images/hero.jpg"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
