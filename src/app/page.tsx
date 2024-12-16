"use client"
import React from 'react'
import HeaderHero from './components/HeaderHero'
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
    <div className=' relative mx-auto w-[1920px] lg:w-[1920px] md:max-w-[1920px] bg-black h-[8479px]'>
  <HeaderHero />
</div>
  )
}

export default Home