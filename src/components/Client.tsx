import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="md:w-[1920px] md:h-[469px] lg:w-[1920px] xl:w-[1484px] xxl:full w-[390px] h-[370px] relative bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/client.svg"
          alt="client-image"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Overlay for consistency */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="md:w-[1319px] md:h-[247px] w-[300px] h-[200px] relative top-[122px] md:left-[310px] xl:left-[80px] xxl:left-[310px]  flex md:flex-row flex-col justify-center items-center gap-[10px] md:gap-[140px] ">
        <div className="md:w-[218px] md:h-[247px] w-[200px] h-[200px] flex flex-col items-center md:gap-[30px] gap-[-5px] relative md:top-0 top-[90px] md:right-0 right-[45px]">
          <Image
            src="/Group (1).svg"
            alt="image"
            height={120}
            width={120}
            className=" w-[50px] h-[50px] md:w-[120px] md:h-[120px] "
          />
          <h2 className="w-[218px] h-[32px] font-helvetica font-bold md:text-[24px] md:ml-8 text-[14px] leading-[32px] text-center text-[#ffffff]">
            Professional Chefs
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold md:text-[40px]  text-[20px] text-center text-[#ffffff]">
            420
          </span>
        </div>
        <div className="w-[218px] h-[247px] flex flex-col items-center md:gap-[30px] gap-[-5px] relative md:left-0 left-[130px] md:bottom-0 bottom-12">
          <Image
            src="/Page-1.svg"
            alt="image"
            height={120}
            width={120}
            className="md:w-[120px] md:h-[120px] w-[50px] h-[50px]"
          />
          <h2 className="w-[218px] h-[32px] font-helvetica font-bold md:text-[24px] text-[14px] leading-[32px] text-center md:ml-16 text-[#ffffff]">
            Item Of Food
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold md:text-[40px] text-[20px] text-center text-[#ffffff]">
            320
          </span>
        </div>
        <div className="w-[218px] h-[247px] flex flex-col items-center md:gap-[30px] gap-[-5px] relative md:bottom-0 bottom-10 md:right-0 right-[45px]">
          <Image
            src="/Group.svg"
            alt="image"
            height={120}
            width={120}
            className="md:w-[120px] md:h-[120px] w-[50px] h-[50px]"
          />
          <h2 className="w-[218px] h-[32px] font-helvetica font-bold md:text-[24px] text-[14px] leading-[32px] text-center text-[#ffffff] whitespace-nowrap">
            Years Of Experience
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold md:text-[40px]  text-[20px] text-center text-[#ffffff]">
            30+
          </span>
        </div>
        <div className="w-[218px] h-[247px] flex flex-col items-center md:gap-[30px] gap-[5px] relative md:bottom-0 bottom-48 md:left-0 left-[130px]">
          <Image
            src="/Group (2).svg"
            alt="image"
            height={120}
            width={120}
            className="md:w-[120px] md:h-[120px] w-[50px] h-[50px]"
          />
          <h2 className="w-[218px] h-[32px] font-helvetica font-bold md:text-[24px] text-[14px] leading-[32px] text-center text-[#ffffff]">
            Happy Customers
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold md:text-[40px]  text-[20px] text-center text-[#ffffff]">
            220
          </span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
