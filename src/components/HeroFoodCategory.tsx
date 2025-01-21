"use client";
import React from "react";
import Image from "next/image";

const HeroFoodCategory = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        <span className="w-[177px] h-[40px] relative font-greatvibes text-normal text-[#FF9F0D] text-[24px] md:text-[32px]  xl:leading-[40px] xsm:left-[10px] sm:left-0 ">
          Food Category
        </span>
        <h2 className="md:w-[446px] md:h-[56px] relative  ms:left-[15px] xsm:left-[-10px] sm:left-[10px]  md:left-0 text-center font-helvetica font-bold text-[26px] md:text-[35px] lg:text-[48px] mb-[15px]  text-[#ffffff]">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
        </h2>
      </div>
      <div className="flex justify-center items-center w-full px-6 sm:px-0 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-[15px] gap-[12px] md:gap-[5px]  sm:gap-x-[10px] w-[300px] h-[400px]  sm:w-[400px]  md:w-[700px]  lg:w-[900px] xl:w-[1250px] xxl:w-[1320px]  rounded-[6px] relative   xl:top-[50px] ">
          <div className="relative">
            <Image
              src="/c1.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="lg:w-[305px] lg:h-[328px] md:h-[250px] md:w-[280px]  xsm:w-[300px]  w-[220px] h-[200px] relative lg:left-[20px] "
            />
            <div className="w-[206px] h-[97px]  absolute top-[100px] sm:left-0 left-[-35px] flex items-center justify-between flex-col-reverse">
              <div className="xl:w-[125px] xl:h-[40px] w-[60px] h-[20px] bg-[#ffffff] absolute bottom-[105px]  sm:bottom-[135px] md:bottom-[100px] lg:bottom-[40px] xl:bottom-[70px]  flex items-center justify-center md:ml-18 ">
                <span className="font-inter font-bold xl:text-[18px] text-[10px] text-[#FF9F0D]  whitespace-nowrap">
                  Save 30%
                </span>
              </div>
              <div className="bg-[#ff9f0d] xl:w-[206px] xl:h-[46px] w-[100px] h-[30px] rounded-[6px] relative  bottom-[4rem] sm:bottom-[6rem] md:bottom-[4rem] lg:bottom-0  xl:left-[25px] sm:left-[-20px] flex items-center justify-center">
                <span className="font-inter font-bold xl:text-[20px] text-[12px] text-[#ffffff] whitespace-nowrap">
                  Fast Food Dish
                </span>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <Image
              src="/c2.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="md:w-[305px] lg:h-[328px] smd:h-[250px] sm:w-[280px]   xsm:w-[300px] w-[220px] h-[200px] relative lg:left-[20px]"
            />
          </div>
          <div>
            <Image
              src="/c3.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="lg:w-[305px] lg:h-[328px] md:h-[250px] md:w-[280px] xsm:w-[300px]  w-[220px] h-[200px] relative lg:left-[20px] sm:top-0 ms:top-[-35px] top-[-50px]"
            />
          </div>
          <div>
            <Image
              src="/c4.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="lg:w-[305px] lg:h-[328px] md:h-[250px] md:w-[280px] xsm:w-[300px]  w-[220px] h-[200px] relative lg:left-[20px] sm:top-0 ms:top-[-35px] top-[-50px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroFoodCategory;
