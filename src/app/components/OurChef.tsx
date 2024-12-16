import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurChef = () => {
  return (
    <div className="w-[1320px] h-[656px] ">
      <span className="w-[56px] h-[40px] font-greatvibes font-normal text-[32px] text-[#ff9f0d] relative left-[630px]">
        Chefs
      </span>
      <h3 className="w-[329px] h-[56px] font-helvetica text-[48px] font-bold text-[#ffffff] relative left-[500px]">
        <span className="text-[#ff9f0d]">Me</span>et Our Chef
      </h3>
      <div className="flex justify-between relative top-[20px] w-[1320px] h-[391px] ">
        <div>
          <Image
            src="/chef-1.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px]"
          />
          <div className="w-[181px] h-[67px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative bottom-[67px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold text-[18px] text-[#333333]">
              D.Estwood
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal text-[14px] text-[#333333]">
              Chief Chef
            </span>
          </div>
        </div>

        <div>
          <Image
            src="/chef-2.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px]"
          />
          <div className="w-[181px] h-[67px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative bottom-[67px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold text-[18px] text-[#333333]">
              D.Scoriesh
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal text-[14px] text-[#333333] whitespace-nowrap">
              Assistant Chef
            </span>
          </div>
        </div>

        <div>
          <Image
            src="/chef-3.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px]"
          />
          <div className="w-[181px] h-[67px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative bottom-[67px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold text-[18px] text-[#333333]">
              M.William
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal text-[14px] text-[#333333] whitespace-nowrap">
              Advertising Chef
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/chef-4.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px]"
          />
          <div className="w-[181px] h-[67px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative bottom-[67px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold text-[18px] text-[#333333] whitespace-nowrap">
              W.ReadFroad
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal text-[14px] text-[#333333] whitespace-nowrap">
              Chef
            </span>
          </div>
        </div>


      </div>

      <Link href="/chef">
      <button className="w-[155px] h-[50px] rounded-[25px] border-[1px] border-[#ff9f0d] relative left-[590px] top-[68px] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <span className="font-inter font-normal text-[16px] text-[#ffffff]">See More</span>
      </button>
    </Link>    </div>
  );
};

export default OurChef;
