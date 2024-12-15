import React from "react";
import Image from "next/image";
import TeamMemberCard from "./TeamMemberCard";
const AboutTeamMember = () => {
  return (
    <>
      <section className="w-[1920px] h-[686px] absolute top-[2396px]  flex justify-between ">
        <div className="w-[1920px] h-[460px] relative">
          <div className="w-[1920px] absolute h-[460px] bg-[#FF9F0DD9] bg-opacity-85 "></div>
          <Image src="/about6.svg" alt="" height={158.89} width={81.48} className="w-[120.89px] h-[288.89px] absolute rotate-[36.87]  left-[900.33px]"/>
          <div className="w-[418px] h-[176px] flex flex-col z-20 absolute left-[760px] top-[90px]">
            <h1 className="text-white font-bold font-roboto text-[48px] text-center">
              Team Member
            </h1>
            <p className="text-[16px] font-inter text-white font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>
          <Image
            src="/about5.svg"
            alt="food-image"
            height={456}
            width={1919}
            className="w-[1919px] h-[456px]"
          />
        </div>
        <div className="absolute top-[260px] left-[300px] grid grid-cols-4 gap-[25px]">
        <TeamMemberCard name="Mark Henry" profession="Owner"/>
        <TeamMemberCard name="Lucky Helen" profession="Chef"/>
        <TeamMemberCard name="Moon Henry" profession="Founder"/>
        <TeamMemberCard name="Tom Monrow" profession="Specialist"/>
        </div>
      </section>
    </>
  );
};

export default AboutTeamMember;

