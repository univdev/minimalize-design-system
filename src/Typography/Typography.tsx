import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import styled from '@emotion/styled';
import { GenerateStringUnion } from "../types/common";
import { clsx } from "clsx";
import { css } from "@emotion/react";
import { getStylesFromVariants } from "../Utils/common";
import { TypographyStyles } from "./Typography.styles";
import { useTheme } from "../useTheme";

export type TypographyVariantsOverrides = {
  'display-semibold-64': true;
  'largetitle-semibold-56': true;
  'title01-semibold-44': true;
  'title02-semibold-36': true;
  'title03-semibold-32': true;
  'subtitle01-semibold-24': true;
  'subtitle01-medium-24': true;
  'subtitle01-regular-24': true;
  'subtitle02-semibold-20': true;
  'subtitle02-medium-20': true;
  'subtitle02-regular-20': true;
  'body01-regular-18': true;
  'body02-regular-16': true;
  'caption01-semibold-14': true;
  'caption01-medium-14': true;
  'caption01-regular-14': true;
  'caption02-semibold-12': true;
  'caption02-medium-12': true;
  'caption02-regular-12': true;
  'caption03-semibold-10': true;
  'caption03-medium-10': true;
  'caption03-regular-10': true;
};

export type TypographyColorOverrides = {
  primary: true;
  secondary: true;
  disabled: true;
  hint: true;
}

export type TypographyElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'b';

export type TypographyStylesProperties = {
  variant?: GenerateStringUnion<TypographyVariantsOverrides>;
  color?: GenerateStringUnion<TypographyColorOverrides>;
};

export type TypographyProps<Element extends TypographyElementType> = {
  as?: Element;
  children?: ReactNode;
} & TypographyStylesProperties & ComponentPropsWithoutRef<Element>;

export function Typography<Element extends TypographyElementType = 'p'>({
  className,
  style,
  as = 'p' as Element,
  color = 'primary',
  variant = 'body01-regular-18',
  children,
  ...props
}: TypographyProps<Element>): ReactElement {
  const theme = useTheme();
  const styledComponentClass = css({
    ...getStylesFromVariants<TypographyStylesProperties>(
      { variant, color },
      theme.componentStylesVariants?.Typography
    ),
  });

  console.log(theme.componentStylesVariants?.Typography);
  return (
    <Wrapper as={as} className={clsx('Typography', className, styledComponentClass)} style={{ ...style }} { ...props }>
      { children }
    </Wrapper>
  );
}

const Wrapper = styled('p')`
  font-family: 'Pretendard';
`;