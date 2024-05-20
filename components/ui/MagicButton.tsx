import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // <button
    //   className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
    //   onClick={handleClick}
    // >
    //   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

    //   {/* remove px-3 py-1, add px-5 gap-2 */}
    //   <span
    //     className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
    //          bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
    //   >
    //     {position === "left" && icon}
    //     {title}
    //     {position === "right" && icon}
    //   </span>
    // </button>

    <button
      className="p-[2px] relative md:w-60 md:mt-10 overflow-hidden w-full h-12 rounded-lg focus:outline-none inline-flex"
      onClick={handleClick}
    >
      <div className="absolute inset-0  border rounded-lg bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)" />
      <div
        className={`px-8 py-2  bg-slate-950 rounded-lg font-medium h-full cursor-pointer items-center gap-2 inline-flex justify-center transition text-white hover:bg-transparent ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
