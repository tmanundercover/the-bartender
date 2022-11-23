import {SanitySectionTitlesEnum} from "../sectionTitles";

export default {
  name: 'transformWhyChooseUsSection',
  title: SanitySectionTitlesEnum.WHY_CHOOSE_US,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'sectionTitle',
      title: 'Section Title',
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
      type: 'string',
    },
    {
      name: 'prosList',
      title: 'List of Pros',
      type: 'array',
      of: [{type: 'reference', to: {type: 'transformWhyChooseUsItem'}}]
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
      media: 'proprietorImage',
    },
  },
}



