import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LatestBlogProps } from "../../../types/type";
import { LiaCommentDotsSolid } from "react-icons/lia";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const LatestBlog = () => {
  const [latestBlogs, setLatestBlogs] = useState<LatestBlogProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "latestBlog"]{
        _id,
        title,
        date,
        "image": image.asset->url
      }`;

      const data = await client.fetch(query);
      setLatestBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center items-center absolute xl:top-[6800px] xxl:top-[6907px] top-[5800px] sm:top-[6350px] md:top-[4800px] lg:top-[5100px] xlg:top-[6700px]">
      <div className=" ">
        <span className="w-full font-greatvibes xlg:text-[32px] sm:text-[28px] text-[20px] font-normal text-[#ff9f0d] flex justify-center">
          Blog Post
        </span>
        <h2 className="w-full font-helvetica font-bold xlg:text-[48px] sm:text-[32px] text-[28px] text-[#ffffff] whitespace-nowrap flex justify-center">
          <span className="text-[#ff9f0d]">La</span>test News & Blog
        </h2>

        {/* Blog Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {latestBlogs.map((item, index) => (
            <div
              key={index}
              className="w-[255px] h-[330px] ms:h-[345px] xsm:h-[400px] xsm:w-[320px] md:w-[240px] md:h-[342px] lg:w-[300px] lg:h-[390px] xl:w-[424px] xl:h-[553px] xlg:w-[350px] xlg:h-[455px] flex flex-col justify-center gap-[20px] xlg:gap-[25px] xl:gap-[35px] border-[1px] border-[#ffffff] p-4"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                height={349}
                width={423}
               
                className="w-full h-full object-cover"
              />

              {/* Date */}
              <span className="font-helvetica font-normal text-[12px] md:text-[14px] xlg:text-[16px] text-[#ff9f0d] px-3">
                {item.date}
              </span>

              {/* Title */}
              <h2 className="font-helvetica font-bold text-[14px] md:text-[16px] xl:text-[24px] xlg:text-[20px] text-[#ffffff] px-3 cursor-pointer">
                {item.title}
              </h2>

              {/* Buttons */}
              <div className="flex justify-between mb-4 px-2">
                <button className="w-[86px] h-[24px] font-inter font-normal text-[12px] md:text-[14px] xlg:text-[16px] text-[#ffffff] whitespace-nowrap cursor-pointer">
                  <Link href="/blog">Learn More</Link>
                </button>

                <div className="flex justify-center gap-[10px] w-[76px] h-[20px] cursor-pointer">
                  <Image
                    src="/ThumbsUp.svg"
                    alt="like-button"
                    height={20}
                    width={20}
                  />
                  <LiaCommentDotsSolid className="w-[20px] h-[20px] text-[#ff9f0d]" />
                  <Image
                    src="/ShareNetwork.svg"
                    alt="food-image"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
