import Image from "next/image";
import React, { useState } from "react";
import CodeScreenIndex from "./CodeScreenIndex";
import CodeScreenGoals from "./CodeScreenGoals";
import { X } from "lucide-react";

const CodeScreen = () => {
  const [selected, setSelected] = useState("/index.tsx");

  const handleClick = (buttonName: any) => {
    setSelected(buttonName);
  };

  return (
    <div className="text-black border-double border-4 rounded-lg border-black dark:border-white h-[500px] sm:h-[600px] w-[300px] sm:w-[700px]">
      {/* w-full sm:w-[700px] */}
      <div className="h-[45px] w-full sm:w-[700px] flex items-center p-3">
        <div className="flex gap-2 mr-8 md:mr-0 lg:mr-0">
          <button className="h-4 w-4 rounded-full bg-red-500 cursor-pointer group relative">
            <div className="absolute inset-0 flex items-center justify-center h-full w-full">
              <Image
                src="/macos-close.svg"
                height={12}
                width={12}
                alt="close"
                className="hidden group-hover:block bg-red-500 hover:text-white rounded-full"
              />
            </div>
          </button>
          <button className="h-4 w-4 rounded-full bg-yellow-400 cursor-pointer group relative">
            <div className="absolute inset-0 flex items-center justify-center h-full w-full">
              <Image
                src="/macos-minimize.svg"
                height={15}
                width={15}
                alt="close"
                className="hidden group-hover:block bg-yellow-400 hover:text-white rounded-full"
              />
            </div>
          </button>
          <button className="h-4 w-4 rounded-full bg-green-400 cursor-pointer group relative">
            <div className="absolute inset-0 flex items-center justify-center h-full w-full">
              <Image
                src="/macos-green.svg"
                height={15}
                width={15}
                alt="close"
                className="hidden group-hover:block bg-green-400 hover:text-white rounded-full"
              />
            </div>
          </button>
        </div>
        {/* Searchbar here */}
        <div className="flex justify-center items-center md:ml-36 lg:ml-36 ml-0">
          {/* <div className="border h-[30px]">Search</div> ml-36*/}
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-32 md:w-60 lg:w-60 bg-transparent border-white-400 hover:border-black border h-[30px] rounded-md"
          />
        </div>
      </div>
      {/* <hr className="h-0.5 ml-3 mr-3 bg-gray-100 border-0 rounded dark:bg-gray-700 mb-1" /> */}
      <div className="h-[40px] flex justify-start items-start cursor-pointer overflow-scroll mr-2">
        <button
          onClick={() => handleClick("/index.tsx")}
          className={`h-[40px] w-[240px] flex justify-start items-center  ${
            selected === "/index.tsx"
              ? "bg-white-300 dark:bg-gray-600  border-t-2 border-blue-600 "
              : "hover:bg-white-400 dark:hover:bg-gray-600 dark:text-white hover:border-t-2 hover:border-blue-600 dark:hover:text-black"
          }`}
        >
          <div className="flex gap-3">
            <Image
              src="/re.svg"
              height={25}
              width={25}
              alt="reactLogo"
              className="ml-2"
            />
            WelcomeScreen.tsx
            <X className="hover:bg-white-500 p-1 hover:border border-transparent rounded-lg" />
          </div>
        </button>
        <button
          onClick={() => handleClick("/goals.tsx")}
          className={`h-[40px] w-[160px] flex justify-start items-center ${
            selected === "/goals.tsx"
              ? "bg-white-300 dark:bg-gray-600 border-t-2 border-blue-600"
              : "hover:bg-white-400 dark:hover:bg-gray-600 dark:text-white hover:border-t-2 hover:border-blue-600 dark:hover:text-black"
          }`}
        >
          <div className="flex gap-3">
            <Image
              src="/re.svg"
              height={25}
              width={25}
              alt="reactLogo"
              className="ml-2"
            />
            Goals.tsx
            <X className="hover:bg-white-500 p-1 hover:border border-transparent rounded-lg" />
          </div>
        </button>
      </div>

      {/* Scroll */}
      <div className="h-[calc(100%-85px)] overflow-auto transition-opacity duration-300 ease-in-out">
        {selected === "/index.tsx" ? <CodeScreenIndex /> : <CodeScreenGoals />}
      </div>
    </div>
  );
};

export default CodeScreen;
