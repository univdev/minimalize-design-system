import { Meta, StoryObj } from '@storybook/react';
import { Layout } from './Layout';
import { Fragment } from 'react/jsx-runtime';

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
};

export default meta;

export const Default: StoryObj<typeof Layout> = {
  args: {
    children: <div>Hello world!</div>
  },
};

export const Span: StoryObj<typeof Layout> = {
  args: {
    as: 'span',
    children: <div>Hello world!</div>
  },
}

export const Flex: StoryObj<typeof Layout> = {
  args: {
    as: 'div',
    display: 'flex',
    children: (
      <Fragment>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Fragment>
    ),
  },
}
