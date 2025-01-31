import React from "react";

import Clients from "./Client";
import OurMenu from "./OurMenu";
import OurChef from "./HeroOurChef";
import LatestBlogItems from "./LatestBlogItems";
// import LandingFooter from "../footer/LandingFooter";
import Testimonial from "./Testimonial";
import HeroAboutUs from "./HeroAboutUs";
import HeroFoodCategory from "./HeroFoodCategory";
import HeroResturant from "./HeroResturant";
import WhyChooseUs from "./WhyChooseUs";
import HeroBanner from "./HeroBanner";

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

      <LatestBlogItems />

      {/* <div className="relative md:top-[7759px] top-[7500px]">
        <LandingFooter />
      </div>  */}
    </>
  );
};

export default HeaderHero;
