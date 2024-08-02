import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  parameters: {
    layout: 'fullscreen',
  },
  component: Link,
  args: {
    href: 'https://www.naver.com',
    target: '_blank',
    children: 'This is Link',
  },
};

export default meta;

export const Default: StoryObj<typeof Link> = {};

export const TextDecoration: StoryObj<typeof Link> = {
  args: {
    textDecoration: 'underline',
  },
};