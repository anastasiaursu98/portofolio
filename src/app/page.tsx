"use client";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
    </>
  );
}
