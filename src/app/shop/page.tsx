"use client";
import React from "react";
import Banner from "@/components/Banner";
import Image from "next/image";
import Footer from "@/components/Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";
import ShopSidebar from "@/components/ShopSidebar";
import ShopCard from "@/components/ShopCard";
const Shop = () => {
 
  return (
    <>
      <section className=" w-full max-w-[1920px] ">
        <div className="">
          <Banner mainHeading="Our Shop" name="Shop" />

          <div className="absolute left-[20px] ms:left-[40px] sm:left-[30px] md:left-0 xxxl:left-[300px] xxl:left-[100px] sm:top-[560px] md:top-[520px]  top-[510px] xl:top-[565px] ">
            <div className=" w-[230px] ms:w-[250px] xl:w-[332px] h-[46px] flex justify-center gap-[10px] md:justify-between relative lg:top-[35px] xl:top-0">
              <span className="font-inter font-normal text-[16px] md:text-[18px] xl:text-[20px] xl:leading-[28px] w-[81px] h-[28px] text-[#333333] relative top-[10px]">
                Sort By :
              </span>
              <div className="w-[150px] h-[30px] xl:w-[236px] xl:h-[46px]   bg-white">
                <div className="md:w-[180px] xl:w-[236px] md:h-[46px] w-[150px] h-[40px] rounded-[6px] border-[1px] border-[#BDBDBD] flex items-center justify-around">
                  <span className="font-inter font-normal text-[14px] md:text-[16px] xl:text-[18px] text-[#BDBDBD] xl:-ml-5">
                    Newest
                  </span>
                  <Image
                    src="/CaretDown.svg"
                    alt="option-vector"
                    height={20}
                    width={20}
                    className="xl:w-[20px] w-[18px] h-[18px] xl:h-[20px] ml-9 "
                  />
                </div>
              </div>
            </div>

            <div className=" w-[230px] ms:w-[250px] xl:w-[332px] h-[46px]  sm:left-[280px] md:left-0 lg:left-[350px]  relative top-[20px] sm:top-[-45px]  lg:top-[-10px] xl:-top-11 xl:left-[400px] flex justify-center gap-[5px] md:justify-between">
              <span className="font-inter font-normal text-[16px] md:text-[18px] xl:text-[20px] xl:leading-[28px] w-[81px] h-[28px] text-[#333333] relative top-[10px]">
                Show :
              </span>
              <div className="w-[150px] h-[30px] xl:w-[236px] xl:h-[46px]   bg-white">
                <div className="md:w-[180px] xl:w-[236px] md:h-[46px] w-[150px] h-[40px] rounded-[6px] border-[1px] border-[#BDBDBD] flex items-center justify-between">
                  <span className="font-inter font-normal text-[14px] md:text-[16px] xl:text-[18px] text-[#BDBDBD] ml-5">
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
          <ShopSidebar/>

          <div>
           <ShopCard/>
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
