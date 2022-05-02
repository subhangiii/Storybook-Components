import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from './Radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputs: {
      control: { type: 'object' },
      description: 'Set the inputs of radio.',
    },
    showIcon:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
      description: 'Set the size of button.',
      defaultValue: 'base',
    },
    isDisabled:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    }
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  showIcon: true,
  size : 'md',
  isDisabled : false,
};
