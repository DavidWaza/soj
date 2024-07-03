import React from "react";
import local from "next/font/local";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });

const MapArea = () => {
  return (
    <div>
      <div className="lg:px-20 px-5 py-20 relative mt-[39rem] 2xl:mt-[49rem] -z-10">
        <div className="map">
          <div className="bg-white rounded-[50px] lg:w-[30rem] px-5 py-10 lg:h-[40rem]">
            <div>
              <p className="uppercase text-black font-semibold text-xl leading-[24.2px]">
                our location
              </p>
              <p
                className={`text-black text-[3rem] lg:text-[4rem] ${DirtyFont.className}`}
              >
                soj Abuja
              </p>
              <p className="text-black font-medium text-xl leading-[24.4px]">
                Area 11, M and M event center, 11 Tafawa ,<br /> Balewa Rd,
                beside Nicon luxury hotels, Garki, <br/>Abuja
              </p>
              <div className="my-5">
                <button className="uppercase text-white bg-black py-5 px-10 rounded-full cursor-pointer">
                  go to map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapArea;
