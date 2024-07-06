import Image from "next/image";
import React, { useState } from "react";
import { FaCross } from "react-icons/fa6";
import CodeScreenIndex from "./CodeScreenIndex";
import CodeScreenGoals from "./CodeScreenGoals";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CodeScreen = () => {
  const [selected, setSelected] = useState("/index.tsx");

  const handleClick = (buttonName: any) => {
    setSelected(buttonName);
  };

  return (
    <div className="text-black border-double border-4 rounded-lg border-black h-[600px] overflow-hidden  w-[700px]">
      <div className="h-[45px] w-[700px] flex flex-row justify-start p-3 gap-2 ">
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
      {/* <hr className="h-0.5 ml-3 mr-3 bg-gray-100 border-0 rounded dark:bg-gray-700 mb-1" /> */}
      <div className="h-[40px] flex justify-start group items-start cursor-pointer border-b-2">
        <button
          onClick={() => handleClick("/index.tsx")}
          className={`h-[40px] w-[150px] flex justify-center items-center ${
            selected === "/index.tsx"
              ? "bg-white-200 border-t-2  border-l-2 border-r-2 rounded-t-xl"
              : "hover:bg-white-200 hover:rounded-t-xl"
          }`}
        >
          /index.tsx
        </button>
        <button
          onClick={() => handleClick("/goals.tsx")}
          className={`h-[40px] w-[150px] flex justify-center items-center ${
            selected === "/goals.tsx"
              ? "bg-white-200 border-t-2 border-l-2 border-r-2 rounded-t-xl"
              : "hover:bg-white-200 hover:rounded-t-xl"
          }`}
        >
          /goals.tsx
        </button>
      </div>

      <div className="transition-opacity duration-300 ease-in-out">
        {selected === "/index.tsx" ? <CodeScreenIndex /> : <CodeScreenGoals />}
      </div>
    </div>
  );
};

export default CodeScreen;
