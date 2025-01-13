import React from "react";
import { blogCardData } from "../../../data/data";
import BlogCard from "./BlogCard";

const BlogCardList = () => {
  return (
    <section className="absolute top-[500px] left-[300px] md:top-[530px] md:left-[300px] xl:left-[70px] xxl:left-[300px]">
      <div className="grid grid-cols-1 gap-[20px] md:gap-[40px]">
        {blogCardData.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id} 
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogCardList;