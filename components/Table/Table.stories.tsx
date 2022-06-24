import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table';
import {data, columns} from './TableData'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: 'Label of Button Group',
      control: { type: 'object' },
    },
    type: {
      options: ['primary', 'striped'],
      control: { type: 'select' },
      description: 'Set the type of Button Group.'
    }
  },
} as ComponentMeta<typeof Table>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  columns: columns,
  dataSource : data,
};
export const Striped = Template.bind({});
Striped.args = {
  type: 'striped',
  columns: columns,
  dataSource : data,
};
