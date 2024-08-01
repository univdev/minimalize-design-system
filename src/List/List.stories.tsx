import { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
};

export default meta;

export const Default: StoryObj<typeof List> = {};

export const TextInList: StoryObj<typeof List> = {
  args: {
    iteration: [1, 2, 3, 4, 5]
  },
};
