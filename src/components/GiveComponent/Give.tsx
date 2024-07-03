import React from "react";
import local from "next/font/local";
import Image from "next/image";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });
const Give = () => {
  return (
    <div className="mx-2">
      <div className="give-bg lg:w-[50%] m-auto">
        <div className="grid lg:grid-cols-2">
          <div className="w-full rounded-[60px] p-10 border bg-transparent">
            <p
              className={`lg:text-[80.43px] text-[40px] ${DirtyFont.className}`}
            >
              give
            </p>
            <p className={`text-[33px] pt-20`}>
              Generosity is a <br />
              form of worship
            </p>
          </div>
          <div>
            <Image
              src={"/assets/jesu-img.png"}
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain object-center rounded-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
