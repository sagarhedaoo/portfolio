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

const ONE_MINUTE = 60 * 1000;

export default function Home() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const lastLoadedTime = localStorage.getItem("lastLoadedTime");
  //   const currentTime = new Date().getTime();

  //   if (
  //     !lastLoadedTime ||
  //     currentTime - parseInt(lastLoadedTime) > ONE_MINUTE
  //   ) {
  //     setLoading(true);
  //     const totalDuration = loadingStates.length * 1000;
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //       localStorage.setItem("lastLoadedTime", currentTime.toString());
  //     }, totalDuration);

  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  // return (
  //   <main className="relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
  //     <GoogleAnalytics gaId="G-670NTESQHE" />
  //     <div className="max-w-7xl w-full">
  //       {loading ? (
  //         <div className="w-full h-[100vh] flex items-center justify-center bg-transparent">
  //           {/* <Loader
  //             loadingStates={loadingStates}
  //             loading={loading}
  //             duration={1000}
  //           /> */}
  //         </div>
  //       ) : (
  //         <>
  //           <FloatingNav navItems={navItems} />
  //           {/* <Hero /> */}
  //           <Herov1 />
  //           <Grid />
  //           <RecentProjects />
  //           <Experience />
  //           <Footer />
  //         </>
  //       )}
  //     </div>
  //   </main>
  // );

  return (
    <main className="relative bg-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <GoogleAnalytics gaId="G-670NTESQHE" />
      <div className="max-w-7xl w-full">
        <>
          <FloatingNav navItems={navItems} />
          {/* <Hero /> */}
          <Herov1 />
          <Grid />
          <RecentProjects />
          <Experience />
          <Footer />
        </>
      </div>
    </main>
  );
}
