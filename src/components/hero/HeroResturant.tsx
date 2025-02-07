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
          className="w-full max-w-[1920px]  h-auto   "
        />
        <div className='w-[70%] flex flex-col justify-between  absolute top-3 right-0 z-1 '>
         
        <span className=" font-greatvibes font-normal xlg:text-[32px] md:text-[24px] sm:text-[14px] text-[10px] text-right text-[#ff9f0d] relative right-[40px] xxxl:right-[150px] xsm:top-0 top-[-13px]">
          Resturant Active Process
        </span>
        <h2 className=" xlg:text-[48px] md:text sm:text-[16px] md:text-[28px] lg:text-[32px] text-[12px] font-bold text-right text-[#ffffff] relative right-[40px] xxxl:right-[150px] xsm:top-0 top-[-13px]">
          <span className="text-[#ff9f0d]">We</span> Document Every Food <br />
          Bean Process untile it is saved
        </h2>
        <p className="md:w-[651px] h-[48px] w-[270px] sm:w-[400px]  xlg:text-[16px] sm:text-[10px] md:text-[12px] text-[8px] 
        font-inter font-normal text-[#ffffff] relative right-[-30px] xsm:right-0 sm:right-[10px] md:right-[130px] lg:right-[-48px] xlg:right-[-225px] xl:right-[-338px] xxl:right-[-370px] xxxl:right-[-570px] top-[10px]  xsm:flex hidden  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>
        <p className="md:w-[651px] h-[48px] w-[270px]  xlg:text-[16px] sm:text-[10px] md:text-[12px] text-[8px] 
        font-inter font-normal text-[#ffffff] relative right-[77px] ms:right-[40px] xsm:top-0 top-[-13px] xsm:hidden  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
         
        </p>

        {/* Content */}
        <div className="md:w-[320px]  w-[190px] h-[25px] flex   justify-center  gap-[10px] items-center relative right-[-10px] ms:right-[-50px] xsm:right-[-90px] top-[-45px] xsm:top-[-10px] sm:right-[-211px] lg:right-[-385px] xlg:right-[-510px] xl:right-[-610px] xxl:right-[-650px] xxxl:right-[-845px] xlg:top-[50px] xxl:top-[70px] sm:top-[5px]">
          <button className="xlg:w-[190px] md:w-[110px] md:h-[40px] xlg:h-[60px] w-[60px] h-[20px]  bg-transparent rounded-[30px] border-[1px]  border-[#ff9f0d] hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out">
            <span className="font-inter font-bold xlg:text-[16px] md:text-[12px]  text-[8px]  flex justify-center items-center text-[#ffffff]">
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
        </div>
        
        </section>  
   </>
  )
}

export default HeroResturant