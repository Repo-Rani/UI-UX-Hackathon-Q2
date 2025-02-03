const tesimonials = {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Profile Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'desc',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'profession',
        type: 'string',
        title: 'Profession',
      },
      {
        name: 'ratingimage',
        type: 'image',
        title: 'Rating Image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
  export default tesimonials;