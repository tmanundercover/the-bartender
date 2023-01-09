export default {
    name: 'LiquorType',
    title: 'Liquor Type',
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
            type: 'text',
        },
        {
            name: 'type',
            title: 'Liquor type',
            type: 'array',
            of: [{type: "string"}],
            description: "Liquor Type",
            options: {
                list: [
                    { title: "No Alcohol", value: "noalcohol" },
                    { title: "Wine", value: "wine" },
                    { title: "Beer", value: "beer" },
                    { title: "Cordial", value: "cordial" },
                    { title: "Vodka", value: "vodka" },
                    { title: "Gin", value: "gin" },
                    { title: "Rum", value: "rum" },
                    { title: "Tequila", value: "tequila" },
                    { title: "Cognac", value: "cognac" },
                    { title: "Other", value: "other" },
                    { title: "Whiskey", value: "whiskey" },
                    { title: "Bourbon", value: "bourbon" },
                    { title: "Vermouth", value: "vermouth" },
                    { title: "Brandy", value: "brandy" },
                ]
            }
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
            name: 'proof',
            title: 'Proof',
            type: 'number',
        },
    ],
}
