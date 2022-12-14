export default {
    name: 'MixingGlass',
    title: 'Mixing Glass',
    type: 'document',
    fields: [
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
        },
        {
            name: 'ingredient',
            title: 'Ingredient',
            type: "reference",
            to: [{type: "Ingredient"}]
        },
    ],
    preview: {
        select: {
            title: 'ingredient.name',
        },
    },
}
