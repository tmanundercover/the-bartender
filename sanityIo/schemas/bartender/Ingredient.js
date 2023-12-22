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
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isLiquor',
      title: 'Is this Liquor?',
      type: 'boolean',
    },
    {
      name: 'liquorType',
      title: 'Liquor Type',
      type: 'reference',
      to: [{type: 'LiquorType'}]
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
    {
      name: 'flavor',
      title: 'Flavor',
      type: 'array',
      of: [{type: "string"}],
      description: "Flavors",
      options: {
        list: [
          { title: "Orange", value: "orange" },
          { title: "Coffee", value: "coffee" },
          { title: "Coconut", value: "coconut" },
          { title: "Appertif", value: "appertif" },
          { title: "Apple", value: "apple" },
          { title: "Citrus", value: "citrus" },
          { title: "Lemon", value: "lemon" },
          { title: "Peach", value: "peach" },
          { title: "Strawberry", value: "strawberry" },
          { title: "Melon", value: "melon" },
          { title: "Cinnamon", value: "cinnamon" },
          { title: "Chocolate", value: "chocolate" },
          { title: "Creme", value: "creme" },
          { title: "Honey", value: "honey" },
        ]
      }
    },
  ]
}
