
 const menuSchema = {
    name: 'menuCard',
    title: 'Menu Card', 
    type: 'document', 
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'string', 
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', 
        options: {
          hotspot: true, 
        },
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string', 
      },
      {
        name: 'desc',
        title: 'Description',
        type: 'text', 
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string', 
      },
    ],
  };
  
  export default menuSchema;