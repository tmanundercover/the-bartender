export default {
  name: 'ourServicesSection',
  title: 'Our Services',
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
      name: 'serviceList',
      type: 'array',
      of: [{
        name: 'serviceItem',
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'description',
            type: 'text'
          }
        ]
      }]
    }
  ]
}