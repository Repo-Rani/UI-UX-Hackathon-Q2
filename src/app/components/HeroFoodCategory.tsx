'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from "react";


const HeroFoodCategory = () => {
    const [showAllCards, setShowAllCards] = useState(false);

  return (
   
    <>
    <span className="w-[177px] h-[40px] relative left-[120px]  md:left-[550px] bottom-[12px]  md:bottom-0  font-greatvibes text-normal text-[#FF9F0D] text-[24px] md:text-[32px]  md:leading-[40px] ">
          Food Category
        </span>
        <h2 className="md:w-[446px] md:h-[56px] relative md:left-[420px] left-[15px] bottom-4  md:bottom-0 right-4  md:right-0  text-center font-helvetica font-bold text-[26px] md:text-[48px]  text-[#ffffff]">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-[10px] gap-[20px] w-[390px] h-[329px] md:w-[1320px]  rounded-[6px] relative md:top-[50px] ">
          <div>
            <Image
              src="/c1.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="md:w-[305px] md:h-[328px] w-[300px] h-[250px] relative md:left-0 left-[35px] "
            />
            <div className="w-[206px] h-[97px]  absolute top-[100px] flex items-center justify-between flex-col">
              <div className="md:w-[125px] md:h-[40px] w-[80px] h-[20px] bg-[#ffffff] absolute md:bottom-0 bottom-[65px] md:left-0 left-[100px] flex items-start justify-center md:ml-16 ">
                <span className="font-inter font-bold md:text-[18px] text-[12px] text-[#FF9F0D]  whitespace-nowrap">
                  Save 30%
                </span>
              </div>
              <div className="bg-[#ff9f0d] md:w-[206px] md:h-[46px] w-[130px] h-[35px] rounded-[6px] relative md:bottom-0 bottom-8 md:left-0 left-[60px] flex items-center justify-center">
                <span className="font-inter font-bold md:text-[20px] text-[14px] text-[#ffffff] whitespace-nowrap">
                  Fast Food Dish
                </span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/c2.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="md:w-[305px] md:h-[328px] w-[300px] h-[250px] relative md:left-0 left-[35px]"
            />
          </div>
          <div>
            <Image
              src="/c3.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="md:w-[305px] md:h-[328px] w-[300px] h-[250px] relative md:left-0 left-[35px] "
            />
          </div>
          <div>
            <Image
              src="/c4.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="md:w-[305px] md:h-[328px] w-[300px] h-[250px] relative md:left-0 left-[35px] "
            />
          </div>
        </div>
    </>
  )
}

export default HeroFoodCategory