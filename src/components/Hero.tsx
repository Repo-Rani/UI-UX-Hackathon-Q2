import React from "react";
import Image from "next/image";

import Clients from "./Client";
import OurMenu from "./OurMenu";
import OurChef from "./HeroOurChef";
import LatestBlogItems from "./LatestBlogItems";
import LandingFooter from "./LandingFooter";
import Testimonial from "./Testimonial";
import HeroAboutUs from "./HeroAboutUs";
import HeroFoodCategory from "./HeroFoodCategory";
import HeroResturant from "./HeroResturant";
import WhyChooseUs from "./WhyChooseUs";
import HeroBanner from "./HeroBanner";

const HeaderHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className=" relative mx-auto  max-w-[1920px]  bg-opacity-80  w-full bg-[#0d0d0d]  xl:h-[950px] h-[500px]  text-white flex justify-center  ">
       <HeroBanner/>
      </section>
      {/* About us section */}
      <section className="w-full xl:w-[1320px] xl:h-[562px]  h-[750px] absolute xl:top-[1070px] xxl:left-[50px] xxxl:left-[300px]    bg-black">
        <HeroAboutUs/>
      </section>

      {/* Food Category */}

      <section className="xl:w-[1320px] lg:w-[1000px] sm:h-[489px] w-full h-[1200px] absolute lg:top-[1100px]  xl:top-[1752px]  md:top-[1500px] sm:top-[1400px] xxxl:left-[300px] xxl:left-[100px] xsm:top-[1300px]  top-[1250px] rounded-[6px]  ">
        <HeroFoodCategory/>
      </section>
      <div className="lg:flex hidden absolute top-[1550px] left-[200px]  xxxl:left-[1450px]  xxl:top-[1950px] xxl:left-[1240px] xl:left-[1070px] xl:top-[1900px] lg:top-[1350px] md:top-[1200px]  lg:left-[850px]">
        <Image
          src="/hero-leaf.svg"
          alt="leaf"
          height={532.3}
          width={444.1}
          className="w-[150px] h-[200px] sm:h-[350px] sm:w-[200px] xl:w-[444.1px] xl:h-[532.3px] "
        />
      </div>
      {/* Why Choose Us */}

      <section className="absolute lg:top-[2361px] sm:top-[2150px] xsm:top-[1850px] top-[1800px] md:top-[2361px]  xxxl:left-[200px] ">
        <WhyChooseUs />
      </section>

      {/* Clients section */}
      <section className="absolute md:top-[3197px] top-[3500px]">
        <Clients />
      </section>

      {/* Our Menu */}
      <section className="absolute md:left-[300px] xl:left-[30px] xxl:left-[300px]  md:top-[3834px] top-[4200px]">
        <OurMenu />
      </section>

      {/* Our Chef */}
       <section className="absolute md:top-[4562px] md:left-[300px] xxxl:left-[300px] xl:left-[80px] xxl:left-[230px] left-[95px]  top-[5300px]">
        <OurChef /> 
      </section> 
  {/* Leaf */}
      <Image
        src="/menuleafs.svg"
        alt="hero-images"
        height={531}
        width={409.74}
        className="w-[150px] h-[200px] md:w-[409.74px] md:h-[531px] xl:w-[360px] xxl:w-[409.74px]  relative md:top-[3700px] xl:top-[3850px] xxl:top-[3720px] top-[5220px] md:left-0 xl:left-[-50px]  xxl:left-[-30px] left-[-20px]"
      />
{/* Testomonial */}
      <section className="absolute md:top-[5339px] top-[5900px] md:left-[300px] xl:left-[100px] xxl:left-[300px]  ">
        <Testimonial />
      </section>

    
     

      {/* Restaurant process */}
        <section className="max-w-[1920px]  w-full   md:h-[558px] h-[800px]  absolute md:top-[6229px] top-[6100px]"> 
       <HeroResturant/>  
      </section>  
{/* Blog Scetion */}
      <section className="absolute md:top-[6907px] top-[6580px] md:left-[300px] xl:left-[80px] xxxl:left-[300px] left-[100px]">
        <div className="md:w-[1320px] w-[200px] h-[732px]">
          <span className="w-[124px] h-[40px] font-greatvibes md:text-[32px] text-[20px] font-normal text-[#ff9f0d] relative md:left-[600px] left-[30px]">
            Blog Post
          </span>
          <h2 className="md:w-[462px] md:h-[56px] font-helvetica font-bold md:text-[48px] text-[28px] text-[#ffffff] relative md:left-[455px] left-[-50px] whitespace-nowrap">
            <span className="text-[#ff9f0d]">La</span>test News & Blog
          </h2>
          <LatestBlogItems />
        </div>
      </section>
      <div className="absolute md:top-[7759px] top-[8300px]">
        <LandingFooter />
      </div> 
    </>
  );
};

export default HeaderHero;
