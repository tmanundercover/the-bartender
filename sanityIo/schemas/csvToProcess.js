export default {
  name: 'csvToProcess',
  title: 'CSVs To Be Processed',
  type: 'document',
  fields: [
    {
      name: 'csvFile',
      title: 'File',
      type: 'csvToProcessFile'
    },
    {
      name: 'objectType',
      title: 'Object Type',
      type: 'string',
      options: {
        list:[{title:"size", value: "size"},{title:"itemColor", value: "itemColor"},{title:"itemType", value: "itemType"}]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'processThisCSV',
      title: 'Process CSV',
      type: 'boolean',
    },
  ],
};
