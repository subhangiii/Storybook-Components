import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar,
    argTypes: {
        type: {
          options: ['Default' , 'Multilevel' , 'Content' , 'CTA' , 'Logo'],
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
    } as ComponentMeta<typeof Sidebar>;

    const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

    export const Default = Template.bind({});
    Default.args = {
        size : 'base',
      };
    export const Multilevel = Template.bind({});
    Multilevel.args = {
        size : 'base',
    };
    export const Content = Template.bind({});
    Content.args = {
        size : 'base',
      };
    export const CTA = Template.bind({});
    CTA.args = {
        size : 'base',
    };
    export const Logo = Template.bind({});
    Logo.args = {
        size : 'base',
        };
    