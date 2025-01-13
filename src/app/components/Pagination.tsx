"use client"
import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Pagination = () => {
  const [activePage, setActivePage] = useState(null); 
  const pageNumbers = [1, 2, 3]; 

  const handlePageClick = (index: any) => {
    setActivePage(index); 
  };

  return (
    <>
      {/* Pagination */}
      <div className=" w-[190px] md:w-[306px] h-[40px] md:h-[51px] relative md:left-0 left-[95px] flex items-center justify-between">
        {/* Previous Button */}
        <button className="md:w-[48px] w-[30px] h-[30px] md:h-[48px] border-[2px] border-[#f2f2f2] text-[#ff9f0d] bg-[#ffffff] hover:bg-[#ff9f0d] hover:text-[#ffffff] transition-all duration-300 ease-in-out flex justify-center items-center">
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#ff9f0d] w-[14px] h-[17px] font-black" />
        </button>

        {/* Page Buttons */}
        {pageNumbers.map((number, index) => (
          <button
            key={index}
            className={`md:w-[48px] w-[30px] h-[30px] md:h-[48px] border-[2px] border-[#f2f2f2] flex justify-center items-center 
            ${
              activePage === index
                ? "bg-[#ff9f0d] text-[#ffffff]" 
                : "bg-[#ffffff] text-[#ff9f0d]" 
            } hover:bg-[#ff9f0d] hover:text-[#ffffff] transition-all duration-300 ease-in-out`}
          >
            <span className="w-[8px] h-[24px] text-[16px] font-normal font-inter">
              {number}
            </span>
          </button>
        ))}

        {/* Next Button */}
        <button className="md:w-[48px] w-[30px] h-[30px] md:h-[48px] border-[2px] border-[#f2f2f2] flex justify-center items-center">
          <MdOutlineKeyboardDoubleArrowRight className="text-[#ff9f0d] w-[14px] h-[17px] font-black" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
