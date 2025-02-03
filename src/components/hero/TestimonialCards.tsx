"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Testimonial } from "../../../types/type";


const TestimonialCards = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch testimonials data from Sanity
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == "testimonials"]{
            _id,
            name,
            "image": image.asset->url,
            desc,
            profession,
            "ratingimage": ratingimage.asset->url
          }`
        );
        const data = await response.json();
        setTestimonials(data.result);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) return <p>Loading...</p>;


  return (
    <div className="w-[300px] ms:w-[320px] h-[200px] sm:w-[450px]  md:w-[600px]  md:h-[325px] xlg:h-[420px] xlg:w-[868.47px]      relative ms:left-[20px] xsm:left-[-15px] sm:left-[-70px] md:left-[60px] xlg:left-[-50px] xxl:left-[130px] xxxl:left-[220px]  md:bottom-[170px] bottom-[150px] bg-[#ffffff] shadow-custom">
      <div className="w-[300px] h-[200px] sm:w-[430px]  md:w-[600px] xlg:w-[696.57px] xlg:h-[485.89px] md:h-[320px] lg:h-[280px]  relative xlg:left-[85px]  left-0 ms:left-[10px] lg:left-0 top-[20px] lg:top-[25px] xlg:top-0 flex flex-col justify-center gap-[12px] items-center ">
        <Image
          src="/testimonial.svg"
          alt="image"
          height={500.56}
          width={395.75}
          className="w-[110px] ms:w-[125px] h-[250px] md:w-[180px] lg:w-[250px] xlg:w-[395.75px] md:h-[500.56px] absolute top-[10px]  sm:top-[15px] sm:left-[345px] md:top-0  xlg:top-[50px] md:left-[490px] lg:left-[470px] xlg:left-[525px] left-[200px] ms:left-[200px] bottom-[90px] md:bottom-[100px] lg:bottom-0 xl:bottom-[160px]"
        />

<Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} height={134} width={133}
          className="w-[80px] h-[80px] md:w-[133px] md:h-[134px] absolute bottom-[210px] md:bottom-[300px] lg:bottom-[280px]
           xlg:bottom-[440px]"
        />
        <Image src="/Quotes.svg" alt="quotes-image" height={48} width={48} className="md:w-[48px] md:h-[48px] w-[24px] h-[24px] " />
        <p className="w-[300px] h-[100px] ms:w-[330px] md:w-[600px] sm:w-[400px] xl:w-[696.57px] md:h-[103.97px]  relative text-center text-[10px] md:text-[18px] bottom-[10px]  md:bottom-0  md:px-5 px-7">
        {testimonials[currentIndex].desc}
        </p>
        <Image src={testimonials[currentIndex].ratingimage} alt="rating" height={24} width={152}
          className="w-[120px] h-[18px] lg:w-[152px] md:h-[24px]  relative   md:bottom-[-25px] lg:bottom-[-30px] bottom-[15px] xl:bottom-0"
        />
        <h3 className="lg:w-[159px] lg:h-[32px] font-helvetica font-bold text-[16px] sm:text-[20px] lg:text-[24px]  text-[#333333] whitespace-nowrap relative md:bottom-[-15px] lg:bottom-[-20px] xl:bottom-0 bottom-[20px]">
        {testimonials[currentIndex].name}
        </h3>
        <p className="lg:w-[110px] lg:h-[24px] font-helvetica font-normal text-[10px] sm:text-[14px] relative md:bottom-[-5px] lg:bottom-[-20px]  xl:bottom-0 bottom-[30px] lg:text-[16px]  text-[#828282] whitespace-nowrap">
          &quot;{testimonials[currentIndex].profession}&quot;
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2   mt-6 lg:mt-16  xlg:mt-0">
      {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-orange-300 opacity-50"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCards;