import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP, FaTwitter} from "react-icons/fa";
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className=" relative mx-auto  max-w-[1920px]  bg-opacity-80   bg-black  w-full xl:h-[950px] h-[500px]  text-white ">
         {/* Background Image */}
         <Image
          src="/hero-image (2).svg"
          alt="hero-Background-Image"
          height={950}
          width={1920}
          quality={100}
          priority
          className="absolute top-0 left-0 w-full  h-full z-0 object-cover opacity-10 "
        />

        {/* Left side  */}
<div className='w-full flex justify-center  items-center  relative '>
  <div className='w-full grid grid-cols-1 md:grid-cols-2 '>
  <div className='flex justify-start w-full relative  '>
        <div className="relative  left-[30px] ms:left-[50px] sm:left-[150px] md:top-[165px] lg:top-[170px] md:left-[20px] top-[50px]  xxxl:top-[181px]  lg:left-[20px] xxxl:left-[242px] xl:left-[50px] xxl:left-[80px] xsm:left-[70px] lg:h-[300px] xl:h-[450px] xxxl:h-[492px] w-[25.28px] h-[220px] items-center    ">
          <div className=" w-[50px] lg:w-[80px] xl:w-[145px] xxxl:w-[158px] relative xl:top-[85px]  border-[1px] -rotate-90 border-[#ffffff] left-[-17px] top-[35px] xl:left-[-67px]  lg:top-[40px] lg:left-[-30px] "></div>
          <div className=" w-[25.28px] h-[107px] lg:h-[75px] xl:h-[107px]   relative top-[80px] lg:top-[95px]  xl:top-[195px] right-[5px]  xl:right-0 flex flex-col items-center gap-[10px] xl:gap-[25px]  ">
            <FaFacebookF className=" text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out w-[14px] h-[14px] xl:w-[25.28px] xl:h-[25.21px] " />
            <FaTwitter className="w-[14px] h-[14px] xl:w-[25.28px] xl:h-[25.21px]   text-[#ff9f0d] hover:text-[#ffffff] hover:scale-110 transition-all duration-300 ease-in-out " />
            <FaPinterestP className=" w-[14px] h-[14px] xl:w-[25.28px] xl:h-[25.21px]   text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="  w-[50px] lg:w-[80px] xl:w-[145px] xxxl:w-[158px] relative top-[80px] xl:top-[305px] lg:top-[140px] border-[1px] -rotate-90 border-[#ffffff] left-[-17px] xl:left-[-67px]  lg:left-[-30px]"></div>
        </div>
        </div>
        <div className='flex justify-center flex-col absolute lg:h-[450px] md:h-[410px]   xxxl:left-[300px] xxl:left-0 xxxl:top-[240px]  xl:left-[110px] xl:top-[90px] md:top-0 lg:left-[50px]   md:left-[50px] sm:left-[180px] top-[60px] left-[60px] ms:left-[80px] xsm:left-[100px]'>
        <div className="   xl:w-[472px]  xxxl:h-[356px] h-[80px] rounded-[30px] space-y-3 xl:space-y-6">
          <span
            // data-aos="fade-right"
            // flip-down
            className="font-greatvibes font-normal text-[18px] lg:text-[25px]  xl:text-[32px]  relative md:top-[20px] top-[10px]  text-[#FF9F0D]"
          >
            Its Quick & Amusing!
          </span>
          <h1
            data-aos="fade-left"
            data-aos-delay="200"
            className="font-helvetica font-bold text-[26px] lg:text-[32px] xl:text-5xl  text-white"
          >
            <span className="text-[#FF9F0D]">Th</span>e Art of speed <br />
            food Quality
          </h1>
        

        <p
          // data-aos="fade-right"
          // data-aos-delay="300"
          className="font-inter font-normal  text-[8px] ms:text-[10px] lg:text-[12px] xl:text-[16px] xl:leading-[24px] text-[#FFFFFF]    "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <button
          // data-aos="fade-left"
          // data-aos-delay="500"
          className=" w-[70px]  h-[25px] md:w-[100px] md:h-[35px]   xl:w-[190px] xl:h-[60px]     rounded-[30px] bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[10px] md:text-[12px] xl:text-[16px]  font-inter text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out  font-normal"
        >
          <Link href='/menu'>See Menu</Link>
        
        </button>
        </div>
        </div>

{/* Right side */}
<div className='w-full flex xxl:justify-start  justify-center  relative top-[50px] md:top-[140px]  lg:top-[140px] xxl:top-[180px]'>

         <div className=" ">
          <Image
            src="/Image (2).svg"
            alt="food-image"
            height={670}
            width={877.8}
            quality={100}
          priority
            className=" w-[250px] h-[250px] md:w-[300px] md:h-[300px] xl:w-[600px] xxl:w-[700px] xxl:h-[700px] xl:h-[600px] xxxl:w-[800px] xxxl:h-[670px] lg:w-[400px] lg:h-[400px]   "
          />
          <div className='inset-0  flex justify-center items-center absolute xxxl:right-[240px] xxl:right-[300px] xl:right-[50px] right-[30px] '>
          <Image
  src="/heroo-image.svg"
  alt="food-image"
  height={100}
  width={100}
  quality={100}
  priority
  className="w-[190px] h-[190px] md:w-[230px] md:h-[230px] lg:h-[315px] lg:w-[310px] xxl:w-[525px] xxl:h-[570px] xl:w-[500px] xl:h-[465px] xxxl:w-[610px] xxxl:h-[620px]   z-20 rotatePlate"
/>
</div>
        </div> 
        </div>
        </div>
        </div>
        </div>
 
   
  )
}

export default HeroBanner;