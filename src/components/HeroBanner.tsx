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
<div className='w-full flex justify-center  items-center'>
  <div className='flex justify-start w-full'>
        <div className="relative left-[30px] ms:left-[50px] sm:left-[150px] md:top-[150px] lg:top-[170px] md:left-[30px] top-[50px]  xxxl:top-[181px]  lg:left-[30px] xxxl:left-[242px] xl:left-[50px] xxl:left-[80px] lg:h-[300px] xl:h-[450px] xxxl:h-[492px] w-[25.28px] h-[220px] items-center  ">
          <div className=" w-[50px] lg:w-[80px] xl:w-[145px] xxxl:w-[158px] relative xl:top-[85px]  border-[1px] -rotate-90 border-[#ffffff] left-[-17px] top-[35px] xl:left-[-67px]  lg:top-[40px] lg:left-[-30px] "></div>
          <div className=" w-[25.28px] h-[107px] lg:h-[75px] xl:h-[107px]   relative top-[80px] lg:top-[95px]  xl:top-[195px] right-[5px]  xl:right-0 flex flex-col items-center gap-[10px] xl:gap-[25px]  ">
            <FaFacebookF className=" text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out w-[14px] h-[14px] xl:w-[25.28px] xl:h-[25.21px] " />
            <FaTwitter className="w-[14px] h-[14px] xl:w-[25.28px] xl:h-[25.21px]   text-[#ff9f0d] hover:text-[#ffffff] hover:scale-110 transition-all duration-300 ease-in-out " />
            <FaPinterestP className=" w-[14px] h-[14px] xl:w-[25.28px] xl:h-[25.21px]   text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="  w-[50px] lg:w-[80px] xl:w-[145px] xxxl:w-[158px] relative top-[80px] xl:top-[305px] lg:top-[140px] border-[1px] -rotate-90 border-[#ffffff] left-[-17px] xl:left-[-67px]  lg:left-[-30px]"></div>
        </div>
        </div>
        <div className="absolute ms:left-[100px] sm:left-[190px] md:left-[80px] md:top-[170px] left-[70px] top-[60px] xxxl:top-[293px] xl:left-[110px] xxl:left-[130px] xl:top-[230px] xxxl:left-[300px] xxxxl:left-[300px] lg:top-[200px] lg:left-[70px]  xl:w-[472px]  xxxl:h-[356px] h-[80px] rounded-[30px]">
          <span
            // data-aos="fade-right"
            // flip-down
            className="font-greatvibes font-normal text-[18px] lg:text-[25px]  xl:text-[32px]   text-[#FF9F0D]"
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
        </div>

        <p
          // data-aos="fade-right"
          // data-aos-delay="300"
          className="font-inter font-normal  text-[8px] ms:text-[10px] lg:text-[12px] xl:text-[16px] xl:leading-[24px] text-[#FFFFFF] absolute  xl:bottom-0 bottom-[300px] ms:bottom-[290px] left-[70px] ms:left-[95px] sm:left-[190px] xl:top-[400px] xxl:left-[125px] xl:left-[105px] xxxl:left-[300px] lg:left-[75px] lg:top-[340px] md:top-[290px] xxxl:top-[470px] md:left-[80px] "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <button
          // data-aos="fade-left"
          // data-aos-delay="500"
          className=" w-[70px]  h-[25px] md:w-[100px] md:h-[35px]   xl:w-[190px] xl:h-[60px] absolute xxxl:top-[550px] md:top-[335px] lg:top-[390px] xl:top-[480px]  md:left-[80px] ms:top-[225px] top-[220px] ms:left-[98px] sm:left-[190px] left-[70px]  xl:left-[100px] xxl:left-[125px] xxxl:left-[300px] lg:left-[75px] bottom-[265px] xl:bottom-0   rounded-[30px] bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[10px] md:text-[12px] xl:text-[16px]  font-inter text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out  font-normal"
        >
          <Link href='/menu'>See Menu</Link>
        
        </button>
        {/* Image side */}
       

         <div className="absolute xxxl:top-[198px] xl:left-[750px] xxl:top-[150px] xl:top-[120px]  xxl:left-[850px] lg:left-[480px] xxxl:left-[865px] lg:top-[110px]  top-[250px]  sm:top-[260px] sm:left-[160px] md:left-[425px] md:top-[130px] ms:left-[70px] left-[40px]">
          <Image
            src="/Image (2).svg"
            alt="food-image"
            height={670}
            width={877.8}
            quality={100}
          priority
            className=" w-[250px] h-[250px] md:w-[300px] md:h-[300px] xl:w-[600px] xxl:w-[700px] xxl:h-[700px] xl:h-[600px] xxxl:w-[877.8px] xxxl:h-[670px] lg:w-[400px] lg:h-[400px]   "
          />
          <Image
  src="/heroo-image.svg"
  alt="food-image"
  height={100}
  width={100}
  quality={100}
  priority
  className="w-[190px] h-[190px] md:w-[230px] md:h-[230px] lg:h-[300px] lg:w-[300px] xxl:w-[550px] xxl:h-[550px] xl:w-[450px] xl:h-[450px] xxxl:w-[800px] xxxl:h-[680px] absolute  top-[35px] right-[45px] xl:left-[45px] xl:top-[80px]  xxxl:left-0 xxxl:top-[30px]   lg:top-[55px] lg:right-[73px]  z-20 rotatePlate"
/>
        </div> 
        </div>
        </div>
 
   
  )
}

export default HeroBanner;