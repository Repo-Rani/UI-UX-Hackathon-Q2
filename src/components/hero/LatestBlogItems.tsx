import React from "react";
import { latestBlogData } from "../../../data/data";
import LatestBlog from "./LatestBlog";
const LatestBlogItems = () => {
  return (
    <section className="xlg:w-[1200px] md:w-[400px] xl:w-[1400px] xxl:w-[1320px] w-[200px] h-[732px] absolute xl:top-[6800px] xxl:top-[6907px] top-[5800px] sm:top-[6350px] md:top-[4800px] lg:top-[5100px] xlg:top-[6700px] xl:left-[80px] xlg:left-[95px]  xxxl:left-[300px] md:left-[30px] left-[70px]">
            <div className=" ">
              <span className="md:w-[124px] h-[40px] font-greatvibes xlg:text-[32px] sm:text-[28px] text-[20px] font-normal text-[#ff9f0d] relative xlg:left-[470px] xl:left-[600px] md:left-[280px]  left-[50px] ms:left-[80px] lg:left-[395px] xsm:left-[90px] sm:left-[160px]">
                Blog Post
              </span>
              <h2 className="md:w-[462px] md:h-[56px] font-helvetica font-bold xlg:text-[48px] sm:text-[32px] text-[28px] text-[#ffffff] relative lg:left-[305px] xl:left-[455px] md:left-[190px] left-[-35px] ms:left-[-10px] sm:left-[70px] xsm:left-0 whitespace-nowrap">
                <span className="text-[#ff9f0d]">La</span>test News & Blog
              </h2>
             
    <div className="flex md:flex-row flex-col lg:justify-between justify-center xl:gap-0 md:gap-[10px] lg:w-[950px] sm:gap-[30px] gap-[25px] xlg:w-[1100px]  xl:w-[1320px] md:w-[760px] w-[275px] ms:w-[300px]  relative top-[40px] md:right-[25px] lg:right-0 xsm:right-[25px] sm:right-[-60px]   ms:right-0 right-[30px]">
      {latestBlogData.map((item, index) => (
        <LatestBlog
          key={index}
          image={item.image}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
    </div>
    </section>
  );
};

export default LatestBlogItems;
