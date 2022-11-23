import {SanitySectionTitlesEnum} from "./sectionTitles";

export default {
  name: 'transformMottoSection',
  title: SanitySectionTitlesEnum.MOTTO,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'string',
    },
    {
      name: 'contentSuperTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'parallaxImage',
      title: 'Parallax Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'parallaxImage',
    },
  },
}



