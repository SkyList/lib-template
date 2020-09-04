import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, IButton } from './index';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<IButton>> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
    children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
    children: 'Button'
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Button',
    theme: 'Dark'
};