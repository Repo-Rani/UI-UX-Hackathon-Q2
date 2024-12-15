import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import Footer from "../components/Footer";
const Login = () => {
  return (
    <>
      <div className="">
        <Banner name="Login" mainHeading="Login page" />
      </div>
      <section className="w-[424px] h-[564px] absolute top-[630px] left-[743px]  shadow-2xl shadow-[#E0E0E0]">
        <h1 className="text-[20px] font-bold font-halvetica relative top-[35px] left-[35px] text-[#333333]">
          Login
        </h1>
        <div className="relative top-[-48px]">
          <div className="w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[117px] left-[35px] border-[#E0E0E0] border-[1px]">
            <Image
              src="/EnvelopeSimple.svg"
              alt=""
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
            <input
              type="text"
              className="border-none outline-none text-[16px] font-normal text-[#4F4F4F] font-halvetica"
              placeholder="Email"
            />
          </div>
          <div className="w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[133px] left-[35px] border-[#E0E0E0] border-[1px]">
            <Image
              src="/Lock.svg"
              alt=""
              width={24}
              height={24}
              className="h-[24px] w-[24px]"
            />
            <input
              type="text"
              className="border-none outline-none text-[16px] font-normal text-[#4F4F4F] font-halvetica"
              placeholder="Passward"
            />
          </div>
          <div className="h-[22px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[153px] left-[35px] whitespace-nowrap">
  <div className="w-[20px] h-[20px] flex items-center justify-center">
    <input
      type="checkbox"
      className="w-[20px] h-[20px] cursor-pointer border border-[#FF9F0D] rounded-sm bg-white checked:bg-[#FF9F0D] checked:border-[#FF9F0D] focus:outline-none  relative"
    />
    <span className="absolute w-[10px] h-[10px] border-white border-2 border-t-0 border-l-0 transform rotate-45 hidden checked:block"></span>
  </div>
  <p className="text-[14px] font-halvetica font-normal text-[#333333]">
    Remember me?
  </p>
</div>
          <button className="relative top-[180px] left-[35px] w-[360px] h-[44px] bg-[#FF9F0D] text-white hover:bg-[#ffffff] hover:text-[#FF9F0D] hover:border-[1px] hover:border-[#FF9F0D] transition-all duration-300 ease-in-out font-halvetica text-[16px] font-normal flex justify-center items-center">
            Login
          </button>
          <p className="text-[14px] font-normal font-halvetica text-[#828282] relative left-[283px] top-[195px]">
            Forget password?
          </p>
          <div className="w-[360px] h-[152px] relative left-[35px] top-[220px] flex justify-between flex-col ">
            <div className="w-[360px] h-[32px] flex justify-center items-center">
              <span className="border-b-[1px] w-[168px] border-[#E0E0E0]"></span>
              <span className="w-[32px] h-[32px] border-[#E0E0E0] border-[1px] text-[14px] font-halvetica font-normal text-[#4F4F4F] flex justify-center items-center">
                OR
              </span>

              <span className="border-b-[1px] w-[168px] border-[#E0E0E0]">
                {" "}
              </span>
            </div>
            <div className="w-[360px] h-[44px] border-[#E0E0E0] border-[1px] flex justify-start gap-[75px] items-center  pl-[14px]">
              <Image
                src="/Google.svg"
                alt=""
                height={24}
                width={24}
                className="h-[24px] w-[24px]"
              />
              <p className="font-normal text-[16px] font-halvetica text-[#4F4F4F] text-center">
                Sign up with Google
              </p>
            </div>
            <div className="w-[360px] h-[44px] border-[#E0E0E0] border-[1px] flex justify-start gap-[75px] items-center  pl-[14px]">
              <Image
                src="/Apple.svg"
                alt=""
                height={24}
                width={24}
                className="h-[24px] w-[24px]"
              />
              <p className="font-normal text-[16px] font-halvetica text-[#4F4F4F] text-center">
                Sign up with Apple
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute top-[1254px]">
        <Footer/>
      </div>
    </>
  );
};

export default Login;
