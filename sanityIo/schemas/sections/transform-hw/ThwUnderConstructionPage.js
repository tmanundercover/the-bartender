import {SanitySectionTitlesEnum} from "./sectionTitles";

export default {
  name: 'transformUnderConstructionPage',
  title: SanitySectionTitlesEnum.UNDER_CONSTRUCTION,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgImage',
      title: 'Background Image',
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
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'string',
    },
    {
      name: 'subscribeText',
      title: 'Subscribe Text',
      type: 'string',
    },
    {
      name: 'emailFieldText',
      title: 'Email Field Text',
      type: 'string',
    },
    {
      name: 'emailButtonText',
      title: 'Email Button Text',
      type: 'string'
    },
    {
      name: 'footerTextLines',
      title: 'Footer Text',
      type: 'array',
      of:[{type: 'string'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'bgImage',
    },
  },
}



