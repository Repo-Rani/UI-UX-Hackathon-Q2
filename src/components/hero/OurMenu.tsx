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
          <section className="absolute xlg:left-[60px]   xl:left-[110px]  xxl:left-[150px] xxxl:left-[300px]  xl:top-[3834px] xlg:top-[3750px] sm:top-[3600px] md:top-[2650px] lg:top-[2750px] ms:top-[3300px] top-[3260px] ">
    
    <div className="w-[300px] xsm:w-[360px] md:w-[700px] xlg:w-[1200px] xl:w-[1320px] md:h-[656px] relative md:left-[10px] lg:left-[-75px] xlg:left-0">
      <div className="w-full flex flex-col justify-center items-center">
        <span className="md:w-[144px] md:h-[40px] font-greatvibes font-normal xlg:text-[32px] sm:text-[28px] text-[20px] text-[#ff9f0d] relative ">
          Choose & pick
        </span>
        <h2 className="md:w-[358px] md:h-[56px] font-helvetica font-bold xlg:text-[48px] sm:text-[32px] text-[24px] text-[#ffffff] relative text-center ">
          <span className="text-[#ff9f0d]">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Menu Tabs */}
      <div className="sm:w-[550px]  w-[300px] h-[28px]  md:w-[700px] lg:w-[850px] xlg:w-[1056px] relative top-[280px] left-[10px] xsm:left-[30px] sm:left-[-80px] md:left-0 xl:left-[30px]  md:top-[40px] flex flex-wrap justify-between items-center">
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
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-[20px] relative xlg:left-[-30px]  ">
        <div className="relative md:top-[85px] lg:top-0 xlg:top-[80px] md:left-[-70px] lg:left-[-120px] xl:left-[-75px] xlg:left-[-30px] ms:left-[30px] left-[10px]">
          <Image
            src="/menuleaf.svg"
            alt="menu-leaf"
            height={406}
            width={500}
            className="lg:w-[500px] lg:h-[400px] w-[275px]  ms:w-[300px] h-[200px] relative "
          />
          <Image
            src="/menu-plate.svg"
            alt="menu-food"
            height={362}
            width={366}
            className="xlg:w-[395px] lg:h-[370px] lg:w-[300px] w-[210px] h-[210px] relative  lg:bottom-[400px] ms:bottom-[205px] bottom-[210px] left-[30px] md:left-[45px] lg:left-[20px] xlg:left-[60px] rotatePlate"
          />
        </div>
        {/* Right side */}
        <div className="relative top-[-70px] xlg:top-[100px]  md:top-[80px] md:left-[-70px] lg:left-[30px] xl:left-[-170px] xlg:left-[-130px]">
          <MenuCardItemsList />
        </div>
      </div>
    </div>
    </section>
  );
};

export default OurMenu;
