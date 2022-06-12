import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        type: {
          options: ['Default' , 'Larger' , 'Links' , 'Icon' , 'IconOnly'],
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
    } as ComponentMeta<typeof Badge>;

    const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

    export const Default = Template.bind({});
    Default.args = {
        size : 'base',
      };
    export const Larger = Template.bind({});
    Larger.args = {
        size : 'base',
    };
    export const Links = Template.bind({});
    Links.args = {
        size : 'base',
      };
    export const Icon = Template.bind({});
    Icon.args = {
        size : 'base',
    };
    export const IconOnly = Template.bind({});
    IconOnly.args = {
        size : 'base',
        };
    