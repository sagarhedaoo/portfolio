import Image from "next/image";
import React from "react";
import { FaCross } from "react-icons/fa6";

const CodeScreen = () => {
  return (
    <div className="text-black border border-black h-[600px] w-full flex justify-start items-start">
      <div className="h-[45px] w-[600px] flex justify-start p-3 border gap-2 border-black bg-gray-400">
        <button className="h-5 w-5 rounded-full">
          <Image
            src="/macos-close.svg"
            height={60}
            width={60}
            alt="close"
            className="hover:bg-red-600  hover:text-white rounded-full "
          />
        </button>
        <button className="h-5 w-5 border-2 rounded-full border-black  flex justify-center items-center hover:bg-yellow-500">
          -
        </button>
        <button className="h-5 w-5 rounded-full">
          <Image
            src="/macos-minimize.svg"
            height={30}
            width={30}
            alt="close"
            className="hover:bg-green-600 border-2 border-black p-0.5  hover:text-white rounded-full "
          />
        </button>
      </div>
    </div>
  );
};

export default CodeScreen;
