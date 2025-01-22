import React from "react";
import { latestBlogData } from "../../data/data";
import LatestBlog from "./LatestBlog";
const LatestBlogItems = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-center md:gap-0 gap-[80px] md:w-[1320px] w-[300px] relative top-[40px] md:right-0 right-[30px]">
      {latestBlogData.map((item, index) => (
        <LatestBlog
          key={index}
          image={item.image}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default LatestBlogItems;
