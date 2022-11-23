import * as React from 'react'

export default {
  name: 'column1BlockContent',
  title: '1 Column Block Content',
  type: 'document',
  description: '1 column layout',
  fields: [
    {
      title: 'Section Title',
      type: 'string',
      name: 'sectionTitle'
    },
    {
      title: 'content',
      type: 'blockContent',
      name: 'content'
    }
  ]
}