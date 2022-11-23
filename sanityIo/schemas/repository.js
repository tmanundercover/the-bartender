export default {
  name: 'repository',
  title: 'Repository',
  type: 'document',
  fields: [
    {
      name: 'service',
      title: 'Repository Service',
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
      type: 'url'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }
  ],
}
