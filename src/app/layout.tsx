import type { Metadata } from "next";
import { Mochiy_Pop_One, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const mochiy = Mochiy_Pop_One({
  variable: "--font-mochiy",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "English Zone | Mr. Abdelrahman Mohamed",
  description: "A focused English learning space built around your progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} ${mochiy.variable}`}>
      <body>{children}</body>
    </html>
  );
}
