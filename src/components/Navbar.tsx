"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full   md:h-[90px]  bg-[#0D0D0D]  z-50">
      <div className="flex justify-center items-center w-full mx-auto">
        <nav className="max-w-[1320px] xxl:w-[1320px] xl:w-[1200px] lg:w-[950px] md:w-[750px] md:h-[32px] md:px-5 lg:px-0 absolute top-[29px]  xxxl:left-[300px] mx-auto ">
          <div className="md:w-[109px] md:h-[32px] md:flex  hidden">
            <h1 className="font-helvetica font-bold text-[22px] lg:text-[24px]  text-[#FFFFFF]">
              Food<span className="text-[#FF9F0D]">tuck</span>
            </h1>
          </div>
          <ul className="w-[400px] lg:w-[450px] xl:w-[508px] h-[24px] bg-transparent absolute translate-x-0 md:left-[180px] lg:left-[230px] xl:left-[350px] xxl:left-[400px] xxxl:left-[451px] top-[4px] hidden md:flex flex-row justify-between items-center">
            <li>
              <Link
                href="/"
                className={`nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/menu" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/blog" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className={` nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/pages" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/about" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/shop" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === "/contact" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="absolute top-[4px]  md:left-[640px] xl:left-[1080px] xxl:left-[1120px] lg:left-[800px]  xxxl:left-[1216px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ">
            <Image
              src="/Vector (1).svg"
              alt="search-vector"
              height={24}
              width={24}
              className="lg:w-[24px] lg:h-[24px] h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer "
            />
          </div>
          <div className="absolute top-[4px] xl:left-[1120px] xxl:left-[1160px] md:left-[675px] lg:left-[845px] xxxl:left-[1256px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
            <Link href="/signup">
              <Image
                src="/User (1).svg"
                alt="user-vector"
                height={24}
                width={24}
                className="lg:w-[24px] lg:h-[24px] h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer "
              />
            </Link>
          </div>
          <div className="absolute top-[4px] md:left-[710px] xl:left-[1160px] xxl:left-[1200px] lg:left-[885px] xxxl:left-[1296px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
            <Link href="/cart">
              <Image
                src="/Tote (1).svg"
                alt="Tote-vector"
                height={24}
                width={24}
                className="lg:w-[24px] lg:h-[24px] h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer "
              />
            </Link>
          </div>
        </nav>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 py-5 w-full bg-[#0D0D0D] ">
        <div className="  flex items-center">
          <Link
            href="/"
            className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10 relative left-[10px] sm:left-[25px]"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FFFFFF] focus:outline-none relative right-3 "
        >
          {isOpen ? "" : <FaBars size={22} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0D0D0D] opacity-[70%]  z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#FFFFFF] focus:outline-none"
          >
            <FaTimes size={20} className="mr-[10px]" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10">
          {[
            { name: "Home", href: "/" },
            { name: "Menu", href: "/menu" },
            { name: "Blog", href: "/blog" },
            { name: "Pages", href: "/pages" },
            { name: "About", href: "/about" },
            { name: "Shop", href: "/shop" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={` nav_link text-[16px] font-bold hover:text-[#FF9F0D] ${
                  pathName === item.href ? "text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
