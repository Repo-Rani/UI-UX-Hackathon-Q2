import React from "react";
import Image from "next/image";
import { LatestBlogProps } from "../../../types/type";
import { LiaCommentDotsSolid } from "react-icons/lia";

const LatestBlog = ({ image, title, date }: LatestBlogProps) => {
  return (
    <div className="w-[424px] h-[569px] flex flex-col justify-center gap-[20px] border-[1px] border-[#ffffff]">
      <Image src={image} alt="food-image" height={349} width={423} className="relative top-[-24px]"/>
      <span className="w-[133px] h-[24px] font-inter font-normal text-[16px] text-[#ff9f0d] relative left-[43px]">
        {date}
      </span>
      <h2 className="w-[340px] h-[64px] font-robot font-bold text-[24px] text-[#ffffff] relative left-[43px]">
        {title}
      </h2>
      <div className="flex justify-between">
        <span className="w-[86px] h-[24px] font-inter font-normal text-[16px] text-[#ffffff] whitespace-nowrap relative left-[43px]">
          Learn More
        </span>

        <div className="flex justify-center gap-[10px] w-[76px] h-[20px] relative right-[40px] ">
          <Image src="/ThumbsUp.svg" alt="like-button" height={20} width={20} />
          <LiaCommentDotsSolid className="w-[20px] h-[20px] text-[#ff9f0d]" />
          <Image
            src="/ShareNetwork.svg"
            alt="food-image"
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
