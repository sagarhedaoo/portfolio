"use client";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MultiStepLoader as Loader } from "@/components/ui/MultiStepLoader";
import { useEffect, useState } from "react";

const loadingStates = [
  {
    text: "Picking up the nearest Server",
  },
  {
    text: "Server Delivery",
  },
  {
    text: "HTML Unboxing",
  },
  {
    text: "Showtime!",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const totalDuration = loadingStates.length * 1000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <GoogleAnalytics gaId="G-670NTESQHE" />
      <div className="max-w-7xl w-full">
        {loading ? (
          <div className="w-full h-[100vh] flex items-center justify-center bg-transparent">
            <Loader
              loadingStates={loadingStates}
              loading={loading}
              duration={1000}
            />
          </div>
        ) : (
          <>
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Experience />
            <Approach />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
}
