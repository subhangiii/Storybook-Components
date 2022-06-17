import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    type: {
      options: ['Default', 'Icon', 'IconOnly'],
      control: { type: 'select' },
      description: 'Set the type of input.',
      defaultValue: 'Default',
    },
    size: {
      options: ['xs', 'sm', 'base', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of input.',
      defaultValue: 'base',
    },
    color: {
      options: [
        'blue',
        'gray',
        'red',
        'green',
        'yellow',
        'indigo',
        'pink',
        'purple',
      ],
      control: { type: 'select' },
      description: 'Set the color of input.',
      defaultValue: 'base',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'base',
  type: 'Default',
  color: 'blue',
  title: 'Badge',
};

export const Icon = Template.bind({});
Icon.args = {
  size: 'base',
  type: 'Icon',
  color: 'blue',
  title: 'Badge',
};
export const IconOnly = Template.bind({});
IconOnly.args = {
  size: 'base',
  type: 'IconOnly',
  color: 'blue',
  title: 'Badge',
};
