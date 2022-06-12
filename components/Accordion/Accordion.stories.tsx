import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        type: {
          options: ['Default','Open','Color' , 'Flush' , 'Arrow'],
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
        },
    } as ComponentMeta<typeof Accordion>;

    const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

    export const Default = Template.bind({});
    Default.args = {
        size : 'base',
        isDisabled : false,
      };
    export const Open = Template.bind({});
    Open.args = {
        size : 'base',
        isDisabled : false,
    };
    export const Color = Template.bind({});
    Color.args = {
        size : 'base',
        isDisabled : false,
      };
    export const Flush = Template.bind({});
    Flush.args = {
        size : 'base',
        isDisabled : false,
    };
    export const Arrow = Template.bind({});
    Arrow.args = {
        size : 'base',
        isDisabled : false,
        };
    