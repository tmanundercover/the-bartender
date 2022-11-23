export default {
  name: 'design',
  title: 'Design',
  type: 'document',
  fields: [
    {
      name: 'imageSrc',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'basePrice',
      title: 'Base Price',
      type: 'number'
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
    },
  ],
};
