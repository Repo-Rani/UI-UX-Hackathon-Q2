"use client"
import React from 'react'
import HeaderHero from '@/components/hero/Hero'
// import Footer from '@/components/footer/Footer';

import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className='  bg-[#0D0D0D]  w-full   max-w-[1920px]  h-[9000px] flex justify-center  '>

  <HeaderHero />
  {/* <div className="absolute  top-[8300px] ">
        <Footer />
      </div>  */}
</div>
  )
}

export default Home