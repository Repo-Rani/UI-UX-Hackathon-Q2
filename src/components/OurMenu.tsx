import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuCardItemsList from "./MenuCardItemsList";

const OurMenu = () => {
  const [activeTab, setActiveTab] = useState("BreakFast");
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
    <div className="w-[360px]  md:w-[1320px] md:h-[656px] relative left-[-100px]">
      <div className="w-full flex flex-col justify-center items-center">
        <span className="md:w-[144px] md:h-[40px] font-greatvibes font-normal md:text-[32px] text-[20px] text-[#ff9f0d] relative ">
          Choose & pick
        </span>
        <h2 className="md:w-[358px] md:h-[56px] font-helvetica font-bold md:text-[48px] text-[24px] text-[#ffffff] relative text-center ">
          <span className="text-[#ff9f0d]">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Menu Tabs */}
      <div className="w-[320px] h-[28px] md:w-[1056px] relative top-[100px] md:top-[40px] flex flex-wrap justify-between items-center">
        {menuItems.map((item, index) => (
          <Link href="/" key={index}>
            <div
              className={`w-[74px] h-[28px] font-inter font-normal text-[14px] md:text-[20px] cursor-pointer nav_link ${
                activeTab === item ? "text-[#ff9f0d]" : "text-[#ffffff]"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>

      {/* Left side */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-[20px]">
        <div className="relative md:top-[85px] top-[-200px] md:left-[35px] xl:left-[-75px] ">
          <Image
            src="/menuleaf.svg"
            alt="menu-leaf"
            height={406}
            width={515}
            className="md:w-[515px] md:h-[406px] w-[300px] h-[200px] relative md:left-0 left-[20px]"
          />
          <Image
            src="/menu-plate.svg"
            alt="menu-food"
            height={362}
            width={366}
            className="md:w-[366px] md:h-[406px] w-[210px] h-[210px] relative md:bottom-[400px] bottom-[205px] left-[60px] rotatePlate"
          />
        </div>
        {/* Right side */}
        <div className="relative md:top-[100px] top-[-250px] md:left-[-70px] xl:left-[-190px]">
          <MenuCardItemsList />
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
