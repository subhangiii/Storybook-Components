import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

    label: {
      options: 'string',
      control: { type: 'text' },
      description: 'Set the label of radio.',
    },
    isDisabled:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    },
    defaultChecked: {
      options: 'boolean',
      description: 'Is the button checked by default?',
      defaultValue: false,
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of radio.',
      defaultValue: 'base',
    },
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label:'Radio',
  size: 'base',
  isDisabled : false,
  defaultChecked: false,
};
