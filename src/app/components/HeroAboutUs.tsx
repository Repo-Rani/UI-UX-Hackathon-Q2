import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

const HeroAboutUs = () => {
  return (
    <>
    <div className="w-[300px] md:w-[562px] md:h-[562px]  relative top-[40px] md:top-0 left-[50px]   md-left-0   flex flex-col gap-[5px] md:gap-[12px] ">
    <span
      data-aos="fade-right"
      data-aos-delay="100"
      className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D]  font-greatvibes"
    >
      About us
    </span>

    <h1
      data-aos="fade-right"
      data-aos-delay="100"
      className="text-[20px] md:text-[48px] font-bold font-helvetica whitespace-nowrap  md:leading-[56px] text-[#ffffff]"
    >
      <span className="text-[#FF9F0D]">We </span>Create the best <br />
      foody product
    </h1>

    <p
      data-aos="fade-left"
      data-aos-delay="200"
      className="text-[10px] md:leading-[24px] md:text-[16px] text-[#ffffff] font-inter  font-normal"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      diam pellentesque bibendum non dui volutpat fringilla bibendum.
      Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      Ultrices mattis <br />
      sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
      <br />
      consequat.
    </p>
    <div className=" flex flex-col gap-4">
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="flex items-center"
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
        <span className="  w-[50px] text-[10px] text-[#ffffff] md:text-[18px] font-normal whitespace-nowrap font-inter">
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </span>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="flex items-center"
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
        <span className="w-[50px] text-[10px] text-[#ffffff] md:text-[18px] font-normal font-inter whitespace-nowrap pr-20">
          Quisque diam pellentesque bibendum non dui volutpat fringilla
        </span>
      </div>
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        className="flex items-center"
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
        <span
          data-aos="fade-right"
          data-aos-delay="300"
          className="text-[10px] text-[#ffffff] md:text-[18px] font-normal whitespace-nowrap font-inter w-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>

      <div
    
        className=" flex flex-col  items-center md:flex-row md:items-start justify-center mt-5   "
      >
        <button className="bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[10px] md:text-[16px]  text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out rounded-[30px]  w-[70px]  h-[28px]  md:w-[190px] md:h-[60px]  relative  right-[100px] md:right-[165px]   ">
          <Link href='/about'>Read More</Link>
        </button>
      </div>
    </div>
  </div>

  <div className="relative left-[40px] top-[50px]  md:top-[-560px] md:left-[-300px]  ">
    <Image
      src="/about-1.svg"
      alt="Hero Image"
      width={660}
      height={330}
      className=" absolute md:left-[960px] w-[300px] h-[250px]  md:w-[660px] md:h-[330px]   rounded-[6px]"
    />

    <Image
      src="/about-2.svg"
      alt="Hero Image"
      width={322}
      height={194}
      className="w-[145px] h-[145px] md:w-[322px] md:h-[194px]  absolute top-[178px] md:top-[340px]  md:left-[965px] rounded-[6px]"
    />

    <Image
      src="/about-3.svg"
      alt="Hero Image"
      width={322}
      height={194}
      className="w-[145px] h-[145px] md:w-[322px] md:h-[194px]  top-[178px] left-[150px] absolute md:top-[340px] md:left-[1298px] rounded-[6px]"
    />
  </div>
  </>
  )
}

export default HeroAboutUs