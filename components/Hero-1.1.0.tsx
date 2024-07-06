import React from "react";
import TypingAnimation from "./magicui/typing-animation";
import { FlipWords } from "./ui/flip-text";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import CodeScreen from "./CodeScreen";
import { Boxes } from "./ui/background-boxes";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { BackgroundBeams } from "./ui/background-beams";

const Herov1 = () => {
  //   const words = ["Hello 👋", "Namaste 🙏"];
  const words = ["Hello", "Namaste", "Bonjour"];
  return (
    <div className="pb-20 mt-36 ">
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center ">
        {/* <BackgroundBeams /> */}

        <div className="flex flex-row justify-center items-center h-[800px] w-full">
          <div className="text-black  w-full flex justify-center items-center">
            <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
              <FlipWords words={words} className="mb-2" />
              <br />
              <span className="text-6xl">
                I&apos;m <span className="text-orange-400">Sagar Hedaoo</span>
              </span>
              <br />
              <span className="text-2xl">
                Frontend Developer based out of New Jersey.
              </span>
              <div className="flex text-base gap-4">
                <a
                  href="#about"
                  className="hover:-translate-y-1 hover:scale-110 transition-all"
                >
                  <MagicButton
                    title="Show My Work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                <Link
                  href="/resume"
                  className="hover:-translate-y-1 hover:scale-110 transition-all"
                >
                  <MagicButton
                    title="Resume"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
            {/* <div>Header line</div> */}
          </div>
          <div className="mx-auto container flex justify-center items-center">
            <div>
              <CodeScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herov1;
