import React from 'react'
import AboutBanner from '../components/AboutBanner'
import Banner from '../components/Banner'
import AboutChooseUs from '../components/AboutChooseUs'
import AboutTeamMember from '../components/TeamMember'
import AboutFoodMenu from '../components/AboutMenu'
import Footer from '../components/Footer'
import Testimonail from '../components/Testimonial'
const About = () => {
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


