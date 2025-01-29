'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ChefsProps } from "../../../types/type";
import { urlFor } from "@/sanity/lib/image";

const fetchChefs = async (): Promise<ChefsProps[]> => {
  const ChefsData = await client.fetch(`
    *[_type == "chef"]{
      name,
      position,
      experience,
      specialty,
      description,
      available,
      "image": image.asset->url,
    }
  `);

  return ChefsData.map((chef: ChefsProps) => ({
    name: chef.name,
    position: chef.position,
    experience: chef.experience,
    specialty: chef.specialty,
    image: urlFor(chef.image).url(),
    description: chef.description,
  }));
};

const ChefCards = () => {
  const [chefs, setChefs] = useState<ChefsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChefs = async () => {
      try {
        const data = await fetchChefs();
        setChefs(data);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadChefs();
  }, []);

  if (loading) {
    return <p className="text-center">Loading Chefs Data...</p>;
  }

  return (
    <>
<div className="flex justify-center items-center w-full">
    <div className="grid grid-cols-2 xsm:grid-cols-3 xl:grid-cols-4 gap-4 relative  lg:gap-[1rem] xxl:gap-16">
      {chefs.map((chef) => (
        <div
          key={chef.name}
          className="w-[150px] xsm:w-[120px] md:w-[200px] sm:w-[175px] lg:w-[312px] lg:h-[446px] flex flex-col justify-between items-center"
        >
          <Image
            src={chef.image}
            alt={chef.name}
            width={312}
            height={379}
            className="w-[175px] h-[175px] lg:w-[312px] lg:h-[379px]  rounded-[6px] bg-[#F8F8F8]"
          />
          <h2 className="w-[134px] h-[28px] font-inter font-bold text-[14px] md:text-[20px] text-[#333333] text-center mt-3 whitespace-nowrap">
            {chef.name}
          </h2>
          <span className="font-inter font-normal text-[12px] md:text-[18px] text-[#333333] text-center">
            {chef.position}
          </span>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default ChefCards;
