import React from "react";
import Image from "next/image";
import { TeamMemberCardsPropsTypes } from "../../../types/type";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamMemberCard = ({ name, profession }: TeamMemberCardsPropsTypes) => {
  return (
    <>
      <div className="relative w-[312px] h-[398px] flex flex-col justify-between group">
        {/* Card Image */}
        <Image
          src="/aboutteam.svg"
          alt=""
          height={398}
          width={312}
          className="h-[398px] w-[312px]"
        />

        {/* Card Details */}
        <div className="w-[312px] h-[88px] py-3 flex justify-between flex-col shadow-xl shadow-[#CDCDCD40]">
          <h1 className="font-bold text-[20px] font-roboto text-[#4F4F4F] text-center">
            {name}
          </h1>
          <p className="text-[16px] font-roboto font-normal text-[#BDBDBD] text-center">
            {profession}
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="absolute top-0 right-[-50px] w-[37px] h-[176px] rounded-[2px] flex flex-col justify-between opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-in-out">
          <div className="w-[36px] h-[35px] rounded-[2px] bg-[#f2f2f2] hover:bg-[#ff9f0d] flex items-center justify-center">
            <FaFacebookF className="w-[10px] h-[18px] text-[#4f4f4f] hover:text-[#f2f2f2] scale-105 transition-all duration-300 ease-in-out"/>
          </div>
          <div className="w-[36px] h-[35px] rounded-[2px] bg-[#f2f2f2] hover:bg-[#ff9f0d] flex items-center justify-center">
            <FaTwitter className="w-[10px] h-[18px] text-[#4f4f4f] hover:text-[#f2f2f2] scale-105 transition-all duration-300 ease-in-out" />
          </div>
          <div className="w-[36px] h-[35px] rounded-[2px] bg-[#F2f2f2] hover:bg-[#ff9f0d] flex items-center justify-center">
            <FaYoutube className="w-[10px] h-[18px] text-[#4f4f4f] hover:text-[#f2f2f2] scale-105 transition-all duration-300 ease-in-out" />
          </div>
          <div className="w-[36px] h-[35px] rounded-[2px] bg-[#f2f2f2] hover:bg-[#ff9f0d] flex items-center justify-center">
            <FaPinterest className="w-[10px] h-[18px] text-[#4f4f4f] hover:text-[#f2f2f2] scale-105 transition-all duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
