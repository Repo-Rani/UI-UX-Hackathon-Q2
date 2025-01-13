import React from "react";
import TestimonialCards from "./TestimonialCards";
import { usePathname } from "next/navigation"; 


const Testimonial = () => {
  const pathname = usePathname(); 
  const isHomeRoute = pathname === "/";

  return (
    <div className="md:w-[1273px] md:h-[770px] w-[360px] h-[500px]">
      <span className="w-[128px] h-[40px] relative md:left-[4px]  left-[10px] font-greatvibes md:text-[32px] text-[18px] font-normal text-[#ff9f0d]">
        Testimonials
      </span>
      <h2
        className={`font-helvetica font-bold md:text-[48px] relative md:left-0 left-[10px] text-[20px] whitespace-nowrap ${
          isHomeRoute ? "text-white" : "text-[#333333]"};
k"
        }`}
      >
        What Our Client are saying
      </h2>
      <div className="relative top-[227px] ">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonial;
