import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Image from "next/image";
import { IMAGES } from "./Certificates";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const Certifications: React.FC = () => {
  const [[imageCount, direction], setImageCount] = useState<[number, number]>([
    0, 0,
  ]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: { offset: { x: number } }) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection = 0;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <main className="pt-20" id="certificates">
      <div className="items-center relative justify-center flex">
        <div className="text-4xl lg:text-4xl md:text-4xl  text-black-100 dark:text-white">
          Some <span className="text-orange-400">Certificates</span>
        </div>
      </div>
      <div className="slider-container flex md:flex-row flex-col items-center mt-6 mb-4 justify-center">
        <button
          onClick={() => swipeToImage(-1)}
          className=" md:h-[200px] hidden md:block hover:bg-gray-200 rounded-lg user-select-none py-2 px-3 font-inherit text-inherit  dark:hover:text-black mr-4"
        >
          <ChevronLeft />
        </button>
        <div className="slider relative h-[300px] w-[400px] overflow-hidden md:h-[500px] md:w-[700px] md:rounded-3xl rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image absolute h-full w-full bg-cover bg-center will-change-transform opacity-0"
            >
              <Image
                src={IMAGES[activeImageIndex].src}
                alt="Certificate"
                layout="fill"
                objectFit="fill"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => swipeToImage(1)}
          className="md:h-[200px] hidden md:block hover:bg-gray-200 rounded-lg user-select-none py-2 px-3 font-inherit text-inherit dark:hover:text-black ml-4"
        >
          <ChevronRight />
        </button>

        <span className="md:hidden mt-3 flex">
          <ChevronLeft onClick={() => swipeToImage(-1)} /> Swipe{" "}
          <ChevronRight onClick={() => swipeToImage(1)} />
        </span>
      </div>

      <div className="thumbnails flex justify-center rounded-lg">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container relative h-[60px] w-[90px] md:h-[70px] md:w-[100px] md:mr-1 mr-2 hover:cursor-pointer not:last-of-type:mr-1"
          >
            <Image
              src={image.src}
              alt="Thumbnail"
              className="h-full w-full object-cover object-center rounded-lg"
              width={90}
              height={120}
            />
            <div
              className={`active-indicator absolute top-0 left-0 h-full  w-full pointer-events-none transform scale-x-0 origin-left bg-opacity-75 bg-white-500 transition-transform duration-[1s] ${
                image.id === activeImageIndex
                  ? "scale-x-100 rounded-lg border-orange-400 border-4 md:border-2 "
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Certifications;
