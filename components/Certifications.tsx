import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { IMAGES } from "./Certificates";
import Image from "next/image";

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
    <main className="flex flex-col items-center">
      <div className="slider-container flex flex-col items-center my-6">
        <div className="slider relative h-[500px] w-[350px] overflow-hidden md:h-[400px] md:w-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].src})`,
              }}
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
            />
          </AnimatePresence>
        </div>

        <div className="buttons mt-3">
          <button
            onClick={() => swipeToImage(-1)}
            className="outline-none border-none user-select-none py-2 px-3 skew-y-[-5deg] rotate-[5deg] bg-gray-800 font-inherit text-inherit text-white transition-transform duration-75 ease-out transform hover:scale-90 first-of-type:mr-4"
          >
            PREV
          </button>
          <button
            onClick={() => swipeToImage(1)}
            className="outline-none border-none user-select-none py-2 px-3 skew-y-[-5deg] rotate-[5deg] bg-gray-800 font-inherit text-inherit text-white transition-transform duration-75 ease-out transform hover:scale-90"
          >
            NEXT
          </button>
        </div>
      </div>

      <div className="thumbnails flex justify-center">
        {IMAGES.map((image) => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnail-container relative h-[120px] w-[90px] md:h-[70px] md:w-[50px] hover:cursor-pointer not:last-of-type:mr-1"
          >
            <Image
              src={image.src}
              alt="OCI"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
            <div
              className={`active-indicator absolute top-0 left-0 h-full w-full pointer-events-none transform scale-x-0 origin-left bg-gray-800 transition-transform duration-[1s] ${
                image.id === activeImageIndex ? "scale-x-100" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Certifications;
