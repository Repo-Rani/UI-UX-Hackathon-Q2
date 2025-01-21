"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const LandingNavbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-[1920px] w-full mx-auto ">
      <div className="flex justify-center items-center w-full mx-auto">
        <nav className=" max-w-[1320px] xxl:w-[1320px] xl:w-[1200px]  lg:w-[980px] md:w-[750px]  h-[5.5rem] absolute top-[45px] xxxl:left-[300px] xxl:left-[140px] xl:left-[60px] lg:flex justify-between items center  w-full  md:px-4  xl:px-8 xxl:px-0 z-[10]  md:block hidden mx-auto">
          {/* Logo */}
          <div className="h-[32px] w-[109px] absolute md:top-[-5px] lg:top-0 left-[370px] lg:left-[460px] xxxl:left-[580px] xl:left-[620px]  flex items-center">
            <Link
              href="/"
              className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
            >
              Food<span className="text-[#FF9F0D]">tuck</span>
            </Link>
          </div>

          {/* Handbag Icon */}
          <div className="absolute xxxl:left-[1150px] xl:left-[1296px] lg:left-[910px] md:left-[730px] top-[40px] xxl:top-[47px]">
            <Link href="/cart">
              <Image
                src="/Tote (1).svg"
                alt="Tote-vector"
                height={24}
                width={24}
                className="lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]  text-[#FFFFFF] cursor-pointer "
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="relative h-auto w-auto hidden md:flex flex-row translate-x-0 md:w-[280px] lg:w-[350px]  xl:w-[450px]   xxxl:w-0 justify-between ">
            <li>
              <Link
                href="/"
                className={`nav_link font-inter font-normal md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-0 hover:text-[#FF9F0D] ${
                  pathName === "/" ? " text-[#FF9F0D]" : "text-[#FFFFFF] "
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`nav_link font-inter font-normal md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-[77px] hover:text-[#FF9F0D] ${
                  pathName === "/menu" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`nav_link font-inter font-normal  md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-[152px] hover:text-[#FF9F0D] ${
                  pathName === "/blog" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className={`nav_link font-inter font-normal md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-[218px] hover:text-[#FF9F0D] ${
                  pathName === "/pages" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav_link font-inter font-normal  md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-[297px] hover:text-[#FF9F0D] ${
                  pathName === "/about" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`nav_link font-inter font-normal  md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-[375px] hover:text-[#FF9F0D] ${
                  pathName === "/shop" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav_link font-inter font-normal md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[24px] absolute top-[48px] xxxl:left-[446px] hover:text-[#FF9F0D] ${
                  pathName === "/contact" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="border-[1px] border-[#FF9F0D] xl:w-[310px] lg:w-[200px] md:w-[150px] h-[35px] xl:h-[54px] absolute top-[33px] xxxl:left-[820px]  xxl:left-[978px] xl:left-[900px] lg:left-[700px] left-[570px] rounded-[27px] flex items-center justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="font-inter xl:w-[240px] lg:w-[150px] md:w-[100px] font-normal bg-transparent border-none outline-none text-[14px] xxxl:text-[16px] leading-[24px] text-[#FFFFFF]"
            />
            <Image
              src="/Vector (1).svg"
              alt="search-vector"
              width={10}
              height={10}
              className="xl:w-[24px] xl:h-[24px] lg:w-[20px] lg:h-[20px] w-[18px] h-[18px] cursor-pointer"
            />
          </div>
        </nav>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 py-5 w-full bg-[#0D0D0D] ">
        <div className="h-[32px] w-[109px]  flex items-center">
          <Link
            href="/"
            className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FFFFFF] focus:outline-none "
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

export default LandingNavbar;
