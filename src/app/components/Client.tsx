import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="w-[1920px] h-[469px] relative bg-black">
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
      <div className="w-[1319px] h-[247px] relative top-[122px] left-[310px] flex justify-center items-center gap-[140px]">
        <div className="w-[218px] h-[247px] flex flex-col items-center gap-[30px]">
          <Image
            src="/Group (1).svg"
            alt="image"
            height={120}
            width={120}
            className="W-[120px] h-[120px]"
          />
          <h2 className="w-[218px] h-[32px] font-roboto font-bold text-[24px] leading-[32px] ml-8 text-[#ffffff]">
            Professional Chefs
          </h2>
          <span className="w-[67px] h-[48px] font-roboto font-bold text-[40px] leading-[48px] text-[#ffffff]">
            420
          </span>
        </div>
        <div className="w-[218px] h-[247px] flex flex-col items-center gap-[30px]">
          <Image
            src="/Page-1.svg"
            alt="image"
            height={120}
            width={120}
            className="W-[120px] h-[120px]"
          />
          <h2 className="w-[218px] h-[32px] font-roboto font-bold text-[24px] leading-[32px] ml-16 text-[#ffffff]">
            Item Of Food
          </h2>
          <span className="w-[67px] h-[48px] font-roboto font-bold text-[40px] leading-[48px] text-[#ffffff]">
            320
          </span>
        </div>
        <div className="w-[218px] h-[247px] flex flex-col items-center gap-[30px]">
          <Image
            src="/Group.svg"
            alt="image"
            height={120}
            width={120}
            className="W-[120px] h-[120px]"
          />
          <h2 className="w-[218px] h-[32px] font-roboto font-bold text-[24px] leading-[32px] text-[#ffffff]">
            Years Of Experience
          </h2>
          <span className="w-[67px] h-[48px] font-roboto font-bold text-[40px] leading-[48px] text-[#ffffff]">
            30+
          </span>
        </div>
        <div className="w-[218px] h-[247px] flex flex-col items-center gap-[30px]">
          <Image
            src="/Group (2).svg"
            alt="image"
            height={120}
            width={120}
            className="W-[120px] h-[120px]"
          />
          <h2 className="w-[218px] h-[32px] font-roboto font-bold text-[24px] leading-[32px] text-[#ffffff]">
            Happy Customers
          </h2>
          <span className="w-[67px] h-[48px] font-roboto font-bold text-[40px] leading-[48px] text-[#ffffff]">
            220
          </span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
