export default {
  name: 'aboutMe',
  title: 'About Me Image and Copy',
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
      name: 'aboutMeBody',
      title: 'About Me Body',
      type: 'blockContent',
    },
    {
      name: 'profileImage',
      title: 'About Me Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



