import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../components/button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'default',
          'success',
          'error',
          'warning',
        ],
      }
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  label: 'Button',
};