"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { PiHeart } from "react-icons/pi";
import NavSearchBar from "./NavSearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { useSession, signOut } from "next-auth/react";
import { UserCircle } from "lucide-react"; 





const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "/pages" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
]
const Navbar = () => {
  const { isSignedIn } = useUser()

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

    // For Desktop
    <header className="w-full md:fixed md:h-[90px]  bg-[#0D0D0D]  z-50">
      <div className="flex justify-center items-center w-full mx-auto">
        
        <nav className="max-w-[1320px] xxl:w-[1320px] xl:w-[1200px] lg:w-[880px] md:w-[700px] md:h-[32px]  absolute top-[29px]   mx-auto flex justify-between items-center ">
          <div className="md:w-[109px] md:h-[32px] md:flex  hidden">
            <Link href="/">
            <h1 className="font-helvetica font-bold text-[22px] lg:text-[24px]  text-[#FFFFFF]">
              Food<span className="text-[#FF9F0D]">tuck</span>
            </h1>
            </Link>
          </div>
          <div className="flex justify-center items-center">
          <ul className="w-[400px] lg:w-[450px] xl:w-[508px] h-[24px] bg-transparent absolute  top-[4px] hidden md:flex flex-row justify-between items-center">

          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={` nav_link font-inter  font-bold text-[14px] xl:text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
                  pathName === item.href ? "text-[#FF9F0D]" : "text-[#FFFFFF]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
           
           
          </ul>

          
          </div>

          <div className="md:flex justify-between items-center w-[115px] lg:w-[140px] relative lg:top-0 hidden">
  <div className="flex items-center gap-4">
    {/* Search Icon */}
    <button
      onClick={() => setIsSearchOpen(true)}
      className="hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 flex items-center"
    >
      <Image
        src="/Vector (1).svg"
        alt="search-vector"
        height={24}
        width={24}
        className="lg:w-[24px] lg:h-[24px] h-[20px] w-[20px] text-[#FFFFFF] cursor-pointer"
      />
    </button>

    {/* User Icon */}
    <div className="hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 flex items-center">
      {isSignedIn ? (
        <UserButton />
      ) : (
        <a href="/sign-in" className="text-white flex items-center">
          <UserCircle size={22} />
        </a>
      )}
    </div>

    {/* Cart Icon */}
    <div className="relative flex items-center">
      <Link href="/cart">
        <Image
          src="/Tote (1).svg"
          alt="Tote-vector"
          height={24}
          width={24}
          className="lg:w-[22px] xl:h-[24px] lg:h-[22px] w-[20px] h-[20px] text-[#FFFFFF] cursor-pointer"
        />
      </Link>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>

    {/* Wishlist Icon */}
    <div className="relative flex items-center hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
      <Link href="/wishlist">
        <PiHeart className="h-[22px] w-[22px] text-white" />
      </Link>
      {wishlistCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] font-helvetica w-4 h-4 flex items-center justify-center">
          {wishlistCount}
        </span>
      )}
    </div>
  </div>
</div>

        </nav>

        
      </div>

      {/* Desktop Full-Screen Search Bar */}
{isSearchOpen && (
  <div
    className={`w-full h-[65px] bg-[#0D0D0D]  items-center px-4 transition-all duration-300 ease-in-out fixed top-0 left-0 z-50 md:flex hidden`}
  >
    {/* Close Button */}
    <button
      onClick={() => setIsSearchOpen(false)}
      className="text-[#FFFFFF] mr-4 "
    >
      <FaTimes size={22} />
    </button>

    {/* Search Input */}
    <NavSearchBar/>
  </div>
)}

      {/* For Mobile Navbar */}

      <div className="md:hidden flex items-center justify-between ms:px-7 px-[18px] py-5 w-full bg-[#0D0D0D] ">
      {!isSearchOpen && ( 
      <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#FFFFFF] focus:outline-none relative right-3 "
        >
          {isOpen ? "" : <FaBars size={22} />}
        </button>
         )}
          {!isSearchOpen && (
        <div className="  flex items-center">
          <Link
            href="/"
            className="text-[24px] font-bold text-white font-inter w-[109px] h-[32px] z-10 "
          >
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>
 )}
 {!isSearchOpen ? (
        <div className="flex justify-between items-center w-[120px]  xsm:w-[120px] ">
          <div className="relative top-[7px] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ">
          
            <button
             onClick={() => {
               setIsSearchOpen(true);
              
             }}
           >
             <Image
               src="/Vector (1).svg"
               alt="search-vector"
               width={22}
               height={22}
               className="text-[#FFFFFF] cursor-pointer xsm:w-[22px] xsm:h-[22px] w-[20px] h-[20px]"

             />
           </button>
               
          </div>
        
          <div className="relative top-[4px]  hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
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
          </div>
          <div className="relative top-[4px]  hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
          <Link href="/wishlist">
             <PiHeart className="xsm:w-[22px] xsm:h-[22px] w-[20px] h-[20px] text-white cursor-pointer "/>
             {wishlistCount > 0 && (
                  <span className="absolute top-[-8px]  right-[-10px] bg-red-500 text-white rounded-full text-[10px] font-helvetica w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
             </Link>
          </div>

          <div className="relative top-[4px]  hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300">
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
          
       
     
      ) : (
          // Full-Screen Search Bar
          
          <div
            className={`w-full h-[35px] bg-[#0D0D0D] flex items-center px-4 transition-all duration-300 ease-in-out ${
              isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-[#FFFFFF] mr-4"
            >
              <FaTimes size={20} />
            </button>
      
            {/* Search Input */}
           <NavSearchBar/>
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
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={` nav_link font-inter  font-bold text-[16px] hover:text-[#FF9F0D] cursor-poniter ${
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
