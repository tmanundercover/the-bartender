export default {
  name: 'modernServicesSection',
  title: 'Services Animate as user Interacts',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'services',
      title: 'Modern Services',
      type: 'array',
      of: [{type: 'modernService'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



