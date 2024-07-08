"use client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Herov1 from "@/components/Hero-1.1.0";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MultiStepLoader as Loader } from "@/components/ui/MultiStepLoader";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <GoogleAnalytics gaId="G-670NTESQHE" />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {/* <Hero /> */}
        <Herov1 />
        {/* <Grid /> */}
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
