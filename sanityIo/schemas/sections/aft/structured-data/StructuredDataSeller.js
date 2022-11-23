export default {
  name: 'structuredDataSeller',
  title: 'Structured Data Seller',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      default: 'Organization'
    },
    {
      name: 'name',
      title: 'Name',
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



