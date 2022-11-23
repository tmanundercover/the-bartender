export default {
  name: 'weWorkWith',
  title: 'We Work With',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'sectionHeader',
      title: 'Header',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'contentContainer'
    },
    {
      name: 'companyPartnerLogos',
      title: 'Company Partner Logos',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}