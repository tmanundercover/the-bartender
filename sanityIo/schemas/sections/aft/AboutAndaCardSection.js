export default {
  name: 'aboutAndaCardSection',
  title: 'Pink Image + Content',
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
      name: 'cardImage',
      title: 'Card Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cardImageAltText',
      title: 'Card Image Alt Text',
      type: 'string'
    },
    {
      name: 'cardImageBackground',
      title: 'Card Image Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentLeft',
      title: 'Content Left Column',
      type: 'string',
    },
    {
      name: 'contentRight',
      title: 'Content Right Column',
      type: 'string',
    },
    {
      name: 'ctaButtonTitle',
      title: 'CTA Button Title',
      type: 'string'
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'cardImage',
    },
  },
}



