import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 md-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full" />
      </div>

      <div className="flex flex-col items-center gap-2 md:gap-0">
        <h1 className="heading lg:max-w-[40vw] text-black dark:text-white">
          Hire <span className="text-orange-500">Me!</span>
        </h1>
        <a href="mailto:sagarhedaoo@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-10 md:flex-row flex-col justify-between items-center gap-3">
        <p className="md:text-base text-sm md:font-normal text-black dark:text-white font-light">
          Copyright © 2024 Sagar Hedaoo
        </p>

        <div className="flex relative items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center  bg-black rounded-lg border border-black-300"
              style={{ cursor: "pointer" }}
            >
              <Image src={info.img} alt={info.link} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
