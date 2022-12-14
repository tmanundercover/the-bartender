export default {
  name: 'Ingredient',
  title: 'Ingredient',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    // isLiquor: boolean,
    // isCordial: boolean,
    // isJuice: boolean
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
      name: 'product',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'isLiquor',
      title: 'Is this Liquor?',
      type: 'boolean',
    },
    {
      name: 'isJuice',
      title: 'Is this Juice?',
      type: 'boolean',
    },
    {
      name: 'isCordial',
      title: 'Is this a Cordial?',
      type: 'boolean',
    },

  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
