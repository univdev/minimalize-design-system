import { css } from "@emotion/css";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef, CSSProperties, ReactElement, ReactNode } from "react";

export type LayoutElementType = 'div' | 'header' | 'footer' | 'span' | 'aside' | 'section' | 'nav';

export type LayoutProps<Element extends LayoutElementType> = {
  as?: Element;
  children?: ReactNode;
} & LayoutStylesProperties & ComponentPropsWithoutRef<Element>;

export type LayoutStylesProperties = {
  position?: CSSProperties['position'];
  left?: CSSProperties['left'];
  top?: CSSProperties['top'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
  display?: CSSProperties['display'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
}

export function Layout<Element extends LayoutElementType = 'div'>({
  className,
  as,
  style,
  children,
  display,
  padding,
  margin,
  left,
  top,
  right,
  bottom,
  ...props
}: LayoutProps<Element>): ReactElement {
  const Wrapper = as ?? 'div';
  const styleComponentClass = css({
    padding,
    margin,
    left,
    top,
    right,
    bottom,
  });

  return (
    <Wrapper
      { ...props }
      className={clsx('Layout', styleComponentClass, className)}
      style={{
        display: display ?? style?.display,
        ...style,
      }}
    >
      { children }
    </Wrapper>
  );
}