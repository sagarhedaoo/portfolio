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
    <div className="text-black border-double border-4 rounded-lg border-black h-[400px] sm:h-[600px] w-full sm:w-[700px]">
      <div className="h-[45px] w-full sm:w-[700px] flex flex-row justify-start p-3 gap-2 ">
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
        <div>TO-DO</div>
      </div>
      {/* <hr className="h-0.5 ml-3 mr-3 bg-gray-100 border-0 rounded dark:bg-gray-700 mb-1" /> */}
      <div className="h-[40px] flex justify-start items-start cursor-pointer border-b-2 mr-2">
        <button
          onClick={() => handleClick("/index.tsx")}
          className={`h-[40px] w-[240px] flex justify-start items-center ${
            selected === "/index.tsx"
              ? "bg-white-300 border-t-2  border-l-2 border-r-2 rounded-t-xl"
              : "hover:bg-white-400 hover:rounded-t-xl"
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
              ? "bg-white-300 border-t-2 border-l-2 border-r-2 rounded-t-xl"
              : "hover:bg-white-400 hover:rounded-t-xl"
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
