export default {
  name: 'aftHomePage',
  title: 'Home Page',
  type: 'document',
  fields: [
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
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'metaImage',
      title: 'An Image for the meta tags',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pageContent',
      title: 'Page Content',
      type: 'contentContainer'
    }
  ]
}