export default {
  name: 'solutions',
  title: 'Solutions',
  type: 'object',
  fields: [
    {
      name: 'sectionHeader',
      title: 'Header',
      type: 'blockContent'
    },
    {
      name: 'solutionList',
      type: 'array',
      of: [{
        name: 'solutionItem',
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