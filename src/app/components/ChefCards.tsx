import React from "react";
import { ChefsProps } from "../../../types/type";
import Image from "next/image";
import Banner from "./Banner";

const ChefCards = ({ image, name }: ChefsProps) => {
  return (
    <div
   data-aos="flip-down"
    data-aos-delay="100"
    className="w-[312px] h-[446px] flex flex-col justify-between items-center">

      <Image
        
      src={image} alt={name} height={379.17} width={312} />
      <h2 className="w-[134px] h-[28px] font-inter font-bold text-[20px] text-[#333333] whitespace-nowrap text-center flex justify-center">
        {name}
      </h2>
      <span className="w-[41px] h-[26px] font-inter font-normal text-[18px] text-[#333333] text-center">
        Chef
      </span>
    </div>
  );
};

export default ChefCards;
