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

    
    <header className="md:w-[1920px] xl:w-[1484px] xxl:w-[1920px] w-[390px] md:h-[90px]  bg-[#0D0D0D]  z-50">
      <nav className="md:w-[1320px]  md:h-[32px]  absolute top-[29px] md:left-[300px] xl:left-[100px] xxl:left-[300px] ">
        <div className="md:w-[109px] md:h-[32px] md:flex  hidden">


          <h1 className="font-helvetica font-bold text-[24px]  text-[#FFFFFF]">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </h1>
        </div>
        <ul className="w-[508px] h-[24px] bg-transparent absolute translate-x-0 left-[451px] top-[4px] hidden md:flex flex-row justify-between items-center">
          <li>
            <Link
              href="/"
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

          <Link href="/signup">
          <Image
            src="/User (1).svg"
            alt="user-vector"
            height={24}
            width={24}
            className="w-[24px] h-[24px] text-[#FFFFFF] cursor-pointer "
          />
          </Link>
        </div>
        <div className="absolute top-[4px] left-[1296px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
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




        
      </nav>


      <div className="md:hidden flex items-center justify-between px-4 py-5 bg-[#0D0D0D] ">

<div className="h-[32px] w-[109px]  flex items-center">
    <Link
      href="/"
      className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
    >
      Food<span className="text-[#FF9F0D]">tuck</span>
    </Link>
    <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FFFFFF] focus:outline-none relative left-[230px]"
        >
          {isOpen ? "" : <FaBars size={22} />}
        </button>
      </div>
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
