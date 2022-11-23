export default {
  name: 'pointOfInterestSection',
  title: 'Section with Middle Point of Interest Image',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'aboutMeBody',
      title: 'About Me Body',
      type: 'blockContent',
    },
    {
      name: 'profileImage',
      title: 'About Me Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'poiList',
      title: 'POIs',
      type: 'array',
      of: [{type: 'pointOfInterest'}],
    },
    {
      name: 'miniGallery',
      title: 'Mini Gallery',
      type: 'imageGallery'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}



