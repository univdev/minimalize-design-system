import { CSSProperties, ReactElement, ReactNode } from "react";
import { Layout, LayoutElementType, LayoutProps } from "../Layout";
import { css } from "@emotion/css";
import { clsx } from "clsx";
import { convertNumberToCSS } from "../Utils/common";

export type FlexProps<Element extends LayoutElementType> = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & FlexStylesProperties & Omit<LayoutProps<Element>, 'display'>;

export type FlexStylesProperties = {
  flex?: CSSProperties['flex'];
  flexDirection?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  columnGap?: CSSProperties['columnGap'];
  rowGap?: CSSProperties['rowGap'];
}

export function Flex<Element extends LayoutElementType = 'div'>({
  className,
  as,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  columnGap,
  rowGap,
  style,
  children,
  ...props
}: FlexProps<Element>): ReactElement {
  const styledComponentClass = css`
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    column-gap: ${convertNumberToCSS(columnGap)};
    row-gap: ${convertNumberToCSS(rowGap)};
  `;

  return (
    <Layout className={clsx('Flex', className, styledComponentClass)} display="flex" style={{ alignItems, justifyContent, ...style }} { ...props }>
      { children }
    </Layout>
  );
}