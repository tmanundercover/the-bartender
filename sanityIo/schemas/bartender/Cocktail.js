import BartenderTheme from "../../../src/theme/transform-hw/BartenderTheme";

export default {
    name: 'Cocktail',
    title: 'Cocktail',
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
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'glassPrep',
            title: 'Glass Prep',
            type: 'array',
            of: [{type: "string"}],
            description: "Glass Prep",
            options: {
                list: [
                    { title: "Ice", value: "ICE" },
                    { title: "Strawberry Ice Cubes", value: "STRAWBERRY_ICE" },
                    { title: "Chilled", value: "CHILLED" },
                    { title: "Red Sugar rim", value: "RED_SUGAR_RIM" },
                    { title: "Green Sugar rim", value: "GREEN_SUGAR_RIM" },
                    { title: "Chili Salt rim", value: "CHILI_SALT_RIM" },
                    { title: "Sugar rim", value: "SUGAR_RIM" },
                    { title: "Salt rim", value: "SALT_RIM" },
                    { title: "Caramel Stripes", value: "CARAMEL_STRIPE" },
                    { title: "Chocolate Stripes", value: "CHOC_STRIPE" },
                ]
            }
        },
        {
            name: 'glass',
            title: 'Glassware',
            type: 'reference',
            to: [{type: 'Glass',}]

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
            name: 'garnish',
            title: 'Garnish',
            type: 'array',
            of: [{type: "reference", to: [{type: "Garnish"}]}],
        },
        {
            name: 'mixingGlass',
            title: 'Mixing Glass',
            type: "array",
            of: [{type: 'MixingGlass',}, {type: "reference", to:[{type:'Garnish',}]}]
        },
        {
            name: 'instructions',
            title: 'Instructions',
            type: 'array',
            of: [{type: "reference", to: [{type: "Instruction"}]}]
        },
        {
            name: 'drinkCount',
            title: 'Drink Count',
            type: 'number',
        },
        {
            name: 'isOnMenu',
            title: 'Is this on the Menu?',
            type: 'boolean',
        },
    ],
}
