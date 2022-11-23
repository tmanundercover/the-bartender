import {SanitySectionTitlesEnum} from "../sectionTitles";

export default {
  name: 'transformWhyChooseUsItem',
  title: 'THW Service Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
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
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
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



