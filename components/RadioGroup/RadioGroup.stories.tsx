import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroupUI } from './RadioGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RadioGroup',
  component: RadioGroupUI,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    inputs: {
      control: { type: 'object' },
      description: 'Set the inputs of radio.',
    },
    showIcon:{
      options: 'boolean',  
      description: 'Is the button to be shown?',
      defaultValue: true,
    },
    label: {
      options: 'string',
      control: { type: 'text' },
      description: 'Set the label of radio.',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
      description: 'Set the size of button.',
      defaultValue: 'md',
    },
    isDisabled:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    }
  },
} as ComponentMeta<typeof RadioGroupUI>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioGroupUI> = (args) => <RadioGroupUI {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  showIcon: true,
  size : 'md',
  label: 'RadioGroup',
  inputs: [
  {
    name: 'Startup',
    description: 'desc1',
  },
  {
    name: 'Business',
    description: 'desc2',
  },
  {
    name: 'Enterprise',
    description: 'desc2',
  },
],
  isDisabled : false,
};
