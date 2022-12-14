export default {
  name: 'Glass',
  title: 'Glass',
  type: 'document',
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
      name: 'sizeOz',
      title: 'Size(Ounces)',
      type: 'number',
    },
    {
      name: 'rim',
      title: 'Rim',
      type: 'string',
    },
    {
      name: 'isIced',
      title: 'Ice?',
      type: 'boolean',
    },
    {
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
