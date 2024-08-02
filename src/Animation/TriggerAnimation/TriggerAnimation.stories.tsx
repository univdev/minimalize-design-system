import { Meta, StoryObj } from "@storybook/react";
import { TriggerAnimation } from "./TriggerAnimation";
import { AnimationVariants } from '../Animation.variants';

const meta: Meta<typeof TriggerAnimation> = {
  title: 'TriggerAnimation',
  component: TriggerAnimation,
}

export default meta;

export const Default: StoryObj<typeof TriggerAnimation> = {
  args: {
    variants: AnimationVariants,
    type: 'fade',
    enabledName: 'in',
    disabledName: 'out',
    show: true,
    children: 'Hello world!',
  },
};
