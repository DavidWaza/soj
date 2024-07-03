import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.svg"}
      sizes="100vw"
      alt="logo"
      width={0}
      height={0}
      className="w-full h-auto object-center object-contain"
    />
  );
};

export default Logo;
