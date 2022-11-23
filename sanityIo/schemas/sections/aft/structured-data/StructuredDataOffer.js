export default {
  name: 'structuredDataOffer',
  title: 'Structured Data Offer',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      default: 'Offer'
    },
    {
      name: 'priceCurrency',
      title: 'Currency',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string'
    },
    {
      name: 'seller',
      title: 'Seller',
      type: 'structuredDataSeller'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    }
  }
}



