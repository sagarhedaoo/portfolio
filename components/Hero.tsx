import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="red"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="orange"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-50[vw]" fill="orange" />
        <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="red" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs lg:text-base md:text-base text-center text-black-100 max-w-100">
            Web Developer || Full Stack Developer || Software Developer
          </p>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-6xl lg:text-6xl"
            words="Building Scalable, Reliable and Secure Software Products"
          />
          <p className="text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-black-100">
            Hi, I&apos;m Sagar, a Software Developer based in NJ
          </p>
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
