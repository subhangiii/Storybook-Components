import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ModalComp } from './Modal';
import { Button } from '../Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: ModalComp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    visible: {
      options: 'boolean',
      description: 'Is the Modal Visible?',
    },
    size: {
      options: ['sm', 'base', 'lg', 'xl'],
      control: { type: 'select' },
      description: 'Set the size of Modal.',
    },
  },
} as ComponentMeta<typeof ModalComp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalComp> = (args) => (
  <ModalComp {...args} />
);

const data = () => (
  <div className="space-y-6">
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer
      privacy laws for its citizens, companies around the world are updating
      their terms of service agreements to comply.
    </p>
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes
      into effect on May 25 and is meant to ensure a common set of data rights
      in the European Union. It requires organizations to notify users as soon
      as possible of high-risk data breaches that could personally affect them.
    </p>
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  visible: true,
  children: data(),
  size: 'base',
  title: 'Modal Title',
};
