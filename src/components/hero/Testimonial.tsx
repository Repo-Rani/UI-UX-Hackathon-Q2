import React from "react";
import TestimonialCards from "./TestimonialCards";


const Testimonial = () => {
  

  return (
           <section className="absolute xlg:top-[5339px] top-[5150px] sm:top-[5550px] md:top-[3750px]  lg:top-[3900px] xlg:left-[240px] xxxl:left-[300px]  ">
    
    <div className="w-full flex justify-center items-center">
    <div className="md:w-[760px] lg:w-[900px] xxl:w-[1100px] xxxl:w-[1273px] md:h-[770px] w-[300px] ms:w-[360px] h-[500px] ">
      <span className="w-[128px] h-[40px] relative md:left-[10px] xlg:left-[-130px]  xxl:left-0 left-[20px] font-greatvibes md:text-[32px] text-[18px] font-normal  text-[#ff9f0d]">
        Testimonials
      </span>
      <h2
        className="font-helvetica font-bold xlg:text-[48px] relative xlg:left-[-130px] xxl:left-0  left-[20px] text-[20px] sm:text-[22px] ms:w-[300px] w-[280px] md:text-[32px] whitespace-nowrap  text-white" 
      
      >
        What Our Client are saying
      </h2>
      <div className="relative top-[270px] md:top-[290px] lg:top-[320px] xlg:top-[270px] xsm:left-[30px] lg:left-[60px] xlg:left-0 md:left-0 ">
        <TestimonialCards />
      </div>
      </div>
      </div>
      </section>
    
   
  );
};

export default Testimonial;
