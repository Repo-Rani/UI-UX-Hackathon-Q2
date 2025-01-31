import Image from 'next/image'
import React from 'react'

const HeroResturant = () => {
  return (
   <>
      <section className="max-w-[1920px]  w-full h-auto absolute xlg:top-[6229px] md:top-[4500px] sm:top-[6100px] lg:top-[4700px] top-[5600px]"> 
   
    <Image
          src=" /hero-imagess.svg"
          alt="hero-images"
          height={558}
          width={1920}
          className="w-full max-w-[1920px]  sm:h-auto   "
        />
        <span className="md:w-[273px] md:h-[40px] relative xlg:bottom-[350px]  bottom-[100px] ms:bottom-[110px]  xlg:left-[890px]   xl:left-[1100px] xl:bottom-[385px] xxxl:left-[1350px]  left-[220px] ms:left-[275px] xsm:left-[310px] sm:left-[420px] sm:bottom-[170px] md:bottom-[210px] lg:left-[690px] lg:bottom-[270px] md:left-[490px] font-greatvibes font-normal xlg:text-[32px] md:text-[24px] sm:text-[14px] text-[10px] text-[#ff9f0d]">
          Resturant Active Process
        </span>
        <h2 className="md:w-[705px] w-[312px] h-[112px] relative  xlg:left-[450px]  xl:left-[670px] xxxl:left-[950px] xsm:left-[80px]  ms:left-[50px] xlg:bottom-[360px] lg:bottom-[270px] bottom-[105px] ms:bottom-[110px]  xl:bottom-[375px]
        md:bottom-[215px]  font-helvetica sm:left-[220px] md:left-[-20px] lg:left-[190px] sm:bottom-[170px] xlg:text-[48px] md:text sm:text-[16px] md:text-[28px] lg:text-[32px] text-[12px] font-bold text-[#ffffff] text-right">
          <span className="text-[#ff9f0d]">We</span> Document Every Food <br />
          Bean Process untile it is saved
        </h2>
        <p className="md:w-[651px] h-[48px] w-[310px] relative xlg:left-[500px] xl:left-[750px] xxxl:left-[1000px] xsm:left-[80px] sm:left-[220px] ms:left-[50px] xlg:bottom-[330px] xl:bottom-[345px] bottom-[185px] ms:bottom-[185px] 
        sm:bottom-[230px] md:bottom-[240px] lg:left-[238px] lg:bottom-[275px] xxl:bottom-[325px] xlg:text-[16px] sm:text-[10px] md:text-[12px] text-[8px]  md:left-[45px]
        font-inter font-normal text-[#ffffff] text-right ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>

        {/* Content */}
        <div className="md:w-[369px]  w-[190px] h-[60px] relative xlg:left-[760px] xlg:bottom-[300px] xxl:bottom-[300px]  xl:left-[1000px] xxxl:left-[1275px] left-[140px] ms:left-[180px] xsm:left-[210px] xl:bottom-[320px] bottom-[225px] md:left-[380px] sm:bottom-[245px] md:bottom-[255px] sm:left-[350px] flex xlg:justify-between lg:left-[570px] lg:bottom-[275px] justify-center xlg:gap-0 gap-[10px] items-center ">
          <button className="xlg:w-[190px] md:w-[110px] md:h-[40px] xlg:h-[60px] w-[60px] h-[20px] bg-transparent rounded-[30px] border-[1px] relative  border-[#ff9f0d] hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out">
            <span className="font-inter font-bold xlg:text-[16px] md:text-[12px]  text-[8px]  relative md:bottom-0 bottom-[5px] text-[#ffffff]">
              Read More
            </span>
          </button>
          <div className="flex justify-between items-center gap-3">
            <button className="xlg:w-[60px] md:w-[45px] md:h-[45px] xlg:h-[60px] w-[20px] h-[20px] bg-[#ff9f0d] flex items-center justify-center hover:bg-transparent  hover:border-[1px] border-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out rounded-full">
              <Image
                src="/Play.svg"
                alt="play-button"
                height={24}
                width={24}
                className="xlg:w-[24px] md:w-[20px] md:h-[20px] xlg:h-[24px] w-[10px] h-[10px] "
              />
            </button>

            <span className="xlg:w-[83px] xlg:h-[24px] text-[10px] md:text-[14px] xlg:text-[20px] text-[#ffffff]  whitespace-nowrap">
              Play Video
            </span>
          </div>
        </div>
        </section>  
   </>
  )
}

export default HeroResturant