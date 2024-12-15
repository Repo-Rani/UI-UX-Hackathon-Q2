"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ToggleButton from "./ToggleButton";

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className=" max-w-[1920]  xsm:w-[1320px]  h-[87px] absolute top-[45px] left-[300px] bg-blue-300 z-[10]">
        <div className="  h-[32px] w-[109px] absolute left-[605px] flex items-center">
          <Link
            href="/"
            className="text-[24px] sm:text-[24px] leading-[32px] font-bold text-white font-inter w-[109px] h-[32px]  z-10"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        <div className="absolute left-[1296px] top-[47px]">
          <Image
            src="/Handbag.svg"
            alt="bag-image"
            width={20}
            height={20}
            className="w-[24px] h-[24px]"
          />
        </div>

        <ul
  className={`bg-black/70 fixed top-0 left-0 h-screen w-[1920px] flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-[100] ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  } xsm:relative xsm:h-auto xsm:w-auto xsm:flex-row xsm:translate-x-0`}
>
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className={` nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-0 hover:text-[#FF9F0D] ${
                pathName === "/" ? " text-[#FF9F0D]" : "text-[#FFFFFF] "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              onClick={toggleMenu}
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[77px]  hover:text-[#FF9F0D]
          ${pathName === "/menu" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"}`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[152px]  hover:text-[#FF9F0D] ${
                pathName === "/blog" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              onClick={toggleMenu}
              className={` nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[218px]  hover:text-[#FF9F0D] ${
                pathName === "/pages" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Pages
            </Link>
          </li>
          <div className="flex gap-[4px]">
            <li onClick={toggleMenu} className="flex gap-[10px]">
              <Link
                href="/about"
                className={` nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[297px] ] hover:text-[#FF9F0D] ${
                  pathName === "/about" ? " text-[#FF9F0D]" : "text-[#FFFFFF"
                }`}
              >
                About
              </Link>
              <Image
                src="/Vector (8).svg"
                alt="dropdown"
                height={10}
                width={10}
                className="w-[12px] h-[12px]  transform rotate-0 active:-rotate-90 absolute top-[56px] left-[346px] "
              />
            </li>
          </div>
          <li>
            <Link
              href="/shop"
              onClick={toggleMenu}
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[375px] text-[#FFFFFF] hover:text-[#FF9F0D] ${
                pathName === "/shop" ? " text-[#FF9F0D]" : ""
              }`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={` nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[446px] text-[#FFFFFF] hover:text-[#FF9F0D] ${
                pathName === "/contact" ? " text-[#FF9F0D]" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="border-[1px] border-[#FF9F0D] w-[310px] h-[54px] absolute top-[33px] left-[978px] rounded-[27px] flex items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="font-inter font-normal bg-transparent border-none outline-none   text-[16px] leading-[24px] text-[#FFFFFF]"
          />
          <Image
            src="/Vector (1).svg"
            alt="search-vector"
            width={10}
            height={10}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>

        <div className="text-3xl cursor-pointer z-50 xsm:hidden">
          <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
