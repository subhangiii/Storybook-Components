import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['Outlined', 'Standard', 'Filled'],
      control: { type: 'select' },
      description: 'Set the type of input.',
      defaultValue: 'Outlined',
    },
    isDisabled:{
      options: 'boolean',  
      description: 'Is the input disabled?',
      defaultValue: false,
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of input.',
      defaultValue: 'base',
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  size : 'base',
  isDisabled : false,
};
export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  size : 'base',
  isDisabled : false,
};
export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
  size : 'base',
  isDisabled : false,
};


