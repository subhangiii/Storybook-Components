import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    type: {
      options: ['Default', 'Open', 'Color', 'Flush', 'Arrow'],
      control: { type: 'select' },
      description: 'Set the type of input.',
      defaultValue: 'Default',
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  visible: true,
  type: 'Default',
  title: 'Accordion Title',
  content:
    'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
};
export const Open = Template.bind({});
Open.args = {
  visible: true,
  type: 'Open',
  title: 'Accordion Title',
  content:
    'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
};
export const Color = Template.bind({});
Color.args = {
  visible: true,
  type: 'Color',
  title: 'Accordion Title',
  content:
    'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
};
export const Flush = Template.bind({});
Flush.args = {
  visible: true,
  type: 'Flush',
  title: 'Accordion Title',
  content:
    'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
};
export const Arrow = Template.bind({});
Arrow.args = {
  visible: true,
  type: 'Arrow',
  title: 'Accordion Title',
  content:
    'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
};
