export default {
  name: "blogPost",
  type: "document",
  title: "Blog Post",
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
      name: "id",
      type: "string",
      title: "ID",
      description: "Unique ID for the blog post",
      options: {
        isUnique: true,
      },
    },
    {
      name: "detail1",
      type: "text",
      title: "Detail 1",
      description: "First detailed description of the blog post",
    },
    {
      name: "detail2",
      type: "text",
      title: "Detail 2",
      description: "Second detailed description of the blog post",
    },
    {
      name: "paragraph1",
      type: "text",
      title: "Paragraph 1",
      description: "First paragraph of the blog post",
    },
    {
      name: "paragraph2",
      type: "text",
      title: "Paragraph 2",
      description: "Second paragraph of the blog post",
    },
    {
      name: "paragraph3",
      type: "text",
      title: "Paragraph 3",
      description: "Third paragraph of the blog post",
    },
    {
      name: "paragraph4",
      type: "text",
      title: "Paragraph 4",
      description: "Fourth paragraph of the blog post",
    },
    {
      name: "paragraph5",
      type: "text",
      title: "Paragraph 5",
      description: "Fifth paragraph of the blog post",
    },
  ],
};
