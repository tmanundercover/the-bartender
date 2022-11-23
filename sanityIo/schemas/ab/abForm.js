export default {
    name: 'abForm',
    title: 'Form',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'instructionBlock',
            title: 'Form Instructions',
            type: 'blockContent',
        },
        {
            name: 'abFormType',
            title: 'Form Type',
            type: 'reference',
            to: {type: 'abLeadType'}
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }
    ]
}