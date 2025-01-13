import React from "react";
import Image from "next/image";
const AboutChooseUs = () => {
  return (
    <>
      <section className="w-[300px] md:w-[1320px] h-[500px] md:h-[865px] absolute md:top-[1384px] top-[1250px] left-[35px]  md:left-[300px] xl:left-[100px] xxl:left-[300px]   flex flex-col justify-between">
        <div className=" h-[112px] flex flex-col justify-center text-center ">
          <h1 className="font-helvetica text-[24px] md:text-[48px] font-bold text-[#333333]">
            Why Choose us
          </h1>
          <p className=" text-[12px] md:text-[16px] font-normal font-helvetica text-[#4F4F4F] md:leading-[24px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla
            bibendum.
          </p>
        </div>

        <Image
          src="/about4.svg"
          alt=""
          height={386}
          width={1320}
          className="md:w-[1320px] w-[300px] h-[386px] "
        />
        <div className=" w-[300px] md:w-[1320px] h-[253px] flex md:flex-row flex-col md:justify-between justify-center md:gap-0 gap-[30px] items-center relative md:top-0 top-[60px]">
          <div className="w-[359px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Student.svg"
              alt=""
              height={80}
              width={80}
              className="md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
            />
            <h1 className="font-helvetica font-bold text-[16px] md:text-[24px] text-[#333333]">
              Best Chef
            </h1>
            <p className="w-[359px] font-helvetica text-[12px] md:text-[16px] font-normal text-[#4F4F4F] text-center">
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
              className="md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
            />
            <h1 className="font-helvetica font-bold text-[16px] md:text-[24px] text-[#333333]">
              120 Item food
            </h1>
            <p className="w-[359px] font-helvetica text-[12px] md:text-[16px] font-normal text-[#4F4F4F] text-center">
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
              className="md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
            />
            <h1 className="font-helvetica font-bold text-[16px] md:text-[24px] text-[#333333]">
              Clean Environment
            </h1>
            <p className="w-[359px] font-helvetica text-[12px] md:text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutChooseUs;
