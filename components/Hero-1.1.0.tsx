"use Client";
import React, { useEffect, useRef, useState } from "react";
import { FlipWords } from "./ui/flip-text";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import CodeScreen from "./CodeScreen";
import BoxReveal from "./magicui/box-reveal";
import { LinkPreview } from "./ui/link-preview";
import { WavyBackground } from "./ui/wavy-background";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeIn,
  easeInOut,
} from "framer-motion";

const Herov1 = () => {
  const words = ["Hello 👋", "Namaste 🙏", "Bonjour 👋"];
  const isSmallDevice = useMediaQuery({ maxWidth: 640 });
  const [isMounted, setIsMounted] = useState(false);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="pb-20 mt-36 " id="about">
      <WavyBackground
        speed="fast"
        waveOpacity={0.5}
        waveWidth={10}
        className=" "
        blur={20}
      >
        <div className="flex justify-center relative z-10 sm:flex-row gap-5 ">
          <div className="h-auto w-full rounded-md flex flex-col items-center justify-center ">
            {/* <BackgroundBeams /> */}

            <div className="flex flex-col sm:flex-row justify-center items-center h-auto w-full sm:gap-5">
              {/* Left Section */}
              <div className=" text-black w-full sm:w-1/2 flex justify-center items-center flex-col">
                <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
                  <FlipWords words={words} className="mb-6" />
                  <br />

                  <BoxReveal boxColor={"#e97f41"} duration={0.5}>
                    <p className="text-6xl mb-2 dark:text-white text-black">
                      I&apos;m{" "}
                      <span className="text-orange-400">Sagar Hedaoo</span>
                    </p>
                  </BoxReveal>

                  <br />

                  <BoxReveal boxColor={"#e97f41"} duration={0.5}>
                    <h2 className="text-2xl mb-4 md:mb-0 lg:mb-0 dark:text-white">
                      <span className="text-orange-400">
                        Software Developer{" "}
                      </span>
                      based in New York.
                    </h2>
                  </BoxReveal>

                  <div className="flex text-base gap-4">
                    <a
                      href="#about"
                      className="hover:-translate-y-1 hover:scale-110  transition-all"
                    >
                      <BoxReveal boxColor={"#e97f41"} duration={0.5}>
                        <MagicButton
                          title="Show My Work"
                          icon={<FaLocationArrow />}
                          position="right"
                        />
                      </BoxReveal>
                    </a>

                    <LinkPreview
                      url="https://sagarhedaoo.com/resume"
                      className="hover:-translate-y-1 hover:scale-110 transition-all"
                    >
                      <BoxReveal boxColor={"#e97f41"} duration={0.5}>
                        <MagicButton
                          title="Resume"
                          icon={<FaLocationArrow />}
                          position="right"
                        />
                      </BoxReveal>
                    </LinkPreview>
                  </div>
                  {/* <ThemeToggleSwitch /> */}
                  {/* <div className="flex justify-between items-center mt-4">
                    <ModeToggle />
                  </div> */}
                </div>
                {/* <div>Header line</div> */}
              </div>
              {/* Right section */}
              {/* {!isSmallDevice && ( */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: easeInOut,
                }}
                className="mx-auto flex justify-center items-center w-[350px] mt-8 sm:mt-0"
              >
                {/* <div className="w-[full] mx-auto mt-8 sm:mt-0"> */}
                <div>
                  <CodeScreen />
                </div>
              </motion.div>
              {/* )} */}
            </div>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Herov1;
