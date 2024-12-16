"use client";
import React from "react";
import { shopCardData } from "../../../../data/data";
import Image from "next/image";
import ShopCardList from "@/app/components/ShopCardList";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import ShopSliders from "@/app/components/ShopSlider";
import Link from "next/link";
interface Props {
  params: {
    id: string;
  };
}
const shopCardsDetails: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const product = shopCardData.find((item: any) => item.id === id);
  if (!product) {
    return (
      <div className="text-center mt-10 text-black">
      error page
      </div>
    );
  }
  return (
    <>
      <section className="">
        {/* banner */}
        <Banner name="shop Details" mainHeading="Shop Details"/>

        <div className="absolute top-[70px]">
        <div className="w-[687px] h-[596px] absolute top-[530px] left-[300px] flex gap-[13px] ">
          <div className="flex flex-col gap-[20px]">
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[129px] w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[129px] w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[129px] w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[129px] w-[132px] object-cover rounded-lg"
            />
          </div>
          <div className="ml-[10px]">
            <Image
              src={product.image}
              alt="large-food-image"
              height={596}
              width={491}
              className="w-[520px] h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <span className="w-[86px] h-[28px] absolute top-[534px] left-[1020px] rounded-[6px] bg-[#FF9F0D] text-white font-normal  text-[14px] font-inter flex justify-center items-center">
          {product.tag}
        </span>
        <div className="w-[152px] h-[26px] absolute left-[1478px] top-[530px]  flex justify-between items-center">
          <div className="flex justify-start gap-[6px]">
            <Image
              src="/Project Status.svg"
              alt=""
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
            <span className="text-[18px] font-normal font-inter text-[#828282]">
              Prev
            </span>
          </div>
          <div className="flex justify-start gap-[6px]">
            <span className="text-[18px] font-normal font-inter text-[#828282]">
              Next
            </span>
            <Image
              src="/ArrowRight.svg"
              alt=""
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>

        <h1 className="text-[48px] font-bold font-helvetica text-[#333333] absolute left-[1020px] top-[570px] whitespace-nowrap">
          {product.title}
        </h1>

        <p className="w-[608px] h-[97px] absolute top-[650px] left-[1020px] text-[#4F4F4F] font-normal font-inter text-[18px] leading-[26px]">
          {product.des}
        </p>

        <div className="w-[611px] border-b-[1px] border-[#E0E0E0] absolute left-[1020px] top-[779px]"></div>

        <h3 className="font-helvetica font-bold text-[32px] absolute top-[811px] left-[1020px] text-[#333333]">
          {product.price}
        </h3>

        <div className="w-[333px] h-[24px] absolute top-[867px] left-[1020px] flex justify-between">
          <Image
            src="/Star (2).svg"
            alt=""
            width={116}
            height={20}
            className=" h-[20px] w-[116px]"
          />
          <div className="w-[203px] h-[24px] flex justify-between">
            <Image
              src="/Line 35.svg"
              alt=""
              height={10}
              width={10}
              className=" w-[13px]"
            />
            <p className="font-inter text-[16px] font-normal text-[#828282] ">
              {product.ratingNum} Rating
            </p>

            <Image
              src="/Line 35.svg"
              alt=""
              height={10}
              width={10}
              className=" w-[13px]"
            />
            <p className="font-inter text-[16px] font-normal text-[#828282] ">
              {product.reviews} Reviews
            </p>
          </div>
        </div>

        <p className="absolute top-[913px] left-[1020px] font-normal text-[18px] font-inter text-[#333333]">
          {product.text}
        </p>

        <div className="w-[181px] h-[50px] absolute left-[1020px] top-[964px] border-[#828282] border-[1px] flex justify-center gap-[10px] items-center pl-4 pr-4 ">
          <Image
            src="/Minus.svg"
            alt=""
            width={20}
            height={20}
            className="h-[20px] w-[20px] "
          />
          <div className="border-b-[1px] rotate-90 border-[#828282] w-full  "></div>
          <p className="font-helvetica text-[20px] font-bold text-[#333333]">
            1
          </p>
          <div className="border-b-[1px] rotate-90 border-[#828282] w-full "></div>
          <Image
            src="/Plus.svg"
            alt=""
            width={20}
            height={20}
            className="h-[20px] w-[20px]"
          />
        </div>

        <button className="w-[191px] h-[50px] absolute left-[1220px] top-[964px]  bg-[#FF9F0D] flex justify-center items-center gap-[10px]">
          <Image
            src="/Bag.svg"
            alt="bag"
            height={20}
            width={20}
            className="h-[20px] w-[20px]"
          />
          <p className="font-normal text-[18px] text-white font-inter ">
            Add to cart
          </p>
        </button>

        <div className="w-[618px] border-b-[1px] border-[#E0E0E0] absolute left-[1020px] top-[1048px]"></div>

        <div className="w-[278px] h-[26px] absolute top-[1072px] left-[1020px] flex justify-between items-center">
          <div className="flex justify-start gap-[5px] items-center">
            <Image
              src="/Heart.svg"
              alt=""
              height={20}
              width={20}
              className="h-[20px] w-[20px]"
            />
            <p className="font-inter text-[18px] font-normal text-[#4F4F4F]">
              Add to Wishlist
            </p>
          </div>
          <div className="flex justify-start gap-[5px] items-center">
            <Image
              src="/GitDiff (1).svg"
              alt=""
              height={20}
              width={20}
              className="h-[20px] w-[20px]"
            />
            <p className="font-inter text-[18px] font-normal text-[#4F4F4F]">
              Compare
            </p>
          </div>
        </div>

        <p className=" absolute top-[1106px] left-[1020px] font-inter text-[#333333] text-[18px] font-normal whitespace-nowrap">
          Category: {product.title}
        </p>

        <p className="absolute top-[1140px] left-[1020px] font-inter text-[#333333] text-[18px] font-normal whitespace-nowrap">
          Tag: Our Shop
        </p>

        <div className="w-[250px] h-[26px] absolute left-[1020px] top-[1190px] flex justify-between items-center">
          <p className="font-inter text-[18px] font-normal text-[#333333]">
            Share :{" "}
          </p>
          <div className="w-[184px] h-[24px] flex justify-between items-center">
            <Image
              src="/Vector (3).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Vector (4).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Vector (5).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Vector (6).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Group 3.svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>

        <div className="w-[606px] absolute top-[1248px] left-[1020px] border-b-[1px] border-[#E0E0E0]"></div>

        <div className="w-[1320px] h-[458px] absolute left-[300px] top-[1304px]">
          <button className="w-[165px] h-[50px]  bg-[#FF9F0D] flex justify-center items-center text-white font-normal text-[16px] font-helvetica">
            Description
          </button>
        </div>

        <p className="font-normal text-[16px] font-helvetica text-[#333333] absolute left-[489px] top-[1317px] whitespace-nowrap">
          Reviews ({product.reviews})
        </p>
        <p className="w-[1320px] h-[72px] absolute left-[300px] top-[1386px] font-inter text-[16px] font-normal text-[#828282] leading-[24px]">
          {product.bottomDetail}
        </p>

        <p className="w-[1320px] h-[72px] absolute left-[300px] top-[1482px] font-inter text-[16px] font-normal text-[#828282] leading-[24px]">
          {product.bottomDetail2}
        </p>

        <div className="w-[476px] h-[184px] absolute left-[302px] top-[1578px]">
          <h1 className="font-inter font-normal text-[18px] text-[#4F4F4F]">
            Key Benefits
          </h1>
          <ul className="list-disc ml-9 mt-4">
            <li className="font-inter font-normal text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="font-inter font-normal text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li className="font-inter font-normal text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li className="font-inter font-normal text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Etiam nec massa et lectus faucibus ornare congue in nunc.
            </li>
            <li className="font-inter font-normal text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Mauris eget diam magna, in blandit turpis.
            </li>
          </ul>
        </div>
        </div>
        <div className=" w-[1320px] h-[401px] absolute top-[1950px] left-[302px]">
      <h2 className="w-[255px] h-[39px] font-helvetica font-bold text-[32px] text-[#333333] relative bottom-[30px] left-[10px]">Similar Products</h2>
     <ShopSliders/>
     </div>
      </section>


      <div className="absolute top-[2403px]">
        <Footer/>
      </div>
    </>
  );
};

export default shopCardsDetails;
