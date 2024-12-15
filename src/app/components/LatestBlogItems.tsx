import React from "react";
import { latestBlogData } from "../../../data/data";
import LatestBlog from "./LatestBlog";
const LatestBlogItems = () => {
  return (
    <div className="flex justify-between w-[1320px] relative top-[40px]">
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
