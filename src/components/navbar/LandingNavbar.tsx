"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import { PiHeart } from "react-icons/pi";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { UserCircle } from "lucide-react";

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
  const { isSignedIn } = useUser();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Update cart count
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    }
  }, []);

  // Update wishlist count and listen for changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistCount(wishlist.length);

      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === "wishlist") {
          const updatedWishlist = JSON.parse(event.newValue || "[]");
          setWishlistCount(updatedWishlist.length);
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, []);

  return (
    <header className="max-w-[1920px] w-full mx-auto">
      <div className="flex justify-center items-center w-full mx-auto">
        <nav className="max-w-[1320px] xl:w-[1320px] xlg:w-[1200px] h-[5.5rem] absolute top-[45px] lg:flex justify-between w-full md:px-11 z-[10] md:block hidden mx-auto">
          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Link
              href="/"
              className="text-[20px] lg:text-[22px] xlg:text-[24px] font-bold text-white font-inter flex"
            >
              Food<span className="text-[#FF9F0D]">tuck</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="w-full flex justify-start items-center">
            <ul className="h-auto w-auto hidden md:flex flex-row translate-x-0 md:w-[280px] lg:w-[350px] xl:w-[400px] xxxl:w-[470px] justify-between items-center relative lg:top-[-50px]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`nav_link font-inter font-normal md:text-[12px] lg:text-[14px] xl:text-[16px] absolute top-[48px] hover:text-[#FF9F0D] ${
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
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-4 xl:w-[400px] md:w-[300px] lg:w-[370px] relative lg:top-[20px] md:top-[40px] md:left-[30px] lg:left-0">
              {/* Search Bar */}
              <SearchBar />
              {/* Handbag Icon */}
                <Link href="/cart">
                  {cartCount > 0 && (
                    <div className="relative">
                      {/* Cart Icon */}
                      <Image
                        src="/Tote (1).svg"
                        alt="Tote-vector"
                        height={24}
                        width={24}
                        className="lg:w-[22px] xl:h-[24px] lg:h-[22px] w-[20px] h-[20px] text-[#FFFFFF] cursor-pointer"
                      />
                      {/* Cart Count */}
                      <span className="absolute -top-2 md:-top-3 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 md:w-4 md:h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    </div>
                  )}
                </Link>

              {/* Wishlist Icon */}
              <div className="relative  hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
          <Link href="/wishlist">
             <PiHeart className="xsm:w-[22px] xsm:h-[22px] w-[20px] h-[20px] text-white cursor-pointer "/>
             {wishlistCount > 0 && (
                  <span className="absolute top-[-9px]  right-[-10px] bg-red-500 text-white rounded-full text-[10px] font-helvetica w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
             </Link>
          </div>

              {/* User Button */}
              <div>
                {isSignedIn ? (
                  <UserButton />
                ) : (
                  <a href="/sign-in" className="text-white flex items-center gap-2">
                    <UserCircle size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-5 w-full bg-[#0D0D0D]">
        {!isSearchOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#FFFFFF] focus:outline-none"
          >
            {isOpen ? "" : <FaBars size={22} />}
          </button>
        )}
        {!isSearchOpen && (
          <div className="h-[32px] w-[90px] flex items-center justify-center">
            <Link
              href="/"
              className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10"
            >
              Food<span className="text-[#FF9F0D]">tuck</span>
            </Link>
          </div>
        )}

        {!isSearchOpen ? (
          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <button
              onClick={() => setIsSearchOpen(true)}
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
            <div className="relative">
                <Link href="/cart">
                  {cartCount > 0 && (
                    <div className="relative">
                      {/* Cart Icon */}
                      <Image
                        src="/Tote (1).svg"
                        alt="Tote-vector"
                        height={24}
                        width={24}
                        className="lg:w-[22px] xl:h-[24px] lg:h-[22px] w-[20px] h-[20px] text-[#FFFFFF] cursor-pointer"
                      />
                      {/* Cart Count */}
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    </div>
                  )}
                </Link>
              </div>

           
            {/* Wishlist Icon */}
            <Link href="/wishlist">
              <PiHeart className="h-[22px] w-[22px] text-white" />
              {wishlistCount > 0 && (
                <span className="absolute top-[20px] right-[50px] bg-red-500 text-white rounded-full text-[10px] font-helvetica w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
 {/* User Button */}
            <div>
           {isSignedIn ? (
             <UserButton />
           ) : (
             <a href="/sign-in" className="text-white flex items-center gap-2">
               <UserCircle size={22} />
             </a>
           )}
         </div>
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
            <SearchBar />
          </div>
        )}
      </div>

      {/* Mobile Menubar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0D0D0D] opacity-[70%] z-50 transform ${
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
                className={`nav_link font-inter font-normal hover:text-[#FF9F0D] ${
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