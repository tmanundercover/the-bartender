export default {
    name: 'latestNews',
    title: 'Latest News Articles',
    type: 'document',
    fields: [
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
            name: 'articleTitle',
            title: 'Article Title',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime'
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}