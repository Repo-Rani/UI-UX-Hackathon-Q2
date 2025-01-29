import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SliderShopCardProps } from '../../../types/type';
const ShopCardsSliders = ({id,  image, title, price, discountPrice, sell }: SliderShopCardProps) => {
  return (

    <Link href={`${id}`} passHref>

    <div className="w-[250px] ms:w-[300px] h-[240px] md:w-[170px] md:h-[145px] lg:w-[240px] lg:h-[230px] xl:w-[312px] xl:h-[350px] relative group">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt="shop-food"
          height={267}
          width={312}
          className="w-[300px] h-[240px] md:w-[170px] md:h-[145px] lg:w-[240px] lg:h-[230px] xl:w-[312px] xl:h-[267px] object-cover rounded-md"
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
        {sell && (
          <div className="absolute top-[20px] left-[20px] bg-[#ff9f0d] rounded-[6px] w-[52px] h-[22px] flex items-center justify-center">
            <span className="font-inter font-normal text-[14px] text-[#ffffff]">{sell}</span>
          </div>
        )}
      </div>

      {/* Title Section */}
      <h2 className="mt-4 font-bold text-[18px] text-[#333333] font-inter">{title}</h2>
      
      {/* Price Section */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#FF9F0D] font-medium font-inter">{price}</span>
        {discountPrice && (
          <span className="line-through text-[#828282] font-inter relative right-[12rem]">{discountPrice}</span>
        )}
      </div>
    </div>
    </Link>
  );
};

export default ShopCardsSliders
