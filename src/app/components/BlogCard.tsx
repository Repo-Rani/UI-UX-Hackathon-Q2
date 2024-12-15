import React from "react";
import Image from "next/image";
import { BlogCardProps } from "../../../types/type";
import Link from "next/link";
// import { useRouter } from "next/router";
const BlogCard = ({ image, title }: BlogCardProps) => {
  return (
    <div className="w-[872px] h-[830px] flex flex-col items-center justify-between ">
      <div className="relative">
        <Image src={image} alt="food-image" height={520} width={872} />

        {/* Date and Month Box */}
        <div className="w-[60px] h-[60px] bg-[#ff9f0d] rounded-[6px] absolute left-[24px] top-[24px] flex flex-col items-center justify-center">
          <span className="font-inter text-[18px] font-bold w-[22px] h-[26px] text-[#ffffff]">
            14
          </span>
          <span className="font-inter font-normal text-[16px] w-[28px] h-[24px] text-[#ffffff]">
            Feb
          </span>
        </div>
      </div>
      <div className="flex  items-center justify-between gap-[20px] relative right-[280px]">
        <Image
          src="/Calendar.svg"
          alt="calender-image"
          height={24}
          width={24}
        />
        <div className="flex justify-center items-center gap-[10px] w-[267px] h-[24px]">
          <span className="w-[267px] h-[24px] font-inter font-normal text-[16px] text-[#4F4F4F]">
            Feb 14, 2022/
          </span>
          <Image src="/Chats.svg" alt="chat-icon" height={24} width={24} />
          <span className="font-inter font-normal text-[16px] text-[#4f4f4f] whitespace-nowrap">
            3 /
          </span>
          <Image
            src="/UserCirclePlus.svg"
            alt="user-image"
            height={24}
            width={24}
          />
          <span className="font-inter font-normal text-[16px] text-[#4f4f4f]">
            Admin
          </span>
        </div>
      </div>

      <h2 className=" h-[32px] font-roboto font-bold text-[24px] leading-[32px] relative right-[200px] whitespace-nowrap">
        {title}
      </h2>
      <div className="w-[694.83px]  border-[1px] border-[#828282] relative left-[-88px] opacity-[17%]"></div>
      <p className="w-[648px] h-[96px] text-[#4f4f4f] font-normal text-[16px] leading-[24px] font-inter relative right-[110px] ">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>
      <button className="w-[172px] h-[52px] rounded-[6px] border-[1px] border-[#ff9f0d] py-[14px] px-[32px]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-between relative right-[350px]">
        <span className="w-[80px] h-[24px] font-roboto font-normal text-[16px] text-[#ff9f0d] ">
          <Link href="/blog">Read More</Link>
        </span>
        <Image
          src="/ArrowLineUpRight.svg"
          alt="arrow-vector"
          height={18}
          width={18}
        />
      </button>
    </div>
  );
};

export default BlogCard;
