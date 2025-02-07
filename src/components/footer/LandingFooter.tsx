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
    <footer className="ms:w-full w-[320px] bg-blue-300 text-white flex flex-col items-center py-10">
    {/* Top Section */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-10 px-4 sm:px-8">
      <div className="text-center md:text-left">
        <h2 className="font-helvetica font-bold text-[18px] sm:text-[24px] md:text-[32px] text-white">
          <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
        </h2>
        <p className="font-helvetica text-[12px] md:text-[16px] text-white mt-2">
          Don't wait, make a smart & logical quote here. It's pretty easy.
        </p>
      </div>
      <form className="w-full  h-[40px] md:h-[55.86px] flex gap-2">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-[#FF9F0D] placeholder-[#ffffff] rounded-[4px] text-xs md:text-[16px] placeholder-opacity-[59%] px-2 md:px-4 py-1 md:py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-[#FF9F0D] font-inter px-4 md:px-6 py-1 md:py-2 rounded-[4px] font-semibold hover:bg-[#FF9F0D] hover:text-white whitespace-nowrap text-xs md:text-[16px] transition-all duration-300 mr-[10px]"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  
    {/* Divider */}
    <div className="w-full border-b-[1px] border-[#FF9F0D] my-6 sm:my-10 px-4 sm:px-8"></div>
  
    {/* Middle Section */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-8">
      {/* About Us */}
      <div>
        <h2 className="text-[16px] md:text-[24px] font-bold font-helvetica mb-4">
          About Us
        </h2>
        <p className="font-inter text-[12px] md:text-[16px] text-white mb-6">
          Corporate clients and leisure travelers have been relying on Groundlink
          for dependable, safe, and professional chauffeured car service in major
          cities across the world.
        </p>
        <div className="flex gap-4">
          <div className="w-[50px] h-[50px] md:w-[78px] md:h-[72px] bg-[#FF9F0D] flex justify-center items-center">
            <PiClockClockwise className="text-white w-[30px] h-[30px]" />
          </div>
          <div>
            <h2 className="font-inter text-[18px] text-white font-normal">
              Opening Hours
            </h2>
            <p className="text-[10px] md:text-[14px] text-white font-inter">
              Mon - Sat (8.00 - 6.00)
            </p>
            <p className="text-[10px] md:text-[14px] text-white font-inter">
              Sunday - Closed
            </p>
          </div>
        </div>
      </div>
  
      {/* Useful Links */}
      <div>
        <h2 className="text-[16px] md:text-[24px] font-bold font-helvetica mb-4">
          Useful Links
        </h2>
        <ul className="space-y-2">
          {["About", "News", "Partners", "Team", "Menu", "Contact"].map(
            (link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-[12px] md:text-[16px] font-inter hover:text-[#FF9F0D]"
                >
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
  
      {/* Help */}
      <div>
        <h2 className="text-[16px] md:text-[24px] font-bold font-helvetica mb-4">
          Help?
        </h2>
        <ul className="space-y-2">
          {[
            "FAQ",
            "Terms & Conditions",
            "Reporting",
            "Documentation",
            "Support Policy",
            "Privacy",
          ].map((link, index) => (
            <li key={index}>
              <Link
                href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-[12px] md:text-[16px] font-inter hover:text-[#FF9F0D]"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  
      {/* Recent Posts */}
      <div>
        <h2 className="text-[16px] md:text-[24px] font-bold font-helvetica mb-4">
          Recent Posts
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((post, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-[59px] h-[48px] relative">
                <Image
                  src={`/footer-${index}.svg`}
                  alt="Post Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div>
                <p className="font-inter text-[14px] text-white/50">20 Feb 2022</p>
                <p className="font-inter text-[16px] text-white">
                  Keep Your Business
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="w-full bg-[#FF9F0D] mt-10 py-4">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-8">
        <p className="text-[12px] md:text-[16px] font-inter text-white mb-4 md:mb-0">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-[24px] h-[24px] md:w-[36px] md:h-[34px] bg-white rounded-[2px] flex items-center justify-center hover:bg-[#FF9F0D] transition-all duration-300"
              >
                <Icon className="text-[#4F4F4F] hover:text-white text-[12px] sm:text-[16px]" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;