import React from 'react'
import { blogCardData } from '../../../data/data'
import BlogCard from './BlogCard'

const BlogCardList = () => {
  return (
 <section className='absolute top-[530px] left-[300px]'>
    <div className="grid grid-cols-1  gap-[40px]   ">
    {blogCardData.map((item, index) => (
    <BlogCard
      key={index}
      image={item.image}
      title={item.title}
      
     
      
    />
  ))}
    </div>
 </section>
  )
}

export default BlogCardList