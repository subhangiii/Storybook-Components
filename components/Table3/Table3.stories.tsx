import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/lib/table';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import React, { useRef, useState } from 'react';
import { Table3 } from './Table3';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table3',
  component: Table3,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      options: 'string',
      control: { type: 'text' },
      description: 'Set the label of radio.',
    },
    isDisabled: {
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
} as ComponentMeta<typeof Table3>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table3> = (args) => <Table3 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Table3',
  size: 'base',
  isDisabled: false,
  defaultChecked: false,
};
