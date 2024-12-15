"use client";
import React from "react";
import { PrevArrowsProps } from "../../../types/type";
import { GoArrowLeft } from "react-icons/go";

const PrevArrow = ({ onClick }: PrevArrowsProps) => {
  return (
    <div
      onClick={onClick}
      className="w-[46px] h-[46px] rounded-full bg-gray-300 flex items-center justify-center cursor-pointer absolute top-[-77px] left-[1100px]"
    >
        <GoArrowLeft  className='h-[24] w-[24]'/>
      
    </div>
  );
};

export default PrevArrow;