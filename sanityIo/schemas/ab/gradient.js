const allColors = [
  { title: "#F7DDCA", value: "#F7DDCA" },
  { title: "#FEF7F1", value: "#FEF7F1" },
  { title: "#587959", value: "#587959" },
  { title: "#587959", value: "#587959" },
  { title: "#565190", value: "#565190" },
  { title: "#7FACD9", value: "#7FACD9" },
]

export default {
  name: 'gradient',
  title: 'Gradient',
  type: 'object',
  fields: [
    {
      title: "Color 1",
      description: "Pick a color",
      name: "color1",
      type: "colorlist", // required
      options: {
        list: allColors
      }
    },
    {
      title: "Color 2",
      description: "Pick a color",
      name: "color2",
      type: "colorlist", // required
      options: {
        list: allColors
      }
    },
  ]
}