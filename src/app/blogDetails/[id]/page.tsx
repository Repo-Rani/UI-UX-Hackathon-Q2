"use client";
import React from "react";
import { blogCardData } from "../../../../data/data";
import Image from "next/image";
import Banner from "@/app/components/Banner";
import BlogSideBar from "@/app/components/BlogSideBar";

interface Props {
  params: {
    id: string;
  };
}

const BlogDetails: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const product = blogCardData.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="w-[872px] h-[3138px] absolute top-[530px] left-[300px] bg-pink-500">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center text-red-600">
            Product not found
          </h1>
        </div>
      </section>
    );
  }

  return (

    <>

<div className=''>
    <Banner mainHeading="Blog Details" name="Blog details"/>
  </div>
    <section className="w-[872px] h-[3138px] absolute top-[620px] left-[300px] ">


      <div className="w-[872px] h-[845px] ">
        <Image
          src={product.image}
          alt={product.title}
          height={520}
          width={872}
          className="w-[872px] h-[520px]"
        />
        <div className="w-[267px] h-[26px] absolute top-[536px] ">
          <div className="flex  items-center justify-between gap-[20px] ">
            <Image
              src="/calendar.svg"
              alt="calender-image"
              height={24}
              width={24}
            />
            <div className="flex justify-center items-center gap-[10px] w-[267px] h-[24px]">
              <span className="w-[267px] h-[24px] font-inter font-normal text-[16px] text-[#4F4F4F]">
                Feb 14, 2022/
              </span>
              <Image src="/chats.svg" alt="chat-icon" height={24} width={24} />
              <span className="font-inter font-normal text-[16px] text-[#4f4f4f] whitespace-nowrap">
                3 /
              </span>
              <Image
                src="/userCirclePlus.svg"
                alt="user-image"
                height={24}
                width={24}
              />
              <span className="font-inter font-normal text-[16px] text-[#4f4f4f]">
                Admin
              </span>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-[24px] font-helvetica text-[#333333]  absolute top-[578px]">
          {product.title}
        </h1>
        <div className="w-[694.83px] border-b-[1px] border-[#828282] opacity-20 absolute top-[634px]">
          {" "}
        </div>
        <p className="font-normal text-[16px] font-helvetica text-[#4F4F4F] w-[872px] absolute top-[658px]">
          {product.detail1}
        </p>
        <p className="font-normal text-[16px] font-helvetica text-[#4F4F4F] w-[872px] absolute top-[770px]">
          {product.detail2}
        </p>
      </div>
      <div className="w-[853px] h-[176px] relative top-[60px]  bg-[#FF9F0D]">
        <div className="w-[805px] h-[128px] relative top-[25px] left-[25px] flex justify-between ">
          <Image
            src="/Quotes (1).svg"
            alt=""
            height={48}
            width={48}
            className="w-[48px] h-[48px]"
          />
          <h3 className="w-[741px] h-[128px] text-[24px] font-bold text-white font-helvetica leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </h3>
        </div>
      </div>
      <p className="text-[16px] font-helvetica font-normal text-[#4F4F4F] leading-[24px] w-[882px] relative top-[120px]">
        {product.para1}
      </p>
      <p className="text-[16px] font-helvetica font-normal text-[#4F4F4F] leading-[24px] w-[420px] relative top-[150px]">
        {product.para2}
      </p>
      <p className="text-[16px] font-helvetica font-normal text-[#4F4F4F] leading-[24px] w-[420px] relative top-[180px]">
        {product.para3}
      </p>
      <p className="text-[16px] font-helvetica font-normal text-[#4F4F4F] leading-[24px] w-[882px] relative top-[210px]">
        {product.para4}
      </p>
      <p className="text-[16px] font-helvetica font-normal text-[#4F4F4F] leading-[24px] w-[882px] relative top-[240px]">
        {product.para5}
      </p>
      <Image
        src={product.image}
        alt=""
        height={366}
        width={424}
        className="h-[430px] object-cover w-[424px] absolute top-[1300px] left-[448px]"
      />
      <div className="border-[#E0E0E0] border-[1px] absolute top-[2070px] w-[872px] h-[60px]  flex justify-center gap-[300px] items-center">
        <div className="w-[297px] h-[24px]  flex justify-center gap-[10px] items-center">
          <p className="text-[#333333] font-bold font-helvetica text-[16px]">
            Tags:
          </p>
          <p className="font-normal text-[16px] font-helvetica text-[#828282] whitespace-nowrap">
            Restaurant, Dinner, Pizza, Yummy,{" "}
          </p>
        </div>
        <div className="w-[187px] h-[24px] flex justify-center gap-[20px] items-center">
          <p className="font-bold font-helvetica text-[16px] text-[#333333]">
            Share:
          </p>
          <div className="flex gap-[20px] items-center">
            <Image
              src="/.svg"
              alt=""
              height={18}
              width={10}
              className="w-[11px] h-[20px]"
            />
            <Image
              src="/.svg"
              alt=""
              height={18}
              width={10}
              className="w-[20px] h-[30px]"
            />
            <Image
              src="/.svg"
              alt=""
              height={18}
              width={10}
              className="w-[20px] h-[30px]"
            />
            <Image
              src="/.svg"
              alt=""
              height={18}
              width={10}
              className="w-[20px] h-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="w-[872px] h-[472px] relative top-[400px]">
        <h1 className="text-[32px] font-bold font-helvetica text-[#333333] text-left">
          Comments - 03
        </h1>
        <div className="w-[872px] h-[112px]  relative top-[30px] flex justify-between">
          <Image
            src="/religious-woman-praying-with-rosary-beads-home 1.svg"
            height={97}
            width={109}
            alt=""
            className="w-[109px] h-[97px] rounded-full"
          />
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[30px] items-center">
              <h5 className="font-inter text-[16px] font-bold text-[#333333]">
                MD Sojib Khan
              </h5>
              <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                <Image
                  src="/ArrowBendDoubleUpLeft.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <p className="font-inter text-[14px] font-normal text-[#333333]">
                  Reply
                </p>
              </div>
            </div>
            <div className="w-[129px] h-[24px] flex gap-[10px]">
              <Image
                src="/CalendarBlank.svg"
                alt=""
                width={26}
                height={24}
                className="w-[26px] h-[24px]"
              />
              <p className="font-helvetica text-[14px] font-normal text-[#7A7A7A] whitespace-nowrap">
                June 22, 2020
              </p>
            </div>
            <p className="text-[16px] font-normal font-helvetica text-[#333333] leading-[24px] w-[746.6px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
              hendrerit faucibus sollicitudin.{" "}
            </p>
          </div>
        </div>
        <div className="w-[872px] h-[112px]  relative top-[75px]  left-[80px] flex justify-between">
          <Image
            src="/Mask Group (2).svg"
            height={97}
            width={109}
            alt=""
            className="w-[109px] h-[97px] rounded-full"
          />
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[30px] items-center">
              <h5 className="font-inter text-[16px] font-bold text-[#333333]">
                MD Moon Khan
              </h5>
              <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                <Image
                  src="/ArrowBendDoubleUpLeft (1).svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <p className="font-inter text-[14px] font-normal text-[#FF9F0D]">
                  Reply
                </p>
              </div>
            </div>
            <div className="w-[129px] h-[24px] flex gap-[10px]">
              <Image
                src="/CalendarBlank.svg"
                alt=""
                width={26}
                height={24}
                className="w-[26px] h-[24px]"
              />
              <p className="font-helvetica text-[14px] font-normal text-[#7A7A7A] whitespace-nowrap">
                June 22, 2020
              </p>
            </div>
            <p className="text-[16px] font-normal font-helvetica text-[#333333] leading-[24px] w-[746.6px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
              hendrerit faucibus sollicitudin.{" "}
            </p>
          </div>
        </div>
        <div className="w-[872px] h-[112px]  relative top-[120px] flex justify-between">
          <Image
            src="/Mask Group (3).svg"
            height={97}
            width={109}
            alt=""
            className="w-[109px] h-[97px] rounded-full"
          />
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[30px] items-center">
              <h5 className="font-inter text-[16px] font-bold text-[#333333]">
                MD Sojib Khan
              </h5>
              <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                <Image
                  src="/ArrowBendDoubleUpLeft.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <p className="font-inter text-[14px] font-normal text-[#333333]">
                  Reply
                </p>
              </div>
            </div>
            <div className="w-[129px] h-[24px] flex gap-[10px]">
              <Image
                src="/CalendarBlank.svg"
                alt=""
                width={26}
                height={24}
                className="w-[26px] h-[24px]"
              />
              <p className="font-helvetica text-[14px] font-normal text-[#7A7A7A] whitespace-nowrap">
                June 22, 2020
              </p>
            </div>
            <p className="text-[16px] font-normal font-helvetica text-[#333333] leading-[24px] w-[746.6px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
              tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
              hendrerit faucibus sollicitudin.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[872px] h-[484px]  relative top-[500px]">
        <h1 className="font-helvetica text-[24px] font-bold text-[#333333] text-start">
          Post a comment
        </h1>
        <div className="w-[872px] border-b-[1px] border-[#E0E0E0] relative top-[30px]"></div>
        <input
          type="text"
          className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0]  relative top-[60px] outline-none font-helvetica text-[16px] font-normal text-[#4F4F4F] px-3"
          placeholder="Name*"
        />
        <input
          type="text"
          className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0]  relative top-[60px] left-[25px] outline-none font-helvetica text-[16px] font-normal text-[#4F4F4F] px-3"
          placeholder="Email*"
        />
        <textarea
          placeholder="Write a comment"
          className="w-[872px] h-[244px] border-[1px] border-[#E0E0E0] relative top-[80px]  px-6 py-4 outline-none"
        ></textarea>
        <button className="w-[212px] h-[56px] relative top-[100px] py-[16p] px-[48px] bg-[#FF9F0D] text-white font-normal text-[16px] font-helvetica whitespace-nowrap">
          Post a comment
        </button>
      </div>


      <aside className='absolute top-[-5px] left-[900px]'>
    <BlogSideBar/>
  </aside>
    </section>
    </>
  );
};

export default BlogDetails;
