"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ToggleButton from "./ToggleButton";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-[1920px] h-[90px] bg-[#0D0D0D]">
      <nav className="w-[1320px] h-[32px] absolute top-[29px] left-[300px] ">
        <div className="w-[109px] h-[32px]">


          <h1 className="font-roboto font-bold text-[24px] leading-[32px] text-[#FFFFFF]">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </h1>
        </div>
        <ul className={`bg-black/70 absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:w-[508px] md:h-[24px] md:bg-transparent md:absolute md:translate-x-0 md:left-[451px] md:top-[4px]  flex md:flex-row justify-between items-center`}>
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className={`nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                pathName === "/" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              onClick={toggleMenu}
              className={`nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                pathName === "/menu" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className={`nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
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
              className={` nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                pathName === "/pages" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                pathName === "/about" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              onClick={toggleMenu}
              className={`nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                pathName === "/shop" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"

              onClick={toggleMenu}
              className={`nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                pathName === "/contact" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        
      
        <div className="absolute top-[4px] left-[1216px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ">
          <Image
            src="/Vector (1).svg"
            alt="search-vector"
            height={24}
            width={24}
            className="w-[24px] h-[24px] text-[#FFFFFF] cursor-pointer "
          />
        </div>
        <div className="absolute top-[4px] left-[1256px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
          <Image
            src="/User (1).svg"
            alt="user-vector"
            height={24}
            width={24}
            className="w-[24px] h-[24px] text-[#FFFFFF] cursor-pointer "
          />
        </div>
        <div className="absolute top-[4px] left-[1296px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
          <Image
            src="/Tote (1).svg"
            alt="Tote-vector"
            height={24}
            width={24}
            className="w-[24px] h-[24px] text-[#FFFFFF] cursor-pointer "
          />
        </div>

        <div className="xs:text-xl sm:text-3xl cursor-pointer z-50 md:hidden">
          <ToggleButton onClick={toggleMenu} isOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
