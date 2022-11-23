import {SanitySectionTitlesEnum} from "./sectionTitles";

export default {
  name: 'transformPositivePsychologySection',
  title: SanitySectionTitlesEnum.POSITIVE_PSYCHOLOGY,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'superTitle',
      title: 'Small Title',
      type: 'string',
    },
    {
      name: 'contentTitle',
      title: 'Large Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'string',
    },
    {
      name: 'contentBullets',
      title: 'Content Bullets',
      type: 'array',
      of:[{type: 'string'}]
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



