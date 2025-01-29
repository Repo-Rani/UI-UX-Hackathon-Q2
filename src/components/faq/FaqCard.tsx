"use client";
import React from "react";
import Image from "next/image";
import { FaqProps } from "../../../types/type";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

const fetchfaq = async (): Promise<FaqProps[]> => {
  const faqData = await client.fetch(`
    *[_type == "faq"]{
    _id,
    question,
    answer
  }
  `);

  return faqData.map((faq: FaqProps) => ({
    _id: faq._id,
    question: faq.question,
    answer: faq.answer,
  }));
};

const FaqCard = () => {
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({}); 
  const toggleFaq = (id: string) => {
    setOpenFaqs((prevState) => ({
      ...prevState,
      [id]: !prevState[id], 
    }));
  };

  const [faq, setFaq] = useState<FaqProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFaq = async () => {
      try {
        const data = await fetchfaq();
        setFaq(data);
      } catch (error) {
        console.error("Error fetching Faq:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFaq();
  }, []);

  if (loading) {
    return <p className="text-center">Loading Faq Data...</p>;
  }
  return (
    <>
    
    <div className="flex justify-center items-center w-full ">
    
    <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-[35px] gap-[20px] ">
          {faq.map((faqItem) => (
            <div key={faqItem._id}>
              <div
                className={`flex flex-col  justify-center gap-[10px] md:gap-[10px] bg-[#FAF7F2] transition-all duration-300 w-[300px]  sm:w-[550px] md:w-[648px] ${
                  openFaqs[faqItem._id] ? "min-h-[120px]" : "min-h-[60px]"
                }`}
              >
                <div className="flex justify-between">
                  <p className="w-[150px] md:w-[305px] h-[26px] font-inter font-bold text-[14px] md:text-[18px] text-[#333333] whitespace-nowrap relative left-[5px] md:left-[20px]">
                    {faqItem.question}
                  </p>
                  <Image
                    src={openFaqs[faqItem._id] ? "/Minus.svg" : "/Plus.svg"}
                    alt="toggle-icons"
                    height={24}
                    width={24}
                    onClick={() => toggleFaq(faqItem._id)}
                    className="md:w-[24px] md:h-[24px] w-[18px] h-[18px] relative right-2 "
                  />
                </div>
                {openFaqs[faqItem._id] && (
                  <p className="w-[300px] md:w-[600px] font-inter font-normal  md:h-[72px] text-[12px] md:text-[16px] text-[#4f4f4f] relative left-[5px] md:left-[20px]">
                    {faqItem.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

</div>
    
    </>
  );
};

export default FaqCard;
