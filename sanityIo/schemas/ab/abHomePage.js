export default {
  name: 'abHomePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'reference',
      to: {type: 'heroImageWithText'},
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent'
    },
    {
      name: 'specializationsMenuGroup',
      title: 'Specializations Menu',
      type: 'reference',
      to: {type: 'menuGroup'},
    },
    {
      name: 'weWorkWithSection',
      title: 'We Work With',
      type: 'weWorkWith'
    },
    {
      name: 'ourServicesSection',
      title: 'Our Services',
      type: 'ourServicesSection'
    },
    {
      name: 'solutions',
      title: 'Solutions',
      type: 'solutions'
    }
  ]
}