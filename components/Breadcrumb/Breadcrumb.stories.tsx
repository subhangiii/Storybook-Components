import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    type: {
      options: ['Default', 'Solid'],
      control: { type: 'select' },
      description: 'Set the type of input.',
      defaultValue: 'Default',
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
      description: 'Set the size of input.',
      defaultValue: 'base',
    },
    color: {
      options: ['gray', 'blue'],
      control: { type: 'select' },
      description: 'Set the size of input.',
      defaultValue: 'base',
    },
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);
export const Default = Template.bind({});
Default.args = {
  size: 'base',
  menu1: 'Home',
  menu2: 'Templates',
  menu3: 'Flowbite',
  type: 'Default',
  color: 'gray',
};
export const Solid = Template.bind({});
Solid.args = {
  size: 'base',
  menu1: 'Home',
  menu2: 'Templates',
  menu3: 'Flowbite',
  type: 'Solid',
  color: 'gray',
};
