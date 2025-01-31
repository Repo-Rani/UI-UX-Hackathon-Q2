"use client"
import React from 'react'
import Banner from '@/components/banner/Banner';
import BlogSideBar from '@/components/blog/BlogSideBar';
// import Pagination from '@/components/shop/Pagination';
import BlogCard from '@/components/blog/BlogCard';
// import Footer from '@/components/footer/Footer';
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
  className="relative mx-auto w-full max-w-[1920px] "
 
>
  <div className=''>
    <Banner mainHeading="Blog List" name="Blog"/>
  </div>
{/* Left Side */}
  <div className='w-[300px] md:w-[872px] bg-green-300'>
   <BlogCard/>

  </div>
  {/* Right Side */}
  <aside className='absolute top-[2900px] md:top-[530px] left-[50px] md:left-[1196px] xl:left-[1000px]'>
    <BlogSideBar/>
  </aside>

  <div className='absolute md:top-[4000px] top-[2790px] md:left-[583px]'>
    {/* <Pagination/> */}
  </div>
</section>

{/* <div className='absolute top-[2970px] md:top-[4245px]'>
<Footer/>
</div> */}
</>
  )
}

export default Blog;

