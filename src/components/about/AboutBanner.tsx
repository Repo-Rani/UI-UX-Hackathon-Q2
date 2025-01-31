import React from "react";
import Image from "next/image";
const AboutBanner = () => {
  return (
    <>
    <section className="flex justify-center items-center w-full">
      <div className="w-[250px] xsm:w-[300px] md:w-[650px] sm:w-[570px] lg:w-[870px] xl:w-[1320px] h-[630px] absolute top-[500px] md:top-[550px] xl:top-[530px] sm:h-[430px]  flex sm:flex-row flex-col-reverse  justify-between   ">
        <div className="">
          <Image
            src="/about1.svg"
            alt=""
            height={536}
            width={336}
            className="xl:h-[536px] lg:h-[380px] lg:w-[215px] xl:w-[336px] h-[300px] sm:w-[150px] xsm:w-[180px] w-[130px] md:w-[170px]  rounded-[6px] relative lg:left-0 xsm:left-[-35px] xsm:top-[95px] sm:top-0 left-[-15px] sm:left-[5px] lg:top-[50px] "
          />

           <Image
            src="/about2.svg"
            alt="food-image"
            height={271}
            width={309}
            className="xl:h-[271px] h-[170px] xl:w-[309px] lg:h-[340px] lg:w-[215px] xsm:w-[170px]  md:w-[160px] md:left-[185px] sm:w-[130px] sm:top-[50px] md:top-[30px] w-[130px]  rounded-[6px] absolute lg:left-[225px] xl:left-[355px]   sm:left-[160px] xsm:left-[150px] xsm:top-[470px] left-[120px] top-[375px] lg:top-[20px] xl:top-[120px]"
          /> 
          <Image
            src="/about3.svg"
            alt="food-image"
            height={271}
            width={309}
            className="xl:h-[382px] h-[195px] md:w-[160px] sm:w-[130px] w-[130px] lg:h-[340px] lg:w-[215px] xl:w-[309px] md:top-[188px] xsm:w-[200px] xsm:h-[210px] md:left-[185px] rounded-[6px] absolute xl:left-[355px] lg:left-[225px] sm:left-[160px] xsm:top-[638px] xsm:left-[135px] left-[120px] sm:top-[170px] top-[505px] lg:top-[260px]  xl:top-[410px]"
          /> 
        </div>
        <div className="flex justify-center items-center">
        <div className="sm:w-[250px] w-[300px] h-[300px] lg:w-[440px] xl:w-[526px] lg:h-[366px]  flex flex-col relative justify-between xl:top-[200px] top-[20px] xsm:top-[25px] sm:top-[-10px] sm:left-[-10px] lg:left-[70px] xl:left-0 lg:top-[130px]  ">
          <div className=" h-[26px] flex gap-[10px] items-center w-[100px] ">
            <p
                data-aos="fade-right"
        data-aos-delay="100"
            className="text-[14px]  lg:text-[18px] font-normal font-miniver text-[#FF9F0D] whitespace-nowrap">
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
          className="font-helvetica font-bold text-[24px] lg:text-[32px] xl:text-[48px] text-[#333333] lg:w-[350px] xl:w-[475px] lg:leading-[56px]">
            Food is an important <br />
            <span
             className="whitespace-nowrap"> part Of a balanced Diet</span>
          </h1>
          <p
              data-aos="fade-left"
        data-aos-delay="200"
          className="text-[12px] lg:text-[16px] font-helvetica font-normal text-[#4F4F4F] lg:leading-[24px] lg:w-[400px] xl:w-[526px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
         
          <div className="w-[200px] xsm:w-[250px] h-[40px] lg:w-[350px] xl:w-[390px] lg:h-[60px] relative lg:top-0 top-[10px]  flex justify-between items-center ">
            <button
                data-aos="fade-right"
        data-aos-delay="300"
            className=" w-[80px] h-[30px] xsm:w-[110px] lg:w-[150px]  xl:w-[195px] xsm:h-[40px] lg:h-[58px]  py-[4px] lg:py-[16px] px-[10px] xl:px-[48px] rounded-[6px] bg-[#FF9F0D] font-bold font-inter text-white hover:bg-white text-[10px] xsm:text-[14px] lg:text-[16px] whitespace-nowrap hover:border-[1px] hover:border-[#ff9f0d] hover:text-[#ff9f0d] scale-105 transition-all duration-300 ease-in-out">
              Show more
            </button>
            <div className="w-[100px] xsm:w-[120px] h-[40px] lg:w-[168px] lg:h-[60px]   flex justify-between items-center">
              <div
                   data-aos="fade-left"
        data-aos-delay="300"
              className="w-[30px] h-[30px] xsm:w-[40px] xsm:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] bg-[#FF9F0D] hover:border-[1px] hover:border-[#ff9f0d]  hover:text-[#ff9f0d] scale-105 transition-all duration-300 ease-in-out rounded-full flex items-center justify-center cursor-pointer">
                <Image
                  src="/Play (1).svg"
                  alt="play-icon"
                  height={24}
                  width={24}
                  className="w-[18px] h-[18px] lg:h-[24px] lg:w-[24px] "
                />
              </div>
              <p
                   data-aos="fade-right"
        data-aos-delay="300"
              className="text-[10px] xsm:text-[12px] lg:text-[16px] font-bold whitespace-nowrap font-inter text-[#333333]">
                Watch video
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutBanner;
