export default {
  name: 'heroImageNameCareer',
  title: 'Hero Image with Name and Career',
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
      name: 'clientName',
      title: 'Your Full Name',
      type: 'string'
    },
    {
      name: 'occupation',
      title: 'Your Occupation',
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'A Picture of you',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



