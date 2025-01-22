"use client"
import React from "react";
import Banner from "@/components/Banner";
import Image from "next/image";
import StarterMenuItems from "@/components/StarterMenuItems";
import Clients from "@/components/Client";
import Footer from "@/components/Footer";
// import { useEffect } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
const OurMenu = () => {
  //  useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease",
  //       once: true,
  //       anchorPlacement: "top-bottom",
  //     });
  //   }, []);
  return (
    <>
      <section
        className="relative mx-auto w-[390px] lg:w-[1920px] md:w-[1920px] xxl:w-[1920px] xl:w-[1484px] md:h-[5235px] h-[6580px]"
       
      >
        <Banner mainHeading="Our Menu" name="Menu" />
        <div className="md:w-[1320px] w-[300px] h-[628px] absolute md:top-[531px] top-[600px] md:left-[300px] xl:left-[100px] xxl:left-[300px]    left-[45px] bg-white flex md:flex-row flex-col justify-center md:gap-0 gap-[30px] md:justify-between ">
          <Image
             data-aos="fade-right"
        data-aos-delay="100"
            src="/Rectangle 8874 (1).svg"
            alt="menu-item"
            height={626}
            width={300}
            className="md:w-[448px] md:h-[626px] w-[300px] h-[500px] "
          />

          <div className="relative md:left-[50px] ">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[20px] food-rotate"
            />
            <h1 className="font-helvetica md:text-[48px] text-[28px] font-bold text-black relative left-[20px]">
              Starter Menu
            </h1>

            <StarterMenuItems
              names="Alder Grilled Chinook Salmon"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Berries and Creme Tart"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

            <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Tormentoso Bush Pizza Pintoage"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

            <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Spicy Vegan Potato Curry"
              desc="Spicy Vegan Potato Curry"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
        </div>

        <div className="md:w-[1320px] w-[300px] h-[628px] absolute md:top-[1279px] top-[1500px] md:left-[300px]  left-[45px] xl:left-[100px] xxl:left-[300px]  bg-white flex  md:flex-row-reverse  flex-col justify-center md:gap-0 gap-[30px] md:justify-between  ">
          <Image
             data-aos="fade-left"
        data-aos-delay="100"
            src="/menu2.svg"
            alt="menu-item"
            height={626}
            width={300}
            className="md:w-[448px] md:h-[626px] w-[300px] h-[500px] relative "
          />

          <div className="relative md:right-[135px]">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[20px] food-rotate"
            />
            <h1 className="font-helvetica md:text-[48px] text-[28px] font-bold text-black relative  left-[20px]">
              Main course
            </h1>

            <StarterMenuItems
              names="Optic Big Breakfast Combo Menu"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Cashew Chicken With Stir-Fry"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

<div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names=" Vegetables & Green Salad"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

<div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Spicy Vegan Potato Curry"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
          </div>

        <div className="absolute md:top-[2027px]  top-[2300px]">
          <Clients />
        </div>

        <div className="md:w-[1320px] w-[300px] h-[1000px] absolute md:top-[2615px] top-[2700px] md:left-[300px]   left-[45px] xl:left-[100px] xxl:left-[300px]  bg-white flex md:flex-row flex-col justify-center md:gap-0 gap-[30px] md:justify-between  ">
          <Image
             data-aos="fade-right"
        data-aos-delay="100"
            src="/menu3.svg"
            alt="meni-item"
            height={626}
            width={300}
            className="md:w-[448px] md:h-[626px] w-[300px] h-[500px]   "
          />

          <div className="relative md:left-[50px]">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[20px] food-rotate"
            />
            <h1 className="font-helvetica md:text-[48px] text-[28px] font-bold text-[#333333] relative left-[20px]">
              Dessert
            </h1>

            <StarterMenuItems
              names="Fig and lemon cake"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Creamy mascarpone cake"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

<div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Pastry, blueberries, lemon juice"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
             
            />

<div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Pain au chocolat"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
          </div>

        <div className="md:w-[1320px] w-[300px] h-[628px] absolute top-[3700px] md:top-[3363px]  md:left-[300px]   left-[45px] xl:left-[100px] xxl:left-[300px]  bg-white  flex  md:flex-row-reverse  flex-col justify-center md:gap-0 gap-[30px] md:justify-between  ">
          <Image
             data-aos="fade-left"
        data-aos-delay="100"
            src="/menu4.svg"
            alt="menu-item"
            height={626}
            width={300}
            className="md:w-[448px] md:h-[626px] w-[300px] h-[500px] relative md:top-0 top-[180px] "
          />

          <div className="relative md:top-[0px] top-[200px] md:right-[135px] ">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={24}
              width={24}
              className="h-[24px] w-[24px] relative left-[20px] food-rotate"
            />
            <h1 className="font-helvetica text-[48px] font-bold text-[#333333] relative left-[20px]">
              Drinks
            </h1>

            <StarterMenuItems
              names="Caffè macchiato"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Aperol Spritz Capacianno"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

<div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Caffe Latte Campuri"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

<div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Tormentoso BushTea Pintoage"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="md:w-[760px] w-[300px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
          </div>

        <div className="md:w-[1322px] w-[200px] h-[275px] absolute md:top-[4111px] top-[4750px] md:left-[295px] xl:left-[70px] xxl:left-[295px] left-[50px] bg-white">
          <span className="font-inter font-normal md:text-[18px] text-[14px] text-[#333333] relative md:left-[600px]">
            Partners & Clients
          </span>
          <h2 className="font-helvetica font-bold md:text-[48px] text-[24px]  text-[#333333] md:w-[600px]  relative md:left-[360px]  whitespace-nowrap">
            We work with the best pepole
          </h2>
          <div className="md:w-[1322px] w-[250px] h-[129.37px]  relative top-[60px] flex  flex-row flex-wrap items-center justify-between bg-white">
            <Image
              src="/m1.svg" 
              alt="menu-logo"
              height={129.23}
              width={240.96}
              className="md:w-[240.96px] md:h-[129.23px] w-[120px] h-[65px] "
            />
            <Image
              src="/m2.svg"
              alt="menu-logo"
              height={128.68}
              width={166.04}
              className="md:w-[166.04px] md:h-[128.68px] w-[130px] h-[100px] "
            />
            <Image
              src="/m3.svg"
              alt="menu-logo"
              height={127.01}
              width={143.98}
              className="md:w-[143.98px] md:h-[127.01px] w-[110px] h-[100px]"
            />
            <Image
              src="/m6.svg"
              alt="menu-logo"
              height={129.37}
              width={130.98}
              className="md:w-[130.98px] md:h-[129.37px] w-[110px] h-[110px] "
            />
            <Image
              src="/m4.svg"
              alt="menu-logo"
              height={129.17}
              width={169.97}
              className="md:w-[169.97px] md:h-[129.17px] w-[120px] h-[100px] "
            />
            <Image
              src="/m5.svg"
              alt="menu-logo"
              height={129.08}
              width={113.98}
              className="md:w-[113.98px] md:h-[129.08px] w-[100px] h-[100px] "
            />
          </div>
        </div>
      </section>
      <div className="absolute md:top-[4650px] top-[5350px]">
        <Footer />
      </div>
    </>
  );
};

export default OurMenu;
