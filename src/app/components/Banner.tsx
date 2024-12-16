import React from "react";
import Image from "next/image";
import { BannerPropsTypes } from "../../../types/type";
const Banner = ({ name , mainHeading}: BannerPropsTypes) => {
  return (
    <>
      <section className="w-[1920px] h-[410px]  bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU (1).svg"
          alt=""
          height={410}
          width={1920}
          className="w-[1930px] h-[410px]"
        />
        <div className="w-[225px] absolute top-[198px] left-[850px]  flex justify-center gap-[20px] items-center flex-col ">
          <h1 className="text-[48px] font-bold font-helvetica text-white whitespace-nowrap">
           {mainHeading}
          </h1>
          <div className="w-[133px] h-[28px] flex justify-between items-center ">
            <p className="font-inter font-normal text-[20px] text-white">
              Home
            </p>
            <Image
              src="/CaretRight.svg"
              alt="chevron-icon"
              width={16}
              height={16}
              className="h-[16px] w-[16px]"
            />
            <p className="font-inter font-normal text-[20px] text-[#FF9F0D] whitespace-nowrap">
              {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;