import { CSSProperties, ReactElement, ReactNode } from "react";
import { Layout, LayoutElementType, LayoutProps } from "../Layout";

export type FlexProps<Element extends LayoutElementType> = {
  as?: LayoutElementType;
  className?: string;
  style?: CSSProperties;
  flex?: CSSProperties['flex'];
  position?: CSSProperties['position'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  children?: ReactNode;
};

export function Flex<Element extends LayoutElementType = 'div'>({
  as,
  flex,
  position,
  alignItems,
  justifyContent,
  style,
  children,
  ...props
}: FlexProps<Element>): ReactElement {
  return (
    <Layout as={as} display="flex" style={{ alignItems, justifyContent, ...style }} { ...props }>
      { children }
    </Layout>
  );
}