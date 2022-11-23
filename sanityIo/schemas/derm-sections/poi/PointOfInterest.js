export default {
  name: 'pointOfInterest',
  title: 'Point Of Interest',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'displayedTitle',
      title: 'Displayed Title',
      type: 'string',
    },
    {
      name: 'displayedDescription',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'displayedSubtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'text'
    },
    {
      title: "bgColor",
      description: "Pick a color",
      name: "color",
      type: "colorlist", // required
      options: {
        list: [
          { title: "white", value: "#FFFFFF" },
          { title: "white", value: "#000000" },
        ]
      }
    },
    {
      name: 'xCoord',
      title: 'X-coordinate',
      type: 'string',
    },
    {
      name: 'yCoord',
      title: 'Y-coordinate',
      type: 'string',
    }
  ],
}
