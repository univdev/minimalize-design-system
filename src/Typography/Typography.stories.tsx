import { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  parameters: {
    layout: 'fullscreen',
  },
  component: Typography,
  args: {
    as: 'h1',
    children: 'Hello world!'
  },
};

export default meta;

export const Default: StoryObj<typeof Typography> = {};
