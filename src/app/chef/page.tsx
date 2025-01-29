"use client"
import React from "react";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ChefCards from "@/components/chef/ChefCards";
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
        
        <div className="flex justify-center items-center">
        <div className="w-full  xl:w-[1320px] md:h-[1386px] h-[1100px] absolute top-[520px] md:top-[580px]  ">
          <ChefCards />
        </div>
        </div>
      </section>
      <div className="absolute md:top-[2036px] top-[1500px]">
        <Footer />
      </div>
    </>
  );
};

export default Chef;
