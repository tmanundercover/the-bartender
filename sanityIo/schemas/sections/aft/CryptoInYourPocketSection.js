export default {
  name: 'cryptoInYourPocketSection',
  title: 'Image+3 Bullets + Banner w/CTA',
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
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageSrcAltText',
      title: 'Image Alt Text',
      type: 'string'
    },
    {
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of:[{type: 'whySwitchReason'}]
    },
    {
      name: 'ctaHeader1',
      title: 'CTA ThwHeader',
      type: 'string'
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string'
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
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
      media: 'imageSrc',
    },
  },
}



