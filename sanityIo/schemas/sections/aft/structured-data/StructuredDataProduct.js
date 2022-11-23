export default {
  name: 'structuredDataProduct',
  title: 'Structured Data Product',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'context',
      title: 'Context',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'offers',
      title: 'Offers',
      type: 'structuredDataOffer'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon'
    }
  }
}



