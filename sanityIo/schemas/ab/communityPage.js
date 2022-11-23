export default {
  name: 'communityPage',
  title: 'Community Page',
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
      name: 'howWeGrowBrandsTitle',
      title: 'How We Grow Brands - Title',
      type: 'blockContent',
    },
    {
      name: 'howWeGrowBrandsContent',
      title: 'How We Grow Brands Content',
      type: 'contentContainer',
    },
    {
      name: 'weWorkWithSection',
      title: 'We Work With',
      type: 'weWorkWith'
    },
    {
      name: 'callToAction',
      title: 'CTA',
      type: 'blockContent',
    }
  ],
}