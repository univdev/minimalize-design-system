import { clsx } from "clsx";
import { ComponentPropsWithoutRef, CSSProperties, ReactElement, ReactNode } from "react";

export type LayoutElementType = 'div' | 'header' | 'footer' | 'span' | 'aside' | 'section' | 'nav';

export type LayoutProps<Element extends LayoutElementType> = {
  as?: Element;
  children?: ReactNode;
  display?: CSSProperties['display'];
} & ComponentPropsWithoutRef<Element>;

export function Layout<Element extends LayoutElementType = 'div'>({ className, as, style, children, display, ...props }: LayoutProps<Element>): ReactElement {
  const Wrapper = as ?? 'div';

  return (
    <Wrapper
      { ...props }
      className={clsx('Layout', className)}
      style={{
        display: display ?? style?.display,
        ...style,
      }}
    >
      { children }
    </Wrapper>
  );
}