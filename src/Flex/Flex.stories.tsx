import { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Fragment } from 'react/jsx-runtime';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
};

export default meta;

export const Default: StoryObj<typeof Flex> = {
  args: {
    columnGap: 12,
    children: (
      <Fragment>
        <p>Test</p>
        <p>Good</p>
        <p>Job!</p>
      </Fragment>
    ),
  },
};

export const Column: StoryObj<typeof Flex> = {
  args: {
    flexDirection: 'column',
    columnGap: 12,
    children: (
      <Fragment>
        <p>Test</p>
        <p>Good</p>
        <p>Job!</p>
      </Fragment>
    ),
  },
};
