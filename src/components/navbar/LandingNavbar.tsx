"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { PiHeart } from "react-icons/pi";
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
      <div className="flex justify-center items-center w-full mx-auto">
        <nav className=" max-w-[1320px] xl:w-[1320px]  h-[5.5rem] absolute top-[45px]  lg:flex justify-between   w-full  md:px-8  z-[10]  md:block hidden mx-auto">
          
          {/* Logo */}
          <div className="h-[32px] w-[109px] absolute md:top-[-5px] lg:top-0   xxl:left-[605px] xl:left-[555px] lg:left-[500px] md:left-[350px]">
            <Link
              href="/"
              className="text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
            >
              Food<span className="text-[#FF9F0D]">tuck</span>
            </Link>
          </div>

         
          {/* Desktop Menu */}
          <ul className="relative h-auto w-auto hidden md:flex flex-row translate-x-0 md:w-[280px] lg:w-[350px]  xl:w-[400px]   xxxl:w-[470px] justify-between items-center ">

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

          {/* Search Bar */}

          <div className="flex items-center gap-2 lg:gap-3 xl:w-[350px] md:w-[230px] lg:w-[270px] relative lg:top-[10px] md:top-[40px] md:left-[470px] xxl:left-[-20px] lg:left-0 xl:left-0">
  {/* Search Bar */}
  <div className="border-[1px] border-[#FF9F0D] xl:w-[310px] lg:w-[200px] md:w-[180px] h-[40px] lg:h-[45px] xl:h-[54px] rounded-[27px] flex items-center justify-between lg:px-8 xl:px-4 px-4">
    <input
      type="text"
      placeholder="Search..."
      className="font-inter xl:w-[240px] lg:w-[130px] md:w-[100px] font-normal bg-transparent border-none outline-none text-[14px] xxxl:text-[16px]  text-[#FFFFFF]"
    />
    <Image
      src="/Vector (1).svg"
      alt="search-vector"
      width={24}
      height={24}
      className="cursor-pointer xl:h-[24px] xl:w-[24px] w-[22px] h-[22px]"
    />
     
  </div>

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
  <PiHeart className="h-[24px] w-[24px] text-white "/>
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
        <div className="h-[32px] w-[90px]  flex items-center justify-center">
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

    <PiHeart className="h-[22px] w-[22px] text-white "/>
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
      <div className="flex-1 border-[1px] border-[#FF9F0D] h-[40px] rounded-[27px] flex items-center px-4 ">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 font-inter font-normal bg-transparent border-none outline-none text-[14px] text-[#FFFFFF]"
        />
        <Image
          src="/Vector (1).svg"
          alt="search-vector"
          width={20}
          height={20}
          className="cursor-pointer relative ms:right-0 right-4"
        />
      </div>
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
