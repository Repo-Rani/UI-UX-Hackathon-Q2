import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
          <section className="">
    
    <div className="w-full md:h-[370px] sm:h-[250px] h-[370px] relative  bg-black">
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
      <div className="absolute inset-0 bg-black opacity-20 "></div>

      {/* Content */}
      <div className="xl:w-[1319px] xlg:w-[1200px]  w-full grid grid-cols-2 sm:grid-cols-4  relative md:top-[100px] xlg:left-[70px] xl:left-[120px] xxl:left-[150px] xxxl:left-[300px] sm:top-[80px] xlg:top-[55px]  top-[40px]  ">
        <div className="xlg:w-[218px] md:h-[247px] h-[170px]  flex flex-col items-center lg:gap-[30px] gap-[-5px] md:gap-3 relative ">
          <Image
            src="/Group (1).svg"
            alt="image"
            height={120}
            width={120}
            className=" w-[50px] h-[50px] xlg:w-[120px] xlg:h-[120px]  sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] "
          />
          <h2 className="xlg:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xlg:text-[24px] md:text-[18px]  text-[14px] leading-[32px] text-center text-[#ffffff]">
            Professional Chefs
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xlg:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            420
          </span>
        </div>
        <div className="xlg:w-[218px] md:h-[247px] h-[170px]  flex flex-col items-center lg:gap-[30px] gap-[-5px] md:gap-3 relative ">
          <Image
            src="/Page-1.svg"
            alt="image"
            height={120}
            width={120}
            className="xlg:w-[120px] xlg:h-[120px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          />
          <h2 className="xlg:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xlg:text-[24px] md:text-[18px] text-[14px] leading-[32px] text-center  text-[#ffffff]">
            Item Of Food
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xlg:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            320
          </span>
        </div>
        <div className="xlg:w-[218px] md:h-[247px] h-[170px]  flex flex-col items-center lg:gap-[30px] md:gap-2 gap-[-5px] relative ">
          <Image
            src="/Group.svg"
            alt="image"
            height={120}
            width={120}
            className="xlg:w-[120px] xlg:h-[120px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          />
          <h2 className="xlg:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xlg:text-[24px] md:text-[18px] text-[14px] leading-[32px] text-center text-[#ffffff] whitespace-nowrap">
            Years Of Experience
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xlg:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            30+
          </span>
        </div>
        <div className="xlg:w-[218px] md:h-[247px] h-[170px] flex flex-col items-center lg:gap-[30px] gap-[5px] relative">
          <Image
            src="/Group (2).svg"
            alt="image"
            height={120}
            width={120}
            className="xlg:w-[120px] xlg:h-[120px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          />
          <h2 className="xlg:w-[218px] md:w-[190px] h-[32px] font-helvetica font-bold xlg:text-[24px] md:text-[18px] text-[14px] leading-[32px] text-center text-[#ffffff]">
            Happy Customers
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xlg:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            220
          </span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Clients;
