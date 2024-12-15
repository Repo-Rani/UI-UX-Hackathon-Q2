import React from "react";
import Banner from "./Banner";
import Image from "next/image";
import { FaqProps } from "../../../types/type";

const FaqCard = ({ question, answer, image }: FaqProps) => {
  return (
    <>
      <div className="w-[600px] h-[122px] relative top-[24px] left-[20px] ">
        <div className="flex flex-col justify-between gap-[10px] bg-[#FAF7F2]">
          <div className="flex justify-between">
            <p className="w-[305px] h-[26px] font-inter font-bold text-[18px] text-[#333333] whitespace-nowrap relative left-[20px]">
              {question}
            </p>
            <Image
              src={image}
              alt="numerice-image"
              height={24}
              width={24}
              className=""
            />
          </div>
          <p className="w-[600px] h-[72px] font-inter font-normal text-[16px] text-[#4f4f4f] relative left-[20px] ">
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
