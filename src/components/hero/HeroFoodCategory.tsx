"use client";
import React from "react";
import Image from "next/image";

const HeroFoodCategory = () => {
  return (
    <>
           <section className="xl:w-[1320px] xlg:w-[1200px] lg:w-[1000px] sm:h-[489px] w-full h-[1200px] absolute md:top-[1130px] lg:top-[1120px]  xlg:top-[1752px] xlg:left-[15px] sm:top-[1480px] xxxl:left-[300px] xxl:left-[100px]   top-[1330px] rounded-[6px] ">
    
      <div className="w-full flex justify-center items-center flex-col">
        <span className="w-[177px] h-[40px] relative font-greatvibes text-normal text-[#FF9F0D] text-[24px] sm:text-[32px]  xlg:leading-[40px] xsm:left-[10px] sm:left-0 ">
          Food Category
        </span>
        <h2 className="md:w-[446px] md:h-[56px] relative  ms:left-[15px] xsm:left-[-10px] sm:left-[10px]  md:left-0 text-center font-helvetica font-bold text-[26px] sm:text-[35px] lg:text-[48px] mb-[15px]  text-[#ffffff]">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
        </h2>
      </div>
      <div className="flex justify-center items-center w-full px-6 sm:px-0 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-[15px] gap-[12px] md:gap-[10px]  sm:gap-x-[10px] w-[300px] h-[400px]  sm:w-[400px]  md:w-[700px]  lg:w-[900px] xlg:w-[1250px] xxl:w-[1320px]  rounded-[6px] relative sm:top-[20px]   xlg:top-[50px] ">
          <div className="relative">
            <Image
              src="/c1.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="lg:w-[305px] lg:h-[328px] md:h-[250px] md:w-[280px]  xsm:w-[300px]  w-[220px] h-[200px] relative lg:left-[20px] "
            />
            <div className="w-[206px] h-[97px]  absolute top-[100px] sm:left-0 left-[-35px] flex items-center justify-between flex-col-reverse">
              <div className="xlg:w-[125px] xlg:h-[40px] w-[60px] h-[20px] bg-[#ffffff] absolute bottom-[105px]  sm:bottom-[135px] md:bottom-[100px] lg:bottom-[40px] xlg:bottom-[70px]  flex items-center justify-center md:ml-18 ">
                <span className="font-inter font-bold xlg:text-[18px] text-[10px] text-[#FF9F0D]  whitespace-nowrap">
                  Save 30%
                </span>
              </div>
              <div className="bg-[#ff9f0d] xlg:w-[206px] xlg:h-[46px] w-[100px] h-[30px] rounded-[6px] relative  bottom-[4rem] sm:bottom-[6rem] md:bottom-[4rem] lg:bottom-0  xlg:left-[25px] sm:left-[-20px] flex items-center justify-center">
                <span className="font-inter font-bold xlg:text-[20px] text-[12px] text-[#ffffff] whitespace-nowrap">
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
              className="md:w-[305px] lg:h-[328px] md:h-[250px] sm:w-[280px]   xsm:w-[300px] w-[220px] h-[200px] relative lg:left-[20px]"
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
      </section>
      <div className="lg:flex hidden absolute top-[1550px] left-[200px]  xxxl:left-[1450px]  xxl:top-[1950px] xxl:left-[1240px] xlg:left-[1070px] xl:top-[1900px] xlg:top-[1990px] lg:top-[1350px] md:top-[1200px]  lg:left-[850px]">
        <Image
          src="/hero-leaf.svg"
          alt="leaf"
          height={532.3}
          width={444.1}
          className="w-[150px] h-[200px] sm:h-[350px] sm:w-[200px] xlg:w-[444.1px] xlg:h-[532.3px] "
        />
      </div> 

    </>
  );
};

export default HeroFoodCategory;
