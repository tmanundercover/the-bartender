export default {
  name: 'selectedWorksAnimated',
  title: 'Selected Works Animated',
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
      name: 'portfolioItems',
      title: 'Portfolio Items',
      type: 'array',
      of: [{type: 'reference', to: {type: 'portfolioItem'}}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



