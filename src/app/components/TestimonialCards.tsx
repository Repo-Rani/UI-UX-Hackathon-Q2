"use client";
import React, { useState, useEffect } from "react";
import { testimonialsData } from "../../../data/data";
import Image from "next/image";

const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[320px] h-[200px] md:w-[868.47px] md:h-[450px] relative left-[25px] md:left-[220px] md:bottom-[170px] bottom-[150px] bg-[#ffffff] shadow-custom">
      <div className="w-[300px] h-[200px] md:w-[696.57px] md:h-[485.89px]  relative md:left-[85px] left-[10px] top-[20px]  flex flex-col justify-center gap-[12px] items-center ">
        <Image
          src="/testimonial.svg"
          alt="image"
          height={500.56}
          width={395.75}
          className="w-[150px] h-[250px]  md:w-[395.75px] md:h-[500.56px] absolute top-[50px] md:left-[525px] left-[188px] bottom-[30px] md:bottom-[160px]"
        />

        <Image
          src={testimonialsData[currentIndex].image}
          alt={testimonialsData[currentIndex].name}
          height={134}
          width={133}
          className="w-[80px] h-[80px] md:w-[133px] md:h-[134px] absolute bottom-[210px]
          px] md:bottom-[440px]"
        />
        <Image src="/Quotes.svg" alt="quotes-image" height={48} width={48} className="md:w-[48px] md:h-[48px] w-[24px] h-[24px] " />
        <p className="w-[330px] h-[100px] md:w-[696.57px] md:h-[103.97px]  relative text-center text-[10px] md:text-[18px] bottom-[10px]  md:bottom-0  md:px-5 px-7">
          {testimonialsData[currentIndex].desc}
        </p>
        <Image
          src={testimonialsData[currentIndex].ratingimage}
          alt={testimonialsData[currentIndex].name}
          height={24}
          width={152}
          className="w-[152px] h-[12px] md:w-[152px] md:h-[24px]  relative  bottom-[15px] md:bottom-0"
        />
        <h3 className="md:w-[159px] md:h-[32px] font-helvetica font-bold text-[16px] md:text-[24px]  text-[#333333] whitespace-nowrap relative md:bottom-0 bottom-[20px]">
          {testimonialsData[currentIndex].name}
        </h3>
        <p className="w-[110px] h-[24px] font-helvetica font-normal text-[10px] relative md:bottom-0 bottom-[30px] md:ml-0 ml-8  md:text-[16px]  text-[#828282] whitespace-nowrap">
          &quot;{testimonialsData[currentIndex].profession}&quot;
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`md:w-3 md:h-3 w-[8px] h-[8px] rounded-full ${
              index === currentIndex
                ? "bg-[#ff9f0d]"
                : "bg-[#ff9f0d] opacity-[30%]"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;