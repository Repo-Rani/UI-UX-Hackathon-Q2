import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuCardItemsList from "./MenuCardItemsList";
const OurMenu = () => {
  const menuItems = [
    "BreakFast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Snack",
    "Soup",
  ];

  return (
    <div className="w-[1320px] h-[656px] ">
      <span className="w-[144px] h-[40px] font-greatvibes font-normal text-[32px] text-[#ff9f0d] relative left-[600px]">
        Choose & pick
      </span>
      <h2 className="w-[358px] h-[56px] font-roboto font-bold text-[48px] text-[#ffffff] relative left-[500px]">
        <span className="text-[#ff9f0d]">Fr</span>om Our Menu
      </h2>

      {/* Left side */}
      <div className="w-[1056px] h-[28px] relative top-[40px] left-[80px] flex justify-between">
      {menuItems.map((item, index) => (
        <Link href="/" key={index}>
          <div className="w-[74px] h-[28px]  font-inter font-normal text-[20px] text-[#ffffff] cursor-pointer hover:text-[#ff9f0d] nav_link">
            {item}
          </div>
        </Link>
        
       
      ))}
    </div>
      <div className="grid grid-cols-2 gap-[20px]">
      <div className="relative top-[85px] left-[35px]">
        <Image src="/menuleaf.svg" alt="menu-leaf" height={406} width={515}/>
        <Image src="/menu-plate.svg" alt="menu-food" height={362} width={366} className="relative bottom-[400px] left-[70px]"/>
      </div>

      {/* Right side */}
      <div className="relative top-[100px] right-[130px]">
  <MenuCardItemsList/>
  </div>
  </div>
    </div>
  );
};

export default OurMenu;
