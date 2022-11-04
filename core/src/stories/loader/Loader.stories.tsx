import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from '../../components/loader/Loader';

export default {
    title: 'Example/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "",
};