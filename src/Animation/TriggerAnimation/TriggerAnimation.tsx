import { ComponentProps, CSSProperties, ReactNode, useMemo } from "react"
import { AnimationVariants } from "../Animation.variants";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Show } from "../../Show";

export type TriggerAnimationProps<Key extends keyof AnimationVariants> = {
  as?: keyof JSX.IntrinsicElements;
  animationKey: string;
  className?: string;
  style?: CSSProperties;
  show: boolean;
  variants: AnimationVariants;
  children?: ReactNode;
  type: Key;
  enabledName: string;
  disabledName: string;
}

export function TriggerAnimation<Key extends keyof AnimationVariants>({
  as = 'div',
  className,
  animationKey,
  style,
  show,
  variants,
  children,
  type,
  enabledName,
  disabledName,
}: TriggerAnimationProps<Key>) {
  const MotionWrapper = useMemo(() => motion<ComponentProps<keyof JSX.IntrinsicElements>>(as), [as]);
  const currentVariants = variants[type];

  return (
    <AnimatePresence>
      {
        show
          && (
            <MotionWrapper
              key={animationKey}
              className={clsx('TriggerAnimation', className)}
              style={style}
              variants={currentVariants}
              initial={enabledName}
              animate={enabledName}
              exit={disabledName}
            >
              { children }
            </MotionWrapper>
          )
      }
    </AnimatePresence>
  );
}
