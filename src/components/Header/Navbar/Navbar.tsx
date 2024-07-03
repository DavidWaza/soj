import Link from "next/link";
import React from "react";

const NavLinks = [
  {
    link: "",
    label: "Home",
  },
  {
    link: "",
    label: "About Us",
  },
  {
    link: "",
    label: "Visit Us",
  },
  {
    link: "",
    label: "NSPPD",
  },
  {
    link: "",
    label: "Store",
  },
];

const Navbar = () => {
  return (
    <div className="bg-slate-50 px-20 py-3 rounded-full flex items-center gap-5">
      {NavLinks.map(({ link, label }, index) => (
        <Link
          href={link}
          className="hover:bg-black  py-3 px-8 rounded-full transition-all ease-in-out"
          key={index}
        >
          <p className="text-black font-medium hover:text-white ">
            {label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
