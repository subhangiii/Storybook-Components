import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwitchComp } from './Switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Switch',
  component: SwitchComp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isDisabled:{
      options: 'boolean',  
      description: 'Is the button disabled?',
      defaultValue: false,
    },
    isChecked: {
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
} as ComponentMeta<typeof SwitchComp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchComp> = (args) => <SwitchComp {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size : 'base',
  isDisabled : false,
  isChecked : false,
};
