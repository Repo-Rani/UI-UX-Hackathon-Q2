 const heroMenusCards ={
    name: 'heroMenuCards',
    title: 'Hero Menu Cards',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'desc',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string'
      }
    ]
  };
  
  export default heroMenusCards;