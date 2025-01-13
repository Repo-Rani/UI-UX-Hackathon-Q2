"use client"
import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import ShopCardList from "../components/ShopCardList";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ShopSidebar from "../components/ShopSidebar";
const Shop = () => {
   
  return (
    <>
    <section className=" w-[390px] md:w-[1920px] xl:w-[1484px] xxl:w-[1920px] lg:w-[1920px]  max-w-[1920px] ">
        <div className="">
          <Banner mainHeading="Our Shop" name="Shop" />


          <div className="absolute left-[40px] md:left-[300px] top-[510px] md:top-[580px] ">
            <div className="w-[250px] md:w-[332px] h-[46px] flex justify-between">
              <span className="font-inter font-normal text-[18px] md:text-[20px] md:leading-[28px] w-[81px] h-[28px] text-[#333333] relative top-[10px]">
                Sort By :
              </span>
              <div className="w-[150px] h-[30px] md:w-[236px] md:h-[46px]   bg-white">
                <div className="w-[180px] md:w-[236px]                            h-[46px] rounded-[6px] border-[1px] border-[#BDBDBD] flex items-center justify-around">
                  <span className="font-inter font-normal text-[16px] md:text-[18px] text-[#BDBDBD] md:-ml-5">
                    Newest
                  </span>
                  <Image
                    src="/CaretDown.svg"
                    alt="option-vector"
                    height={20}
                    width={20}
                    className="md:w-[20px] w-[18px] h-[18px] md:h-[20px] ml-9 "
                  />
                </div>
              </div>
            </div>

            <div className="w-[250px] md:w-[332px] h-[46px]  relative top-[20px] md:-top-11 md:left-[400px] flex justify-between">
              <span className="font-inter font-normal text-[18px] md:text-[20px] md:leading-[28px] w-[81px] h-[28px] text-[#333333] relative top-[10px]">
                Show :
              </span>
              <div className="w-[150px] h-[30px] md:w-[236px] md:h-[46px]   bg-white">
                <div className="w-[180px] md:w-[236px] h-[46px] rounded-[6px] border-[1px] border-[#BDBDBD] flex items-center justify-between">
                  <span className="font-inter font-normal text-[16px] md:text-[18px] text-[#BDBDBD] ml-5">
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
      <ShopCardList />
      </div>
      <div className="absolute md:top-[2470px] top-[2500px] md:left-[635px] xl:left-[435px] xxl:left-[635px]">
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