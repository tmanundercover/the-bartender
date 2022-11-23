export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string'
        },
        {
            name: 'url',
            title: 'URL: (ex: /hello/factors21)',
            type: 'string'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'welcomeMessage',
            title: 'Welcome Message',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'url',
                maxLength: 96,
            },
        },
        {
            name: 'headerText',
            title: 'ThwHeader Text',
            type: 'string'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'string',
        },
        {
            name: 'abForm',
            title: 'Form Type',
            type: 'reference',
            to: {type: 'abForm'},
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
    ]
}