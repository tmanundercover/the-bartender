export default {
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'displayedTitle',
      title: 'Displayed Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of:[{type:'image'}]
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'text'
    }
  ],
}
