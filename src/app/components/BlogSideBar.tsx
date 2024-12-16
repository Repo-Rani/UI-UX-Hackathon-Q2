"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import {
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaFacebookF,
  FaEye,
} from "react-icons/fa";

const BlogSideBar = () => {
  const [active, setActive] = useState<number | null>(null);

  const images = [
    "/pg-1.svg",
    "/pg-2.svg",
    "/pg-3.svg",
    "/pg-4.svg",
    "/pg-5.svg",
    "/pg-6.svg",
  ];

  const icons = [
    { id: 1, Icon: FaTwitter },
    { id: 2, Icon: FaYoutube },
    { id: 3, Icon: FaPinterest },
    { id: 4, Icon: FaInstagram },
    { id: 5, Icon: FaFacebookF },
  ];

  return (
    <div className="w-[424px] h-[2501px]  flex items-center justify-between flex-col">
      {/* Search */}
      <div className="w-[421.82px] h-[70px]  bg-[#ffffff] flex items-center justify-between border-[1px] border-[#e0e0e0] ">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="placeholder-[#5c727d] outline-none border-none text-[16px] font-inter text-center font-normal"
        />
        <div className="w-[76px] h-[70px] border-[1px] bg-[#ff9f0d] flex items-center justify-center">
          <Image src="/Vector (1).svg" alt="search" height={24} width={24} />
        </div>
      </div>

      {/* Profile section */}
      <div className="w-[424px] h-[423px] flex flex-col justify-between  border-[1px] border-[#e0e0e0] ">
        <div className="w-[321.52px] h-[356.97px] relative top-[33.01px] left-[51.24px] ">
          <div className=" relative  left-[100px]">
            <Image src="/img.svg" alt="image" height={116.9} width={115.55} />
          </div>
          <div className="w-[168px] h-[83.97px] flex flex-col items-center justify-between relative left-[80px] ">
            <h2 className="w-[135.64px] h-[29.23px] font-bold text-[20px] text-center text-[#333333] whitespace-nowrap">
              Prince miyako
            </h2>
            <span className="w-[168.8px] h-[25.05px] font-inter font-normal text-[16px] text-center text-[#828282]">
              Blogger/Photographer
            </span>
            <div className="w-[165px] h-[20.23px] flex justify-between">
              <Image
                src="/star.svg"
                alt="rating-image"
                height={11.98}
                width={87.31}
              />
              <span className="font-inter font-normal text-[14px] text-[#828282]">
                1 Review
              </span>
            </div>
          </div>
          <p className="font-helvetica font-normal text-[16px] text-center text-[#828282] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
            distinctio, odio eligendi suscipit reprehenderit atque
          </p>
        </div>

        <div className="w-[104px] h-[19.22px] flex justify-between relative left-[159px] top-[-70px]">
          <FaFacebookF className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaTwitter className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaInstagram className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaPinterest className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
        </div>
      </div>

      {/* Recent Post scetion */}
      <div className="w-[423px] h-[592px] border-[1px] border-[#e0e0e0] flex flex-col justify-between ">
        <h2 className="w-[116px] h-[28px] font-helvetica text-[20px] font-bold text-[#333333] mt-5 ml-5">
          Recent Post
        </h2>
        <div className="flex justify-start  gap-[20px]">
          <Image
            src="/blogimg-1.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px]"
          />
          <div className="flex flex-col justify-between w-[205px] h-[77.64px]">
            <span className="  font-normal text-[14px] font-helvetica  text-[#828282] ">
              June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <div className="w-[322px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start gap-[20px]">
          <Image
            src="/blogimg-2.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
            <span className=" font-normal font-helvetica text-[14px] text-[#828282]">
              June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>

        <div className="w-[322px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start gap-[20px]">
          <Image
            src="/blogimg-3.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
            <span className=" font-normal text-[14px] text-[#828282] whitespace-nowrap">
              June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>

        <div className="w-[322px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start gap-[20px]">
          <Image
            src="/blogimg-4.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
            <span className="  font-normal text-[14px] text-[#828282]">
              June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
      </div>

      {/* Filter By Menu */}
      <div className="w-[423px] h-[490px] border-[1px] border-[#e0e0e0] flex  flex-col justify-between">
        <h1 className="h-[28px] w-[140px] font-inter font-bold text-[20px] text-[#333333] mt-5 ml-5">
          Filter By Menu
        </h1>

        <div className="w-[311px] h-[62px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-1.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between w-[280px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Chicken Fry
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              26
            </span>
          </div>
        </div>

        <div className="w-[311px] h-[62px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-2.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between w-[280px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333] whitespace-nowrap">
              Burgur Food
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              46
            </span>
          </div>
        </div>

        <div className="w-[311px] h-[62px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-3.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between w-[280px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Pizza
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              16
            </span>
          </div>
        </div>

        <div className="w-[311px] h-[62px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-4.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between w-[280px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Fresh Fruit
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              36
            </span>
          </div>
        </div>

        <div className="w-[311px] h-[62px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-5.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between w-[280px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Vegetables
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              16
            </span>
          </div>
        </div>
      </div>

      {/* Popular Tags */}
      <div className="w-[423px] h-[308px] border-[1px] border-[#e0e0e0]  ">
        <div className="w-[325px] h-[244px] relative top-[30px] left-[45px] ">
          <h2 className="w-[126px] h-[28px] font-helvetica font-bold text-[20px] mb-5">
            Popular Tags
          </h2>

          <div className="flex justify-center flex-col gap-[20px] ">
            <div className="flex justify-between gap-[20px] ">
              <div className="flex justify-center items-center w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Sandwich
                </span>
              </div>
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Tikka
                </span>
              </div>
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Bbq
                </span>
              </div>
            </div>

            <div className="flex gap-[25px] ">
              <div className=" w-[115px] h-[38px]  border-[1px] border-[#e0e0e0] flex justify-center items-center ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Restaurant
                </span>
              </div>

              <div className="flex justify-start items-center p-2  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px] whitespace-nowrap">
                  Chicken Sharma
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-[20px] ">
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Health
                </span>
              </div>
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px] whitespace-nowrap">
                  Fast Food
                </span>
              </div>
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Food
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-[20px]">
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Pizza
                </span>
              </div>
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica font-normal  text-[14px]">
                  Burgur
                </span>
              </div>
              <div className="flex justify-center items-center  w-[115px] h-[38px]  border-[1px] border-[#e0e0e0]  ">
                <span className="w-[61px] h-[22px] font-helvetica   font-normal  text-[14px]">
                  Chicken
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[422px] h-[316px] border-[1px] border-[#e0e0e0] ">
        <div className="w-[362px] h-[252px]  relative top-[28px] left-[25px] flex flex-col justify-between">
          <h2 className="w-[131px] h-[28px] font-helvetica font-bold text-[20px] text-[#333333]">
            Photo Gallery
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {images.map((src, index) => (
              <div key={index} className="relative group w-[110px] h-[92px]">
                {/* Image */}
                <Image
                  src={src}
                  alt={`blog-image-${index}`}
                  height={100}
                  width={100}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  {/* Eye Icon */}
                  <FaEye className="text-white w-[24px] h-[22px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[422px] h-[158px] border-[1px] border-[#e0e0e0] flex justify-center items-center">
        <div className="w-[308px] h-[94px]  flex flex-col justify-between">
          <h2 className="w-[94px] h-[28px] font-inter font-bold text-[20px] text-[#333333]">
            Follow Us
          </h2>
          <div className="flex justify-between items-center w-[308px] h-[46.51px]">
            {icons.map(({ id, Icon }) => (
              <div
                key={id}
                onClick={() => setActive(id)}
                className={`w-[52px] h-[46.51px] flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer ${
                  active === id
                    ? "bg-[#ff9f0d] text-white"
                    : "bg-[#faf7f2] text-[#333333] hover:bg-[#ff9f0d] hover:text-white hover:scale-105"
                }`}
              >
                <Icon className="w-[21px] h-[21px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
