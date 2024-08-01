import { clsx } from "clsx";
import { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactElement, ReactNode } from "react";

export type ButtonElementType = 'button' | 'a';

export type ButtonProps<Element extends ButtonElementType> = {
  className?: string;
  style?: CSSProperties;
  as?: Element;
  children?: ReactNode
} & ComponentPropsWithoutRef<ElementType>;

export function Button<Element extends ButtonElementType = 'button'>({ className, as, children, ...props }: ButtonProps<Element>): ReactElement {
  const Wrapper = as ?? 'button';

  return (
    <Wrapper className={clsx('Button', className)} { ...props }>
      { children }
    </Wrapper>
  );
}