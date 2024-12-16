"use client"
import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import ShopCardList from "../components/ShopCardList";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Shop = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }, []);
  return (
    <>
    <section className="  w-[1920px] lg:w-[1920px]  max-w-[1920px] ">
      <div className="w-[1320px] ">
      <Banner mainHeading="Our Shop" name="Shop" />

      <div className="absolute md:left-[300px] xsm:left-[200px] top-[580px] ">
        <div className="w-[332px] h-[46px] flex justify-between">
          <span className="font-inter font-normal text-[20px] leading-[28px] w-[81px] h-[28px] text-[#333333] relative top-[10px]">
            Sort By :
          </span>
          <div className="w-[236px] h-[46px]   bg-white">
            <div className="w-[236px] h-[46px] rounded-[6px] border-[1px] border-[#BDBDBD] flex items-center justify-around">
              <span className="font-inter font-normal text-[18px] text-[#BDBDBD] -ml-5">
                Newest
              </span>
              <Image
                src="/CaretDown.svg"
                alt="option-vector"
                height={20}
                width={20}
                className="w-[20px] h-[20px] ml-9"
              />
            </div>
          </div>
        </div>

        <div className="w-[332px] h-[46px]  relative -top-11 left-[400px] flex justify-between">
          <span className="font-inter font-normal text-[20px] leading-[28px] w-[81px] h-[28px] text-[#333333] relative top-[10px]">
            Show :
          </span>
          <div className="w-[236px] h-[46px]   bg-white">
            <div className="w-[236px] h-[46px] rounded-[6px] border-[1px] border-[#BDBDBD] flex items-center justify-between">
              <span className="font-inter font-normal text-[18px] text-[#BDBDBD] ml-5">
                Default
              </span>
              <Image
                src="/CaretDown.svg"
                alt="option-vector"
                height={20}
                width={20}
                className="w-[20px] h-[20px] z-40 mr-6"
              />
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-[312px] h-[1489px] relative top-[150px] left-[1308px] border-[1px] rounded-[6px] border-[#f2f2f2] ">
        <div className="w-[248px] h-[46px] p-3 relative left-[30px] top-[1.5rem] bg-red-100 ">
          <input
            type="text"
            placeholder="Search Porduct"
            className="bg-transparent outline-none border-none placeholder-[#828282] font-inter font-normal text-[16px] realtive left-[20px] top-[11px]"
          />
          <div className="bg-[#ff9f0d] w-[46px] h-[46px] relative left-[200px] -top-9 flex items-center justify-center">
            <Image
              src="/MagnifyingGlass (1).svg"
              alt="magnifyin-search"
              height={20}
              width={20}
            />
          </div>
        </div>

        <div className="w-[248px] h-[372px] relative top-[40px] left-[28px] flex flex-col justify-between items-center">
          <h2 className="font-helvetica font-bold text-[20px] text-[#333333] w-[248px] h-[28px]">
            Category
          </h2>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Sandwiches
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px]  ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Burgur
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Chicken Chup
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Drink
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Pizza
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Thi
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Non Veg
            </span>
          </div>
          <div className="w-[248px] h-[26px] flex gap-[8px] ">
            <div className="w-[14px] h-[14px] border-[1px] border-[#333333] inline-block mt-2"></div>
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
              Uncategorized
            </span>
          </div>
        </div>

        <div className="relative top-[60px] left-[25px]">
          <Image
            src="/shop-image.svg"
            alt="food-image"
            height={286}
            width={248}
            className="w-[248px] h-[286px]"
          />
          <span className="font-inter font-bold text-[16px] w-[105px] h-[24px] text-[#ffffff] relative top-[-250px]  left-[25px]">
            Perfect Taste
          </span>
          <h2 className="w-[181px] h-[28px]  font-helvetica font-bold text-[20px] relative top-[-240px] left-[25px] text-[#ffffff]">
            Classic Restaurant
          </h2>
          <span className="font-inter text-[16px]font-bold text-[#ff9f0d] relative top-[-220px] left-[25px]">45.00$</span>
          <div className="flex justify-between w-[106px] h-[24px] relative top-[-140px] left-[25px]">
            <span className="font-inter font-normal text-[16px] text-[#ffffff]">Shop Now</span>
            <Image src="/ArrowCircleRight.svg" alt="image" height={24} width={24}/>
          </div>
        </div>
      </div>

      <div className="w-[248px] h-[87px] absolute top-[1440px]  left-[1333px] flex flex-col justify-between ">
        <h1 className="text-[20px] font-bold text-black font-helvetica ">
          Filter By Price
        </h1>
        <Image
          src="/price_renge@2x (1).svg"
          alt=""
          height={11}
          width={248}
          className="h-[30px] w-[308px]"
        />
        <div className="flex justify-between w-[246px] h-[24px]">
          <p className="text-[16px] font-normal text-black/65 font-inter">
            From $0 to $8000
          </p>
          <p className="text-[16px] font-normal text-black/65 font-inter">
            Filter
          </p>
        </div>
      </div>

      <div className="w-[252px] h-[368px] absolute top-[1511px] left-[1338px] ">
        <h1 className=" text-[20px] font-bold text-black font-helvetica mb-7 mt-5">
          Latest Products
        </h1>

        <div className="flex flex-col gap-[33px]">
          <div className="w-[252px] h-[67px]  flex justify-start gap-[20px]">
            <Image
              src="/Vector.svg"
              alt=""
              height={65}
              width={71.81}
              className="w-[71.81px] h-[65px]"
            />
            <div className="flex flex-col justify-between ">
              <h1 className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                Pizza
              </h1>
              <Image
                src="/star.svg"
                alt=""
                height={9}
                width={63}
                className="w-[63px] h-[9px]"
              />
              <p className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                $35.00
              </p>
            </div>
          </div>

          <div className="w-[252px] h-[67px]  flex justify-start gap-[20px]">
            <Image
              src="/Vector.svg"
              alt=""
              height={65}
              width={71.81}
              className="w-[71.81px] h-[65px] "
            />
            <div className="flex flex-col justify-between ">
              <h1 className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                Pizza
              </h1>
              <Image
                src="/star.svg"
                alt=""
                height={9}
                width={63}
                className="w-[63px] h-[9px]"
              />
              <p className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                $35.00
              </p>
            </div>
          </div>
          <div className="w-[252px] h-[67px]  flex justify-start gap-[20px]">
            <Image
              src="/Vector.svg"
              alt=""
              height={65}
              width={71.81}
              className="w-[71.81px] h-[65px]"
            />
            <div className="flex flex-col justify-between ">
              <h1 className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                Pizza
              </h1>
              <Image
                src="/star.svg"
                alt=""
                height={9}
                width={63}
                className="w-[63px] h-[9px]"
              />
              <p className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                $35.00
              </p>
            </div>
          </div>
          <div className="w-[252px] h-[67px]  flex justify-start gap-[20px]">
            <Image
              src="/Vector.svg"
              alt=""
              height={65}
              width={71.81}
              className="w-[71.81px] h-[65px]"
            />
            <div className="flex flex-col justify-between ">
              <h1 className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                Pizza
              </h1>
              <Image
                src="/star.svg"
                alt=""
                height={9}
                width={63}
                className="w-[63px] h-[9px]"
              />
              <p className="text-[16px] font-normal text-[#4F4F4F] font-helvetica">
                $35.00
              </p>
            </div>
          </div>
        </div>

        <div className="  w-[225px] h-[162px] relative top-[50px]">
          <h2 className="font-helvetica text-[20px] font-bold w-[127px] h-[28px] text-[#333333] mb-5">
            Product Tags{" "}
          </h2>
          <div className="flex flex-col justify-between gap-[10px]">
            <div className="flex flex-row gap-[15px] items-center">
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline ">
                Service
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline whitespace-nowrap">
                Our Menu
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline ml-2">
                Pizza
              </span>
            </div>
            <div className="flex gap-[15px] items-center">
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline">
                CupCake
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#ff9f0d] underline">
                Burgur
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline -ml-2">
                Cookies
              </span>
            </div>
            <div className="flex n items-center gap-[20px]">
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline whitespace-nowrap">
                our Shop
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] underline whitespace-nowrap">
                Tandori Chicken
              </span>
            </div>
          </div>
        </div>
      </div>

      <ShopCardList />

      <div className="relative top-[500px] left-[635px]">
        <Pagination />
      </div>
      </div>
    </section>
    <div className="absolute top-[2573px]">
        <Footer/>
      </div>
      </>
  );
};

export default Shop;
