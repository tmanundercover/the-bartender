import {SanitySectionTitlesEnum} from "./sectionTitles";

export default {
  name: 'transformAboutProprietorSection',
  title: SanitySectionTitlesEnum.ABOUT_PROPRIETOR,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'proprietorName',
      title: 'Proprietor Name',
      type: 'string',
    },
    {
      name: 'proprietorTitle',
      title: 'Proprietor Title',
      type: 'string',
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'string',
    },
    {
      name: 'proprietorImage',
      title: 'Proprietor Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'proprietorImageAltText',
      title: 'Proprietor Image Alt Text',
      type: 'string'
    },
    {
      name: 'proprietorSignatureImage',
      title: 'Proprietor Signature Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'proprietorSignatureImageAltText',
      title: 'Proprietor Signature Image Alt Text',
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
      media: 'proprietorImage',
    },
  },
}



