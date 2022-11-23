export default {
  name: 'blogPostSection',
  title: 'Blog Posts',
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
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



