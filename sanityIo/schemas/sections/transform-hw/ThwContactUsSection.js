import {SanitySectionTitlesEnum} from "./sectionTitles";

export default {
  name: 'transformContactUsSection',
  title: SanitySectionTitlesEnum.CONTACT_US,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgImageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'lhsTitle',
      title: 'Left Side Title',
      type: 'string'
    },

    {
      name: 'lhsContentText',
      title: 'Left Side Content Text',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'facebook',
      title: 'Facebook Handle',
      type: 'string'
    },
    {
      name: 'twitter',
      title: 'Twitter Handle',
      type: 'string'
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn Handle',
      type: 'string'
    },
    {
      name: 'youtube',
      title: 'Youtube Handle',
      type: 'string'
    },
    {
      name: 'rhsTitle',
      title: 'Form Title Title',
      type: 'string'
    },
    {
      name: 'formSubmitButtonText',
      title: 'Form Submit Button Text',
      type: 'string'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'bgImageSrc',
    },
  },
}



