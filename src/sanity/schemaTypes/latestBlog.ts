const latestBlog ={
    name: "latestBlog",
    type: "document",
    title: "Latest Blog",
    fields: [
      {
        name: "image",
        type: "image",
        title: "Image",
        description: "Main image for the blog post",
        options: {
          hotspot: true,
        },
      },
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "The title of the blog post",
      },
      {
        name: "date",
        type: "string",
        title: "Date",
        description: "Date when the blog post was published",
      },
    ],
  };
  
  export default latestBlog;