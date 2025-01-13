import React from "react";
import Image from "next/image";
import { BannerPropsTypes } from "../../../types/type";
import Link from "next/link";

const Banner = ({ name, mainHeading }: BannerPropsTypes) => {
  return (
    <>
      <section className="relative w-[390px] md:w-[1920px] xl:w-[1484px] xxl:w-[1920px] h-[410px] bg-black">
        <Image
          src="/unsplash_4ycv3Ky1ZZU (1).svg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex justify-center items-center flex-col text-center">
          <h1
            data-aos="zoom-in-down"
            data-aos-delay="200"
            className="text-[24px] md:text-[48px] font-bold font-helvetica text-white"
          >
            {mainHeading}
          </h1>
          <div className="flex justify-center items-center gap-[10px] mt-[10px]">
            <p
              data-aos="zoom-in-down"
              data-aos-delay="200"
              className="font-inter font-normal text-[14px] md:text-[20px] text-white cursor-pointer" 
            >
            <Link href='/'>Home</Link> 
            </p>
            <Image
              data-aos="zoom-in-down"
              data-aos-delay="200"
              src="/CaretRight.svg"
              alt="chevron-icon"
              width={16}
              height={16}
              className="h-[16px] w-[16px]"
            />
            <p
              data-aos="zoom-in-down"
              data-aos-delay="200"
              className="font-inter font-normal text-[14px] md:text-[20px] text-[#FF9F0D]"
            >
              {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
