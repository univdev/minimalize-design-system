import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {};

export const TextInButton: StoryObj<typeof Button> = {
  args: {
    children: 'Hello world!',
    onClick: fn,
  },
};
