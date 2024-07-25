import * as React from "react";

import { Card, CardContent } from "./card";

import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel className="w-full absolute ">
      <CarouselContent>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex bg-white dark:bg-black flex-col justify-center items-center border-4 border-oracleGold rounded-lg ">
                <Image
                  src="/oci-badge.png"
                  width={280}
                  height={280}
                  alt="oci"
                  className="mt-3"
                />
                <span className=" text-sm mb-0 ">Badge 1 of 3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex bg-white dark:bg-black flex-col items-center justify-center border-4 border-attBlue rounded-lg">
                <Image
                  src="/at&t-badge.png"
                  width={280}
                  height={280}
                  alt="at&t"
                  className="mt-4 "
                />
                <span className=" text-sm mb-0 ">Badge 2 of 3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="">
            <Card>
              <CardContent className="flex bg-white dark:bg-black flex-col items-center justify-center border-4 border-mtaBlue rounded-lg">
                <Image
                  src="/mta-badge.png"
                  width={280}
                  height={280}
                  alt="mta"
                  className="mt-4"
                />
                <span className=" text-sm bottom-0 ">Badge 3 of 3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
