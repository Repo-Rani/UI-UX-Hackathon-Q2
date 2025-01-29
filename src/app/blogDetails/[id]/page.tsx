"use client";
import React from "react";
import Image from "next/image";
import Banner from "@/components/banner/Banner";
import BlogSideBar from "@/components/blog/BlogSideBar";
// import Footer from "@/components/footer/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import ErrorePage from "@/app/errorePage/page";
import { BlogCardProps } from "../../../../types/type";
import { useState,useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const BlogDetails: React.FC<Props> = ({ params }) => {
  const [blog, setBlog] = useState<BlogCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      const query = ` *[_type == "blogPost"]{
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
   
   }`;

      try {
        const blogData: BlogCardProps[] = await client.fetch(query, { id });
        console.log("Blog data fetched:", blogData);
        if (!blogData || blogData.length === 0) {
          notFound();
        } else {
          setBlog(blogData[0]);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <ErrorePage />;
  }


  return (
    <>
      <div className="">
        <Banner mainHeading="Blog Details" name="Blog details" />
      </div>
      <section className="w-[300px] md:w-[872px] md:h-[3138px] h-[3638px] absolute top-[500px] md:top-[620px] left-[40px] xxxl:left-[300px] xl:left-[100px]  xxl:left-0">
        <div className=" w-[300px] md:w-[872px] h-[700px] md:h-[845px] ">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            height={520}
            width={872}
            className="md:w-[872px] w-[300px] h-[230px] md:h-[520px]"
          />
          <div className="w-[267px] h-[26px] absolute md:top-[536px]">
            <div className="flex  items-center justify-between gap-[20px] ">
              <Image
                src="/calendar.svg"
                alt="calender-image"
                height={24}
                width={24}
              />
              <div className="flex justify-center items-center gap-[10px] w-[267px] h-[24px]">
                <span className="w-[267px] h-[24px] font-inter font-normal text-[16px] text-[#4F4F4F]">
                  Feb 14, 2022/
                </span>
                <Image
                  src="/chats.svg"
                  alt="chat-icon"
                  height={24}
                  width={24}
                />
                <span className="font-inter font-normal text-[16px] text-[#4f4f4f] whitespace-nowrap">
                  3 /
                </span>
                <Image
                  src="/userCirclePlus.svg"
                  alt="user-image"
                  height={24}
                  width={24}
                />
                <span className="font-inter font-normal text-[16px] text-[#4f4f4f]">
                  Admin
                </span>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-[18px] md:text-[24px] font-helvetica text-[#333333]  absolute  md:left-0 left-[20px]  top-[270px] md:top-[578px]">
            {blog.title}
          </h1>
          <div className="w-[260px] md:w-[694.83px] border-b-[1px] border-[#828282] opacity-20 absolute  md:left-0 left-[20px]  top-[355px]  md:top-[634px]">
            
          </div>
          <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#4F4F4F] w-[300px] md:w-[872px] absolute  md:left-0 left-[20px]  top-[375px] md:top-[658px]">
            {blog.detail1}
          </p>
          <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#4F4F4F] w-[300px] md:w-[872px] absolute  md:left-0 left-[20px]  top-[580px] md:top-[770px]">
            {blog.detail2}
          </p>
        </div>
        <div className=" w-[300px] md:w-[853px] h-[200px] md:h-[176px] relative top-[60px]  bg-[#FF9F0D] md:py-0 py-2">
          <div className="w-[280px] md:w-[805px] h-[128px] relative md:top-[25px] left-[10px] md:left-[25px] flex justify-between ">
            <Image
              src="/Quotes (1).svg"
              alt=""
              height={48}
              width={48}
              className="md:w-[48px] md:h-[48px] w-[32px] h-[32px]"
            />
            <h3 className=" w-[300px] md:w-[741px] h-[128px] text-[16px] md:text-[24px] font-bold text-white font-helvetica md:leading-[32px] md:ml-0 ml-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </h3>
          </div>
        </div>
        <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#4F4F4F] md:leading-[24px]  w-[300px] md:w-[882px] relative top-[100px] md:top-[120px]">
          {blog.paragraph1}
        </p>
        <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#4F4F4F] md:leading-[24px] w-[300px] md:w-[420px] relative top-[120px] md:top-[150px]">
          {blog.paragraph2}
        </p>
        <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#4F4F4F] md:leading-[24px] w-[300px] md:w-[420px] relative top-[400px] md:top-[180px]">
          {blog.paragraph3}
        </p>
        <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#4F4F4F] md:leading-[24px] w-[300px] md:w-[700px] relative top-[420px] md:top-[210px]">
          {blog.paragraph4}
        </p>
        <p className="text-[14px] md:text-[16px] font-helvetica font-normal text-[#4F4F4F] md:leading-[24px] w-[300px] md:w-[700px] relative top-[430px] md:top-[240px]">
          {blog.paragraph5}
        </p>
        <Image
          src={blog.imageUrl}
          alt=""
          height={366}
          width={424}
          className="md:h-[430px] h-[200px] object-cover md:w-[424px] w-[300px] absolute top-[1560px] md:top-[1300px]  md:left-[448px]"
        />
        <div className="border-[#E0E0E0] border-[1px] absolute top-[2550px] md:top-[1980px] w-[300px] md:w-[872px] h-[60px]  flex  md:flex-row flex-col justify-center gap-[5px] md:gap-[300px] items-center">
          <div className="w-[150px] md:w-[297px] h-[24px]  flex justify-center gap-[10px] items-center">
            <p className="text-[#333333] font-bold font-helvetica text-[14px] md:text-[16px]">
              Tags:
            </p>
            <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#828282] whitespace-nowrap ">
              Restaurant, Dinner, Pizza, Yummy,{" "}
            </p>
          </div>
          <div className=" w-[100px] md:w-[187px] h-[24px] flex justify-center gap-[20px] items-center">
            <p className="font-bold font-helvetica text-[14px] md:text-[16px] text-[#333333]">
              Share:
            </p>
            <div className="flex gap-[10px] md:gap-[20px] items-center">
              <FaFacebookF className="w-[15px] md:h-[20px] h-[15px] md:w-[20px] text-[#4F4F4F]"/>
              <FaTwitter className="w-[15px] md:h-[20px] h-[15px] md:w-[20px] text-[#4F4F4F]"/>
           <FaInstagram className="w-[15px] md:h-[20px] h-[15px] md:w-[20px] text-[#4F4F4F]"/>
          <FaPinterest  className="w-[15px] md:h-[20px] h-[15px] md:w-[20px] text-[#4F4F4F]"/>
             
            </div>
          </div>
        </div>

        {/* Comment section */}
        <div className="w-[300px] md:w-[872px] h-[472px] relative   top-[600px]">
          <h1 className="text-[24px] md:text-[32px] font-bold font-helvetica text-[#333333] text-left">
            Comments - 03
          </h1>
          <div className="w-[300px] md:w-[872px] h-[112px]  relative top-[30px] flex justify-center md:gap-0 gap-[15px] md:justify-between">
            <Image
              src="/religious-woman-praying-with-rosary-beads-home 1.svg"
              height={97}
              width={109}
              alt=""
              className="md:w-[109px] w-[50px] h-[50px]  md:h-[97px] rounded-full"
            />
            <div className="flex flex-col  gap-[10px]">
              <div className="flex gap-[30px] items-center">
                <h5 className="font-inter text-[14px] md:text-[16px] font-bold text-[#333333]">
                  MD Sojib Khan
                </h5>
                <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                  <Image
                    src="/ArrowBendDoubleUpLeft.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="md:h-[18px] md:w-[18px] w-[12px] h-[12px]"
                  />
                  <p className="font-inter  text-[12px] md:text-[14px] font-normal text-[#333333]">
                    Reply
                  </p>
                </div>
              </div>
              <div className="w-[129px] h-[24px] flex gap-[10px]">
                <Image
                  src="/CalendarBlank.svg"
                  alt=""
                  width={26}
                  height={24}
                  className="md:w-[26px] md:h-[24px] w-[20px] h-[20px]"
                />
                <p className="font-helvetica text-[12px] md:text-[14px] font-normal text-[#7A7A7A] whitespace-nowrap">
                  June 22, 2020
                </p>
              </div>
              <p className="text-[12px] md:text-[16px] font-normal font-helvetica text-[#333333] md:leading-[24px] w-[250px] md:w-[746.6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
                hendrerit faucibus sollicitudin.{" "}
              </p>
            </div>
          </div>
          <div className="w-[300px] md:w-[872px] h-[112px]  relative top-[75px]  md:left-[80px] flex justify-center md:gap-0 gap-[15px] md:justify-between">
            <Image
              src="/religious-woman-praying-with-rosary-beads-home 1 (1).svg"
              height={97}
              width={109}
              alt=""
               className="md:w-[109px] w-[50px] h-[50px]  md:h-[97px] rounded-full"
            />
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[30px] items-center">
                <h5 className="font-inter text-[14px] md:text-[16px] font-bold text-[#333333]">
                  MD Moon Khan
                </h5>
                <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                  <Image
                    src="/ArrowBendDoubleUpLeft (1).svg"
                    alt=""
                    width={18}
                    height={18}
                   className="md:h-[18px] md:w-[18px] w-[12px] h-[12px]"
                  />
                  <p className="font-inter text-[12px] md:text-[14px]  font-normal text-[#FF9F0D]">
                    Reply
                  </p>
                </div>
              </div>
              <div className="w-[129px] h-[24px] flex gap-[10px]">
                <Image
                  src="/CalendarBlank.svg"
                  alt=""
                  width={26}
                  height={24}
                   className="md:w-[26px] md:h-[24px] w-[20px] h-[20px]"
                />
                <p className="font-helvetica text-[12px] md:text-[14px]  font-normal text-[#7A7A7A] whitespace-nowrap">
                  June 22, 2020
                </p>
              </div>
              <p className="text-[12px] md:text-[16px] font-normal font-helvetica text-[#333333] md:leading-[24px]
              w-[250px] md:w-[746.6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
                hendrerit faucibus sollicitudin.
              </p>
            </div>
          </div>
          <div className="w-[300px] md:w-[872px] h-[112px]  relative top-[120px] flex justify-center md:gap-0 gap-[15px] md:justify-between">
            <Image
              src="/religious-woman-praying-with-rosary-beads-home 1 (4).svg"
              height={97}
              width={109}
              alt=""
              className="md:w-[109px] w-[50px] h-[50px]  md:h-[97px] rounded-full"
            />
            <div className="flex flex-col gap-[5px] md:gap-[10px]">
              <div className="flex md:gap-[30px] items-center">
                <h5 className="font-inter text-[14px] md:text-[16px] font-bold text-[#333333]">
                  MD Sojib Khan
                </h5>
                <div className="w-[62.13px] h-[22px] flex gap-[10px]">
                  <Image
                    src="/ArrowBendDoubleUpLeft.svg"
                    alt=""
                    width={18}
                    height={18}
                  className="md:h-[18px] md:w-[18px] w-[12px] h-[12px]"
                  />
                  <p className="font-inter text-[12px] md:text-[14px]  font-normal text-[#333333]">
                    Reply
                  </p>
                </div>
              </div>
              <div className="w-[129px] h-[24px] flex gap-[10px]">
                <Image
                  src="/CalendarBlank.svg"
                  alt=""
                  width={26}
                  height={24}
                   className="md:w-[26px] md:h-[24px] w-[20px] h-[20px]"
                />
                <p className="font-helvetica text-[12px] md:text-[14px]  font-normal text-[#7A7A7A] whitespace-nowrap">
                  June 22, 2020
                </p>
              </div>
              <p className="text-[12px] md:text-[16px] font-normal font-helvetica text-[#333333] md:leading-[24px] w-[250px] md:w-[746.6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
                hendrerit faucibus sollicitudin.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[300px] md:w-[872px] h-[484px]  relative top-[700px]">
          <h1 className="font-helvetica text-[18px] md:text-[24px] font-bold text-[#333333] text-start">
            Post a comment
          </h1>
          <div className="w-[300px] md:w-[872px] border-b-[1px] border-[#E0E0E0] relative top-[30px]"></div>
          <input
            type="text"
            className="w-[300px] h-[45px] md:w-[424px] md:h-[56px] border-[1px] border-[#E0E0E0]  relative top-[60px] outline-none font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F] px-3"
            placeholder="Name*"
          />
          <input
            type="text"
            className="w-[300px] h-[45px] md:w-[424px] md:h-[56px] border-[1px] border-[#E0E0E0]  relative top-[75px] md:top-[60px] md:left-[25px] outline-none font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F] px-3"
            placeholder="Email*"
          />
          <textarea
            placeholder="Write a comment"
            className="w-[300px] h-[180px] md:w-[872px] md:h-[244px] border-[1px] border-[#E0E0E0] relative top-[95px] md:top-[80px] text-[14px] md:text-[16px]  px-6 py-4 outline-none"
          ></textarea>
          <button className="w-[200px] md:w-[212px] h-[45px] md:h-[56px] relative top-[115px] md:left-0 left-[40px] md:top-[100px] py-[16p] px-[48px] bg-[#FF9F0D] text-white hover:border-[#ff9f0d] hover:bg-white hover:text-[#ff9f0d] hover:border-[1px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer font-normal text-[14px] md:text-[16px] font-helvetica whitespace-nowrap">
            Post a comment
          </button>
        </div>

        <aside className="absolute top-[2750px] md:top-[-5px] left-[30px] md:left-[1000px]">
          <BlogSideBar />
        </aside>
      </section>


 {/* <div className="absolute md:top-[4000px] top-[4260px]">
      <Footer/>
      </div>  */}
    </>
  );
};

export default BlogDetails;
