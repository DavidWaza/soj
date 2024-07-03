import React from "react";
import local from "next/font/local";
import Image from "next/image";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });
const About = () => {
  return (
    <div className="lg:px-20 px-5 py-20">
      <div className="ankara">
        <div className="grid lg:grid-cols-3  gap-5">
          <div className="lg:col-span-2">
            <div className="bg-white w-full rounded-[41px] lg:p-20 p-5">
              <p
                className={`text-black text-[36px] lg:text-[64px] ${DirtyFont.className}`}
              >
                About soj abuja
              </p>
              <div className="2xl:pt-[27rem] pt-[3rem]">
                <p className="font-medium text-lg text-black">
                  SOJ Abuja is a branch of the church made up of people from
                  many ethnic backgrounds and nationalities with a strong
                  passion to serve God and Love one another saturating our
                  environment and the world with the presence and power of God.
                </p>
                <br />
                <p className="font-medium text-lg text-black">
                  SOJ Abuja is a branch of the church made up of people from
                  many ethnic backgrounds and nationalities with a strong
                  passion to serve God and Love one another saturating our
                  environment and the world with the presence and power of God.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/choir.png"}
              alt="choir"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-auto rounded-[41px]  object-cover object-center hidden lg:block"
            />
            <Image
              src={"/assets/choir-mobile.png"}
              alt="choir"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-auto rounded-[41px]  object-contain object-center lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
