export default {
  name: 'BarInventory',
  title: 'Bar Inventory',
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
      name: 'theBar',
      title: 'Bar has...',
      type: "array",
      of: [{type: "reference", to:[{type:'Garnish',},{type:'Ingredient',}]}]
    },
  ],
}
