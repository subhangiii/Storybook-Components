import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

export default {
    title: 'Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        type: {
          options: ['Default','Solid'],
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
    } as ComponentMeta<typeof Breadcrumb>;

    const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;
    export const Default = Template.bind({});
    Default.args = {
        size : 'base',
      };
    export const Solid = Template.bind({});
    Solid.args = {
        size : 'base',
    };
    