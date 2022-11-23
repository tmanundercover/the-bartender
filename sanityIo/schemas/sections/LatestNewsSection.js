export default {
  name: 'latestNewsSection',
  title: 'Latest News Articles',
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
      name: 'latestNews',
      title: 'Latest News Articles',
      type: 'array',
      of: [{type: 'reference', to: {type: 'latestNews'}}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



