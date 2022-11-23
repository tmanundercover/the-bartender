export default {
  name: 'skillsSection',
  title: 'Skills',
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
      name: 'skillsHeading',
      title: 'Skills Heading',
      type: 'string'
    },
    {
      name: 'skillsText',
      title: 'Skills Text',
      type: 'blockContent',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'skill'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



