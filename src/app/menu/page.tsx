"use client"
import React from "react";
import Banner from "@/components/banner/Banner";
import Image from "next/image";
import StarterMenuItems from "@/components/menu/StarterMenuItems";
import Clients from "@/components/menu/Clients";
// import Footer from "@/components/footer/Footer";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const OurMenu = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }, []);
  return (
    <>
      <section
        className="relative mx-auto w-full md:h-[5235px]  flex justify-center bg-white h-[6580px]"
       
      >
        
        <Banner mainHeading="Our Menu" name="Menu" />
        <div className="xl:w-[1180px] xxl:w-[1320px] md:w-[450px] lg:w-[250px]  w-[300px] h-[628px] absolute md:top-[500px] xl:top-[531px] top-[500px] xsm:top-[600px] sm:top-[650px]    bg-white flex lg:flex-row flex-col  justify-center items-center gap-[30px] lg:gap-0 md:justify-between lg:left-[40px] xl:left-[110px] xxl:left-[100px] xxxl:left-[250px]">
         
          <Image
             data-aos="fade-right"
        data-aos-delay="100"
            src="/Rectangle 8874 (1).svg"
            alt="menu-item"
            height={626}
            width={300}
            className="xl:w-[448px] xl:h-[626px] xsm:w-[300px]  w-[270px] xsm:h-[500px] h-[330px] relative   "
          />
 <div className="w-full lg:w-[600px] xl:w-[700px] flex justify-center lg:justify-start relative md:top-[30px] lg:top-0">
          <div className="relative  xl:left-[50px] xxl:left-0">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[10px] md:left-0 lg:left-[60px] xl:left-0 food-rotate"
            />
            <h1 className="font-helvetica xl:text-[48px] sm:text-[32px] xsm:text-[28px] text-[24px] font-bold text-black relative left-[10px] md:left-0 lg:left-[60px] xl:left-0">
              Starter Menu
            </h1>

            <StarterMenuItems
              names="Alder Grilled Chinook Salmon"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Berries and Creme Tart"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

            <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Tormentoso Bush Pizza "
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

            <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Spicy Vegan Potato Curry"
              desc="Spicy Vegan Potato Curry"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
        </div> 
        </div>

        <div className="xl:w-[1180px] xxl:w-[1320px] md:w-[450px] lg:w-[250px]  w-[300px] h-[628px] absolute xl:top-[1279px] md:top-[1590px] lg:top-[1100px] xsm:top-[1500px] sm:top-[1700px] top-[1330px]   bg-white flex  lg:flex-row-reverse  flex-col justify-center md:gap-0 gap-[30px] md:justify-between lg:left-[600px] xl:left-[110px] xxl:left-[100px] xxxl:left-[250px] ">
          <Image
             data-aos="fade-left"
        data-aos-delay="100"
            src="/menu2.svg"
            alt="menu-item"
            height={626}
            width={300}
            className="xl:w-[448px] xl:h-[626px] xsm:w-[300px]  w-[270px] xsm:h-[500px] h-[330px] relative xsm:left-0 left-[10px]"
          />
 <div className="w-full lg:w-[600px] xl:w-[700px] flex justify-center lg:justify-start relative md:top-[30px] lg:top-0 ">

          <div className="relative ">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[10px] md:left-0 lg:left-[60px] xl:left-0 food-rotate"
            />
            <h1 className="font-helvetica xl:text-[48px] sm:text-[32px] xsm:text-[28px] text-[24px] font-bold text-black relative left-[10px] md:left-0 lg:left-[60px] xl:left-0">
              Main course
            </h1>

            <StarterMenuItems
              names="Optic Big Breakfast Combo Menu"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Cashew Chicken With Stir-Fry"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names=" Vegetables & Green Salad"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Spicy Vegan Potato Curry"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
          </div>
          </div>

        <div className="absolute xl:top-[2027px] lg:top-[1750px] xsm:top-[2300px] md:top-[2680px]  sm:top-[2600px] top-[2120px] w-full">
          <Clients />
        </div>

        <div className="xl:w-[1320px] md:w-[450px] lg:w-[250px]  w-[300px] h-[628px] absolute xl:top-[2615px] md:top-[3200px] top-[2600px] xsm:top-[2850px] sm:top-[3200px] lg:left-[40px] xl:left-[110px] xxl:left-[40px] xxxl:left-[250px] lg:top-[2250px] bg-white flex lg:flex-row flex-col justify-center md:gap-0 gap-[30px] md:justify-between  ">
          <Image
             data-aos="fade-right"
        data-aos-delay="100"
            src="/menu3.svg"
            alt="meni-item"
            height={626}
            width={300}
            className="xl:w-[448px] xl:h-[626px] xsm:w-[300px]  w-[270px] xsm:h-[500px] h-[330px] relative xsm:left-0 left-[10px]   "
          />
 <div className="w-full lg:w-[600px] xl:w-[700px] flex justify-center lg:justify-start relative md:top-[30px] lg:top-0">

          <div className="relative ">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[10px] md:left-0 lg:left-[60px] xl:left-0 food-rotate"
            />
            <h1 className="font-helvetica xl:text-[48px] sm:text-[32px] xsm:text-[28px] text-[24px] font-bold text-black relative left-[10px] md:left-0 lg:left-[60px] xl:left-0">
            Dessert
            </h1>

            <StarterMenuItems
              names="Fig and lemon cake"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
<StarterMenuItems
              names="Creamy mascarpone cake"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Pastry, blueberries, lemon juice"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
             
            />

<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Pain au chocolat"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
          </div>
          </div>

        <div className="xl:w-[1180px] md:w-[450px] lg:w-[250px] h-[175px]  w-[300px] sm:h-[628px] absolute xsm:top-[4000px] top-[3350px] sm:top-[4280px] xl:top-[3363px] lg:top-[2850px] md:top-[4350px] lg:left-[600px] xl:left-[110px] xxl:left-[120px] xxxl:left-[250px]  bg-white  flex  lg:flex-row-reverse flex-col justify-center items-center lg:gap-0 gap-[30px] md:justify-between  ">
          <Image
             data-aos="fade-left"
        data-aos-delay="100"
            src="/menu4.svg"
            alt="menu-item"
            height={626}
            width={300}
            className="xl:w-[448px] xl:h-[626px] xsm:w-[300px]  w-[270px] xsm:h-[500px] h-[330px] relative xsm:left-0 left-[10px] top-[300px] xl:left-[70px] xsm:top-0 "
          />
 <div className="w-full lg:w-[600px] xl:w-[700px] flex justify-center lg:justify-start relative md:top-[30px]  top-[320px]  xsm:top-0 lg:top-0">

          <div className="relative   ">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[10px] md:left-0 lg:left-[60px] xl:left-0 food-rotate"
            />
            <h1 className="font-helvetica xl:text-[48px] sm:text-[32px] xsm:text-[28px] text-[24px] font-bold text-black relative left-[10px] md:left-0 lg:left-[60px] xl:left-0">
            Drinks
            </h1>

            <StarterMenuItems
              names="Caffè macchiato"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
<StarterMenuItems
              names="Aperol Spritz Capacianno"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Caffe Latte Campuri"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

<div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Tormentoso BushTea Pintoage"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[550px] lg:w-[455px] xxl:w-[760px] w-[300px] border-b-[1px] relative lg:left-[100px] xl:left-0 border-dotted border-[#E0E0E0]"></div>
          </div>
          </div>

        <div className="xl:w-[1322px] lg:w-[950px] w-[200px] h-[275px] absolute xl:top-[4111px] lg:top-[3530px] top-[4200px] xsm:top-[5150px] md:top-[5400px]  bg-white">
          <span className="font-inter font-normal xl:text-[18px] sm:text-[16px] text-[14px] text-[#333333] relative flex justify-center ">
            Partners & Clients
          </span>
          <h2 className="font-helvetica font-bold xl:text-[48px] md:text-[32px] xsm:text-[24px] text-[20px] text-[#333333] xl:w-[600px] flex justify-center relative  xl:left-[300px] whitespace-nowrap top-[10px] ">
            We work with the best pepole
          </h2>
        
          <div className="xl:w-[1322px] lg:w-[900px] md:w-[700px] xsm:w-[380px] w-[250px] h-[129.37px]  relative top-[30px] md:top-[60px] xxl:left-0 left-[-20px] xsm:left-[-90px]  md:left-[-250px] lg:left-[30px] xl:left-0 flex  flex-row flex-wrap items-center  justify-between bg-white">
            <Image
              src="/m1.svg" 
              alt="menu-logo"
              height={129.23}
              width={240.96}
              className="xl:w-[240.96px] xl:h-[129.23px] w-[120px] h-[65px] "
            />
            <Image
              src="/m2.svg"
              alt="menu-logo"
              height={128.68}
              width={166.04}
              className="xl:w-[166.04px] xl:h-[128.68px] w-[130px] h-[100px] "
            />
            <Image
              src="/m3.svg"
              alt="menu-logo"
              height={127.01}
              width={143.98}
              className="xl:w-[143.98px] xl:h-[127.01px] w-[110px] h-[100px]"
            />
            <Image
              src="/m6.svg"
              alt="menu-logo"
              height={129.37}
              width={130.98}
              className="xl:w-[130.98px] xl:h-[129.37px] w-[110px] h-[110px] "
            />
            <Image
              src="/m4.svg"
              alt="menu-logo"
              height={129.17}
              width={169.97}
              className="xl:w-[169.97px] xl:h-[129.17px] w-[120px] h-[100px] "
            />
            <Image
              src="/m5.svg"
              alt="menu-logo"
              height={129.08}
              width={113.98}
              className="xl:w-[113.98px] xl:h-[129.08px] w-[100px] h-[100px] "
            />
          </div>
          </div>
        
      </section>
      {/* <div className="absolute md:top-[4650px] top-[5350px]">
        <Footer />
      </div> */}
    </>
  );
};

export default OurMenu;
