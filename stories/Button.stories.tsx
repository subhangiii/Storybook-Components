import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['primary', 'outline', 'link'],
      control: { type: 'select' },
      description: 'Set the type of button.',
      defaultValue: 'primary',
    },
    size: {
      options: ['xs', 'sm', 'base', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of button.',
      defaultValue: 'base',
    },
    label:{
      options: 'text',  
      description: 'Set the label of button.',
      defaultValue: 'Button',
    },
    isDisabled:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  size : 'base',
  label : "Button",
  isDisabled : false,
  // textColor: "white" ,
  // darkTextColor: "white",
  // backgroundColor: "blue-700",
  // darkBackgroundColor: "blue-500"
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
  size : 'base',
  label : "Button",
  isDisabled : false,
  // textColor: "blue-700" ,
  // backgroundColor: "blue-500"
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  size : 'base',
  label : "Button",
  isDisabled : false,
};

