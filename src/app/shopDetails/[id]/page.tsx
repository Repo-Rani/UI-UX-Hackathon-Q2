"use client";
import React from "react";
import { shopCardData } from "../../../../data/data";
import Image from "next/image";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import ShopSliders from "@/app/components/ShopSlider";
import Link from "next/link";
import ErrorePage from "@/app/components/ErrorePage";
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
      <section>
        <Banner name="404" mainHeading="404 Error" />
        <ErrorePage/>
      </section>

    );
  }
  return (
    <>
      <section className="">
        {/* banner */}
        <Banner name="shop Details" mainHeading="Shop Details"/>

        <div className="absolute top-[70px] ">
        <div className="w-[300px] md:w-[687px] h-[596px] absolute top-[450px] md:top-[530px] left-[35px] md:left-[300px] xl:left-[100px] xxl:left-[300px] flex gap-[13px] ">
          <div className="flex flex-col gap-[20px]">
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] md:h-[129px] w-[150px] md:w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] md:h-[129px] w-[150px] md:w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] md:h-[129px] w-[150px] md:w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.image}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] md:h-[129px] w-[150px] md:w-[132px] object-cover rounded-lg"
            />
          </div>
          <div className="ml-[10px]">
            <Image
              src={product.image}
              alt="large-food-image"
              height={596}
              width={491}
              className="w-[340px] md:w-[520px] h-[380px] md:h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <span className="w-[70px] h-[28px] md:w-[86px] md:h-[28px] absolute top-[850px] md:top-[534px] left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] rounded-[6px] bg-[#FF9F0D] text-white font-normal text-[10px] md:text-[14px] font-inter flex justify-center items-center whitespace-nowrap">
          {product.tag}
        </span>
        <div className="w-[152px] h-[26px] absolute left-[200px]  md:left-[1478px] xl:left-[1300px] xxl:left-[1478px] top-[850px] md:top-[530px]  flex md:justify-between justify-center md:gap-0 gap-[10px] items-center">
          <div className="flex justify-start gap-[6px]">
            <Image
              src="/Project Status.svg"
              alt=""
              width={24}
              height={24}
               className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
            />
            <span className="text-[14px] md:text-[18px] font-normal font-inter text-[#828282]">
              Prev
            </span>
          </div>
          <div className="flex justify-start gap-[6px]">
            <span className="text-[14px] md:text-[18px] font-normal font-inter text-[#828282]">
              Next
            </span>
            <Image
              src="/ArrowRight.svg"
              alt=""
              width={24}
              height={24}
              className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
            />
          </div>
        </div>

        <h1 className="text-[24px] md:text-[48px] font-bold font-helvetica text-[#333333] absolute left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] top-[890px] md:top-[570px] whitespace-nowrap">
          {product.title}
        </h1>

        <p className="w-[300px] md:w-[608px] h-[97px] absolute top-[930px] md:top-[650px] left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] text-[#4F4F4F] font-normal font-inter text-[14px] md:text-[18px] md:leading-[26px]">
          {product.des}
        </p>

        <div className="w-[300px] md:w-[611px] border-b-[1px] border-[#E0E0E0] absolute left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] top-[1100px] md:top-[779px]"></div>

        <h3 className="font-helvetica font-bold md:text-[32px] text-[20px] absolute top-[1120px] md:top-[811px] left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] text-[#333333]">
          {product.price}
        </h3>

        <div className="w-[300px] md:w-[333px] h-[24px] absolute top-[1150px] md:top-[867px] left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] flex justify-between">
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
            <p className="font-inter text-[14px] whitespace-nowrap md:text-[16px]  font-normal text-[#828282] ">
              {product.ratingNum} Rating
            </p>

            <Image
              src="/Line 35.svg"
              alt=""
              height={10}
              width={10}
              className=" md:h-[10px] h-[8px] w-[8px] md:w-[10px]"
            />
            <p className="font-inter text-[14px] whitespace-nowrap md:text-[16px] font-normal text-[#828282] ">
              {product.reviews} Reviews
            </p>
          </div>
        </div>

        <p className="absolute top-[1190px] md:top-[913px] left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] font-normal text-[14px] md:text-[18px] font-inter text-[#333333]">
          {product.text}
        </p>

        <div className="md:w-[181px] w-[100px] h-[40px] md:h-[50px] absolute left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] top-[1230px] md:top-[964px] border-[#828282] border-[1px] flex justify-center gap-[10px] items-center pl-4 pr-4 ">
          <Image
            src="/Minus.svg"
            alt=""
            width={20}
            height={20}
             className="md:h-[20px] h-[14px] w-[14px] md:w-[20px]"
          />
          <div className="border-b-[1px] rotate-90 border-[#828282] w-full  "></div>
          <p className="font-helvetica text-[14px] md:text-[20px] font-bold text-[#333333]">
            1
          </p>
          <div className="border-b-[1px] rotate-90 border-[#828282] w-full "></div>
          <Image
            src="/Plus.svg"
            alt=""
            width={20}
            height={20}
            className="md:h-[20px] h-[14px] w-[14px] md:w-[20px]"
          />
        </div>

        <button className="md:w-[181px] w-[110px] h-[40px] md:h-[50px] absolute left-[220px]  md:left-[1220px] xl:left-[1100px] xxl:left-[1220px] top-[1230px] md:top-[964px]  bg-[#FF9F0D] flex justify-center items-center gap-[10px] md:px-0 px-3">
          <Image
            src="/Bag.svg"
            alt="bag"
            height={20}
            width={20}
            className="md:h-[20px] h-[16px] w-[16px] md:w-[20px]"
          />
          <p className="font-normal text-[14px] md:text-[18px] whitespace-nowrap text-white font-inter ">
           <Link href="/cart"> Add to cart</Link>
          </p>
        </button>

        <div className="w-[250px] md:w-[618px] border-b-[1px] border-[#E0E0E0] absolute left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px]  top-[1300px] md:top-[1048px]"></div>

        <div className="w-[278px] h-[26px] absolute top-[1330px] left-[35px] md:top-[1072px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] flex justify-between items-center">
          <div className="flex justify-start gap-[5px] items-center">
            <Image
              src="/Heart.svg"
              alt=""
              height={20}
              width={20}
              className="md:h-[20px] h-[16px] w-[16px] md:w-[20px]"
            />
            <p className="font-inter text-[14px] md:text-[18px] font-normal text-[#4F4F4F]">
              Add to Wishlist
            </p>
          </div>
          <div className="flex justify-start gap-[5px] items-center">
            <Image
              src="/GitDiff (1).svg"
              alt=""
              height={20}
              width={20}
               className="md:h-[20px] h-[16px] w-[16px] md:w-[20px]"
            />
            <p className="font-inter text-[14px] md:text-[18px] font-normal text-[#4F4F4F]">
              Compare
            </p>
          </div>
        </div>
 
         <p className=" absolute top-[1370px] md:top-[1106px] left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] font-inter text-[#333333] text-[14px] md:text-[18px] font-normal whitespace-nowrap">
          Category: {product.title}
        </p>

        <p className="absolute left-[35px] top-[1400px] md:top-[1140px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] font-inter text-[#333333] text-[14px] md:text-[18px] font-normal whitespace-nowrap">
          Tag: Our Shop
        </p>

        <div className="w-[250px] h-[26px] absolute left-[35px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px]  top-[1430px] md:top-[1190px] flex justify-between items-center">
          <p className="font-inter text-[16px] md:text-[18px] font-normal text-[#333333]">
            Share :
          </p>
          <div className="w-[184px]  h-[24px] flex justify-between items-center">
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

         <div className="w-[250px] md:w-[606px] absolute top-[1480px] md:top-[1248px] md:left-[1020px] xl:left-[850px] xxl:left-[1024px] left-[35px] border-b-[1px] border-[#E0E0E0]"></div>

        <div className=" w-[300px] md:w-[1320px] h-[458px] absolute md:left-[300px] xl:left-[100px] xxl:left-[300px] top-[1500px] left-[35px] md:top-[1304px] ">
          <button className=" w-[130px] md:w-[165px] h-[40px] md:h-[50px]  bg-[#FF9F0D] flex justify-center items-center text-white font-normal text-[14px] md:text-[16px] font-helvetica">
            Description
          </button>
        </div>

        <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#333333] absolute md:left-[489px] xl:left-[289px] xxl:left-[489px] left-[220px] top-[1500px] md:top-[1317px] whitespace-nowrap">
          Reviews ({product.reviews})
        </p> 
         <p className="w-[300px] md:w-[1320px] h-[72px] absolute left-[35px] md:left-[300px] xl:left-[100px] xxl:left-[300px] top-[1560px] md:top-[1386px] font-inter text-[14px] md:text-[16px] font-normal text-[#828282] md:leading-[24px]">
          {product.bottomDetail}
        </p>

        <p className="w-[300px] md:w-[1320px] h-[72px] absolute left-[35px] md:left-[300px] xl:left-[100px] xxl:left-[300px] top-[1810px] md:top-[1482px] font-inter text-[14px] md:text-[16px] font-normal text-[#828282] md:leading-[24px]">
          {product.bottomDetail2}
        </p> 

         <div className="md:w-[476px] w-[250px] h-[184px] absolute left-[35px]  md:left-[302px] xl:left-[100px] xxl:left-[300px] top-[2050px] md:top-[1578px]">
          <h1 className="font-inter font-normal text-[14px] md:text-[18px] text-[#4F4F4F]">
            Key Benefits
          </h1>
          <ul className="list-disc  md:ml-9 mt-4">
            <li className="font-inter font-normal text-[12px] md:text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="font-inter font-normal text-[12px] md:text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li className="font-inter font-normal text-[12px] md:text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Vestibulum sed massa vel ipsum imperdiet malesuada.
            </li>
            <li className="font-inter font-normal text-[12px] md:text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Etiam nec massa et lectus faucibus ornare congue in nunc.
            </li>
            <li className="font-inter font-normal text-[12px] md:text-[14px] text-[#4F4F4F] whitespace-nowrap mt-2">
              Mauris eget diam magna, in blandit turpis.
            </li>
          </ul>
        </div> 
        </div>
         <div className=" w-[300px] md:w-[1320px] h-[401px] absolute top-[2380px] md:top-[1950px] left-[50px] md:left-[302px] xl:left-[100px] xxl:left-[300px]">
      <h2 className="md:w-[255px] h-[39px] font-helvetica font-bold text-[20px] md:text-[32px] text-[#333333] relative bottom-[30px]  md:left-[10px]">Similar Products</h2>
     <ShopSliders/>
     </div> 
      </section>

 <div className="absolute md:top-[2403px] top-[2700px]">
        <Footer/>
      </div> 
    </>
  );
};

export default shopCardsDetails;
