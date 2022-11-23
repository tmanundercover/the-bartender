export default {
  name: 'structuredDataEvent',
  title: 'Structured Data Event',
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
      type: 'string',
      default: "http://schema.org"
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      default: "Product"
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Name',
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
      name: 'otherFields',
      title: 'Any other Fields needed for this event type',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon'
    }
  }
}



