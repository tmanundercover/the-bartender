export default {
  name: 'whySwitchReason',
  title: 'Why Switch Reason',
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
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'iconAltText',
      title: 'Icon Alt Text',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
    },
  },
}



