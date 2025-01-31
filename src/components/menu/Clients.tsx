import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
          <section className="">
    
    <div className="w-full h-[370px] relative bg-black">
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
      <div className="xl:w-[1319px] md:h-[247px] md:w-[650px] lg:w-[800px] w-[300px] h-[200px] relative top-[122px] lg:top-[75px] xxxl:left-[310px] lg:left-[110px] xl:left-[80px]    flex lg:flex-row flex-col justify-center items-center gap-[10px] lg:gap-[25px] xl:gap-[140px] ">
        <div className="xl:w-[218px]  md:h-[247px] w-[200px] h-[200px] flex flex-col items-center xl:gap-[30px] md:gap-5 gap-[-5px] relative lg:top-0 md:top-[110px] top-[90px] lg:right-0 md:right-[100px] sm:right-0 xsm:right-[45px] right-[60px]">
          <Image
            src="/Group (1).svg"
            alt="image"
            height={120}
            width={120}
            className=" w-[50px] h-[50px] xl:w-[120px] xl:h-[120px]  md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] "
          />
          <h2 className="xl:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xl:text-[24px] md:text-[18px] xl:ml-8 text-[14px] leading-[32px] text-center text-[#ffffff]">
            Professional Chefs
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xl:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            420
          </span>
        </div>
        <div className="xl:w-[218px]  h-[247px] flex flex-col items-center lg:gap-[30px] gap-[-5px] md:gap-3 relative lg:left-0 md:left-[170px] sm:left-[270px] xsm:left-[165px] ms:left-[130px] left-[100px] lg:bottom-0  md:bottom-[4.5rem] bottom-12">
          <Image
            src="/Page-1.svg"
            alt="image"
            height={120}
            width={120}
            className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          />
          <h2 className="xl:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xl:text-[24px] md:text-[18px] text-[14px] leading-[32px] text-center xl:ml-16 text-[#ffffff]">
            Item Of Food
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xl:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            320
          </span>
        </div>
        <div className="xl:w-[218px] h-[247px] flex flex-col items-center lg:gap-[30px] md:gap-2 gap-[-5px] relative lg:bottom-0 md:bottom-[3rem] bottom-10 lg:right-0 md:right-[100px] sm:right-0 xsm:right-[45px] right-[60px]">
          <Image
            src="/Group.svg"
            alt="image"
            height={120}
            width={120}
            className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          />
          <h2 className="xl:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xl:text-[24px] md:text-[18px] text-[14px] leading-[32px] text-center text-[#ffffff] whitespace-nowrap">
            Years Of Experience
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xl:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            30+
          </span>
        </div>
        <div className="xl:w-[218px] h-[247px] flex flex-col items-center lg:gap-[30px] gap-[5px] relative lg:bottom-0 md:bottom-[13.3rem] bottom-[11.5rem] lg:left-0 md:left-[170px] sm:left-[270px] xsm:left-[165px] ms:left-[130px] left-[100px]">
          <Image
            src="/Group (2).svg"
            alt="image"
            height={120}
            width={120}
            className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] w-[50px] h-[50px]"
          />
          <h2 className="xl:w-[218px] md:w-[200px] h-[32px] font-helvetica font-bold xl:text-[24px] md:text-[18px] text-[14px] leading-[32px] text-center text-[#ffffff]">
            Happy Customers
          </h2>
          <span className="w-[67px] h-[48px] font-helvetica font-bold xl:text-[40px] md:text-[24px] lg:text-[30px] text-[20px] text-center text-[#ffffff]">
            220
          </span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Clients;
