"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Herov1 from "@/components/Hero-1.1.0";
import { GoogleAnalytics } from "@next/third-parties/google";
import { BentoDemo } from "@/components/Bento";
import Projects from "@/components/Projects";
import { NavbarDemo } from "@/components/ui/Navbar";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <GoogleAnalytics gaId="G-670NTESQHE" />
      <div className="max-w-7xl w-full">
        <NavbarDemo />
        <Herov1 />
        <BentoDemo />
        <Certifications />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
