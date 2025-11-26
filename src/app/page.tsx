"use client";
import { Header } from "@/features/home";
import { About } from "@/features/about";
import { Skills } from "@/features/skills";
import { Work } from "@/features/work";
import { Footer } from "@/features/footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}
