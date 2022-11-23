export default {
  name: 'contactUs',
  title: 'Contact',
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
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'facebook',
      title: 'Facebook Handle',
      type: 'string'
    },
    {
      name: 'twitter',
      title: 'Twitter Handle',
      type: 'string'
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn Handle',
      type: 'string'
    },
    {
      name: 'youtube',
      title: 'Youtube Handle',
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



