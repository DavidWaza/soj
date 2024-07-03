import React from "react";
import local from "next/font/local";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });
const Banner = () => {
  return (
    <div>
      <div className="soj-banner">
        <div
          className={`text-container !bottom-8 text-[4rem] md:text-[8rem] ${DirtyFont.className}`}
        >
          SOJ Abuja
        </div>
        <div className="text-container md:text-[1.5rem]">
          What God cannot do, does not exits
        </div>
      </div>
    </div>
  );
};

export default Banner;
