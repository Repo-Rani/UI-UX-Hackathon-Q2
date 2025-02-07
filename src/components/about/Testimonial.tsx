import React from "react";
import TestimonialCards from "./TestimonialCards";
import { usePathname } from "next/navigation"; 


const Testimonial = () => {
  const pathname = usePathname(); 
  const isHomeRoute = pathname === "/";

  return (
     <section className='w-full flex justify-center items-center absolute top-[2850px] xl:top-[3290px] xsm:top-[3000px] sm:top-[2600px]  md:top-[2900px] '>
    <div className="">
    <div className="md:w-[760px]  xxl:w-[1100px] xxxl:w-[1273px] md:h-[770px] w-[300px] ms:w-[360px] h-[500px] ">
      <span className="w-[128px] h-[40px] relative md:left-[20px] xl:left-[-130px]  xxl:left-0  font-greatvibes md:text-[32px] text-[18px] font-normal  text-[#ff9f0d]">
        Testimonials
      </span>
      <h2
        className="font-helvetica font-bold xl:text-[48px] relative xl:left-[-130px] xxl:left-0 md:left-[20px]  text-[20px] sm:text-[22px] w-[300px] md:text-[32px] whitespace-nowrap "
        
      >
        What Our Client are saying
      </h2>
      <div className="w-full flex justify-center relative top-[270px]  ">
        <TestimonialCards />
      </div>
      </div>
      </div>
      </section>
   
  );
};

export default Testimonial;
