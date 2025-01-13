import React from "react";
import Image from "next/image";
const AboutBanner = () => {
  return (
    <>
      <section className="w-[150px] md:w-[1320px] h-[734px] absolute top-[530px] md:left-[300px] xl:left-[100px] xxl:left-[300px]   flex md:flex-row flex-col  justify-between ">
        <div className="">
          <Image
            src="/about1.svg"
            alt=""
            height={536}
            width={336}
            className="h-[536px] w-[336px] rounded-[6px] relative top-[-150px] md:left-0 left-[40px] md:top-[50px] "
          />

          <Image
            src="/about2.svg"
            alt="food-image"
            height={271}
            width={309}
            className="h-[271px] w-[309px] rounded-[6px] absolute md:left-[355px]  left-[195px] top-[-50px] md:top-[120px]"
          />
          <Image
            src="/about3.svg"
            alt="food-image"
            height={271}
            width={309}
            className="h-[382px] w-[309px] rounded-[6px] absolute md:left-[355px] left-[195px] top-[58px] md:top-[410px]"
          />
        </div>
        <div className="w-[300px] md:w-[526px] h-[366px]  flex flex-col relative justify-between md:top-[200px] top-[-140px] md:left-0 left-[20px]">
          <div className=" h-[26px] flex gap-[10px] items-center ">
            <p
                data-aos="fade-right"
        data-aos-delay="100"
            className="text-[14px] md:text-[18px] font-normal font-miniver text-[#FF9F0D] whitespace-nowrap">
              About us
            </p>

            <span 
                data-aos="fade-right"
        data-aos-delay="100"
            className="border-b-[1px] border-[#FF9F0D] w-[34px] mt-2"></span>
          </div>
          <h1
              data-aos="fade-left"
        data-aos-delay="200"
          className="font-helvetica font-bold text-[24px] md:text-[48px] text-[#333333] md:leading-[56px]">
            Food is an important <br />
            <span
             className="whitespace-nowrap"> part Of a balanced Diet</span>
          </h1>
          <p
        //       data-aos="fade-left"
        // data-aos-delay="200"
          className="text-[12px] md:text-[16px] font-helvetica font-normal text-[#4F4F4F] md:leading-[24px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>

          <div className="w-[250px] h-[40px] md:w-[379px] md:h-[60px] relative md:top-0 top-[20px]  flex justify-between ">
            <button
                data-aos="fade-right"
        data-aos-delay="300"
            className="w-[110px] md:w-[195px] h-[40px] md:h-[58px]  py-[4px] md:py-[16px] px-[10px] md:px-[48px] rounded-[6px] bg-[#FF9F0D] font-bold font-inter text-white hover:bg-white text-[14px] md:text-[16px] whitespace-nowrap hover:border-[1px] hover:border-[#ff9f0d] hover:text-[#ff9f0d] scale-105 transition-all duration-300 ease-in-out">
              Show more
            </button>
            <div className="w-[120px] h-[40px] md:w-[168px] md:h-[60px]   flex justify-between items-center">
              <div
                   data-aos="fade-left"
        data-aos-delay="300"
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] bg-[#FF9F0D] hover:border-[1px] hover:border-[#ff9f0d]  hover:text-[#ff9f0d] scale-105 transition-all duration-300 ease-in-out rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src="/Play (1).svg"
                  alt="play-icon"
                  height={24}
                  width={24}
                  className="w-[18px] h-[18px] md:h-[24px] md:w-[24px] "
                />
              </div>
              <p
                   data-aos="fade-right"
        data-aos-delay="300"
              className="text-[12px] md:text-[16px] font-bold whitespace-nowrap font-inter text-[#333333]">
                Watch video
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
