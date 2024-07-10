import { ReactNode, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "../ui/MovingBorders";
import MagicButton from "../ui/MagicButton";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("grid w-full  grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  id,
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  id: number;
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: any;
  href: string;
  cta: string;
}) => {
  return (
    <div
      id="bento"
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl group-hover:-translate-y-10 transition-all",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div>{background}</div>

      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon
          className={`h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75 ${
            id === 2 ? "text-white " : "text-neutral-700 dark:text-white"
          } `}
        />
        <h3
          className={`text-xl font-semibold  ${
            id === 2 ? "text-white" : "text-neutral-700 dark:text-white"
          }  `}
        >
          {name}
        </h3>
        <p
          className={`max-w-lg  ${
            id === 3 ? "text-black" : "text-neutral-400"
          } `}
        >
          {description}
        </p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {/* <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button> */}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export { BentoCard, BentoGrid };
