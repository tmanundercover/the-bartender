export default {
  name: 'sourceCode',
  title: 'Source Code',
  type: 'document',
  fields: [
    {
      name: 'filename',
      title: 'Filename',
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
      name: 'repoLink',
      title: 'Repository Link',
      type: 'reference',
      to: {type: 'repository'},
    },
    {
      name: 'theCode',
      title: 'Code',
      type: 'code',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{
        type: 'object',
        fields:[
          {name:'url',type: 'url'},
          {name: 'text', type:'string'}
        ]
      }],
    }
  ],
}
