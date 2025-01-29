import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

const HeroAboutUs = () => {
  return (
    <>
    <div className='w-full flex justify-center flex-col  md:flex-row items-center px-3 md:px-0'>
    <div className="w-[600px] sm:w-[465px]  xl:w-[1320px] xl:h-[562px]  relative top-[40px] xl:top-0 left-0 ms:left-[20px] xsm:left-[50px] sm:left-[-10px] md:left-[-130px] lg:left-[-220px] xl:left-[80px]  xxxl:left-0   flex flex-col gap-[5px] xl:gap-[12px] ">
    
    <span
      // data-aos="fade-right"
      // data-aos-delay="100"
      className="xl:text-[32px] sm:text-[28px] ms:text-[24px] ms:w-[100px] md:w-[150px] whitespace-nowrap xl:w-0 text-[22px] font-normal text-[#FF9F0D]  font-greatvibes"
    >
      About us
    </span>

    <h1
      // data-aos="fade-right"
      // data-aos-delay="100"
      className="text-[20px] sm:text-[32px] ms:w-[300px] sm:w-[500px] md:w-[350px] lg:w-[500px] xl:w-0 xl:text-[48px] font-bold font-helvetica whitespace-nowrap  md:leading-[56px] text-[#ffffff]"
    >
      <span className="text-[#FF9F0D]">We </span>Create the best <br />
      foody product
    </h1>

    <p
      // data-aos="fade-left"
      // data-aos-delay="200"
      className="text-[10px] xl:leading-[24px] w-[300px] ms:w-[350px] sm:w-[500px] md:w-[400px]  lg:w-[526px]   sm:text-[12px] xl:text-[16px] text-[#ffffff] font-inter  font-normal"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      diam pellentesque bibendum non dui volutpat fringilla bibendum.
      Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      Ultrices mattis <br />
      sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
      <br />
      consequat.
    </p>
    <div className=" w-[300px] ms:w-[400px] sm:w-[450px] md:w-[400px] lg:w-[550px]  flex flex-col gap-4">
      <div
        // data-aos="fade-right"
        // data-aos-delay="300"
        className="flex items-center justify-start mr-5  "
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2 " />
        <span className="  w-[50px] text-[10px] text-[#ffffff]  sm:text-[14px] xl:text-[18px] font-normal whitespace-nowrap font-inter">
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </span>
      </div>
      <div
        // data-aos="fade-left"
        // data-aos-delay="400"
        className="flex items-center mr-2"
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] " />
        <span className="w-[50px] text-[10px] text-[#ffffff] sm:text-[14px] xl:text-[18px] font-normal font-inter whitespace-nowrap  pr-24 xsm:pr-20">
          Quisque diam pellentesque bibendum non dui volutpat fring
        </span>
      </div>
      <div
        // data-aos="fade-right"
        // data-aos-delay="500"
        className="flex items-center"
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
        <span
          // data-aos="fade-right"
          // data-aos-delay="300"
          className="text-[10px] text-[#ffffff] sm:text-[14px] xl:text-[18px] font-normal whitespace-nowrap font-inter w-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>

      <div
    
        className=" flex flex-col  items-center md:flex-row md:items-start justify-center xsm:mt-3 mt-2  "
      >
        <button className="bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[10px] sm:text-[12px] xl:text-[16px]   text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out rounded-[30px]  w-[70px]  h-[28px] xsm:right-[150px] sm:w-[100px] sm:h-[38px]  xl:w-[190px] xl:h-[60px]  relative  ms:right-[150px] right-[100px]  md:right-[140px] sm:right-[160px] xl:right-[160px]">
          <Link href='/about'>Read More</Link>
        </button>
      </div>
    </div>
    <div className=''>
  <div className="relative xsm:left-[-25px] ms:left-0 left-[5px] top-[40px] sm:top-0 xl:top-[-480px] sm:left-0  xl:left-[-300px] md:top-[-420px] md:left-[430px] lg:left-[570px] md:w-[400px] xl:w-[660px] xxxl:left-[-100px] xxl:left-[-360px]">
    <Image
      src="/about-1.svg"
      alt="Hero Image"
      width={660}
      height={330}
      className=" absolute sm:top-[-50px] xl:left-[1000px] xsm:w-[350px] xsm:h-[250px]  ms:w-[300px] w-[285px] h-[230px] sm:w-[410px] sm:h-[400px] md:h-[320px] xxl:w-[660px] xl:w-[580px] xl:h-[330px] md:w-[300px] lg:w-[350px] rounded-[6px]"
    />

    <Image
      src="/about-2.svg"
      alt="Hero Image"
      width={322}
      height={194}
      className="ms:w-[145px] ms:h-[145px] w-[142px] h-[140px] xsm:w-[180px] xsm:h-[100px] sm:w-[250px] md:w-[150px] sm:h-[120px]  xl:h-[194px]  sm:left-[-20px] absolute xsm:top-[218px] xsm:left-[0px] sm:top-[260px] md:top-[177px] ms:top-[168px] top-[165px] xl:top-[255px] lg:w-[170px]  lg:top-[195px] xl:left-[1005px]   xxl:left-[1005px] xxl:top-[290px] md:left-[-3px] lg:left-[5px] rounded-[6px] xl:w-[285px] xxl:w-[322px]  "
    />

    <Image
      src="/about-3.svg"
      alt="Hero Image"
      width={322}
      height={194}
      className="ms:w-[148px] ms:h-[145px] md:w-[150px] w-[140px] h-[140px] xsm:w-[180px] xsm:h-[100px] sm:w-[250px] sm:h-[120px] xxl:w-[322px] xl:h-[194px]  xsm:top-[218px] sm:top-[260px] ms:top-[168px] top-[165px] left-[145px] ms:left-[150px]  xsm:left-[170px] sm:left-[185px]  absolute xl:top-[255px] xl:left-[1298px] xxl:left-[1335px] xxl:top-[290px] xl:w-[285px] md:top-[177px] lg:w-[170px] lg:top-[195px] md:left-[150px] lg:left-[180px] rounded-[6px]"
    />
  </div>
  </div>
  </div>
  </div>

  </>
  )
}

export default HeroAboutUs