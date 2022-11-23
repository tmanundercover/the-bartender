import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import CssFadeToColor from "../../../components/css-fade-to-color/CssFadeToColor";
import {Grid} from "@material-ui/core";
import {CssFadeToColorDirectionEnum} from "../../../components/css-fade-to-color/CssFadeToColorDirectionEnum";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Fade to a color',
  component: CssFadeToColor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CssFadeToColor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CssFadeToColor> = (args) => <Grid container style={{height:"512px"}}><CssFadeToColor {...args} /></Grid>;

export const FadeGrayDown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FadeGrayDown.args = {
  toColor: "rgba(111,111,111,1)"
};

export const FadeGrayUp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FadeGrayUp.args = {
  toColor: "rgba(111,111,111,1)",
  direction: CssFadeToColorDirectionEnum.TOP
};

export const FadeGrayLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FadeGrayLeft.args = {
  toColor: "rgba(111,111,111,1)",
  direction: CssFadeToColorDirectionEnum.LEFT
};
export const FadeGrayRight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FadeGrayRight.args = {
  toColor: "rgba(111,111,111,1)",
  direction: CssFadeToColorDirectionEnum.RIGHT
};
