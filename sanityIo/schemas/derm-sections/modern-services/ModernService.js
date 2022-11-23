export default {
  name: 'modernService',
  title: 'Describe a service a biz provides',
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
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'menuItem'}],
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    }
  },
}



