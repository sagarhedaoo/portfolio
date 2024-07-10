import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import AiFormBuilder from "../public/AiFormBuilder.webp";
import { FaLocationArrow, FaTv } from "react-icons/fa6";
import ExploreHub from "../public/explorehub.webp";
import ECommerce from "../public/ecommerce.webp";
import Airbnb from "../public/airbnb.webp";
import ActivityAPI from "../public/activity.webp";

const Projects = () => {
  return (
    <div className="py-20 " id="about">
      <div className="items-center justify-center flex">
        <h1 className="text-4xl lg:text-4xl text-black-100 dark:text-white">
          A small selection of{" "}
          <span className="text-orange-400">Recent Projects</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 items-start justify-center gap-x-24 gap-y-24 md:-mt-30 mt-20">
        <CardContainer className="inter-var h-[300px] w-[400px]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl  font-bold text-neutral-600 dark:text-white"
            >
              Form Mint
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Create forms with the power of Gemini 1.5 Flash Share, edit and
              take responses
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={AiFormBuilder}
                // layout="fill"
                height="1000"
                width="1000"
                className="h-60 w-auto  rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center z-10 justify-center   rtl:space-x-reverse mt-4">
              <Image
                src="/stripe.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/postgresql.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/next.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/tail.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/js.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://form-mint.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl text-lg flex gap-2 items-center font-normal   text-red-500"
              >
                <span className="animate-pulse">Live</span>
                <FaTv className="animate-pulse" color="#e31f1f" />
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sagarhedaoo/form-mint/"
                target="__blank"
                className="px-4 flex items-center gap-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub <FaLocationArrow className="" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-[300px] w-[400px]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl  font-bold text-neutral-600 dark:text-white"
            >
              ExploreHub
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Comprehensive travel planning system that allow users to book
              vacations seamlessly
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={ExploreHub}
                // layout="fill"
                height="1000"
                width="1000"
                className="h-60 w-auto  rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center z-10 justify-center   rtl:space-x-reverse mt-4">
              <Image
                src="/re.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/mongo.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/ts.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/python.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/aws.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div></div>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/Explore-Hub-Capstone-Project"
                target="__blank"
                className="px-4 flex items-center gap-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub <FaLocationArrow className="" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-[300px] w-[400px]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl  font-bold text-neutral-600 dark:text-white"
            >
              E-Commerce Store
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Architected a robust, secure and end-to-end e-commerce website
              with Stripe payments
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={ECommerce}
                // layout="fill"
                height="1000"
                width="1000"
                className="h-60 w-auto  rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center z-10 justify-center   rtl:space-x-reverse mt-4">
              <Image
                src="/next.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/re.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/js.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/node.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/stripe.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://e-commerce-eta-rosy.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl text-lg flex gap-2 items-center font-normal   text-red-500"
              >
                <span className="animate-pulse">Live</span>
                <FaTv className="animate-pulse" color="#e31f1f" />
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sagarhedaoo/E-Commerce"
                target="__blank"
                className="px-4 flex items-center gap-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub <FaLocationArrow className="" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <div className="grid md:grid-cols-2 items-start justify-center  gap-y-24 md:mt-24 mt-24">
        <CardContainer className="inter-var h-[300px] w-[400px]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl  font-bold text-neutral-600 dark:text-white"
            >
              Airbnb Clone
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              View different Airbnbs available in your area
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Airbnb}
                // layout="fill"
                height="1000"
                width="1000"
                className="h-60 w-auto  rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center z-10 justify-center   rtl:space-x-reverse mt-4">
              <Image
                src="/re.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/tail.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/ts.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/mongo.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/cloudinary.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div></div>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sagarhedaoo/Airbnb-clone"
                target="__blank"
                className="px-4 flex items-center gap-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub <FaLocationArrow className="" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var h-[300px] w-[400px]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl  font-bold text-neutral-600 dark:text-white"
            >
              Activity API
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              REST API using Spring MVC with CRUD operations and in-memory data
              handling.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={ActivityAPI}
                // layout="fill"
                height="1000"
                width="1000"
                className="h-60 w-auto rounded-xl group-hover/card:shadow-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center z-10 justify-center   rtl:space-x-reverse mt-4">
              <Image
                src="/docker.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/java.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/restapi.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/postgresql.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
              <Image
                src="/spring.svg"
                height={30}
                width={30}
                alt="js"
                style={{
                  transform: `translateX(-${5}px)`,
                }}
                className="h-10 w-10 rounded-full border-2  group-hover/card:shadow-xl border-white dark:border-gray-800"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div></div>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sagarhedaoo/WebAPI-Springboot"
                target="__blank"
                className="px-4 flex items-center gap-2 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                GitHub <FaLocationArrow className="" />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Projects;
