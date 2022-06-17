import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['Outlined', 'Filled'],
      control: { type: 'select' },
      description: 'Set the type of input.',
      defaultValue: 'Outlined',
    },
    isDisabled: {
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
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
  size: 'base',
  isDisabled: false,
  type: 'Outlined',
};
export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  size: 'base',
  isDisabled: false,
  type: 'Filled',
};
