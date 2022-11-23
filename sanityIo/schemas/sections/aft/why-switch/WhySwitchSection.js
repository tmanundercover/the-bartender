import MediaAssetSource from "part:sanity-plugin-media/asset-source";

export default {
  name: 'whySwitchSection',
  title: 'Image + 6 Bullets',
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
      name: 'reasons',
      title: 'Reasons',
      type: 'array',
      of:[{type: 'whySwitchReason'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageSrc',
    },
  },
}



