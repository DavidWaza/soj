import React from "react";
import Logo from "../Logo/Logo";
import local from "next/font/local";
import Link from "next/link";
import Image from "next/image";

const DirtyFont = local({ src: "../../../public/fonts/Dirtyline.otf" });

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="p-10 bg-white w-[90%] m-auto ">
        <div>
          <div>
            <Link href={""}>
              <Image
                src={"/assets/logo.svg"}
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                className="w-10 h-auto object-contain object-center rounded-[60px]"
              />
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="col-span-1">
            <p
              className={`text-black my-10 text-[32.09px] lg:text-[56px] ${DirtyFont.className}`}
            >
              streAms <br />
              of Joy
            </p>
            <div className="py-3 flex gap-5 items-center">
              <div>
                <Link href={""}>
                  <Image
                    src={"/assets/fb.svg"}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain object-center rounded-[60px]"
                  />
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <Image
                    src={"/assets/ig.svg"}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain object-center rounded-[60px]"
                  />
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <Image
                    src={"/assets/yt.svg"}
                    alt="img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain object-center rounded-[60px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-black my-10">
            <div className="grid lg:grid-cols-4 gap-5">
              <div className="">
                <p className="text-[16px] py-3">About</p>
                <p className="font-semibold text-[16px]">About the church</p>
                <p className="font-semibold text-[16px]">Leadership</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">NSPPD</p>
                <p className="font-semibold text-[16px]">About NSPPD</p>
                <p className="font-semibold text-[16px]">Conferences</p>
                <p className="font-semibold text-[16px]">Strange acts of God</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">Personal</p>
                <p className="font-semibold text-[16px]">Testimonies</p>
                <p className="font-semibold text-[16px]">Contact Us</p>
                <p className="font-semibold text-[16px]">Prayer Request</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">Finance</p>
                <p className="font-semibold text-[16px]">Giving</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">Media</p>
                <p className="font-semibold text-[16px]">Sermons</p>
                <p className="font-semibold text-[16px]">Gallery</p>
                <p className="font-semibold text-[16px]">Watch Online</p>
                <p className="font-semibold text-[16px]">Store</p>
                <p className="font-semibold text-[16px]">Podcast</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">Ministries</p>
                <p className="font-semibold text-[16px]">Kids</p>
                <p className="font-semibold text-[16px]">Singles</p>
                <p className="font-semibold text-[16px]">Teens</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">Join Us</p>
                <p className="font-semibold text-[16px]">Discipleship</p>
                <p className="font-semibold text-[16px]">Visit an Expression</p>
                <p className="font-semibold text-[16px]">Become a member</p>
                <p className="font-semibold text-[16px]">Join a unit</p>
              </div>
              <div className="">
                <p className="text-[16px] py-3">Legal</p>
                <p className="font-semibold text-[16px]">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
