"use client"
import React from 'react'
import Banner from '../components/Banner'
import BlogCardList from '../components/BlogCardList';
import BlogSideBar from '../components/BlogSideBar';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
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
  className="relative mx-auto w-[390px] md:w-[1920px] lg:w-[1920px] max-w-[1920px]"
 
>
  <div className=''>
    <Banner mainHeading="Blog List" name="Blog"/>
  </div>
{/* Left Side */}
  <div className='w-[872px] bg-green-300'>
    <BlogCardList/>

  </div>
  {/* Right Side */}
  <aside className='absolute top-[530px] left-[1196px]'>
    <BlogSideBar/>
  </aside>

  <div className='absolute top-[4000px] left-[583px]'>
    <Pagination/>
  </div>
</section>

<div className='absolute top-[4245px]'>
<Footer/>
</div>
</>
  )
}

export default Blog;

