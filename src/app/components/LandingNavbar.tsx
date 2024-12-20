"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header>
      <nav className="max-w-[1920px] w-[1320px] h-[87px] absolute top-[45px] left-[300px] z-[10]">
        {/* Logo */}
        <div className="h-[32px] w-[109px] absolute left-[605px] flex items-center">
          <Link
            href="/"
            className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        {/* Handbag Icon */}
        <div className="absolute left-[1296px] top-[47px]">
        <Link href="/cart">
          <Image
            src="/Tote (1).svg"
            alt="Tote-vector"
            height={24}
            width={24}
            className="w-[24px] h-[24px] text-[#FFFFFF] cursor-pointer "
          />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="relative h-auto w-auto hidden xsm:flex flex-row translate-x-0">
          <li>
            <Link
              href="/"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-0 hover:text-[#FF9F0D] ${
                pathName === "/" ? " text-[#FF9F0D]" : "text-[#FFFFFF] "
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[77px] hover:text-[#FF9F0D] ${
                pathName === "/menu" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[152px] hover:text-[#FF9F0D] ${
                pathName === "/blog" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[218px] hover:text-[#FF9F0D] ${
                pathName === "/pages" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[297px] hover:text-[#FF9F0D] ${
                pathName === "/about" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[375px] hover:text-[#FF9F0D] ${
                pathName === "/shop" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`nav_link font-inter font-normal text-[16px] leading-[24px] absolute top-[48px] left-[446px] hover:text-[#FF9F0D] ${
                pathName === "/contact" ? " text-[#FF9F0D]" : "text-[#FFFFFF]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="absolute top-[20px] left-[20px] xsm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <RxCross2 className="w-[24px] h-[24px]"
              />
            ) : (
              <IoMenu className="w-[24px] h-[24px]"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-[87px] left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 z-20">
            <li>
              <Link href="/" className="hover:text-[#FF9F0D]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-[#FF9F0D]">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#FF9F0D]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-[#FF9F0D]">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#FF9F0D]">
                About
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#FF9F0D]">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FF9F0D]">
                Contact
              </Link>
            </li>
          </ul>
        )}

        {/* Search Bar */}
        <div className="border-[1px] border-[#FF9F0D] w-[310px] h-[54px] absolute top-[33px] left-[978px] rounded-[27px] flex items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="font-inter font-normal bg-transparent border-none outline-none text-[16px] leading-[24px] text-[#FFFFFF]"
          />
          <Image
            src="/Vector (1).svg"
            alt="search-vector"
            width={10}
            height={10}
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
