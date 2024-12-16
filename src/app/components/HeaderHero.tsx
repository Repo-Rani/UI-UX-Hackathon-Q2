import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP, FaTwitter, FaCheck } from "react-icons/fa";
import WhyChooseMe from "./WhyChooseMe";
import Clients from "./Client";
import OurMenu from "./OurMenu";
import OurChef from "./OurChef";
import LatestBlogItems from "./LatestBlogItems";
import LandingFooter from "./LandingFooter";
import Testimonial from "./Testimonial";

const HeaderHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=" relative mx-auto  bg-opacity-80 lg:w-[1920px]  max-w-[1920px] bg-black xsm:w-[1920px] w-full xsm:h-[950px]   ">
        {/* Background Image */}
        <Image
          src="/hero-image (2).svg"
          alt="hero-Background-Image"
          height={950}
          width={1920}
          className="absolute top-0 left-0 w-full h-full z-0 object-cover opacity-10 "
        />

        <div className="relative top-[181px] md:left-[242px] xsm:left-[150px]  h-[492px] w-[25.28px] items-center  ">
          <div className="w-[158px] relative top-[85px]  border-[1px] -rotate-90 border-[#ffffff] left-[-67px]"></div>
          <div className=" w-[25.28px] h-[107px]  relative top-[195px]  flex flex-col items-center gap-[25px] ">
            <FaFacebookF className=" text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out  w-[25.28px] h-[25.21px]  " />
            <FaTwitter className="w-[25.28px] h-[25.21px] text-[#ff9f0d] hover:text-[#ffffff] hover:scale-110 transition-all duration-300 ease-in-out " />
            <FaPinterestP className="w-[25.28px] h-[25.21px] text-[#ffffff] hover:text-[#ff9f0d] hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
          <div className="w-[158px] relative top-[305px]  border-[1px] -rotate-90 border-[#ffffff] left-[-67px]"></div>
        </div>

        <div className="absolute top-[293px] md:left-[300px] xsm:left-[200px] w-[472px] h-[356px] rounded-[30px]">
          <span
           data-aos="fade-right"
           flip-down
          className="font-greatvibes font-normal text-[32px] leading-[40px] text-[#FF9F0D]">
            Its Quick & Amusing!
          </span>
          <h1
           data-aos="fade-left"
        data-aos-delay="200"
           className="font-helvetica font-bold text-5xl leading-[68px] text-white">
            <span className="text-[#FF9F0D]">Th</span>e Art of speed food
            Quality
          </h1>
        </div>

        <p
         data-aos="fade-right"
        data-aos-delay="300"
        className="font-inter font-normal text-[16px] leading-[24px] text-[#FFFFFF] absolute top-[509px] md:left-[300px] xsm:left-[200px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <button
         data-aos="fade-left"
        data-aos-delay="500"
        className="md:w-[190px] md:h-[60px] w-[130px]  h-[40px] absolute top-[589px] md:left-[300px] xsm:left-[200px] rounded-[30px] bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[16px] font-inter text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out leading-[24px] font-normal">
          See Menu
        </button>
        {/* Image side */}

        <div className="absolute xsm:top-[198px] md:left-[865px] xsm:left-[800px] left-[300px]">
          <Image
            src="/Image (2).svg"
            alt="food-image"
            height={670}
            width={877.8}
            className=" md:w-[877.8px] md:h-[670px] xsm:w-[790px] xsm:h-[600px] w-[690px] h-[500px]  "
          />
          <Image
            src=" /heroo-image.svg"
            alt="food-image"
            height={670}
            width={877.8}
            className=" md:w-[877.8px] md:h-[670px] absolute bottom-[-10px] right-[38px] w-[690px] h-[500px] food-rotate"
          />
        </div>
      </section>
      {/* About us section */}
      <section className="w-[1320px] h-[562px] absolute top-[1070px] md:left-[300px] xsm:left-[200px] bg-black">
        <div
         className="w-[562px] h-[562px]  flex flex-col gap-[12px] ">
          <span
            data-aos="fade-right"
        data-aos-delay="100"
          className="xsm:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatvibes">
            About us
          </span>

          <h1 
            data-aos="fade-right"
        data-aos-delay="100"
          className="text-[20px] md:text-[48px] font-bold font-helvetica whitespace-nowrap leading-[56px] text-[#ffffff]">
            <span className="text-[#FF9F0D]">We </span>Create the best <br />
            foody product
          </h1>

          <p
            data-aos="fade-left"
        data-aos-delay="200"
          className="text-[10px] leading-[24px] md:text-[16px] text-[#ffffff] font-inter font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis <br />
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in{" "}
            <br />
            consequat.
          </p>
          <div className="flex flex-col gap-4">
            <div
              data-aos="fade-right"
        data-aos-delay="300"
            className="flex items-center">
              <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
              <span className="text-[10px] text-[#ffffff] md:text-[18px] font-normal whitespace-nowrap font-inter w-[327px]">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </span>
            </div>
            <div
              data-aos="fade-left"
        data-aos-delay="400"
            className="flex items-center">
              <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
              <span className="text-[10px] text-[#ffffff] md:text-[18px] font-normal font-inter whitespace-nowrap w-[327px]">
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </span>
            </div>
            <div
              data-aos="fade-right"
        data-aos-delay="500"
            className="flex items-center">
              <FaCheck className="w-[17px] h-[12.24px] text-[#ffffff] mr-2" />
              <span
                data-aos="fade-right"
        data-aos-delay="300"
              className="text-[10px] text-[#ffffff] md:text-[18px] font-normal whitespace-nowrap font-inter w-[327px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </div>

            <div
              data-aos="fade-right"
        data-aos-delay="300"
            className="flex flex-col md:flex-row items-center md:items-start relative md:right-0 right-[225px] ">
              <button className="bg-[#FF9F0D] hover:bg-[#E0DFDF] text-[16px] text-[#E0DFDF] hover:text-[#FF9F0D] hover:scale-105 transition-all duration-300 ease-in-out w-[100px] h-[30px] md:w-[190px] md:h-[60px]  rounded-[30px] mt-[25px] ">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="relative top-[-560px] left-[-300px]">
          <Image
            src="/about-1.svg"
            alt="Hero Image"
            width={336}
            height={536}
            className=" absolute left-[960px] w-[660px] h-[330px] rounded-[6px]"
          />

          <Image
            src="/about-2.svg"
            alt="Hero Image"
            width={322}
            height={194}
            className="w-[322px] h-[194px] absolute top-[340px]  left-[965px] rounded-[6px]"
          />

          <Image
            src="/about-3.svg"
            alt="Hero Image"
            width={200}
            height={200}
            className="w-[322px] h-[194px] absolute top-[340px] left-[1298px] rounded-[6px]"
          />
        </div>
      </section>

      {/* Food Category */}

      <section className="w-[1320px] h-[489px] absolute top-[1752px] md:left-[300px] xsm:left-[200px] rounded-[6px]  ">
        <span className="w-[177px] h-[40px] relative  left-[550px] font-greatvibes text-normal text-[#FF9F0D] text-[32px] leading-[40px] ">
          Food Category
        </span>
        <h2 className="w-[446px] h-[56px] relative left-[420px] font-helvetica font-bold text-[48px] text-[#ffffff]">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
        </h2>

        <div className="grid grid-cols-2 xsm:grid-cols-4 gap-[10px] w-[1320px] h-[329px] rounded-[6px] relative top-[50px] ">
          <div
          
          >
            <div className="w-[206px] h-[97px]  absolute top-[125px] flex items-center justify-between flex-col ">
              <div
          
              className="w-[125px] h-[40px] bg-[#ffffff] relative flex items-start justify-center ml-16 ">
                <span className="font-inter font-bold text-[18px] text-[#FF9F0D] ">
                  Save 30%
                </span>
              </div>
              <div 
          
              className="bg-[#ff9f0d] w-[206px] h-[46px] rounded-[6px] flex items-center justify-center">
                <span className="font-inter font-bold text-[20px] text-[#ffffff]">
                  Fast Food Dish
                </span>
              </div>
            </div>
            <Image
        
              src="/c1.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="w-[305px] h-[328px]"
            />
          </div>
          <div>
            <Image
      
              src="/c2.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="w-[305px] h-[328px]"
            />
          </div>
          <div>
            <Image
       
              src="/c3.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="w-[305px] h-[328px]"
            />
          </div>
          <div>
            <Image
         
              src="/c4.svg"
              alt="cate-food"
              height={328}
              width={305}
              className="w-[305px] h-[328px]"
            />
          </div>
        </div>
      </section>
      <div className="absolute top-[1950px] left-[1440px]">
        <Image src="/hero-leaf.svg" alt="leaf" height={532.3} width={444.1} />
      </div>
      {/* Why Choose Us */}

      <section className="absolute top-[2361px] md:left-[300px] xsm:left-[220px]">
        <WhyChooseMe />
      </section>

      {/* Clients section */}
      <section className="absolute top-[3197px]">
        <Clients />
      </section>

      {/* Our Menu */}
      <section className="absolute md:left-[300px] xsm:left-[200px] top-[3834px]">
        <OurMenu />
      </section>

      {/* Our Chef */}
      <section className="absolute top-[4562px] md:left-[300px] xsm:left-[200px]">
        <OurChef />
      </section>

      <section className="absolute top-[5339px] md:left-[300px] xsm:left-[200px]">
        <Testimonial />
      </section>

      {/* Leaf */}
      <Image
        src="/menuleafs.svg"
        alt="hero-images"
        height={531}
        width={409.74}
        className="relative top-[3750px]"
      />

      {/* Restaurant process */}
      <section className="w-[1920px] h-[558px] absolute top-[6229px]">
        <Image
          src=" /hero-imagess.svg"
          alt="hero-images"
          height={558}
          width={1920}
        />
        <span className="w-[273px] h-[40px] relative bottom-[440px] left-[1350px]  font-greatvibes font-normal text-[32px] text-[#ff9f0d]">
          Resturant Active Process
        </span>
        <h2 className="w-[705px] h-[112px] relative left-[950px] bottom-[430px] font-helvetica text-[48px]  font-bold text-[#ffffff] text-right">
          <span className="text-[#ff9f0d]">We</span> Document Every Food <br />
          Bean Process untile it is saved
        </h2>
        <p className="w-[651px] h-[48px] relative left-[1000px] bottom-[375px] text-[16px] font-inter font-normal text-[#ffffff] text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,{" "}
        </p>

        {/* Content */}
        <div className="w-[369px] h-[60px] relative left-[1275px] bottom-[350px] flex justify-between items-center ">
          <button className="w-[190px] h-[60px] bg-transparent rounded-[30px] border-[1px] relative  border-[#ff9f0d] hover:bg-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out">
            <span className="font-inter font-bold text-[16px] text-[#ffffff]">
              Read More
            </span>
          </button>
          <div className="flex justify-between items-center gap-3">
            <button className="w-[60px] h-[60px] bg-[#ff9f0d] flex items-center justify-center hover:bg-transparent  hover:border-[1px] border-[#ff9f0d] hover:scale-105 transition-all duration-300 ease-in-out rounded-full">
              <Image src="/Play.svg" alt="play-button" height={24} width={24} />
            </button>

            <span className="w-[83px] h-[24px] text-[#ffffff] ">
              Play Video
            </span>
          </div>
        </div>
      </section>

      <section className="absolute top-[6907px] md:left-[300px] xsm:left-[200px]">
        <div className="w-[1320px] h-[732px]">
          <span className="w-[124px] h-[40px] font-greatvibes text-[32px] font-normal text-[#ff9f0d] relative left-[600px]">
            Blog Post
          </span>
          <h2 className="w-[462px] h-[56px] font-helvetica font-bold text-[48px] text-[#ffffff] relative left-[455px]">
            <span className="text-[#ff9f0d]">La</span>test News & Blog
          </h2>
          <LatestBlogItems />
        </div>
      </section>
      <div className="absolute top-[7759px]">
        <LandingFooter />
      </div>
    </>
  );
};

export default HeaderHero;
