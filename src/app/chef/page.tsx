"use client"
import React from "react";
import Banner from "../components/Banner";
import ChefCardsItem from "../components/ChefCardsItem";
import Footer from "../components/Footer";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Chef = () => {
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
      <section>
        <Banner mainHeading="Our Chef" name="Chef" />
        <div className="w-[390px] md:w-[1320px] md:h-[1386px] h-[1100px] absolute top-[520px] md:top-[580px] xl:left-[100px] xxl:left-[300px] left-[18px] md:left-[300px]   ">
          <ChefCardsItem />
        </div>
      </section>
      <div className="absolute md:top-[2036px] top-[1500px]">
        <Footer />
      </div>
    </>
  );
};

export default Chef;
