import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurChef = () => {
  return (
    <div
 
    className="w-[295px] md:w-[1320px] md:h-[656px]  ">
      <span className="w-[56px] h-[40px] font-greatvibes font-normal md:text-[32px] text-[22px] text-[#ff9f0d] relative md:bottom-[15px]  md:left-[630px] left-[60px] ">
        Chefs
      </span>
      <h3 className="md:w-[329px] w-[250px] md:h-[56px] font-helvetica md:text-[48px] text-[25px] font-bold text-[#ffffff] relative md:bottom-[15px] md:left-[500px]  ">
        <span className="text-[#ff9f0d]">Me</span>et Our Chef
      </h3>
      <div
       
      className="flex  flex-col  md:flex-row  justify-between relative top-[20px] md:left-0 md:righ-0 right-[80px] md:w-[1320px] w-[350px] h-[391px] ">
        <div
          // data-aos="flip-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="1000"
        >
          <Image
            src="/chef-1.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px] w-[180px] h-[180px] md:w-[312px] md:h-[391px] "
          />
          <div className="w-[100px] h-[45px]  md:w-[181px] md:h-[67px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative md:bottom-[67px] bottom-[55px] md:left-0 left-[30px] flex flex-col pl-5 pt-[6px]">
            <span className="md:w-[95px] md:h-[26px] font-inter font-bold text-[12px] md:text-[18px]  text-[#333333]">
              D.Estwood
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal text-[10px] md:text-[14px]  text-[#333333] whitespace-nowrap">
              Chief Chef
            </span>
          </div>
        </div>

        <div 
        
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="1000"
        >
          <Image
            src="/chef-2.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px] w-[180px] h-[180px] md:w-[312px] md:h-[391px]  relative bottom-[230px] md:bottom-0 left-[170px]  md:left-0 "
          />
          <div className="md:w-[181px] md:h-[67px] w-[100px] h-[45px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative md:bottom-[67px] bottom-[285px] md:left-0 left-[210px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold md:text-[18px] text-[12px] text-[#333333]">
              D.Scoriesh
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal md:text-[14px] text-[10px] text-[#333333] whitespace-nowrap">
              Assistant Chef
            </span>
          </div>
        </div>

        <div
        //  data-aos="flip-left"
        //  data-aos-easing="ease-out-cubic"
        //  data-aos-duration="1000"
        >
          <Image
            src="/chef-3.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px] md:w-[312px] md:h-[391px] w-[180px] h-[180px] relative md:bottom-0 bottom-[250px]"
          />
          <div className="md:w-[181px] md:h-[67px] w-[100px] h-[45px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative md:bottom-[67px] bottom-[300px] md:left-0 left-[30px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold md:text-[18px] text-[12px] text-[#333333]">
              M.William
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal md:text-[14px] text-[10px] text-[#333333] whitespace-nowrap">
              Advertising Chef
            </span>
          </div>
        </div>
        <div
        //  data-aos="flip-left"
        //  data-aos-easing="ease-out-cubic"
        //  data-aos-duration="1000"
        >
          <Image
            src="/chef-4.svg"
            alt="chef-image"
            height={391}
            width={312}
            className="rounded-[6px] w-[180px] h-[180px] md:w-[312px] md:h-[391px]  relative md:bottom-0 bottom-[480px] md:left-0 left-[170px]"
          />
          <div className="md:w-[181px] md:h-[67px] w-[100px] h-[45px] rounded-b-[6px] rounded-l-[6px] bg-[#ffffff] relative md:bottom-[67px] bottom-[530px] md:left-0 left-[210px] flex flex-col pl-5 pt-[6px]">
            <span className="w-[95px] h-[26px] font-inter font-bold md:text-[18px] text-[12px] text-[#333333] whitespace-nowrap">
              W.ReadFroad
            </span>
            <span className="w-[71px] h-[22px] font-inter font-normal md:text-[14px] text-[10px] text-[#333333] whitespace-nowrap">
              Chef
            </span>
          </div>
        </div>


      </div> 

       <Link href="/chef">
      <button className="md:w-[155px] md:h-[50px] w-[80px] h-[30px] rounded-[25px] border-[1px] border-[#ff9f0d] relative md:left-[590px] md:top-[68px] top-[50px]  left-[63px] flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out">
        <span className="font-inter font-normal md:text-[16px] text-[10px] text-[#ffffff]">See More</span>
      </button>
    </Link>   
     </div> 
  );
};

export default OurChef;
