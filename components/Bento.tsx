import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { GraduationCap } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import stevens from "../public/stevens.webp";
import TechStack from "./TechStack";
import b5 from "../public/b5.svg";
import { SquareFunction } from "lucide-react";
import { View } from "lucide-react";
// import Globe from "./ui/Globe";
import Globe from "./ui/Globe";

const features = [
  {
    id: 1,
    Icon: SquareFunction,
    name: "My Stack",
    description: "Upgrading everyday",
    href: "/stevens.jpg",
    cta: "Learn more",
    background: <TechStack />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    id: 2,
    Icon: GraduationCap,
    name: "Recent Graduate",
    description: "Stevens Institute of Technology",
    href: "/",
    cta: "Learn more",
    background: <Image src={stevens} fill={true} alt="stevens" />,
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 h-[350px] md:h-full lg:h-full",
  },
  {
    id: 3,
    Icon: GlobeIcon,
    name: "",
    description: "Open to relocation across United States",
    href: "/",
    cta: "Learn more",
    // background: <img className="absolute -right-20 -top-20 opacity-60" />,
    background: <Globe />,
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 md:h-full lg:h-full h-[150px]",
  },
  {
    id: 4,
    Icon: View,
    name: "Looking for Opportunities",
    description: "Available Immediately",
    href: "/",
    cta: "Click here",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    id: 5,
    Icon: BellIcon,
    name: "To-Do",
    description: "",
    href: "/",
    cta: "Learn more",
    // background: <Globe className="" />,
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
