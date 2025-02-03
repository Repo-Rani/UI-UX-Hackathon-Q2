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
      <footer className=" w-full h-[1300px] md:h-[700px]  bg-red-500 text-white  ">
        <div className="w-full xl:w-[1170px] md:h-[142.62px] h-[300px] absolute  top-[50px] flex justify-between flex-col items-center"> 
           <div className="w-full xl:w-[1170px] flex justify-between items-center h-[100px]">
           
             <div className="flex justify-center md:gap-[10px] flex-col">
              <h2 className=" font-helvetica font-bold text-[18px] md:text-[32px] text-[#ffffff] whitespace-nowrap md:leading-[40px] relative ">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our
                Support?
              </h2>
              <p className="font-normal text-[12px] md:text-[16px] md:leading-[24px] font-helvetica text-[#ffffff] whitespace-nowrap relative top-[10px] md:top-0 ">
                Dont wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div> 

            <form className="w-[80px] md:w-[459px] h-[40px] md:h-[55.86px] md:top-0 top-[70px] left-[-250px] flex mx-auto relative">
  <input
    type="email"
    placeholder="Enter Your Email"
    className="flex-grow bg-[#FF9F0D] placeholder-[#ffffff] rounded-[4px] md:text-[16px] text-xs placeholder-opacity-[59%] px-[6px] md:px-4 py-1 md:py-2 focus:outline-none "
  />
  <button
    type="submit"
    className="bg-white text-[#FF9F0D] font-inter px-2 md:px-6 py-1 md:py-2 rounded-[4px] font-semibold hover:bg-[#FF9F0D] hover:text-white whitespace-nowrap  md:text-[16px] text-xs transition-all duration-300"
  >
    Subscribe Now
  </button>
</form>

          </div>

          <div className="w-full border-b-[1px] border-[#FF9F0D] relative md:top-0 top-[-120px] "></div>
        </div>
        <div className="w-full h-[331px] relative top-[280px]  flex justify-between items-center md:flex-row flex-col ">
          <div className="flex justify-center relative top-[-55px] md:right-0 right-[90px] gap-[10px] md:gap-[20px]  flex-col">
            <h2 className="text-[16px] md:text-[24px] font-bold text-white font-helvetica">
              About Us
            </h2>
            <p className="font-inter font-normal text-white text-[12px] md:text-[16px] w-[312px]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex gap-[14px]">
              <div className="md:w-[78px] md:h-[72px] w-[50px] h-[50px] bg-[#FF9F0D] flex justify-center items-center ">
                <PiClockClockwise className="text-[#ffffff] w-[30px] h-[30px] md:h-[40px] md:w-[40px] rotatePlate" />
              </div>
              <div className="w-[149px] h-[74px] flex justify-between flex-col">
                <h2 className="font-inter text-[18px] text-white font-normal">
                  Opening Houres
                </h2>
                <p className="text-[10px] md:text-[14px] text-white font-inter font-normal">
                  Mon - Sat(8.00 - 6.00)
                </p>
                <p className="text-[10px] md:text-[14px] text-white font-inter font-normal">
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
          <div className="w-[70px] md:w-[143px] h-[367px] flex md:justify-between justify-center md:gap-0 gap-[10px] flex-col  text-white cursor-pointer list-none  relative  ">
            <h2 className="font-bold text-[16px] md:text-[24px] font-helvetica  whitespace-nowrap">
              Useful Links
            </h2>

            <li>
              <Link
                href="/about"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Contact
              </Link>
            </li>
          </div>
          <div className="w-[70px] md:w-[143px] h-[367px] flex md:justify-between justify-center md:gap-0 gap-[10px] flex-col  text-white cursor-pointer list-none  ">
            <h2 className="font-bold text-[16px]  md:text-[24px] font-helvetica  whitespace-nowrap">
              Help?
            </h2>
            <li>
              <Link
                href="/faq"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter whitespace-nowrap hover:text-[#ff9f0d]"
              >
                Term & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/reporting"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Reporting
              </Link>
            </li>
            <li>
              <Link
                href="/documentation"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/support-policy"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d] whitespace-nowrap"
              >
                Support Policy
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="nav_link text-[12px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d]"
              >
                Privacy
              </Link>
            </li>
          </div>
          <div className="w-[70px] md:w-[143px] h-[367px] flex md:justify-between  justify-center gap-[140px] xl:justify-center xl:gap-[20px] xxl:justify-between flex-col  text-white cursor-pointer list-none ">
            <h2 className="font-bold text-white text-[16px] md:text-[24px] font-helvetica whitespace-nowrap">
              Recent Post
            </h2>
            <div className="flex flex-col justify-center gap-[10px] relative md:top-[-120px] xl:top-[-10px] xxl:top-[-120px] top-[-110px]">
                        <div className="w-[244px] h-[53px] flex justify-between ">
                          <div className="">
                          
                            <Image
                              src="/Mask Group.svg"
                              alt="food-image"
                              height={48}
                              width={59}
                              className="w-[59px] h-[48px]"
                            />
                          </div>
                          <div className="w-[168px] h-[53px] flex flex-col justify-between">
                            <p className="font-inter font-normal text-white/50  md:text-[16px] text-[14px]">
                              20 Feb 2022
                            </p>
                            <p className="text-white font-inter font-normal md:text-[18px] text-[16px] whitespace-nowrap">
                              Keep Your Business{" "}
                            </p>
                          </div>
                        </div>
                        <div className="w-[244px] h-[53px] flex justify-between">
                          <div>
                            <Image
                              src="/footer-1.svg"
                              alt="food-image"
                              height={48}
                              width={59}
                              className="w-[59px] h-[48px]"
                            />
                          </div>
                          <div className="w-[168px] h-[53px] flex flex-col justify-between">
                            <p className="font-inter font-normal text-white/50  md:text-[16px] text-[14px]">
                              20 Feb 2022
                            </p>
                            <p className="text-white font-inter font-normal md:text-[18px] text-[16px] whitespace-nowrap">
                              Keep Your Business{" "}
                            </p>
                          </div>
                        </div>
                        <div className="w-[244px] h-[53px] flex justify-between ">
                          <div>
                            <Image
                              src="/footer-2.svg"
                              alt="food-image"
                              height={48}
                              width={59}
                              className="w-[59px] h-[48px]"
                            />
                          </div>
                          <div className="w-[168px] h-[53px] flex flex-col justify-between">
                            <p className="font-inter font-normal text-white/50  md:text-[16px] text-[14px]">
                              20 Feb 2022
                            </p>
                            <p className="text-white font-inter font-normal md:text-[18px] text-[16px] whitespace-nowrap">
                              Keep Your Business{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        <div
          className="w-full h-[100px]  bg-[#4F4F4F] 
 text-white  flex items-center"
        >
          <div className="flex justify-between items-center w-full px-10">
    <p className="text-[12px] md:text-[16px] font-inter font-normal whitespace-nowrap">
      Copyright © 2022 by Rani. All Rights Reserved.
    </p>
    
    <div className="flex justify-between items-center w-[240px]">
      <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <FaFacebookF className="text-[16px] text-[#4F4F4F] hover:text-white" />
      </div>
      <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <FaTwitter className="text-[16px] text-[#4F4F4F] hover:text-white" />
      </div>
      <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <FaInstagram className="text-[16px] text-[#4F4F4F] hover:text-white" />
      </div>
      <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <FaYoutube className="text-[16px] text-[#FF9F0D] hover:text-white" />
      </div>
      <div className="w-[36px] h-[34px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <FaPinterest className="text-[16px] text-[#4F4F4F] hover:text-white" />
      </div>
    </div>
  </div>
</div>
       
      </footer>
    </>
  );
};

export default Footer;