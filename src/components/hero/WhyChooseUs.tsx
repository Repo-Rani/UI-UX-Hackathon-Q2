import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="xl:w-[1100px] xxl:w-[1320px] xl:h-[716px] h-[900px] w-full grid grid-cols-1 sm:grid-cols-2 ">
      
       
      <div className="relative xl:w-[1100px] xxl:w-[1320px] lg:h-[716px] h-[900px] w-full"> 
  <div className="absolute top-[450px]  lg:top-[80px] lg:left-[80px] xxl:left-[150px] ms:left-[25px]  left-[5px]"> 
    <Image
      src="/ci1.svg"
      alt="food-image"
      height={356}
      width={362}
      className="rounded-[6px] w-[170px] h-[356px] md:w-[362px] md:h-[356px]  md:left-[300px] left-[20px]"
    />
    <Image
      src="/ci2.svg"
      alt="food-image"
      height={231}
      width={281}
      className="rounded-[6px] md:left-[373px] md:bottom-[234px] md:w-[281px] md:h-[231px] w-[130px] h-[150px] relative bottom-[225px] left-[175px]"
    />
    <Image
      src="/ci3.svg"
      alt="food-image"
      height={306}
      width={244}
      className="rounded-[6px] relative md:bottom-[220px] bottom-[278px] md:left-0 ms:left-5 left-[3px] md:w-[244px] md:h-[306px] w-[120px] h-[230px] "
    />
    <Image
      src="/ci4.svg"
      alt="food-image"
      height={226}
      width={221}
      className="rounded-[6px] relative  md:left-[254px] ms:left-[147px] left-[128px] md:bottom-[525px] bottom-[493px] md:h-[226px] md:w-[221px] h-[150px] w-[100px]"
    />
    <Image
      src="/ci5.svg"
      alt="food-image"
      height={168}
      width={161}
      className="rounded-[6px] relative  md:left-[485px] md:bottom-[750px] md:w-[161px] md:h-[168px] w-[80px] h-[130px] bottom-[643px] left-[232px] ms:left-[250px]"
    />
    <Image
      src="/ci6.svg"
      alt="food-image"
      height={166}
      width={161}
      className="rounded-[6px] relative  md:left-[485px] ms:left-[250px] left-[232px] md:bottom-[738px] bottom-[685px] md:h-[166px] md:w-[161px] h-[130px] w-[80px]"
    />
  </div>
</div>
 <div className="ms:w-full xl:w-[580px]  w-[300px] flex justify-center items-center flex-col relative md:left-[270px] sm:left-[100px] xsm:left-[70px] left-[20px] md:top-0 top-[-900px]">
      
        <span
        //   data-aos="fade-right"
        // data-aos-delay="100"
        className="md:w-[175px] md:h-[40px] font-greatvibes font-normal text-[20px] sm:text-[28px] md:text-[32px]  text-[#ff9f0d] absolute  md:top-[70px] top-[-35px] left-[10px] md:left-0  whitespace-nowrap">
          Why Choose Us
        </span>
        <h2
        //   data-aos="fade-left"
        // data-aos-delay="100"
        className=" absolute   md:top-[125px] font-helvetica font-bold md:text-[48px] sm:text-[32px] text-[24px] md:leading-[56px] md:left-0 ms:left-[25px] left-[10px] top-0 text-[#ffffff]">
          <span className="text-[#ff9f0d]">Ex</span>tra ordinary taste
          <br />
          And Experienced
        </h2>
        <p
        //   data-aos="fade-right"
        // data-aos-delay="200"
        className="md:w-[526px] w-[290px] md:h-[120px] relative xsm:left-[-40px] ms:left-[-20px] left-[5px] md:left-0 xl:left-[-35px] md:top-[30px] top-20 font-inter font-normal md:text-[16px] text-[14px] md:leading-[24px] text-[#ffffff]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />
          consequat.
        </p>

         <div className="ms:w-[374px] w-[240px] h-[135px] rounded-[6px] relative xl:left-[-110px] sm:left-0 xsm:left-[-60px] ms:left-[-40px] left-[-20px] md:top-[70px] top-[85px] flex items-center justify-center md:gap-[30px]  gap-[12px]">
          <div 
        //     data-aos="flip-left"
        // data-aos-delay="300"
          className="flex flex-col gap-[15px] ">
            <div
            
            className="md:w-[102px] md:h-[100px] w-[70px] h-[70px] rounded-[6px] flex justify-center items-center bg-[#FF9F0D]">
              <Image
                src="/Hamburger.svg"
                alt="food-icon"
                width={50}
                height={50}
                className="md:w-[50px] md:h-[50px] w-[35px] h-[35px]"
             />
            </div>
            <span className="font-inter font-normalmd:text-[18px] text-[14px] leading-[26px] whitespace-nowrap text-[#ffffff] ml-3">
              Fast Food
            </span>
          </div>
          <div
        //       data-aos="flip-right"
        // data-aos-delay="300"
          className="flex flex-col gap-[15px]">
            <div className="md:w-[102px] md:h-[100px] w-[70px] h-[70px] rounded-[6px] flex justify-center items-center bg-[#FF9F0D]">
              <Image src="/Cookie.svg" alt="food-icon" width={50} height={50}
              className="md:w-[50px] md:h-[50px] w-[35px] h-[35px]" />
            </div>
            <span className="font-inter font-normal md:text-[18px] text-[14px] leading-[26px] text-[#ffffff] ml-5">
              Lunch
            </span>
          </div>

          <div
        //       data-aos="flip-left"
        // data-aos-delay="300"
          className="flex flex-col gap-[15px]">
            <div className="md:w-[102px] md:h-[100px] w-[70px] h-[70px]  rounded-[6px] flex justify-center items-center bg-[#FF9F0D]">
              <Image src="/Wine.svg" alt="food-icon" width={50} height={50}
              className="md:w-[50px] md:h-[50px] w-[35px] h-[35px]" />
            </div>

            <span className="font-inter font-normal md:text-[18px] text-[14px] leading-[26px] text-[#ffffff] ml-5">
              Dinner
            </span>
          </div>
        </div>
      </div>

      <div 
        //   data-aos="flip-up"
        // data-aos-delay="300"
      className="md:w-[374px] w-[250px] h-[63px] md:h-[93px] rounded-[6px] relative md:left-0 xl:left-[840px] xxl:left-[950px]  sm:left-[140px] xsm:left-[70px] ms:left-[50px]  left-[25px] md:top-[-100px] top-[-800px]  bg-[#FF9F0D]">
        <div className="md:w-[374px] w-[250px] md:h-[93px] h-[63px] rounded-[6px] bg-[#ffffff] ml-[10px]">
          <div className="flex items-center justify-center gap-[75px] text-center pt-[20px]">
            <span className="font-helvetica text-bold md:text-[48px] text-[34px] relative md:bottom-0 bottom-4 md:left-0 left-5  leading-[56px] text-[#FF9F0D]">
              30+
            </span>
            <div className="flex flex-col items-center gap-[2px] relative md:bottom-0 bottom-[22px] md:right-0 right-6">
              <span className="font-inter font-normal md:text-[20px] text-[14px] leading-[28px] text-[#1e1e1e]">
                Years of
              </span>
              <span className="font-helvetica md:text-[24px] text-[22px] font-bold text-[#1e1e1e] leading-[20px]">
                Experience
              </span>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default WhyChooseUs;
