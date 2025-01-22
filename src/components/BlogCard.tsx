"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BlogCardProps } from "../../types/type";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const fetchBlog = async (): Promise<BlogCardProps[]> => {
  const blogs = await client.fetch(`
   *[_type == "blogPost"]{
      _id,
      title,
      "imageUrl": image.asset->url,
      detail1,
      detail2,
      paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5
   }
  `);
  return blogs.map((blog: any) => ({
    id: blog._id,
    title: blog.title,
    imageUrl: blog.imageUrl,
    detail1: blog.detail1,
    detail2: blog.detail2,
    paragraph1: blog.paragraph1,
    paragraph2: blog.paragraph2,
    paragraph3: blog.paragraph3,
    paragraph4: blog.paragraph4,
    paragraph5: blog.paragraph5,
  }));
};

const BlogCard = () => {
  const [blogs, setBlogs] = useState<BlogCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchBlog();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="absolute top-[500px] left-[300px] md:top-[530px] xxxl:left-[300px] xl:left-[70px]">
      <div className="grid grid-cols-1 gap-[20px] md:gap-[40px]">
        {blogs.map((blog, index) => (
            <div
           key={index} 
            className="w-[300px] md:w-[872px] md:h-[830px] h-[550px] flex flex-col items-center justify-center gap-[25px] relative">
              <Image
                src={blog.imageUrl}
                alt="food-image"
                height={520}
                width={872}
                className="md:h-[520px] md:w-[872px]"
              />
              <div className="md:w-[60px] w-[50px] h-[40px] md:h-[60px] bg-[#ff9f0d] rounded-[6px] absolute left-[24px] top-[24px] flex flex-col items-center justify-center">
                <span className="font-inter text-[14px] md:text-[18px] font-bold text-[#ffffff]">
                  14
                </span>
                <span className="font-inter font-normal text-[12px] md:text-[16px] text-[#ffffff]">
                  Feb
                </span>
              </div>
              <div className="flex items-center justify-between gap-[20px] relative left-[-260px]">
                <Image
                  src="/Calendar.svg"
                  alt="calendar-image"
                  height={24}
                  width={24}
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                />
                <span className="text-[14px] md:text-[16px] text-[#4F4F4F]">
                  Feb 14, 2022/
                </span>
                <Image
                  src="/Chats.svg"
                  alt="chat-icon"
                  height={24}
                  width={24}
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                />
                <span className="text-[16px] text-[#4f4f4f]">3 /</span>
                <Image
                  src="/UserCirclePlus.svg"
                  alt="user-icon"
                  height={24}
                  width={24}
                  className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                />
                <span className="text-[16px] text-[#4f4f4f]">Admin</span>
              </div>
              <h2 className=" md:w-[475px] font-helvetica font-bold text-[14px] md:text-[24px] md:leading-[32px] relative md:right-[200px]  whitespace-nowrap">
                {blog.title}
              </h2>
      <div className="w-[300px] md:w-[694.83px]  border-[1px] border-[#828282] relative md:left-[-88px]  opacity-[17%]"></div>
              <p className="w-[300px] md:w-[648px] h-[96px] text-[#4f4f4f] font-normal text-[12px] md:text-[16px] md:leading-[24px] font-inter relative md:right-[110px] md:left-[-100px] left-[10px] ">
               {blog.detail1}
              </p>
              <Link href={`blogDetails/${blog.id}`} passHref key={blog.id}>
              <button className="md:w-[172px] md:h-[52px] w-[120px] h-[45px] rounded-[6px] border-[1px] border-[#ff9f0d] md:py-[14px] md:px-[32px]  hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center md:justify-between relative md:right-[350px]">
        <span className="w-[80px] h-[24px] font-helvetica font-normal text-[14px] whitespace-nowrap  md:text-[16px] text-[#ff9f0d] ">
       
        Read More
        </span>
        <Image
          src="/ArrowLineUpRight.svg"
          alt="arrow-vector"
          height={18}
          width={18}
          className="md:w-[18px] md:h-[18px] w-[14px] h-[14px]"
        />
      </button>
      </Link>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
