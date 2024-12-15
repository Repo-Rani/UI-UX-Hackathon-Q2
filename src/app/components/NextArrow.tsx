"use client";
import React, { useState } from "react";
import { NextArrowsProps } from "../../../types/type";
import { GoArrowRight } from "react-icons/go";

const NextArrow = ({ onClick }: NextArrowsProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)} // Hover start
      onMouseLeave={() => setIsActive(false)} // Hover end
      className={`w-[46px] h-[46px] rounded-full ${
        isActive ? "bg-[#ff9f0d]" : "bg-gray-300"
      } flex items-center justify-center cursor-pointer absolute top-[-77px] left-[1155px] transition-colors duration-300`}
    >
      <GoArrowRight className="h-[24px] w-[24px] text-white" />
    </div>
  );
};

export default NextArrow;
