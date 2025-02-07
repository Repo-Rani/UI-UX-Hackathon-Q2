import React from "react";
import TestimonialCards from "./TestimonialCards";


const Testimonial = () => {
  

  return (
           <section className="absolute xlg:top-[5339px] top-[5150px] sm:top-[5550px] md:top-[3750px]  lg:top-[3900px] xlg:left-[240px] xxl:left-[100px] xxxl:left-[200px]  ">
    
    <div className="">
    <div className="md:w-[760px]  xxl:w-[1100px] xxxl:w-[1273px] md:h-[770px] w-[300px] ms:w-[360px] h-[500px] ">
      <span className="w-[128px] h-[40px] relative left-[20px] xl:left-[-130px]  xxl:left-0  font-greatvibes md:text-[32px] text-[18px] font-normal  text-[#ff9f0d]">
        Testimonials
      </span>
      <h2
        className="font-helvetica font-bold xl:text-[48px] relative xl:left-[-130px] xxl:left-0 left-[20px]  text-[20px] sm:text-[22px] w-[300px] md:text-[32px] text-white whitespace-nowrap "
        
      >
        What Our Client are saying
      </h2>
      <div className="w-full flex justify-center relative top-[270px] md:top-[320px] lg:left-[120px] xlg:left-0 xl:left-[130px]  ">
        <TestimonialCards />
      </div>
      </div>
      </div>
      </section>
   
  );
};

export default Testimonial;

