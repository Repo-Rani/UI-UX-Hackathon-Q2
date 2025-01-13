import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { FaqProps } from "../../../types/type";

const FaqCard = ({ question, answer, image }: FaqProps) => {
  return (
    <>
      <div className="w-[320px] md:w-[600px] h-[120px] md:h-[122px] relative top-[-30px] md:top-[24px] md:left-[20px] py-2">
        <div className="flex flex-col justify-between md:gap-[10px]  bg-[#FAF7F2] ">
          <div className="flex justify-between ">
            <p className="w-[150px] md:w-[305px] h-[26px] font-inter font-bold text-[14px] md:text-[18px] text-[#333333] whitespace-nowrap  relative left-[5px] md:left-[20px]">
              {question}
            </p>
            <Image
              src={image}
              alt="numerice-image"
              height={24}
              width={24}
              className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"
            />
          </div>
          <p className="w-[320px] md:w-[600px] md:h-[72px] font-inter font-normal text-[12px] md:text-[16px] text-[#4f4f4f] relative left-[5px] md:left-[20px] ">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
