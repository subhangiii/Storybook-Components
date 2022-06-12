import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
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
      defaultValue: 'ButtonGroup',
    },
    isDisabled:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    }
  },
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  size : 'base',
  label : "Button",
  isDisabled : false,
};

export const Outline = Template.bind({});
Outline.args = {
  type: "outline",
  size : 'base',
  label : "Button",
  isDisabled : false,

};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  size : 'base',
  label : "ButtonGroup",
  isDisabled : false,
};

