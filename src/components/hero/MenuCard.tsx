"use client";
import React, { useState, useEffect } from "react";

import Image from 'next/image'
import { MenuCardProps } from '../../../types/type'
import { client } from "@/sanity/lib/client";


const fetchProducts = async (): Promise<MenuCardProps[]> => {
  const products = await client.fetch(`
   *[_type == "heroMenuCards"]{
  _id,
  name,
  desc,
  price,
  "imageUrl": image.asset->url, 
    }
  `);
  return products.map((product:any) => ({
    id: product._id,
    name: product.name,
    desc: product.desc,
    price: product.price,
    imageUrl: product.imageUrl
    
  }));
};

const MenuCard: React.FC = () => {
  const [products, setProducts] = useState<MenuCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  


  

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Fetched products:", data); 
        setProducts(data);
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
           
           
    <div className=''>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-[130px] lg:gap-x-[280px] xlg:gap-x-[130px] ">
      {
        products.map((product) => (
          <div   key={product.id}  className=" ">
<div  className="w-[250px] xsm:w-[300px] sm:w-[376px] md:w-[300px] xlg:w-[376px] h-[79px] flex xlg:justify-between justify-center gap-[15px] sm:gap-[30] xlg:gap-0  relative left-[25px] sm:left-0 md:left-[-100px]  xlg:left-0 ">
<Image src={product.imageUrl} alt={product.name}
            height={79} width={80} className='w-[80px] h-[79px] md:w-[65px] md:h-[60px] lg:w-[80px] lg:h-[79px] rounded-[6px]'/>
            <div className='flex flex-col justify-between '>
                <h3 className='sm:w-[154px]  sm:h-[28px] font-inter font-bold lg:text-[20px] text-[16px] text-[#ffffff] whitespace-nowrap '>{product.name}</h3>
           < p className='sm:w-[287px] md:w-[150px] lg:w-[220px] xlg:w-[287px] sm:h-[22px] font-inter font-normal lg:text-[14px] text-[10px] xl:whitespace-nowrap text-[#ffffff] '>{product.desc}</p>  
           <span className='sm:w-[49px] sm:h-[26px] lg:w-[49px] font-inter font-bold lg:text-[18px] text-[12px] md:mt-4 xl:mt-0 text-[#ff9f0d]'>{product.price}</span>                                                                            
            </div>
</div>


        </div>
  
          
        ))
      }
    </div>
    </div>
  )
}

export default MenuCard;