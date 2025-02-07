"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { PiHeart } from "react-icons/pi";
import SearchBar from "./SearchBar";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/blog", label: "Blog" },
  { href: "/pages", label: "Pages" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];


const LandingNavbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  


  return (
    <header className="max-w-[1920px] w-full mx-auto  ">
      <div className="flex justify-center items-center w-full mx-auto ">
        <nav className="  max-w-[1320px] xl:w-[1320px]  xlg:w-[1200px]   h-[5.5rem] absolute top-[45px]  lg:flex justify-between   w-full  md:px-11  z-[10]  md:block hidden mx-auto">
          
          {/* Logo */}
          <div className=" absolute w-full flex justify-center  items-center  ">
            <Link
              href="/"
              className=" h-[32px] w-[109px] text-[20px] lg:text-[22px] xlg:text-[24px] font-bold text-white font-inter  z-10 flex justify-"
            >
              Food<span className="text-[#FF9F0D]">tuck</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="w-full flex justify-start items-center ">
          <ul className=" h-auto w-auto hidden md:flex flex-row translate-x-0 md:w-[280px] lg:w-[350px]  xl:w-[400px]   xxxl:w-[470px] justify-between items-center relative lg:top-[-50px] ">

          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`nav_link font-inter font-normal md:text-[12px] lg:text-[14px] xl:text-[16px]  absolute top-[48px]  hover:text-[#FF9F0D] ${
                  pathName === item.href ? "text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
           
          </ul>
          </div>

          {/* Search Bar */}
<div className="w-full flex justify-end ">
          <div className="flex items-center  gap-2 lg:gap-3 xl:w-[350px] md:w-[230px] lg:w-[270px] relative lg:top-[10px] md:top-[40px]">
  {/* Search Bar */}
  
<SearchBar/>
  {/* Handbag Icon */}
  <Link href="/cart">
    <Image
      src="/Tote (1).svg"
      alt="Tote-vector"
      height={24}
      width={24}
      className="lg:w-[22px] xl:h-[24px] lg:h-[22px] w-[20px] h-[20px] text-[#FFFFFF] cursor-pointer"
    />
  </Link>
  <Link href="/wishlist">
  <PiHeart className="h-[24px] w-[24px] text-white "/>
  </Link>
</div>
</div>
        </nav>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden flex items-center justify-between px-4 py-5 w-full bg-[#0D0D0D] ">
      {!isSearchOpen && (

      <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FFFFFF] focus:outline-none "
        >
          {isOpen ? "" : <FaBars size={22} />}
        </button>
              )}
               {!isSearchOpen && (
        <div className="h-[32px] w-[90px] ml-8 flex items-center justify-center">
          <Link
            href="/"
            className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>
       )}
       
       {!isSearchOpen ? (
        <div className="flex items-center gap-3  ">
    {/* Search Bar */}
    
    <button
  onClick={() => {
    setIsSearchOpen(true);
   
  }}
  className="cursor-pointer"
>
  <Image
    src="/Vector (1).svg"
    alt="search-vector"
    width={20}
    height={20}
  />
</button>
    

    {/* Handbag Icon */}
    <Link href="/cart">
      <Image
        src="/Tote (1).svg"
        alt="Tote-vector"
        height={22}
        width={22}
        className="  cursor-pointer"
      />
    </Link>
    <Link href="/wishlist">
    <PiHeart className="h-[22px] w-[22px] text-white "/>
    </Link>
  </div>
  ) : (
    // Full-Screen Search Bar
    
    <div
      className={`w-full h-[60px] bg-[#0D0D0D] flex items-center px-4 transition-all duration-300 ease-in-out ${
        isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsSearchOpen(false)}
        className="text-[#FFFFFF] mr-4"
      >
        <FaTimes size={22} />
      </button>

      {/* Search Input */}
     <SearchBar/>
    </div>
  )}
</div>
 {/* Mobile Menubar */}
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
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`nav_link font-inter font-normal   hover:text-[#FF9F0D] ${
                  pathName === item.href ? "text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default LandingNavbar;
