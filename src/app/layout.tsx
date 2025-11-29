import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import "@/styles/card.scss";
import "@/styles/feature.scss";
import "@/styles/main.scss";
import "@/styles/section.scss";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elliot Rewards",
  description: "Elliot Rewards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.variable} antialiased bg-black`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
