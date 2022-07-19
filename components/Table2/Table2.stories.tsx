import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table2 } from './Table2';

export default {
  title: 'Table2',
  component: Table2,
  argTypes: {
    type: {
      options: ['Default', 'Solid'],
      control: { type: 'select' },
      description: 'Set the type of input.',
      defaultValue: 'Default',
    },
  },
} as ComponentMeta<typeof Table2>;

const Template: ComponentStory<typeof Table2> = (args) => <Table2 {...args} />;
export const Default = Template.bind({});
Default.args = {
  size: 'base',
  menu1: 'Home',
  menu2: 'Templates',
  menu3: 'Flowbite',
  type: 'Default',
  color: 'gray',
};
