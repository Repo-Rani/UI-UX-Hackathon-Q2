import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP, FaTwitter} from "react-icons/fa";
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className=" relative mx-auto xxl:w-[1920px]  bg-opacity-80  lg:w-[1920px]  md:w-[1920px] bg-black w-[390px] xl:w-[1484px] md:h-[950px] h-[500px]  text-white ">
         {/* Background Image */}
         <Image
          src="/hero-image (2).svg"
          alt="hero-Background-Image"
          height={950}
          width={1920}
          className="absolute top-0 left-0 w-full h-full z-0 object-cover opacity-10 "
        />

        <div className="relative left-[50px] top-[50px]  md:top-[181px]  md:left-[242px] xxl:left-[242px] xl:left-[50px]  md:h-[492px] w-[25.28px] h-[220px] items-center  ">
          <div className=" w-[50px] md:w-[158px] relative md:top-[85px]  border-[1px] -rotate-90 border-[#ffffff] left-[-17px] top-[35px] md:left-[-67px] "></div>
          <div className=" w-[25.28px] h-[107px]  relative top-[80px] md:top-[195px] right-[5px]  md:right-0 flex flex-col items-center gap-[10px] md:gap-[25px]  ">
            <FaFacebookF className=" text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out w-[14px] h-[14px] md:w-[25.28px] md:h-[25.21px] " />
            <FaTwitter className="w-[14px] h-[14px] md:w-[25.28px] md:h-[25.21px]   text-[#ff9f0d] hover:text-[#ffffff] hover:scale-110 transition-all duration-300 ease-in-out " />
            <FaPinterestP className=" w-[14px] h-[14px] md:w-[25.28px] md:h-[25.21px]   text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="  w-[50px] md:w-[158px] relative top-[80px] md:top-[305px]  border-[1px] -rotate-90 border-[#ffffff] left-[-17px] md:left-[-67px] "></div>
        </div>

        <div className="absolute left-[100px] top-[60px] md:top-[293px] md:left-[300px] xxl:left-[300px] xl:left-[100px]  md:w-[472px]  md:h-[356px] h-[80px] rounded-[30px]">
          <span
            data-aos="fade-right"
            flip-down
            className="font-greatvibes font-normal text-[18px]  md:text-[32px]   text-[#FF9F0D]"
          >
            Its Quick & Amusing!
          </span>
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            className="font-helvetica font-bold text-[26px] md:text-5xl  text-white"
          >
            <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
            food Quality
          </h1>
        </div>

        <p
          data-aos="fade-right"
          data-aos-delay="300"
          className="font-inter font-normal  text-[10px] md:text-[16px] md:leading-[24px] text-[#FFFFFF] absolute  md:bottom-0 bottom-[295px] left-[95px] md:left-[300px] lg:left-[300px] xxl:left-[300px] xl:left-[100px] md:top-[470px]  "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <button
          data-aos="fade-left"
          data-aos-delay="500"
          className=" w-[70px]  h-[25px]   md:w-[190px] md:h-[60px] absolute md:top-[550px] top-[215px] left-[95px] md:left-[300px] lg:left-[300px] xxl:left-[300px] xl:left-[100px] bottom-[265px] md:bottom-0   rounded-[30px] bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[10px] md:text-[16px]  font-inter text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out  font-normal"
        >
          <Link href='/menu'>See Menu</Link>
        
        </button>
        {/* Image side */}

        <div className="absolute md:top-[198px] md:left-[865px] xxl:left-[865px] xl:left-[700px] lg:left-[865px] xl:top-[155px] xxl:top-[198px] top-[240px] left-[70px]">
          <Image
            src="/Image (2).svg"
            alt="food-image"
            height={670}
            width={877.8}
            className=" w-[250px] h-[250px] md:w-[877.8px] md:h-[670px] xl:w-[690px] xxl:w-[877.8px]   "
          />
          <Image
            src=" /heroo-image.svg"
            alt="food-image"
            height={100}
            width={100}
            className="w-[190px] h-[190px] md:w-[877.8px] md:h-[670px]  absolute top-[35px] right-[45px] xl:w-[505px] xxl:w-[877.8px] xl:left-[60px] xl:top-[10px] xxl:left-0 xxl:top-[35px] food-rotate  "
          />
        </div>
    </div>
  )
}

export default HeroBanner;