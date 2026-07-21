import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const grotesk = localFont({
  src: "../public/fonts/HKGrotesk-Regular.woff",
  variable: "--font-grotesk",
  display: "swap",
});

const jost = localFont({
  src: "../public/fonts/Jost-Regular.ttf",
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tashinga Chizengwe — Software Developer",
  description: "Software developer with interest in cars and video games",
  keywords: [
    "Tashinga Duke Chizengwe",
    "frontend developer",
    "web design",
    "ui/ux design",
    "react",
    "js",
    "php",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jost.variable}`}>
      <body className="font-grotesk text-[1.8rem] leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
