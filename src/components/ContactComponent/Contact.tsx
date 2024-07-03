import React from "react";
import local from "next/font/local";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import Image from "next/image";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });

const Contact = () => {
  return (
    <div className="py-[7rem] text-center text-black">
      <p className="text-xl ralewa leading-[24.4px]">Got any questions?</p>
      <p className={`text-[48px] my-3 ${DirtyFont.className}`}>contact us</p>
      <div className="w-1/2 m-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex justify-end items-center gap-3 raleway">
            <Image
              src={"/assets/phone.svg"}
              width={0}
              height={0}
              className="w-5 h-auto object-contain object-center"
              alt="phone"
            />
            <p className="text-[17px]">+234 (0)7063371801</p>
          </div>
          <div className="flex items-center gap-3 raleway">
            <Image
              src={"/assets/envelope.svg"}
              width={0}
              height={0}
              className="w-7 h-auto object-contain object-center"
              alt="phone"
            />
            <p className="text-[17px]"> info@streamsofjoy.org</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <div className="flex items-center gap-3 raleway">
          <Image
            src={"/assets/InstagramLogo.svg"}
            width={0}
            height={0}
            className="w-full h-auto object-contain object-center"
            alt="phone"
          />

          <p className="text-[17px]">@streamsofjoyinternational</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
