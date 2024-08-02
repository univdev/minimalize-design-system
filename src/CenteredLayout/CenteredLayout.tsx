import { CSSProperties } from "react";
import { Layout, LayoutElementType, LayoutProps } from "../Layout";
import { clsx } from "clsx";
import { css } from "@emotion/css";

export type CenteredLayoutProps<Element extends LayoutElementType> = {
  maxWidth?: CSSProperties['maxWidth'];
  sideGap?: number;
} & LayoutProps<Element>;

export function CenteredLayout<Element extends LayoutElementType = 'div'>({
  maxWidth,
  sideGap,
  className,
  children,
  style,
  ...props
}: CenteredLayoutProps<Element>) {
  const StyledComponentClass = css`
    margin: auto;
    max-width: ${maxWidth};
    padding-left: ${typeof sideGap !== 'undefined' ? `${sideGap}px` : undefined};
    padding-right: ${typeof sideGap !== 'undefined' ? `${sideGap}px` : undefined};
  `;

  return (
    <Layout className={clsx('CenteredLayout', className, StyledComponentClass)} {...props}>
      { children }
    </Layout>
  );
}
