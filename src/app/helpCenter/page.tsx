import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import Banner from "@/components/banner/Banner";

import Link from "next/link";
const HelpCenter = () => {
  return (
    <>
    <div className="">
    <Banner mainHeading="Our Help Center" name="Help Center" />
    </div>
      <section className="flex justify-center items-center w-full mx-auto h-auto mt-28 lg:mt-44 md:mt-36">
        <div className="flex flex-col justify-center items-center gap-y-[10px]">
          <div className="flex justify-center items-center gap-x-[10px] h-[30px] bg-gray-200 w-[200px] md:w-[250px] rounded-[50px]">
            <div className=" text-black font-helvetica text-[12px] md:text-[14px] whitespace-nowrap ">
            Services for Our Customers
            </div>
            <FaArrowRight className="sm:h-4 sm:w-4 text-[#FF9F0D]" />
          </div>
          <h1 className="uppercase font-helvetica text-[28px] md:text-[42px] text-[#FF9F0D] font-extrabold tracking-wider text-center ">
            Help Center
          </h1>
          <p className="text-center font-helvetica text-[12px] md:text-[14px] md:px-20 font-normal px-7 lg:px-[200px] xl:px-[300px] text-black/50 xxl:text-[16px]">
          Facing an issue? Find quick solutions in our Help Center with FAQs, guides, and support.
          </p>
          <div className="flex justify-center items-center gap-x-[10px] mt-3">
            <button className="bg-[#FF9F0D] text-white w-[120px] h-[30px] rounded-[50px] font-helvetica text-[14px] font-medium flex justify-center items-center transition-all duration-300 hover:bg-white hover:border-[1px] hover:border-black/25 hover:text-[#FF9F0D]">
              Chatbot
            </button>
            <button className="bg-white text-[#FF9F0D] w-[120px] h-[30px] rounded-[50px] font-helvetica text-[14px] font-medium flex justify-center items-center transition-all duration-300 hover:bg-[#FF9F0D] border-[1px] border-black/25 hover:text-white">
              Request Send
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-0 px-5 sm:px-0 md:px-16 lg:px-20 xl:px-11 xxl:px-3 mt-6">
            <div className="w-[250px] h-[250px] border-t-[1px] border-full border-green-500 ">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <AiOutlineFileSearch className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-helvetica text-[20px] font-semibold">
                  User Guide
                </h1>
                <p className="text-left font-normal text-black font-helvetica text-[14px]">
                Effortlessly use our platform with a detailed guide, step-by-step instructions, and helpful tips.
                </p>
                <Link
                  href="/user-guide"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-helvetica hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-[#FF9F0D] h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
            <div className="w-[250px] h-[250px] border-t-[1px] border-full border-yellow-500">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <GoQuestion className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-helvetica text-[20px] font-semibold">
                  FAQs
                </h1>
                <p className="text-left font-normal text-black font-helvetica text-[14px]">
                  Find answers to frequently asked questions about our products,
                  services, and more.
                </p>
                <Link
                  href="/faq"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-helvetica hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-[#FF9F0D] h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
            <div className="w-[250px] h-[250px] border-t-[1px] border-full border-red-500">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <MdOutlineEmail className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-helvetica text-[20px] font-semibold">
                  Contact Us
                </h1>
                <p className="text-left font-normal text-black font-helvetica text-[14px]">
                  Get quick answers to common questions about our products,
                  services, and more.
                </p>
                <Link
                  href="/contact"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-helvetica hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-[#FF9F0D] h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
            <div className="w-[250px] h-[250px]  border-t-[1px] border-full border-purple-500">
              <div className="flex flex-col gap-y-[10px] justify-start py-3 hover:bg-gray-50 transition-all duration-300 cursor-pointer ease-linear">
                <MdOutlineMessage className="h-[30px] w-[30px] text-black/50" />
                <h1 className="text-black font-helvetica text-[20px] font-semibold">
                  Live Chat
                </h1>
                <p className="text-left font-normal text-black font-helvetica text-[14px]">
                  Get instant answers to your questions with our live chat
                  support. Connect with a customer service representative in
                  real-time for quick assistance.
                </p>
                <Link
                  href="#"
                  className="flex justify-between items-center w-full mx-auto "
                >
                  <button className="text-black font-helvetica hover:text-black/80 text-[14px] ">
                    Read More
                  </button>
                  <FaArrowRight className="text-[#FF9F0D] h-[15px] w-[15px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenter;