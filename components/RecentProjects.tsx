import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-black-100">
        A small selection of{" "}
        <span className="text-orange-400">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-start justify-center p-2 gap-x-24 gap-y-8 md:-mt-30 sm:mt-20">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center w-[80vw] sm:h-[41rem] md:h-[30rem] sm:w-[570px] md:mb-15 lg:mb-20 sm:mb-20 mb-10! min-h-[30rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] md:h-[25vh] h-[30vh] w-[80vw] overflow-hidden mb-10">
                <div className="relative w-full overflow-hidden lg:rounded-3xl bg-[#ffffff]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-black-100">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-black-100">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-black/[0.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-orange-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#f1b872" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="mt-10 md:-mt-5 -mb-20 xl:mt-20">
        <h3 className="font-bold text-black-100 lg:text-xl md:text-sm sm:text-xs flex items-center justify-center">
          More Projects are on my{" "}
          <a
            href="https://github.com/sagarhedaoo"
            className="text-orange-400 underline ml-1 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FaLocationArrow className="ml-1" />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default RecentProjects;
