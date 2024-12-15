"use client";
import React from "react";
import { NextArrowsProps } from "../../../types/type";

import { GoArrowRight } from "react-icons/go";

const NextArrow = ({ onClick }: NextArrowsProps) => {
  return (
    <div
      onClick={onClick}
      className="w-[46px] h-[46px] rounded-full bg-gray-300 flex items-center justify-center cursor-pointer absolute top-[-77px] left-[1155px]"
    >
    <GoArrowRight className='h-[24] w-[24]' />

    </div>
  );
};

export default NextArrow;