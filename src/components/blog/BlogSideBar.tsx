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
import { FiX } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";



const BlogSideBar = () => {
  const [active, setActive] = useState<number | null>(null);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

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
  <>
  {/* FOr Desktop Screens */}
    <div className="w-[300px] lg:w-[424px] h-[2501px]  lg:flex hidden items-center justify-between flex-col">
      <div className="md:w-[421.82px] md:h-[70px] w-[300px] h-[50px]  bg-[#ffffff] flex items-center justify-between border-[1px] border-[#e0e0e0] ">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="placeholder-[#5c727d] outline-none border-none text-[14px] md:text-[16px] font-inter text-center font-normal"
        />
        <div className="w-[60px] md:w-[76px] h-[50px] md:h-[70px] border-[1px] bg-[#ff9f0d] flex items-center justify-center">
          <Image src="/Vector (1).svg" alt="search" height={24} width={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        </div>
      </div>

      <div className="w-[300px] md:w-[424px] md:h-[423px] h-[350px] flex flex-col justify-between  border-[1px] border-[#e0e0e0] ">
        <div className="w-[300px] md:w-[321.52px] h-[356.97px] relative top-[33.01px] md:left-[51.24px] ">
          <div className=" relative md:left-[100px]">
            <Image src="/img.svg" alt="image" height={116.9} width={115.55} className="md:w-[115.55px] md:h-[116.9px] w-[100px] h-[100px] md:mx-0 mx-auto " />
          </div>
          <div className="w-[168px] h-[83.97px] flex flex-col items-center justify-between relative left-[65px] md:left-[80px] ">
            <h2 className="w-[135.64px] h-[29.23px] font-bold text-[18px] md:text-[20px] text-center text-[#333333] whitespace-nowrap">
              Prince miyako
            </h2>
            <span className="w-[168.8px] h-[25.05px] font-inter font-normal text-[14px] md:text-[16px] text-center text-[#828282]">
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
          <p className="font-helvetica font-normal text-[14px] md:text-[16px] text-center text-[#828282] md:pr-0 pr-5 md:mt-0 mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
            distinctio, odio eligendi suscipit reprehenderit atque
          </p>
        </div>

        <div className="w-[104px] h-[19.22px] flex justify-between relative left-[95px] md:left-[159px] top-[-20px] md:top-[-70px]">
          <FaFacebookF className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaTwitter className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaInstagram className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaPinterest className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
        </div>
      </div>

      <div className="w-[300px] md:w-[423px] h-[592px] border-[1px] border-[#e0e0e0] flex flex-col justify-between ">
        <h2 className="w-[116px] h-[28px] font-helvetica text-[18px] md:text-[20px] font-bold text-[#333333] mt-5 ml-5">
          Recent Post
        </h2>
        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-1.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex flex-col justify-between w-[205px] h-[77.64px]">
            <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
              June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <div className="md:w-[322px] w-[270px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-2.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
          <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
          June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>

        <div className="md:w-[322px] w-[270px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-3.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
          <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
          June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>

        <div className="md:w-[322px] w-[270px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-4.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
          <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
          June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[300px] md:w-[423px] h-[490px] border-[1px] border-[#e0e0e0] flex  flex-col justify-between">
        <h1 className="h-[28px] w-[140px] font-inter font-bold text-[18px] md:text-[20px] text-[#333333] mt-5 ml-5">
          Filter By Menu
        </h1>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-1.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Chicken Fry
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              26
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-2.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333] whitespace-nowrap">
              Burgur Food
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              46
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-3.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Pizza
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              16
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-4.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Fresh Fruit
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              36
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-5.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Vegetables
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              16
            </span>
          </div>
        </div>
      </div>

      <div className="w-[300px] md:w-[423px] h-[308px] border-[1px] border-[#e0e0e0]  ">
        <div className="md:w-[325px] w-[300px] h-[244px] relative top-[30px] md:left-[45px] md:px-0 px-3 ">
          <h2 className="w-[126px] h-[28px] font-helvetica font-bold text-[18px] md:text-[20px] mb-5">
            Popular Tags
          </h2>

          <div className="flex justify-center flex-col gap-[10px] md:gap-[20px] ">
            <div className="flex justify-between gap-[10px] md:gap-[20px] ">
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
            <div className="flex justify-between gap-[10px] md:gap-[20px] ">
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

            <div className="flex justify-between gap-[10px] md:gap-[20px]">
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


      <div className="w-[300px] md:w-[422px] h-[316px] border-[1px] border-[#e0e0e0] ">
        <div className=" w-[362px] h-[252px]  relative top-[28px] md:left-[25px]  flex flex-col justify-between">
          <h2 className="w-[131px] h-[28px] font-helvetica font-bold text-[18px] md:text-[20px] text-[#333333] relative md:left-0 left-[20px] ">
            Photo Gallery
          </h2> 
          <div className="flex flex-wrap gap-4 justify-center relative md:left-0 left-[-35px] ">
            {images.map((src, index) => (
              <div key={index} className="relative group md:w-[110px] md:h-[92px]">
                <Image
                  src={src}
                  alt={`blog-image-${index}`}
                  height={100}
                  width={100}
                  className="md:w-full md:h-full w-[80px] h-[80px] object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <FaEye className="text-white w-[24px] h-[22px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-[300px] md:w-[422px] h-[158px] border-[1px] border-[#e0e0e0] flex justify-center items-center">
        <div className="w-[300px] md:w-[308px] h-[94px]  flex flex-col justify-between">
          <h2 className="w-[94px] h-[28px] font-inter font-bold text-[18px] md:text-[20px] text-[#333333] relative md:left-0 left-[20px]">
            Follow Us
          </h2>
          <div className="flex justify-between items-center w-[300px] md:w-[308px] h-[46.51px]">
            {icons.map(({ id, Icon }) => (
              <div
                key={id}
                onClick={() => setActive(id)}
                className={`md:w-[52px] md:h-[46.51px] w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer ${
                  active === id
                    ? "bg-[#ff9f0d] text-white"
                    : "bg-[#faf7f2] text-[#333333] hover:bg-[#ff9f0d] hover:text-white hover:scale-105"
                }`}
              >
                <Icon className="w-[18px] md:w-[21px] h-[18px] md:h-[21px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
</div>


{/* Sidebar for mobile screens */}

<button
        className="block lg:hidden fixed   top-[510px] right-4   hover:bg-black bg-[#ff9f0d] z-40 p-2 rounded-full "
        onClick={toggleSidebar}
      >
        <VscSettings className="h-5 w-5 text-white" />
      </button>
     <aside
  className={`${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0 fixed md:static top-0 left-0 z-40 md:hidden flex h-full w-full bg-white md:bg-transparent text-black p-5 md:p-0 transform transition-transform duration-300 ${
    isSidebarOpen ? "overflow-y-auto" : "md:overflow-visible"
  } w-[390px] md:w-[330px]`}
>

<div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col gap-[30px]"
        >
          <button
            className="lg:hidden mb-4 self-end text-black mt-1 mr-[-30px]"
            onClick={toggleSidebar}
          >
            <FiX className="text-[24px]" />
            </button>

<div className="w-[300px]  h-[2501px]  flex md:hidden items-center justify-between flex-col relative top-[-40px] left-[30px]">
      <div className=" w-[300px] h-[50px]  bg-[#ffffff] flex items-center justify-between border-[1px] border-[#e0e0e0] ">
        <input
          type="text"
          placeholder="Search Your Keyword..."
          className="placeholder-[#5c727d] outline-none border-none text-[14px] md:text-[16px] font-inter text-center font-normal"
        />
        <div className="w-[60px] md:w-[76px] h-[50px] md:h-[70px] border-[1px] bg-[#ff9f0d] flex items-center justify-center">
          <Image src="/Vector (1).svg" alt="search" height={24} width={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        </div>
      </div>

      <div className="w-[300px] md:w-[424px] md:h-[423px] h-[350px] flex flex-col justify-between  border-[1px] border-[#e0e0e0] ">
        <div className="w-[300px] md:w-[321.52px] h-[356.97px] relative top-[33.01px] md:left-[51.24px] ">
          <div className=" relative md:left-[100px]">
            <Image src="/img.svg" alt="image" height={116.9} width={115.55} className="md:w-[115.55px] md:h-[116.9px] w-[100px] h-[100px] md:mx-0 mx-auto " />
          </div>
          <div className="w-[168px] h-[83.97px] flex flex-col items-center justify-between relative left-[65px] md:left-[80px] ">
            <h2 className="w-[135.64px] h-[29.23px] font-bold text-[18px] md:text-[20px] text-center text-[#333333] whitespace-nowrap">
              Prince miyako
            </h2>
            <span className="w-[168.8px] h-[25.05px] font-inter font-normal text-[14px] md:text-[16px] text-center text-[#828282]">
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
          <p className="font-helvetica font-normal text-[14px] md:text-[16px] text-center text-[#828282] md:pr-0 pr-5 md:mt-0 mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
            distinctio, odio eligendi suscipit reprehenderit atque
          </p>
        </div>

        <div className="w-[104px] h-[19.22px] flex justify-between relative left-[95px] md:left-[159px] top-[-20px] md:top-[-70px]">
          <FaFacebookF className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaTwitter className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaInstagram className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
          <FaPinterest className="text-[16px] text-[#333333] w-[16.08px] h-[19.66px hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer]" />
        </div>
      </div>

      <div className="w-[300px] md:w-[423px] h-[592px] border-[1px] border-[#e0e0e0] flex flex-col justify-between ">
        <h2 className="w-[116px] h-[28px] font-helvetica text-[18px] md:text-[20px] font-bold text-[#333333] mt-5 ml-5">
          Recent Post
        </h2>
        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-1.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex flex-col justify-between w-[205px] h-[77.64px]">
            <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
              June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <div className="md:w-[322px] w-[270px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-2.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
          <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
          June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>

        <div className="md:w-[322px] w-[270px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-3.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
          <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
          June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>

        <div className="md:w-[322px] w-[270px]  border-[1px] border-[#707070] border-opacity-[17%] relative left-[10px]"></div>

        <div className="flex justify-start relative md:left-[20px] left-[10px]  gap-[20px]">
          <Image
            src="/blogimg-4.svg"
            alt="image"
            height={91.58}
            width={99}
            className="rounded-[6px] md:w-[99px] md:h-[91.58px] w-[80px] h-[80px]"
          />
          <div className="flex  flex-col justify-between w-[205px] h-[77.64px]">
          <span className="  font-normal text-[12px] md:text-[14px] font-helvetica  text-[#828282] ">
          June 22, 2020
            </span>
            <p className="w-[205px] h-[47.78px] font-helvetica font-normal text-[14px] md:text-[16px] text-[#4f4f4f] leading-[24px]">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[300px] md:w-[423px] h-[490px] border-[1px] border-[#e0e0e0] flex  flex-col justify-between">
        <h1 className="h-[28px] w-[140px] font-inter font-bold text-[18px] md:text-[20px] text-[#333333] mt-5 ml-5">
          Filter By Menu
        </h1>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-1.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Chicken Fry
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              26
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-2.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333] whitespace-nowrap">
              Burgur Food
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              46
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-3.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Pizza
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              16
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-4.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Fresh Fruit
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              36
            </span>
          </div>
        </div>

        <div className="w-[290px] md:w-[311px] h-[62px] relative md:left-[40px] left-[10px] flex justify-start items-center gap-[25px]">
          <Image src="/bi-5.svg" alt="food-image" height={62} width={67} />
          <div className="flex justify-between md:w-[244px] w-[175px]">
            <h2 className="w-[92px] h-[24px] font-helvetica font-bold text-[16px] text-[#333333]">
              Vegetables
            </h2>
            <span className="w-[18px] h-[24px] font-helvetica font-normal text-[16px] text-center text-[#333333]">
              16
            </span>
          </div>
        </div>
      </div>

      <div className="w-[300px] md:w-[423px] h-[308px] border-[1px] border-[#e0e0e0]  ">
        <div className="md:w-[325px] w-[300px] h-[244px] relative top-[30px] md:left-[45px] md:px-0 px-3 ">
          <h2 className="w-[126px] h-[28px] font-helvetica font-bold text-[18px] md:text-[20px] mb-5">
            Popular Tags
          </h2>

          <div className="flex justify-center flex-col gap-[10px] md:gap-[20px] ">
            <div className="flex justify-between gap-[10px] md:gap-[20px] ">
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
            <div className="flex justify-between gap-[10px] md:gap-[20px] ">
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

            <div className="flex justify-between gap-[10px] md:gap-[20px]">
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


      <div className="w-[300px] md:w-[422px] h-[316px] border-[1px] border-[#e0e0e0] ">
        <div className=" w-[362px] h-[252px]  relative top-[28px] md:left-[25px]  flex flex-col justify-between">
          <h2 className="w-[131px] h-[28px] font-helvetica font-bold text-[18px] md:text-[20px] text-[#333333] relative md:left-0 left-[20px] ">
            Photo Gallery
          </h2> 
          <div className="flex flex-wrap gap-4 justify-center relative md:left-0 left-[-35px] ">
            {images.map((src, index) => (
              <div key={index} className="relative group md:w-[110px] md:h-[92px]">
                <Image
                  src={src}
                  alt={`blog-image-${index}`}
                  height={100}
                  width={100}
                  className="md:w-full md:h-full w-[80px] h-[80px] object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <FaEye className="text-white w-[24px] h-[22px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-[300px] md:w-[422px] h-[158px] border-[1px] border-[#e0e0e0] flex justify-center items-center">
        <div className="w-[300px] md:w-[308px] h-[94px]  flex flex-col justify-between">
          <h2 className="w-[94px] h-[28px] font-inter font-bold text-[18px] md:text-[20px] text-[#333333] relative md:left-0 left-[20px]">
            Follow Us
          </h2>
          <div className="flex justify-between items-center w-[300px] md:w-[308px] h-[46.51px]">
            {icons.map(({ id, Icon }) => (
              <div
                key={id}
                onClick={() => setActive(id)}
                className={`md:w-[52px] md:h-[46.51px] w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer ${
                  active === id
                    ? "bg-[#ff9f0d] text-white"
                    : "bg-[#faf7f2] text-[#333333] hover:bg-[#ff9f0d] hover:text-white hover:scale-105"
                }`}
              >
                <Icon className="w-[18px] md:w-[21px] h-[18px] md:h-[21px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
</div>

</div>
</aside>



    

  
    </>
    
  );
}

export default BlogSideBar;
