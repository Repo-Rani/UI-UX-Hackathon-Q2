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
      className={`w-[46px] h-[46px] rounded-full ${
        isActive ? "bg-[#ff9f0d]" : "bg-gray-300"
      } flex items-center justify-center cursor-pointer absolute top-[-77px] left-[1100px] transition-colors duration-300`}
    >
      <GoArrowLeft className="h-[24px] w-[24px] text-white" />
    </div>
  );
};

export default PrevArrow;
