import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GC STUDIO | Gifted Crochet Studio",
  description:
    "Beautiful handmade crochet fashion and accessories designed with elegance, comfort, and creativity. Shop unique handcrafted pieces by Salami Gift.",
  keywords:
    "crochet, handmade, fashion, accessories, Nigeria, custom crochet, crochet tops, crochet shorts, crochet jewelry",
  openGraph: {
    title: "GC STUDIO | Gifted Crochet Studio",
    description:
      "Beautiful handmade crochet fashion and accessories crafted with love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-white text-brand-dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
