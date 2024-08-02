import { ButtonElementType, ButtonProps, ButtonStylesProperties } from "../Button"
import { FlexProps } from "../Flex";
import { InputProps } from "../Input";
import { LayoutElementType, LayoutProps } from "../Layout";
import { ComponentStyle } from "../types/common";

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
  },
  radius: number;
  theme: {
    radius: (value: number) => string;
  }
}