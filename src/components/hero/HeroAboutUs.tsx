import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'

const HeroAboutUs = () => {
  return (
    <>
          <section className="md:w-[750px] w-[300px] xsm:w-[400px] sm:w-[550px] lg:w-[950px] xl:w-[1320px] xlg:w-[1200px] xl:h-[570px] md:h-[500px] sm:h-[830px]  h-[670px] absolute top-[600px] md:top-[580px] xlg:top-[1070px] xxl:left-[100px] xxxl:left-[300px] md:left-[10px] lg:left-[30px] xlg:left-[35px] xl:left-[65px] flex justify-center  items-center bg-black">
    
          <div className='w-full flex justify-center items-center px-3 md:px-0'>
    <div className="w-full sm:w-[465px]  xl:w-[1320px] xl:h-[562px]  absolute top-[40px] xl:top-0 xsm:left-[10px]  md:left-0 lg:left-0  xlg:left-0   flex flex-col gap-[5px] xl:gap-[12px] ">
    
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
      className="text-[20px] sm:text-[32px] ms:w-[300px] sm:w-[500px] md:w-[350px] xl:w-0 xl:text-[48px] font-bold font-helvetica whitespace-nowrap  md:leading-[56px] text-[#ffffff]"
    >
      <span className="text-[#FF9F0D]">We </span>Create the best <br />
      foody product
    </h1>

    <p
      // data-aos="fade-left"
      // data-aos-delay="200"
      className="text-[10px] xl:leading-[24px] w-[300px] ms:w-[335px]  xsm:w-[350px] sm:w-[500px]  xlg:w-[526px] md:w-[400px]   sm:text-[12px] xlg:text-[16px] text-[#ffffff] font-inter  font-normal"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      diam pellentesque bibendum non dui volutpat fringilla bibendum.
      Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      Ultrices mattis <br />
      sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
      <br />
      consequat.
    </p>
    <div className=" w-[300px]  sm:w-[450px] md:w-[400px] xlg:w-[550px]  flex flex-col gap-4">
      <div
        // data-aos="fade-right"
        // data-aos-delay="300"
        className="flex items-center justify-start mr-5  "
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2 " />
        <span className="  w-[50px] text-[10px] text-[#ffffff]  sm:text-[14px] xlg:text-[18px] font-normal whitespace-nowrap font-inter">
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </span>
      </div>
      <div
        // data-aos="fade-left"
        // data-aos-delay="400"
        className="flex items-center mr-2"
      >
        <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] " />
        <span className="w-[50px] text-[10px] text-[#ffffff] sm:text-[14px] xlg:text-[18px] font-normal font-inter whitespace-nowrap  pr-24 xsm:pr-20">
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
          className="text-[10px] text-[#ffffff] sm:text-[14px] xlg:text-[18px] font-normal whitespace-nowrap font-inter w-[50px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>

     <div
    
        className=" flex flex-col  items-center md:flex-row md:items-start justify-center xsm:mt-3 mt-2  "
      >
        <button className="bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[10px] sm:text-[12px] xlg:text-[16px]   text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out rounded-[30px]  w-[70px]  h-[28px] xsm:right-[100px] sm:w-[100px] sm:h-[38px]  xxxl:w-[190px] xxxl:h-[60px] xlg:w-[150px] xlg:h-[50px]  relative  right-[100px] md:right-[130px] lg:right-[130px] sm:right-[160px]  xlg:right-[160px] xxl:right-[140px]">
          <Link href='/about'>Read More</Link>
        </button>
      </div> 
    </div>
  <div className="relative ms:left-0 left-[10px]  md:top-[-420px]  top-[10px] xsm:top-[15px] sm:top-0 xlg:top-[-480px] xxl:top-[-460px] sm:left-[45px] lg:w-[400px] md:left-[430px] xl:left-[-280px] xlg:left-[-320px] xxl:left-[-340px] lg:top-[-420px] lg:left-[520px]  md:w-[310px] xlg:w-[660px] xxxl:left[960px]">
    <Image
      src="/about-1.svg"
      alt="Hero Image"
      width={660}
      height={330}
      className=" absolute sm:top-[-50px] xlg:left-[1000px] xsm:w-[350px] xsm:h-[180px] md:w-[300px] lg:w-[400px] lg:h-[270px] md:h-[320px]  w-[280px] h-[230px] sm:w-[410px] sm:h-[370px] xxl:w-[660px] xl:w-[580px] xlg:w-[500px] xlg:h-[330px]  rounded-[6px]"
    />

    <Image
      src="/about-2.svg"
      alt="Hero Image"
      width={322}
      height={194}
      className="ms:w-[140px] ms:h-[145px] w-[140px] h-[140px] xsm:w-[170px] xsm:h-[100px] sm:w-[250px] sm:h-[120px]  xlg:h-[194px] md:w-[150px] md:h-[140px] sm:left-[-20px] absolute ms:top-[160px] xsm:top-[182px] xsm:left-[4px] sm:top-[242px] md:top-[165px] md:left-0 lg:left-0 top-[165px] xl:top-[255px]  lg:w-[200px]  lg:top-[178px] xlg:left-[1005px]  xxxl:left-[1000px] xxl:left-[1010px] xxl:top-[290px] rounded-[6px] xlg:top-[220px] xl:w-[285px] xlg:w-[245px] xxl:w-[322px] "
    />

    <Image
      src="/about-3.svg"
      alt="Hero Image"
      width={322}
      height={194}
      className="ms:w-[140px] ms:h-[145px] w-[140px] h-[140px]  md:w-[150px] md:h-[140px] xsm:w-[170px] xsm:h-[100px] sm:w-[250px] sm:h-[120px] xxl:w-[322px] xlg:h-[194px]  xsm:top-[182px] sm:top-[242px] top-[165px] ms:top-[160px] left-[145px]   md:top-[165px] xsm:left-[175px] sm:left-[185px] md:left-[153px] absolute xl:top-[255px] xl:left-[1298px] xxl:left-[1340px] xxl:top-[290px] xl:w-[285px] xlg:w-[245px] lg:w-[200px] lg:top-[178px] xlg:top-[220px] xlg:left-[1255px]  lg:left-[205px] rounded-[6px]"
    />
  </div>
  </div>
  </div>
  </section>

  </>
  )
}

export default HeroAboutUs