import { ButtonElementType, ButtonProps, ButtonStylesProperties } from "../Button"
import { FlexProps } from "../Flex";
import { InputProps } from "../Input";
import { LayoutElementType, LayoutProps } from "../Layout";
import { ComponentStyle } from "../types/common";
import { TypographyStylesProperties } from "../Typography";

export interface ITheme {
  themeType: 'MDS';
  defaultProps?: {
    buttonProps?: ButtonProps<ButtonElementType>;
    inputProps?: InputProps;
    layoutProps?: LayoutProps<LayoutElementType>;
    flexProps?: FlexProps<LayoutElementType>;
  },
  componentStylesVariants?: {
    Button: ComponentStyle<ButtonStylesProperties>;
    Typography: ComponentStyle<TypographyStylesProperties>;
  },
  radius: number;
  theme: {
    radius: (value: number) => string;
  }
}