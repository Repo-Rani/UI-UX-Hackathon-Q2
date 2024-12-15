// "use client";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // Import useParams from React Router
// import { blogCardData } from "../../../../data/data";

// const BlogDetails = () => {
//   const [mounted, setMounted] = useState(false);
//   const { id } = useParams(); 

//   useEffect(() => {
//     setMounted(true); 
//   }, []);

//   if (!mounted) {
//     return null; 
//   }

   
//   const blog = blogCardData.find((item) => item.id === id); // Ensure ID comparison works as expected

//   if (!blog) {
//     return <div>Blog not found</div>; // In case the blog is not found
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">{blog.title}</h1>
//       <img src={blog.image} alt={blog.title} className="my-4" />
//       <p>{blog.details}</p>
//     </div>
//   );
// };

// export default BlogDetails;