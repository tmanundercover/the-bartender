import * as React from 'react'

export default {
  name: 'column2BlockContent',
  title: '2 Column Block Content',
  type: 'document',
  fields: [
    {
      title: 'Section Title',
      type: 'string',
      name: 'sectionTitle'
    },
    {
      title: 'column 1',
      type: 'column1BlockContent',
      name: 'column1'
    },
    {
      title: 'column 2',
      type: 'column1BlockContent',
      name: 'column2'
    }
  ]
}