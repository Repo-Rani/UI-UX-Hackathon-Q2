"use client"
import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Banner from '../components/Banner'
import AboutChooseUs from '../components/AboutChooseUs'
import AboutTeamMember from '../components/TeamMember'
import AboutFoodMenu from '../components/AboutMenu'
import Footer from '../components/Footer'
import Testimonail from '../components/Testimonial'
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
      <section className=' absolute top-[3190px] left-[300px]'>
      <Testimonail/> 
      </section>
      <AboutFoodMenu/>
      
    </section>
    <div className='absolute top-[4950px]'>
    <Footer/>
    </div>
    </>
  )
}

export default About;


