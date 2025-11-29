import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton_SC, Tulpen_One } from "next/font/google";
import "./globals.css";
import "@/styles/main.scss";
import "@/styles/feature.scss";
import "@/styles/section.scss";
import "@/styles/card.scss";
import "@/styles/fonts/fonts.scss";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tulpenOne = Tulpen_One({
  variable: "--font-tulpen-one",
  weight: "400",
  subsets: ["latin"],
});

const antonSC = Anton_SC({
  variable: "--font-anton-sc",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valkyrie | Studio",
  description: "Valkyrie Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonSC.variable} ${tulpenOne.variable} antialiased bg-black`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
