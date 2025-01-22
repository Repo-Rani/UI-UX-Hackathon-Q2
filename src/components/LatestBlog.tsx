import React from "react";
import Image from "next/image";
import { LatestBlogProps } from "../../types/type";
import { LiaCommentDotsSolid } from "react-icons/lia";
import Link from "next/link";

const LatestBlog = ({ image, title, date }: LatestBlogProps) => {
  return (
    <div className="w-[230px] h-[400px] md:w-[424px]  md:h-[569px] flex flex-col justify-center gap-[20px] border-[1px] border-[#ffffff]  ">
      <Image src={image} alt="food-image" height={349} width={423} className="h-[380px] w-[230px] md:h-[349px] md:w-[423px]  relative top-[-33px] md:top-[-24px]"/>
      <span className="w-[133px] h-[24px] font-inter font-normal md:text-[16px] text-[12px] text-[#ff9f0d] relative md:left-[43px] left-[10px] md:top-[-15px] top-[-40px]">
        {date}
      </span>
      <h2 className="md:w-[340px] md:h-[64px] font-helvetica font-bold text-[14px] md:text-[24px]  text-[#ffffff] relative left-[10px] md:left-[43px] top-[-50px]  md:top-[-20px] ">
        {title}
      </h2>
      <div className="flex justify-between">
        <button className="w-[86px] h-[24px] font-inter font-normal text-[12px] md:text-[16px]  text-[#ffffff] whitespace-nowrap relative left-[15px] md:left-[43px] top-[-5px] md:top-0 ">
         <Link href='/blog'>Learn More</Link> 
        </button>

        <div className="flex justify-center gap-[10px] w-[76px] h-[20px] relative right-[10px] md:right-[40px] top-[-5px]  md:top-0  ">
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
