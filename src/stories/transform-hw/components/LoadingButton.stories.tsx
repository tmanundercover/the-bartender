import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import LoadingButton from "../../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../../components/loading-button/ButtonGroupMemberEnum";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Loading Button',
  component: LoadingButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoadingButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingButton> = (args) => <LoadingButton {...args} />;

export const ContainedRightEndCapButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContainedRightEndCapButton.args = {
  clickHandler: () => {alert("The Button was clicked")},
  width: 200,
  groupiness: ButtonGroupMemberEnum.RIGHT,
  // children: "Subscribe"
};

