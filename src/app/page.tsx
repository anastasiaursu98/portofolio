"use client";
import { Home } from "@/features/home"; 
import { About } from "@/features/about";
import { Skills } from "@/features/skills";
import { Work } from "@/features/work";
import { Footer } from "@/features/footer";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}
