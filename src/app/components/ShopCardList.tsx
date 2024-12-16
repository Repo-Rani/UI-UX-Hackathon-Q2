"use client"
import React from 'react';
import { shopCardData } from '../../../data/data';
import ShopCard from './ShopCard';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const ShopCardList = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }, []);

  return (
    <section>
    <div className="absolute left-[100px] md:left-[300px] top-[650px]  ">
    <div className="grid grid-cols-3  gap-x-[350px] gap-y-[30px] md:gap-[25px]  ">
    {shopCardData.map((item) => (
    <ShopCard
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        discountPrice={item.disccountPrice || ''}
        sell={item.sell || ''}
        des={item.des}
        ratingImage={item.ratingImage}
        raingNum={item.ratingNum}
        reviews={item.reviews}
        text={item.text}
        bottomDetail={item.bottomDetail}
        bottomDetail2={item.bottomDetail2}
    />
))}
</div>
</div>

</section>
  );
};

export default ShopCardList;






