"use client"
import React from 'react'
import AboutBanner from '@/components/about/AboutBanner'
import Banner from '@/components/banner/Banner'
import AboutChooseUs from '@/components/about/AboutChooseUs'
import AboutTeamMember from '@/components/about/TeamMember'
import AboutFoodMenu from '@/components/about/AboutMenu'
import Testimonial from '@/components/about/Testimonial'
// import Footer from '@/components/footer/Footer'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
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
    <section className=''>
      <Banner mainHeading='About Us' name='About'/>
      <AboutBanner/>
      <AboutChooseUs/>
      <AboutTeamMember/>
     
      <Testimonial/> 
      <AboutFoodMenu/>
      </section>
     
      
   
    {/* <div className='absolute md:top-[4950px] top-[4700px]'>
    <Footer/>
    </div> */}
    </>
  )
}

export default About;


