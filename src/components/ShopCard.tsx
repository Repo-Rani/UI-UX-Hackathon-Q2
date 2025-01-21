"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ShopCardProps } from "../../types/type";
import Pagination from "./Pagination"; 



const fetchProducts = async (): Promise<ShopCardProps[]> => {
  const products = await client.fetch(`
    *[_type=="food"] {
      ratingNum,
      description,
      reviews,
      name,
      text,
      bottomDetail2,
      _id,
      category,
      "imageUrl": image.asset->url, 
      originalPrice,
      discountPrice,
      "ratingUrl": ratingImage.asset->url, 
      sell,
      bottomDetail,
      price
    }
  `);
  return products.map((product: any) => ({
    id: product._id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    discountPrice: product.discountPrice,
    sell: product.sell,
    ratingUrl: product.ratingUrl,
    ratingNum: product.ratingNum,
    reviews: product.reviews,
    text: product.text,
    bottomDetail: product.bottomDetail,
    bottomDetail2: product.bottomDetail2,
  }));
};

const ShopCard: React.FC = () => {
  const [products, setProducts] = useState<ShopCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15; 


  

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list mt-24">
        <div className="absolute left-[10px] ms:left-[20px] sm:left-[45px]  md:left-[20px] xsm:left-[40px] xxxl:left-[300px] xl:left-[30px] lg:left-[20px] xxl:left-[60px] top-[660px] md:top-[650px]  ">
           <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-3 xsm:gap-x-[30px] xsm:gap-y-[75px] ms:gap-x-[25px] gap-x-[10px] gap-y-[65px]  sm:gap-x-[25px] sm:gap-y-[80px] lg:gap-x-[25px] xl:gap-x-[15px] xl:gap-y-[70px] xl:gap-[25px]  ">
      {currentProducts.map((product) => (
        <Link href={`shopDetails/${product.id}`} passHref key={product.id}>
          <div className="w-[150px] xl:w-[312px] h-[160px] xl:h-[330px] lg:h-[235px] sm:w-[150px] md:w-[200px] relative group">
            {/* Image Section */}
            <div className="relative">
              <Image
                src={product.imageUrl} 
                alt={product.name} 
                height={267}
                width={312}
                className="xl:w-[312px] ms:w-[150px] w-[130px] h-[140px] ms:h-[160px] sm:w-[150px] sm:h-[140px] md:w-[200px] xl:h-[267px] object-cover rounded-md"
              />
              {/* Hidden Div */}
              <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black bg-opacity-50">
                <div className="w-[146px] h-[34px] flex justify-between">
                  <div className="bg-[#ffffff] w-[40.1px] h-[34px] rounded-[2px] flex justify-center items-center cursor-pointer">
                    <Image
                      src="/GitDiff.svg"
                      alt="gitdiff-image"
                      height={12.03}
                      width={14.04}
                    />
                  </div>
                  <div className="bg-[#ff9f0d] w-[40.1px] h-[34px] rounded-[2px] flex justify-center items-center cursor-pointer">
                    <Image
                      src="/Tote (1).svg"
                      alt="tote-image"
                      height={12.03}
                      width={14.04}
                    />
                  </div>
                  <div className="bg-[#ffffff] w-[40.1px] h-[34px] rounded-[2px] flex justify-center items-center cursor-pointer">
                    <Image
                      src="/Heart.svg"
                      alt="heart-image"
                      height={12.03}
                      width={14.04}
                    />
                  </div>
                </div>
              </div>

              {/* Sell Badge */}
              {product.sell && (
                <div className="absolute top-[20px] left-[20px] bg-[#ff9f0d] rounded-[6px] w-[40px] h-[18px] md:w-[52px] md:h-[22px] flex items-center justify-center">
                  <span className="font-inter font-normal text-[12px] md:text-[14px] text-[#ffffff]">
                    {product.sell}
                  </span>
                </div>
              )}
            </div>

            {/* Title Section */}
            <h2 className="md:mt-4 mt-2 font-bold text-[14px] sm:text-[16px] xl:text-[18px] text-[#333333] font-inter">
              {product.name} 
            </h2>

            {/* Price Section */}
            <div className="flex justify-between items-center mt-1 xl:mt-2">
              <span className="text-[#FF9F0D] font-medium font-inter text-[14px] sm:text-[16px] xl:text-[18px]">
                ${product.price}.00
              </span>
              {product.discountPrice && (
                <span className="line-through text-[#828282] relative xl:right-[11rem] lg:right-[15rem] right-[1rem] xsm:right-0 font-inter text-[14px] sm:text-[16px] xl:text-[18px]">
                  ${product.discountPrice}.00
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
      </div>
      </div>

      {/* Pagination Section */}
           <div className="absolute xl:top-[2700px] top-[2500px] xl:left-[635px] md:left-[435px] xxl:left-[635px]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      
    </div>
    
  );
};

export default ShopCard;
