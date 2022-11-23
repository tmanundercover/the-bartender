export default {
  name: 'bookMe',
  title: 'Book me Prompt',
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
      name: 'freelancePrompt',
      title: 'Freelance Prompt text',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



