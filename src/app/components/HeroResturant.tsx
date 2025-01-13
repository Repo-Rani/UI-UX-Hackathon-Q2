import Image from 'next/image'
import React from 'react'

const HeroResturant = () => {
  return (
   <>
    <Image
          src=" /hero-imagess.svg"
          alt="hero-images"
          height={558}
          width={1920}
          className="md:w-[1920px] md:h-[558px] w-[390px] h-[700px] xl:w-[1484px] xxl:w-[1920px]"
        />
        <span className="md:w-[273px] md:h-[40px] relative md:bottom-[440px] bottom-[415px] md:left-[1350px] xl:left-[1080px] xxl:left-[1350px] left-[240px]  font-greatvibes font-normal md:text-[32px] text-[10px] text-[#ff9f0d]">
          Resturant Active Process
        </span>
        <h2 className="w-[705px] h-[112px] relative md:left-[950px] xl:left-[700px] xxl:left-[950px]  left-[-330px] md:bottom-[430px] bottom-[415px] font-helvetica md:text-[48px] text-[12px] font-bold text-[#ffffff] text-right">
          <span className="text-[#ff9f0d]">We</span> Document Every Food <br />
          Bean Process untile it is saved
        </h2>
        <p className="md:w-[651px] h-[48px] w-[320px] relative md:left-[1000px] xl:left-[750px] xxl:left-[1000px] left-[65px] md:bottom-[375px] bottom-[490px] md:text-[16px] text-[8px] font-inter font-normal text-[#ffffff] text-right ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,
        </p>

        {/* Content */}
        <div className="md:w-[369px] w-[200px] h-[60px] relative md:left-[1275px] xl:left-[1000px] xxl:left-[1275px] left-[180px] md:bottom-[350px] bottom-[525px] flex md:justify-between justify-center md:gap-0 gap-[10px] items-center ">
          <button className="md:w-[190px] md:h-[60px] w-[60px] h-[20px] bg-transparent rounded-[30px] border-[1px] relative  border-[#ff9f0d] hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out">
            <span className="font-inter font-bold md:text-[16px]  text-[8px] relative md:bottom-0 bottom-[5px] text-[#ffffff]">
              Read More
            </span>
          </button>
          <div className="flex justify-between items-center gap-3">
            <button className="md:w-[60px] md:h-[60px] w-[20px] h-[20px] bg-[#ff9f0d] flex items-center justify-center hover:bg-transparent  hover:border-[1px] border-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out rounded-full">
              <Image
                src="/Play.svg"
                alt="play-button"
                height={24}
                width={24}
                className="md:w-[24px] md:h-[24px] w-[10px] h-[10px] "
              />
            </button>

            <span className="md:w-[83px] md:h-[24px] text-[10px] md:text-[20px] text-[#ffffff]  whitespace-nowrap">
              Play Video
            </span>
          </div>
        </div>
   </>
  )
}

export default HeroResturant