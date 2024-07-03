"use client";
import React, { useEffect } from "react";
import local from "next/font/local";
import Image from "next/image";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });

const churchDuration = [
  {
    day: "monday-friday",
    time: "7:00 am",
    service: "",
  },
  {
    day: "sunday",
    time: "7:00 am",
    service: "1st service",
  },
  {
    day: "sunday",
    time: "7:00 am",
    service: "2nd service",
  },
];

const HowWeWorship = () => {
  useEffect(() => {
    const handleMouseMove = (e: { pageX: number; pageY: number; }) => {
      const hoverContent = document.getElementById("hover-content");
      if (hoverContent) {
        hoverContent.style.left = `${e.pageX + 10}px`;
        hoverContent.style.top = `${e.pageY + 10}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="lg:px-20 px-5 py-20">
    <div>
      <p
        className={`lowercase lg:text-[44px] text-[32px] text-black text-center ${DirtyFont.className}`}
      >
        How We Worship
      </p>
      {churchDuration.map(({ day, time, service }, index) => (
        <div key={index} className="hover-target relative">
          <div className="border-b border-slate-300 py-10 text-black text-center">
            <p
              className={`lg:text-[100px] text-[52px] flex gap-5 justify-center ${DirtyFont.className}`}
            >
              {day}
              <span className="lg:text-xl text-[16px] py-8">{service}</span>
            </p>
            <p className="lg:text-[63px] text-[32px]">{time}</p>
          </div>
        </div>
      ))}
      <div id="hover-content">
        <Image
          src="/assets/choir-mobile.png"
          alt="hover image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain object-center"
        />
      </div>
    </div>
  </div>
  );
};

export default HowWeWorship;
