"use client"
import React from 'react'
import HeaderHero from '@/components/hero/Hero'
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
    <div className=' relative mx-auto w-full  max-w-[1920px]  bg-black  md:h-[8479px] h-[8300px] '>
  <HeaderHero />
</div>
  )
}

export default Home