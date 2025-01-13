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
      <footer className=" md:w-[1920px] xl:w-[1484px] xxl:w-[1920px] w-[390px] h-[1300px] md:h-[774.15px] relative bg-black text-white flex justify-between gap-[20px] items-center flex-col">
        <div className="w-[300px] md:w-[1170px] md:h-[142.62px] h-[300px] absolute  md:left-[359px] xl:left-[150px] xxl:left-[359px] left-[10px] top-[50px] flex justify-between flex-col items-center">
          <div className="w-[300px] md:w-[1170px]  flex justify-between items-center h-[100px]">
            <div className="flex justify-center md:gap-[10px] flex-col">
              <h2 className=" font-helvetica font-bold text-[18px] md:text-[32px] text-[#ffffff] whitespace-nowrap md:leading-[40px] relative md:left-0 left-[50px]">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our
                Support?
              </h2>
              <p className="font-normal text-[12px] md:text-[16px] md:leading-[24px] font-helvetica text-[#ffffff] whitespace-nowrap relative top-[10px] md:top-0 md:left-0 left-[30px]">
                Dont wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>

            <form className="w-[80px] md:w-[459px] h-[40px] md:h-[55.86px] md:top-0 top-[70px] md:right-0 right-[280px] flex mx-auto relative">
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

          <div className="w-[250px] md:w-[1170px] border-b-[1px] border-[#FF9F0D] relative md:top-0 top-[-120px] md:left-0 left-[30px]"></div>
        </div>
        <div className="w-[150px] md:w-[1320px] h-[331px] relative top-[280px] xl:left-[-40px] xxl:left-0  flex justify-between xl:items-center xxl:justify-between items-center xl:px-10 xxl:px-0">
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
                <PiClockClockwise className="text-[#ffffff] w-[30px] h-[30px] md:h-[40px] md:w-[40px] food-rotate" />
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
          <div className="w-[70px] md:w-[143px] h-[367px] flex md:justify-between justify-center md:gap-0 gap-[10px] flex-col  text-white cursor-pointer list-none  relative md:top-0 top-[230px] md:right-0 right-[350px]">
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
          <div className="w-[70px] md:w-[143px] h-[367px] flex md:justify-between justify-center md:gap-0 gap-[10px] flex-col  text-white cursor-pointer list-none  relative md:top-0 top-[230px] md:right-0 right-[250px]">
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
          <div className="w-[70px] md:w-[143px] h-[367px] flex md:justify-between  justify-center gap-[140px] xl:justify-center xl:gap-[20px] xxl:justify-between flex-col  text-white cursor-pointer list-none relative md:top-0 xl:top-[-70px] xxl:top-0 top-[600px] md:right-0 right-[490px]">
            <h2 className="font-bold text-white text-[16px] md:text-[24px] font-helvetica whitespace-nowrap">
              Recent Post
            </h2>
            <div className="flex flex-col justify-center gap-[10px] relative md:top-[-120px] xl:top-[-10px] xxl:top-[-120px] top-[-110px]">
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
          className="w-[390px] md:w-[1920px] xl:w-[1484px] xxl:w-[1920px] h-[100px]  bg-[#4F4F4F] 
 text-white flex items-center md:flex-row flex-col"
        >
          <p className="md:w-[384px] h-[24px] relative md:absolute  whitespace-nowrap md:left-[300px] xl:left-[70px] xxl:left-[300px] text-[12px] md:text-[16px] font-inter font-normal md:px-0 px-10  md:top-[710px] top-[15px]">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="md:w-[240px] w-[175px] md:h-[34px] relative md:left-[1420px] xl:left-[1050px] xxl:left-[1420px] left-[-20px] flex justify-between items-center md:top-0 top-[30px]  ">
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d] flex items-center justify-center">
              <FaFacebookF className=" text-[16px] text-[#4F4F4F] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d]   hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaTwitter className=" text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center md:gap-0 gap-5">
              <FaInstagram className=" text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaYoutube className=" text-[16px] text-[#FF9F0D] hover:text-[white] text-center " />
            </div>
            <div className="md:w-[36px] md:h-[34px] w-[28px] h-[28px] rounded-[2px] bg-white hover:bg-[#ff9f0d]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center">
              <FaPinterest className=" text-[16px] text-[#4F4F4F] hover:text-[white] text-center" />
            </div>
          </div>
        </div>

       
      </footer>
    </>
  );
};

export default Footer;
