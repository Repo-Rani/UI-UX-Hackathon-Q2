import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  
} from "react-icons/fa";
import { PiClockClockwise } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer className=" w-[1920px] h-[774.15px] relative bg-black text-white flex justify-between gap-[20px] items-center flex-col">
        <div className="w-[1170px] h-[142.62px] absolute  left-[359px] top-[70px] flex justify-between flex-col items-center">
          <div className="w-[1170px]  flex justify-between items-center h-[100px]">
            <div className="flex justify-center gap-[10px] flex-col">
              <h2 className=" font-roboto font-bold text-[32px] text-[#ffffff] leading-[40px]">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our
                Support?
              </h2>
              <p className="font-normal text-[16px] leading-[24px] font-roboto text-[#ffffff]">
                Dont wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>

            <form className="w-[459px] h-[55.86px] flex mx-auto ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow bg-[#FF9F0D] placeholder-[#ffffff] rounded-[4px] placeholder-opacity-[59%] px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#FF9F0D] px-6 py-2 rounded-[4px] font-semibold hover:bg-[#FF9F0D] hover:text-white transition-all duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          <div className="w-[1170px] border-b-[1px] border-[#FF9F0D]"></div>
        </div>
        <div className="w-[1320px] h-[331px] relative top-[280px] flex justify-between items-center">
          <div className="flex justify-center relative top-[-55px] gap-[20px] flex-col">
            <h2 className=" text-[24px] font-bold text-white font-roboto">About Us</h2>
            <p className="font-inter font-normal text-white text-[16px] w-[312px]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex gap-[14px]">
              <div className="w-[78px] h-[72px] bg-[#FF9F0D] flex justify-center items-center ">
              <PiClockClockwise className="text-[#ffffff] h-[40px] w-[40px]" />
              </div>
              <div className="w-[149px] h-[74px] flex justify-between flex-col">
                <h2 className="font-inter text-[18px] text-white font-normal">
                  Opening Houres
                </h2>
                <p className="text-[14px] text-white font-inter font-normal">
                  Mon - Sat(8.00 - 6.00)
                </p>
                <p className="text-[14px] text-white font-inter font-normal">
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[143px] h-[367px] flex justify-between flex-col  text-white cursor-pointer list-none">
            <h2 className="font-bold text-[24px] font-poppins  whitespace-nowrap">
              Useful Links
            </h2>
           
              <li>
            <Link
        href="/about"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        About
      </Link>
      </li>
      <li>
      <Link
        href="/news"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        News
      </Link>
      </li>
      <li>
      <Link
        href="/partners"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Partners
      </Link>
      </li>
      <li>
      <Link
        href="/team"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Team
      </Link>
      </li>
      <li>
      <Link
        href="/menu"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Menu
      </Link>
      </li>
      <li>
      <Link
        href="/contact"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Contact
      </Link>
      </li>

     
          </div>
          <div className="w-[143px] h-[367px] flex justify-between flex-col cursor-pointer  text-white list-none">
            <h2 className="font-bold text-[24px] font-roboto  whitespace-nowrap">
              Help?
            </h2>
            <li>
            <Link
        href="/faq"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        FAQ
      </Link>
      </li>
      <li>
      <Link
        href="/terms-and-conditions"
        className="nav_link text-[20px] font-normal font-inter whitespace-nowrap hover:text-[#ff9f0d]"
      >
        Term & Conditions
      </Link>
      </li>
      <li>
      <Link
        href="/reporting"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Reporting
      </Link>
      </li>
      <li>
      <Link
        href="/documentation"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Documentation
      </Link>
      </li>
      <li>
      <Link
        href="/support-policy"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Support Policy
      </Link>
      </li>
      <li>
      <Link
        href="/privacy"
        className="nav_link text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
      >
        Privacy
      </Link>
      </li>
          </div>
          <div className="w-[143px] h-[367px] flex justify-start flex-col text-white">
            <h2 className="font-bold text-white text-[24px] font-roboto whitespace-nowrap">
              Recent Post
            </h2>
<div className="flex flex-col justify-center gap-[10px] relative top-[20px]">
            <div className="w-[244px] h-[53px] flex justify-between ">
              <div className="">
                {/* image */}
                <Image
                  src="/Mask Group.svg"
                  alt="food-image"
                  height={48}
                  width={59}
                  className="w-[59px] h-[48px]"
                />
              </div>
              <div className="w-[168px] h-[53px] flex flex-col justify-between">
                <p className="font-inter font-normal text-white/50 text-[16px]">
                  20 Feb 2022
                </p>
                <p className="text-white font-inter font-normal text-[18px] whitespace-nowrap">
                  Keep Your Business{" "}
                </p>
              </div>
            </div>
            <div className="w-[244px] h-[53px] flex justify-between">
              <div >
             
                <Image
                  src="/footer-1.svg"
                  alt="food-image"
                  height={48}
                  width={59}
                  className="w-[59px] h-[48px]"
                />
              </div>
              <div className="w-[168px] h-[53px] flex flex-col justify-between">
                <p className="font-inter font-normal text-white/50 text-[16px]">
                  20 Feb 2022
                </p>
                <p className="text-white font-inter font-normal text-[18px] whitespace-nowrap">
                  Keep Your Business{" "}
                </p>
              </div>
            </div>
            <div className="w-[244px] h-[53px] flex justify-between ">
              <div >
                
                <Image
                  src="/footer-2.svg"
                  alt="food-image"
                  height={48}
                  width={59}
                  className="w-[59px] h-[48px]"
                />
              </div>
              <div className="w-[168px] h-[53px] flex flex-col justify-between">
                <p className="font-inter font-normal text-white/50 text-[16px]">
                  20 Feb 2022
                </p>
                <p className="text-white font-inter font-normal text-[18px] whitespace-nowrap">
                  Keep Your Business{" "}
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-[1920px] h-[100px]  bg-[#4F4F4F] 
 text-white  flex items-center">
          <p className="w-[384px] h-[24px] absolute whitespace-nowrap left-[300px] text-[16px] font-inter font-normal">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="w-[240px] h-[34px] absolute left-[1420px] flex justify-between items-center">
            <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center">
              <FaFacebookF className=" text-[16px] text-[#4F4F4F] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out text-center" />
            </div>
            <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d]   hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaTwitter className=" text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
            <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaInstagram className=" text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
            <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaYoutube className=" text-[16px] text-[#FF9F0D] hover:text-[white] text-center " />
            </div>
            <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaPinterest className=" text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
          </div>
        </div>

        <Image src="/footer-leaf.svg" alt="image" height={294} width={244} className="h-[294px] w-[244px] absolute bottom-0 right-[-14px] "/>
        
      </footer>
    </>
  );
};

export default Footer;
