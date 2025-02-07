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
      <footer className="w-full h-[1300px] md:h-[774.15px] relative bg text-white flex justify-between gap-[20px] items-center flex-col">
        
        <div className="w-[260px] ms:w-[300px] md:w-[1170px] md:h-[142.62px] h-[300px] absolute md:left-[359px] xl:left-[150px] xxl:left-[359px] left-[10px] top-[50px] flex justify-between flex-col items-center">
          <div className="w-[200px] ms:w-[300px] md:w-[1170px] flex justify-between items-center h-[100px]">
            <div className="flex justify-center md:gap-[10px] flex-col">
              <h2 className="font-helvetica font-bold text-[18px] md:text-[32px] text-[#ffffff] whitespace-nowrap md:leading-[40px] relative md:left-0 xs:left-[10px] ms:left-[50px]">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our
                Support?
              </h2>
              <p className="font-normal text-[10px] ms:text-[12px] md:text-[16px] md:leading-[24px] font-helvetica text-[#ffffff] whitespace-nowrap relative top-[10px] md:top-0 md:left-0 ms:left-[30px]">
                Dont wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>

            <form className="w-[80px] md:w-[459px] h-[40px] md:h-[55.86px] md:top-0 top-[70px] md:right-0 xs:right-[280px] ms:right-[280px] flex mx-auto relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow bg-[#FF9F0D] placeholder-[#ffffff] rounded-[4px] md:text-[16px] text-xs placeholder-opacity-[59%] px-[6px] md:px-4 py-1 md:py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#FF9F0D] font-inter px-2 md:px-6 py-1 md:py-2 rounded-[4px] font-semibold hover:bg-[#FF9F0D] hover:text-white whitespace-nowrap md:text-[16px] text-xs transition-all duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          <div className="w-[250px] md:w-[1170px] border-b-[1px] border-[#FF9F0D] relative md:top-0 top-[-120px] md:left-0 left-[30px]"></div>
        </div>

        <div className="w-[150px] md:w-[1320px] h-[331px] relative top-[280px] left-0 xl:left-[-40px] xxl:left-0 flex justify-between xl:items-center xxl:justify-between items-center xl:px-10 xxl:px-0">
          {/* Rest of your content */}
        </div>

        <div className="ms:w-[390px] xs:w-[320px] w-full h-[100px] bg-[#ff9f0d] text-white flex items-center md:flex-row flex-col">
          <p className="md:w-[384px] w-[300px] h-[24px] relative md:absolute whitespace-nowrap xxxl:left-[300px] xl:left-[70px] xxl:left-[300px] text-[12px] left-[-30px] md:text-[16px] font-inter font-normal md:px-0 px-10 md:top-[710px] top-[15px]">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="md:w-[240px] w-[175px] md:h-[34px] relative md:left-[1420px] xl:left-[1050px] xxl:left-[1420px] left-[-20px] flex justify-between items-center md:top-0 top-[30px]">
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center">
              <FaFacebookF className="text-[16px] text-[#4F4F4F] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaTwitter className="text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center md:gap-0 gap-5">
              <FaInstagram className="text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaYoutube className="text-[16px] text-[#FF9F0D] hover:text-[white] text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaPinterest className="text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
          </div>
        </div>

        <Image
          src="/footer-leaf.svg"
          alt="image"
          height={294}
          width={244}
          className="w-[120px] h-[148px] md:h-[294px] md:w-[244px] xl:w-[200px] xl:h-[250px] xxl:w-[244px] xxl:h-[294px] absolute bottom-0 ms:right-0 right-[0px] md:right-[-14px]"
        />
      </footer>
    </>
  );
};

export default Footer;