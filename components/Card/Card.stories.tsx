import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled: {
      options: 'boolean',
      description: 'Is the input disabled?',
      defaultValue: false,
    },
    size: {
      options: ['xs', 'sm', 'base', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of input.',
      defaultValue: 'base',
    },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'base',
  isDisabled: false,
  title: 'Card Title',
  content:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  button: 'Button',
};
