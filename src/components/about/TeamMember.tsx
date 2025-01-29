import React from "react";
import Image from "next/image";
import TeamMemberCard from "./TeamMemberCard";
const AboutTeamMember = () => {
  return (
    <>
    <section className="flex justify-center items-center w-full">
      <div className="w-full h-[686px] absolute xl:top-[2396px] xsm:top-[2100px] sm:top-[1700px]  md:top-[2100px] top-[1950px]   flex justify-between ">
        <div className="w-full h-[460px] relative flex justify-center">
          <div className="w-full absolute md:h-[460px] h-[300px] bg-[#FF9F0DD9] bg-opacity-85  "></div>
          <Image src="/about6.svg" alt="" height={158.89} width={81.48} className="w-[60px]  md:w-[120.89px] h-[144px] md:h-[288.89px] absolute top-[20px] xsm:top-[-15px] md:top-0 rotate-[36.87]  flex justify-center items-center"/>
      <div className="md:w-[418px] w-[300px] xsm:w-[350px] h-[176px] flex flex-col justify-center items-center z-20 absolute xsm:top-0 top-[40px] md:top-[90px]">
            <h1 className="text-white font-bold font-helvetica text-[24px] md:text-[48px] text-center">
              Team Member
            </h1>
            <p className="text-[12px] md:text-[16px] font-inter text-white font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>
          <div className="flex justify-center items-center xl:mt-0 md:mt-[-100px] mt-[-320px]">
          <Image
            src="/about5.svg"
            alt="food-image"
            height={456}
            width={1919}
            className=" w-full sm:h-[456px] "
          />
          </div>
        </div>
       
       
        <div className="absolute top-[140px]  left-0 w-full h-full flex items-center justify-center">
  <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-[25px] md:gap-0 xl:gap-[25px] gap-[10px]">
    <TeamMemberCard name="Mark Henry" profession="Owner" />
    <TeamMemberCard name="Lucky Helen" profession="Chef" />
    <TeamMemberCard name="Moon Henry" profession="Founder" />
    <TeamMemberCard name="Tom Monrow" profession="Specialist" />
  </div>
</div>
        </div>
        
      </section>
      
    </>
  );
};
 
export default AboutTeamMember;

