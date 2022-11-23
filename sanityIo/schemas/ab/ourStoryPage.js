export default {
  name: 'ourStoryPage',
  title: 'Our Story Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
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
      name: 'titleText',
      title: 'Title Text',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'gradient',
      title: 'Gradient',
      type: 'gradient',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
    },
    {
      name: 'storyStartTitle',
      title: 'Story Start - Title',
      type: 'blockContent',
    },
    {
      name: 'storyStartLeft1',
      title: 'Story Start - Left row 1',
      type: 'string',
    },
    {
      name: 'storyStartLeft2',
      title: 'Story Start - Left row 2',
      type: 'string',
    },
    {
      name: 'storyStartLeft3',
      title: 'Story Start - Left row 3',
      type: 'string',
    },
    {
      name: 'storyStartRightImage',
      title: 'Story Start - Right Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'brandQuotesTitle',
      title: 'Brand Quotes - Title',
      type: 'blockContent',
    },
    {
      name: 'brandQuotesList',
      type: 'array',
      of: [{
        name: 'brandQuoteItem',
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string'
          },
          {
            name: 'description',
            type: 'text'
          },
          {
            name: 'image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ]
      }]
    },
    {
      name: 'howWeGrowBrandsTitle',
      title: 'How We Grow Brands - Title',
      type: 'blockContent',
    },
    {
      name: 'howWeGrowBrandsContent',
      title: 'How We Grow Brands Content',
      type: 'contentContainer',
    },
  ],
}