import { clsx } from "clsx";
import { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactElement, ReactNode } from "react";
import { GenerateStringUnion } from "../types/common";
import { useTheme } from "../useTheme";
import { getStylesFromVariants } from "../Utils/common";
import { css } from "@emotion/css";

export type ButtonSizeOverrides = {
  small: true;
  medium: true;
  large: true;
};

export type ButtonVariantsOverrides = {
  contained: true;
  text: true;
  outlined: true;
};

export type ButtonColorsOverrides = {
  primary: true;
  secondary: true;
  success: true;
  error: true;
  info: true;
  inherit: true;
};

export type ButtonShapeOverrides = {
  square: true;
  round: true;
  circle: true;
}

export type ButtonElementType = 'button' | 'a';
export type ButtonSize = GenerateStringUnion<ButtonSizeOverrides>;
export type ButtonVariants = GenerateStringUnion<ButtonVariantsOverrides>;
export type ButtonColors = GenerateStringUnion<ButtonColorsOverrides>;
export type ButtonShapes = GenerateStringUnion<ButtonShapeOverrides>;

export type ButtonStylesProperties = {
  size?: ButtonSize;
  variants?: ButtonVariants;
  color?: ButtonColors;
  shape?: ButtonShapes;
};

export type ButtonProps<Element extends ButtonElementType> = {
  className?: string;
  style?: CSSProperties;
  as?: Element;
  children?: ReactNode;
} & ComponentPropsWithoutRef<ElementType> & ButtonStylesProperties;

export function Button<Element extends ButtonElementType = 'button'>({ className, as, children, style, ...props }: ButtonProps<Element>): ReactElement {
  const theme = useTheme();
  const Wrapper = as ?? 'button';

  const styledComponentClass = css({
    ...getStylesFromVariants<ButtonStylesProperties>(
      { color: props.color ?? 'primary', size: props.size ?? 'medium', variants: props.variants ?? 'contained', shape: props.shape ?? 'round' },
      theme.componentStylesVariants?.Button
    ),
  });

  return (
    <Wrapper
      className={clsx('Button', defaultButtonStylesClass, styledComponentClass, className)}
      { ...props }
      style={{
        ...props.style,
      }}
    >
      { children }
    </Wrapper>
  );
}

const defaultButtonStylesClass = css`
  appearance: none;
  border-width: 1px;
  border-style: solid;
  text-decoration: none;
  background-color: transparent;
  border-color: transparent;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: .8;
  }
`;
