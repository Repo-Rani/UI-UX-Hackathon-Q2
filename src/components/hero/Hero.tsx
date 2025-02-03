import React from "react";

import Clients from "./Client";
import OurMenu from "./OurMenu";
import OurChef from "./HeroOurChef";
import Testimonial from "./Testimonial";
import HeroAboutUs from "./HeroAboutUs";
import HeroFoodCategory from "./HeroFoodCategory";
import HeroResturant from "./HeroResturant";
import WhyChooseUs from "./WhyChooseUs";
import HeroBanner from "./HeroBanner";
import LatestBlog from "./LatestBlog";

const HeaderHero = () => {
  return (
    <>
      <HeroBanner />

      <HeroAboutUs />

      <HeroFoodCategory />

      <WhyChooseUs />

      <Clients />

      <OurMenu />

      <OurChef />

      <Testimonial />

      <HeroResturant />

      < LatestBlog/>

      
    </>
  );
};

export default HeaderHero;
