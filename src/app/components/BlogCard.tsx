import React from "react";
import Image from "next/image";
import { BlogCardProps } from "../../../types/type";
import Link from "next/link";
const BlogCard = ({id, image, title }: BlogCardProps) => {
  return (
    <Link  href={`/blogDetails/${id}`} passHref>
    <div className="w-[300px]  md:w-[872px] md:h-[830px] h-[550px] flex flex-col items-center justify-center md:gap-0 gap-[25px] md:justify-between  relative md:right-0 right-[260px]">
      <div className="relative">
        <Image src={image} alt="food-image" height={520} width={872} className="md:h-[520px] md:w-[872px] " />
        <div className="md:w-[60px] w-[50px] h-[40px] md:h-[60px] bg-[#ff9f0d] rounded-[6px] absolute left-[24px] top-[24px] flex flex-col items-center justify-center">
          <span className="font-inter text-[14px] md:text-[18px] font-bold md:w-[22px] md:h-[26px] text-[#ffffff]">
            14
          </span>
          <span className="font-inter font-normal text-[12px] md:text-[16px] md:w-[28px] md:h-[24px] text-[#ffffff]">
            Feb
          </span>
        </div>
      </div>
      <div className="flex  items-center justify-between md:gap-[20px] relative md:right-[280px]">
        <Image
          src="/Calendar.svg"
          alt="calender-image"
          height={24}
          width={24}
          className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
        />
        <div className="flex justify-center items-center gap-[10px] w-[267px] h-[24px]">
          <span className="md:w-[267px] md:h-[24px] font-inter font-normal text-[14px] md:text-[16px] text-[#4F4F4F]">
            Feb 14, 2022/
          </span>
          <Image src="/Chats.svg" alt="chat-icon" height={24} width={24}
          className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          <span className="font-inter font-normal text-[16px] text-[#4f4f4f] whitespace-nowrap">
            3 /
          </span>
          <Image
            src="/UserCirclePlus.svg"
            alt="user-image"
            height={24}
            width={24}
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          />
          <span className="font-inter font-normal text-[16px] text-[#4f4f4f]">
            Admin
          </span>
        </div>
      </div>
      <h2 className=" md:w-[475px] font-helvetica font-bold text-[14px] md:text-[24px] md:leading-[32px] relative md:right-[200px]  whitespace-nowrap">
        {title}
      </h2>
      <div className="w-[300px] md:w-[694.83px]  border-[1px] border-[#828282] relative md:left-[-88px]  opacity-[17%]"></div>
      <p className="w-[300px] md:w-[648px] h-[96px] text-[#4f4f4f] font-normal text-[12px] md:text-[16px] md:leading-[24px] font-inter relative md:right-[110px] md:left-[-100px] left-[10px] ">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>
      <button className="md:w-[172px] md:h-[52px] w-[120px] h-[45px] rounded-[6px] border-[1px] border-[#ff9f0d] md:py-[14px] md:px-[32px]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center md:justify-between relative md:right-[350px]">
        <span className="w-[80px] h-[24px] font-helvetica font-normal text-[14px] whitespace-nowrap  md:text-[16px] text-[#ff9f0d] ">
          <Link href="/blog">Read More</Link>
        </span>
        <Image
          src="/ArrowLineUpRight.svg"
          alt="arrow-vector"
          height={18}
          width={18}
          className="md:w-[18px] md:h-[18px] w-[14px] h-[14px]"
        />
      </button>
    </div>
    </Link>
  );
};

export default BlogCard;