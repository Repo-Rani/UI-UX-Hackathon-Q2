"use client";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { PaginationProps } from "../../../types/type";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      <div className="w-[190px] md:w-[306px] h-[40px] md:h-[51px] relative lg:left-0 left-[75px] flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`md:w-[48px] w-[30px] h-[30px] md:h-[48px] border-[2px] border-[#f2f2f2] text-[#ff9f0d] bg-[#ffffff] flex justify-center items-center 
            ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#ff9f0d] hover:text-[#ffffff] transition-all duration-300 ease-in-out"
            }`}
        >
          <MdOutlineKeyboardDoubleArrowLeft className="w-[14px] h-[17px] font-black" />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`md:w-[48px] w-[30px] h-[30px] md:h-[48px] border-[2px] border-[#f2f2f2] flex justify-center items-center 
            ${
              currentPage === number
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
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`md:w-[48px] w-[30px] h-[30px] md:h-[48px] border-[2px] border-[#f2f2f2] flex justify-center items-center 
            ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#ff9f0d] hover:text-[#ffffff] transition-all duration-300 ease-in-out"
            }`}
        >
          <MdOutlineKeyboardDoubleArrowRight className="w-[14px] h-[17px] font-black" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
