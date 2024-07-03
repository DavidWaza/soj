"use client";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { FaGripLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center px-20 py-10">
      <div>
        <Logo />
      </div>
      <div className="lg:hidden block">
        <button onClick={handleToggle}>
          {isToggle ? (
            <IoClose className="text-white text-2xl" />
          ) : (
            <FaGripLines className="text-white text-2xl" />
          )}
        </button>
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="hidden lg:block">
        <button className="bg-gradient-to-br from-[#E87DF1] to-[#AC92F6] rounded-3xl py-3 px-7">
          Give
        </button>
      </div>
    </div>
  );
};

export default Header;
