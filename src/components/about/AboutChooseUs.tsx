import React from "react";
import Image from "next/image";
const AboutChooseUs = () => {
  return (
    <>
 <section className="w-full flex justify-center items-center">
      <div className="w-[300px]  md:w-[750px] xl:w-[1320px] h-[500px] md:h-[670px] xl:h-[865px] absolute md:top-[1100px] lg:top-[1250px]  xl:top-[1384px] xxl:top-[1450px] top-[1250px]  xsm:top-[1420px] sm:top-[1000px]  flex flex-col justify-between">
        <div className=" h-[112px] flex flex-col justify-center text-center ">
          <h1 className="font-helvetica text-[22px] xsm:text-[24px] md:text-[36px] xl:text-[48px] font-bold text-[#333333] relative bottom-2">
            Why Choose us
          </h1>
          <p className=" text-[12px] xsm:text-[14px] md:text-[16px] font-normal  font-helvetica text-[#4F4F4F] md:leading-[24px] text-center">
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
          className="xl:w-[1320px] lg:w-[1000px] md:w-[750px] sm:w-[550px] xsm:w-[425px] ms:w-[350px] w-[300px] h-[386px]  "
        />
        <div className=" w-[300px] xl:w-[1320px] lg:w-[700px] md:w-[750px] h-[253px] flex lg:flex-row   flex-col md:justify-between justify-center lg:gap-0 gap-[30px] items-center relative md:top-0  lg:top-[30px]  top-[60px]">
          <div className="xsm:w-[359px] lg:w-[300px] xl:w-[359px] w-[300px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Student.svg"
              alt=""
              height={80}
              width={80}
              className="xl:h-[80px] xl:w-[80px] md:w-[60px] md:h-[60px] h-[40px] w-[40px]"
            />
            <h1 className="font-helvetica font-bold text-[16px] md:text-[20px] xl:text-[24px] text-[#333333]">
              Best Chef
            </h1>
            <p className="xsm:w-[359px]  xl:w-[359px] lg:w-[300px] md:w-[500px] w-[300px] font-helvetica text-[12px] md:text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
          <div className="xsm:w-[359px] lg:w-[300px] xl:w-[359px] w-[300px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Coffee1.svg"
              alt=""
              height={80}
              width={80}
              className="xl:h-[80px] xl:w-[80px] md:w-[60px] md:h-[60px] h-[40px] w-[40px]"
            />
            <h1 className="font-helvetica font-bold text-[16px] md:text-[20px] xl:text-[24px] text-[#333333]">
              120 Item food
            </h1>
            <p className="xsm:w-[359px]  xl:w-[359px] lg:w-[300px] md:w-[500px] w-[300px] font-helvetica text-[12px] md:text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
          <div className="xsm:w-[359px] lg:w-[300px] xl:w-[359px] w-[300px] h-[225px] flex flex-col justify-between items-center">
            <Image
              src="/Person.svg"
              alt=""
              height={80}
              width={80}
              className="xl:h-[80px] xl:w-[80px] md:w-[60px] md:h-[60px] h-[40px] w-[40px]"
            />
            <h1 className="font-helvetica font-bold text-[16px] md:text-[20px] xl:text-[24px] text-[#333333]">
              Clean Environment
            </h1>
            <p className="xsm:w-[359px] xl:w-[359px] lg:w-[300px] md:w-[500px] w-[300px] font-helvetica text-[12px] md:text-[16px] font-normal text-[#4F4F4F] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutChooseUs;
