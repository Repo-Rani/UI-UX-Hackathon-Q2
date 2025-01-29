"use client";
import React, { useState } from "react";
import { NextArrowsProps } from "../../../types/type";
import { GoArrowRight } from "react-icons/go";

const NextArrow = ({ onClick }: NextArrowsProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)} 
      onMouseLeave={() => setIsActive(false)} 
      className={`md:w-[46px] w-[30px] h-[30px] md:h-[46px] rounded-full ${
        isActive ? "bg-[#ff9f0d]" : "bg-gray-300"
      } flex items-center justify-center cursor-pointer absolute top-[-77px] ms:left-[270px] left-[245px] md:left-[655px] lg:left-[915px] xl:left-[1155px] transition-colors duration-300`}
    >
      <GoArrowRight className="h-[16px] md:h-[24px] w-[16px] md:w-[24px] text-white" />
    </div>
  );
};

export default NextArrow;
