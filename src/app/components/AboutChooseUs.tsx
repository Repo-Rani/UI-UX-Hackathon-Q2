import React from "react";
import Image from "next/image";
const AboutChooseUs = () => {
  return (
    <>
      <section className="w-[1320px] h-[865px] absolute top-[1384px] md:left-[300px] xsm:left-[200px]  flex flex-col justify-between">
        <div className=" h-[112px] flex flex-col justify-center text-center">
          <h1 className="font-roboto text-[48px] font-bold text-[#333333]">
            Why Choose us
          </h1>
          <p className="text-[16px] font-normal font-roboto text-[#4F4F4F] leading-[24px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla
            bibendum.{" "}
          </p>
        </div>

        <Image
          src="/about4.svg"
          alt=""
          height={386}
          width={1320}
          className="w-[1320px] h-[386px]"
        />
        <div className="w-[1320px] h-[253px] flex justify-between items-center">
          <div className="w-[359px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Student.svg"
              alt=""
              height={80}
              width={80}
              className="h-[80px] w-[80px]"
            />
            <h1 className="font-roboto font-bold text-[24px] text-[#333333]">
              Best Chef
            </h1>
            <p className="w-[359px] font-roboto text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
          <div className="w-[359px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Coffee1.svg"
              alt=""
              height={80}
              width={80}
              className="h-[80px] w-[80px]"
            />
            <h1 className="font-roboto font-bold text-[24px] text-[#333333]">
              120 Item food
            </h1>
            <p className="w-[359px] font-roboto text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
          <div className="w-[359px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Person.svg"
              alt=""
              height={80}
              width={80}
              className="h-[80px] w-[80px]"
            />
            <h1 className="font-roboto font-bold text-[24px] text-[#333333]">
              Clean Environment
            </h1>
            <p className="w-[359px] font-roboto text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutChooseUs;
