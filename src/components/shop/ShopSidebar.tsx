'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import RangeSlider from './PriceRange';
import { FoodCategory, ShopCardProps } from '../../../types/type';


const ShopSidebar = ({handleCategoryChange}: FoodCategory) => {
      const categories = ["All","Sandwiches", "Burgur", "Drink", "Pizza","Sweet", "Chicken Food", "Cheese Butter" ];
      const [filteredProducts, setFilteredProducts] = useState<ShopCardProps[]>([]);
      const [totalPages, setTotalPages] = useState(0);
      const [currentPage, setCurrentPage] = useState(1); 

      const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
      const handleCategoryClick = (category: string, index: number) => {
        handleCategoryChange(category, index); 
        setSelectedCategory(category); 
      };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    
  };
  const category = "Pizza"
  return (
    <>
{/* For desktop screens */}
    <aside className='md:flex hidden'>
    <div className="lg:w-[312px] h-[1590px] w-[290px]  relative top-[150px]   xxxl:left-[1308px] xl:left-[1050px] lg:left-[700px] xlg:left-[850px] md:left-[450px] xxl:left-[1108px] border-[1px] rounded-[6px] border-[#f2f2f2] ">
        <div className="w-[248px] h-[46px] p-3 relative lg:left-[25px]  left-[10px] top-[1.5rem] bg-red-100 ">
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

        <div className="w-[248px] h-[372px] relative top-[40px] lg:left-[28px] left-[15px] flex flex-col justify-between items-center">
              <h2 className="font-helvetica font-bold text-[20px] text-[#333333] w-[248px] h-[28px]">
                Category
              </h2>

{
    categories.map((category, index) => (
        <div key={index}  onClick={() => handleCategoryClick(category, index)}
        className="w-[248px] h-[26px] flex  gap-[8px] ">

            <input type="checkbox" 
            className="w-[14px] h-[14px] border-[1px] border-[#333333] mt-2"
            checked={selectedCategory === category} 
                  readOnly 
            />
            <span className="font-helvetica text-[18px] font-normal text-[#333333]">
                {category}
            </span>
        </div>
        
    ))
  }
<div/>
</div>

        <div className="relative top-[60px] lg:left-[25px] left-[15px]">
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

      <div className="w-[248px] h-[87px] absolute  top-[1440px]  xxxl:left-[1333px] xl:left-[1080px] lg:left-[720px] xxl:left-[1140px] xlg:left-[870px] md:left-[470px]  flex flex-col justify-between ">
        <h1 className="text-[20px] font-bold text-black font-helvetica ">
          Filter By Price
        </h1>
        <RangeSlider
        category={category}
        setFilteredProducts={setFilteredProducts}
        setTotalPages={setTotalPages}
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
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

      <div className="w-[252px] h-[368px] absolute top-[1580px] xxl:top-[1540px] xxxl:left-[1338px] lg:left-[720px] xl:left-[1080px] xxl:left-[1150px] xlg:left-[870px] md:left-[470px] ">
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

        <div className="  w-[225px] h-[162px] relative top-[35px]">
          <h2 className="font-helvetica text-[20px] font-bold w-[127px] h-[28px] text-[#333333] mb-5">
            Product Tags{" "}
          </h2>
          <div className="flex flex-col justify-between gap-[5px] ">
            <div className="flex flex-row gap-[15px] items-center">
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline ">
                Service
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline whitespace-nowrap">
                Our Menu
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline ml-2">
                Pizza
              </span>
            </div>
            <div className="flex gap-[15px] items-center">
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline">
                CupCake
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline">
                Burgur
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline -ml-2">
                Cookies
              </span>
            </div>
            <div className="flex n items-center gap-[20px]">
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline whitespace-nowrap">
                our Shop
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline whitespace-nowrap">
                Tandori Chicken
              </span>
            </div>
          </div>
        </div>
      </div>

    </aside>

    {/* For mobile screen */}
     <button
        className="block md:hidden absolute top-[510px] right-4  hover:bg-black bg-[#ff9f0d] z-40 p-2 rounded-full "
        onClick={toggleSidebar}
      >
        <VscSettings className="h-5 w-5 text-white" />
      </button>
     <aside
  className={`${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:translate-x-0 fixed md:static top-0 left-0 z-40 md:hidden flex h-full w-full bg-white md:bg-transparent text-black ms:p-5 sm:p-0 transform transition-transform duration-300 ${
    isSidebarOpen ? "overflow-y-auto" : "md:overflow-visible"
  } w-[390px] md:w-[330px]`}
>

<div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col gap-[30px]"
        >
          <button
            className="md:hidden mb-4 self-end text-black relative sm:right-[-200px] ms:right-[-25px] sm:top-[10px] "
            onClick={toggleSidebar}
          >
            <FiX className="text-[24px] sm:text-[30px]" />
            </button>

    <div className=" ms:w-[312px] w-[290px] h-[1489px] left-[15px]  ms:left-0 xsm:left-[20px] sm:left-[110px] relative top-[-30px] border-[1px] rounded-[6px] border-[#f2f2f2] ">
        <div className="w-[248px] h-[46px] p-3 relative left-[15px] ms:left-[25px] top-[1.5rem] bg-red-100 ">
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

      

        <div className="relative top-[60px] left-[16px] ms:left-[25px]">
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
     

      <div className="w-[248px] h-[87px] absolute top-[870px] left-[25px]  flex flex-col justify-between  ">
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

      <div className="w-[252px] h-[368px] absolute top-[1000px] left-[25px]  ">
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

        <div className="  w-[225px] h-[162px] relative top-[30px]">
          <h2 className="font-helvetica text-[20px] font-bold w-[127px] h-[28px] text-[#333333] mb-5">
            Product Tags{" "}
          </h2>
          <div className="flex flex-col justify-between gap-[10px]">
            <div className="flex flex-row gap-[15px] items-center">
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline ">
                Service
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline whitespace-nowrap">
                Our Menu
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline ml-2">
                Pizza
              </span>
            </div>
            <div className="flex gap-[15px] items-center">
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline">
                CupCake
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] hover:text-[#ff9f0d] text-[#4f4f4f] underline">
                Burgur
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] hover:text-[#ff9f0d] underline -ml-2">
                Cookies
              </span>
            </div>
            <div className="flex n items-center gap-[20px]">
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] hover:text-[#ff9f0d] underline whitespace-nowrap">
                our Shop
              </span>
              <span className="w-[66px] h-[24px] font-inter text-[16px] text-[#4f4f4f] hover:text-[#ff9f0d] underline whitespace-nowrap">
                Tandori Chicken
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
       </div>
      </aside>
      </>

  )
}

export default ShopSidebar