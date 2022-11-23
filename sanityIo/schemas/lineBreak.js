export default {
  name: "lineBreak",
  type: "object",
  title: "Break",
  fields: [
    {
      name: "style",
      type: "string",
      title: "Break style",
      options: {
        list: [
          { title: "<hr>", value: "horizontalRule" }
        ]
      }
    }
  ]
};
