"use client";
import React, { useState } from "react";
import { PrevArrowsProps } from "../../../types/type";
import { GoArrowLeft } from "react-icons/go";

const PrevArrow = ({ onClick }: PrevArrowsProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)} 
      onMouseLeave={() => setIsActive(false)} 
      className={`md:w-[46px] w-[30px] h-[30px] md:h-[46px] rounded-full ${
        isActive ? "bg-[#ff9f0d]" : "bg-gray-300"
      } flex items-center justify-center cursor-pointer absolute top-[-77px] ms:left-[235px]  left-[205px] md:left-[600px] lg:left-[860px] xl:left-[1100px] transition-colors duration-300`}
    >
      <GoArrowLeft className="h-[16px] md:h-[24px] w-[16px] md:w-[24px] text-white" />
    </div>
  );
};

export default PrevArrow;
