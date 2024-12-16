import React from 'react'
import Image from 'next/image'

const WhyChooseMe = () => {
  return (
    <div className='w-[1320px] h-[716px]  overflow-hidden'>
        <div>
            <Image src="/ci1.svg" alt="food-image" height={356} width={362} className='rounded-[6px]'/>
            <Image src="/ci2.svg" alt="food-image" height={231} width={281} className='rounded-[6px] relative left-[373px] bottom-[234px]'/>
            <Image src="/ci3.svg" alt="food-image" height={306} width={244} className='rounded-[6px] relative bottom-[220px] '/>
            <Image src="/ci4.svg" alt="food-image" height={226} width={221} className='rounded-[6px] relative  left-[254px] bottom-[525px] '/>
            <Image src="/ci5.svg" alt="food-image" height={168} width={161} className='rounded-[6px] relative  left-[485px] bottom-[750px] '/>
            <Image src="/ci6.svg" alt="food-image" height={166} width={161} className='rounded-[6px] relative  left-[485px] bottom-[738px] '/>
            </div>

         <div>
                <span className='w-[175px] h-[40px] font-greatvibes font-normal text-[32px] text-[#ff9f0d] absolute left-[800px] bottom-[675px] whitespace-nowrap'>Why Choose Us</span>
                <h2 className=' relative left-[800px] bottom-[1400px] font-helvetica font-bold text-[48px] text-[#ffffff] '><span className='text-[#ff9f0d]'>Ex</span>tra ordinary taste
                <br />And Experienced </h2>
                <p className='w-[526px] h-[120px] relative left-[800px] bottom-[1360px] font-inter font-normal text-[16px] leading-[24px] text-[#ffffff]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br />consequat.</p>

                <div className='w-[374px] h-[135px] rounded-[6px] relative left-[800px] bottom-[1320px]  flex items-center justify-center gap-[30px]'>
                <div className="flex flex-col   gap-[15px]">
          <div className="w-[102px] h-[100px] rounded-[6px] flex justify-center items-center bg-[#FF9F0D]">
            <Image
              src="/Hamburger.svg"
              alt="food-icon"
              width={50}
              height={50}
            />

            
          </div>
          <span className="font-inter font-normal text-[18px] leading-[26px] whitespace-nowrap text-[#ffffff] ml-3">
              Fast Food
            </span>
        </div>
        <div className="flex flex-col  gap-[15px]">
          <div className="w-[102px] h-[100px] rounded-[6px] flex justify-center items-center bg-[#FF9F0D]">
            <Image src="/Cookie.svg" alt="food-icon" width={50} height={50} />

            
          </div>
          <span className="font-inter font-normal text-[18px] leading-[26px] text-[#ffffff] ml-5">
              Lunch
            </span>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div className="w-[102px] h-[100px] rounded-[6px] flex justify-center items-center bg-[#FF9F0D]">
            <Image src="/Wine.svg" alt="food-icon" width={50} height={50} />

           
          </div>

          <span className="font-inter font-normal text-[18px] leading-[26px] text-[#ffffff] ml-5">
              Dinner
            </span>
        </div>
      </div>
     
      </div>   

      <div className='w-[374px] h-[93px] rounded-[6px] relative left-[800px] bottom-[1290px] bg-[#FF9F0D]'>
        <div className="w-[374px] h-[93px] rounded-[6px] bg-[#ffffff] ml-[10px]">
          <div className="flex items-center justify-center gap-[75px] text-center pt-[20px]">
            <span className="font-helvetica text-bold text-[48px] leading-[56px] text-[#FF9F0D]">
              30+
            </span>
            <div className="flex flex-col items-centergap-[2px]">
              <span className="font-inter font-normal text-[20px] leading-[28px] text-[#1e1e1e]">
                Years of
              </span>
              <span className="font-helvetica text-[24px] font-bold text-[#1e1e1e] leading-[20px]">
                Experience
              </span>
            </div>
          </div>
        </div>
      </div>  
                
    </div>
  )
}

export default WhyChooseMe