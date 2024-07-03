import React from "react";
import local from "next/font/local";
import { AiOutlinePhone } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });

const Contact = () => {
  return (
    <div className="py-[7rem] text-center text-black">
      <p className="text-xl">Got any questions?</p>
      <p className={`text-[48px] my-2 ${DirtyFont.className}`}>contact us</p>
      <div className="w-1/2 m-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex justify-end items-center gap-3">
            <AiOutlinePhone />
            +234 (0)7063371801
          </div>
          <div className="flex items-center gap-3">
            <IoMailOutline />
            info@streamsofjoy.org
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <div className="flex items-center gap-3">
          <IoLogoInstagram />
          @streamsofjoyinternational
        </div>
      </div>
    </div>
  );
};

export default Contact;
