export default {
    name: 'abLeadType',
    title: 'Lead Type',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Lead Type',
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
        }
    ]
}