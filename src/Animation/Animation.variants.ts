import { Variants } from 'framer-motion';

export type AnimationVariants = { [key: string]: Variants };

export const AnimationVariants: AnimationVariants = {
  fade: {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0,
    },
  }
}
