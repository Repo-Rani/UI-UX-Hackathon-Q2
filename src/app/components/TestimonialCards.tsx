'use client'
import React, { useState, useEffect } from "react";
import { testimonialsData } from "../../../data/data";
import Image from "next/image";

const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[868.47px] h-[450px] relative left-[220px] bottom-[170px] bg-[#ffffff] shadow-custom">
      {/* Testimonial Card */}
      
      <div className="w-[696.57px] h-[485.89px] relative left-[85px] top-[20px] flex flex-col justify-center gap-[12px] items-center ">
      <Image src="/testimonial.svg" alt="image" height={500.56} width={395.75}  className='absolute top-[90px] left-[525px] bottom-[160px]'/>

        <Image
          src={testimonialsData[currentIndex].image}
          alt={testimonialsData[currentIndex].name}
          height={134} width={133}
          className="w-[133px] h-[134px] absolute bottom-[440px]"
        />
        <Image
          src="/Quotes.svg"
          alt="quotes-image"
          height={48}
          width={48}
        />
        <p className="w-[696.57px] h-[103.97px] relative text-center px-5">
          {testimonialsData[currentIndex].desc}
        </p>
        <Image
          src={testimonialsData[currentIndex].ratingimage}
          alt={testimonialsData[currentIndex].name}
          height={24} width={152}
          className="w-[152px] h-[24px]"
        />
        <h3 className="w-[159px] h-[32px] font-roboto font-bold text-[24px] text-[#333333]">
          {testimonialsData[currentIndex].name}
        </h3>
        <p className="w-[110px] h-[24px] font-roboto font-normal text-[16px] text-[#828282]">
          "{testimonialsData[currentIndex].profession}"
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#ff9f0d]" : "bg-[#ff9f0d] opacity-[30%]"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;
