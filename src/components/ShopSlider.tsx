import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { shopCardData } from "../../data/data";
import ShopCardsSliders from "./ShopCardsSliders";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopSliders = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    nextArrow: <NextArrow onClick={() => {}}/>,
    prevArrow: <PrevArrow onClick={() => {}}/>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="md:w-full md:left-0 left-[35px]  w-[300px] max-w-[1320px] mx-auto">
      <Slider {...settings}>
        {shopCardData.map((el) => (
          <ShopCardsSliders
            key={el.id}
            id={el.id}
            image={el.image}
            title={el.title}
            price={el.price}
            discountPrice={el.discountPrice}
            sell={el.sell}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ShopSliders;
