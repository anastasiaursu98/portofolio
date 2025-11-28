import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/header/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Anastasia Ursu",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0a0118] dark:via-[#0f0322] dark:to-black text-gray-900 dark:text-white leading-8 overflow-x-hidden transition-colors duration-500`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
           <Analytics />
      </body>
    </html>
  );
}
