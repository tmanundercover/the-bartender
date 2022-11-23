export default {
    name: 'menuGroup',
    title: 'Menu Group',
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
            name: 'menuGroupTitle',
            title: 'Menu Group Title',
            type: 'string',
        },
        {
            name: 'logoImage',
            title: 'Logo image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{type: 'reference', to: {type: 'menuItem'}}],
        }
    ]
}