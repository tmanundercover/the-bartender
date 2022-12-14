export default {
  name: 'Instruction',
  title: 'Instruction',
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
      name: 'tool',
      title: 'Tool',
      type: 'string',
    },
    {
      name: 'action',
      title: 'Action',
      type: 'string',
    },
    {
      name: 'instruction',
      title: 'Instruction',
      type: 'string',
    },
    {
      name: 'mixingGlass',
      title: 'Ingredients 1',
      type: "array",
      of: [{type: 'MixingGlass',}, {type: "reference", to:[{type:'Garnish',}]}]
    },
  ],
}
