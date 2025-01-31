import React from "react";
import Image from "next/image";
import { LatestBlogProps } from "../../../types/type";
import { LiaCommentDotsSolid } from "react-icons/lia";
import Link from "next/link";

const LatestBlog = ({ image, title, date }: LatestBlogProps) => {
  return (
    <div className="w-[230px] h-[400px] xsm:h-[430px] xsm:w-[320px] md:w-[240px] md:h-[400px] lg:w-[300px] lg:h-[450px] xl:w-[424px] xl:h-[569px] xlg:w-[350px] xlg:h-[500px] flex flex-col justify-center gap-[20px] xlg:gap-[25px] xl:gap-[35px] border-[1px] border-[#ffffff] xlg:flex-shrink-0">
      {/* Image */}
      <div className="relative h-[380px] w-[230px] xsm:w-[319px] md:h-[218px] md:w-[239px] lg:h-[280px] lg:w-[300px] xl:h-[568px] xl:w-[424px] xlg:h-[300px] xlg:w-[350px] top-[-33px] xsm:top-[-20px] md:top-[-20px] lg:top-[-20px] xl:top-[-3px] xlg:top-[-15px] overflow-hidden">
        <Image
          src={image}
          alt="food-image"
          height={349}
          width={423}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Date */}
      <span className="w-[133px] h-[24px] font-inter font-normal text-[12px] md:text-[14px] xlg:text-[16px] text-[#ff9f0d] relative md:left-[15px] left-[10px] xsm:left-[20px] md:top-[-15px] top-[-40px] lg:left-[20px] lg:top-[-20px] xlg:left-[15px] xlg:top-[-15px]">
        {date}
      </span>

      {/* Title */}
      <h2 className="md:w-[200px] lg:w-0 md:h-[64px] font-helvetica font-bold text-[14px] md:text-[16px]  xl:text-[24px] xlg:text-[20px] lg:whitespace-nowrap text-[#ffffff] relative left-[10px] xsm:left-[20px] md:left-[15px] lg:left-[20px] xlg:left-[15px] top-[-50px] md:top-[-15px] lg:top-[-15px] xlg:top-[-10px]">
        {title}
      </h2>

      {/* Buttons */}
      <div className="flex justify-between mb-5 ">
        <button className="w-[86px] h-[24px] font-inter font-normal text-[12px] md:text-[14px] xlg:text-[16px] text-[#ffffff] whitespace-nowrap relative left-[15px] md:left-[15px] lg:left-[20px] xlg:left-[25px] top-[-5px] md:top-0">
          <Link href="/blog">Learn More</Link>
        </button>

        <div className="flex justify-center  gap-[10px] w-[76px] h-[20px] relative right-[10px] md:right-[15px] lg:right-[20px] xlg:right-[25px] top-[-5px] md:top-0">
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