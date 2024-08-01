import { ButtonElementType, ButtonProps } from "../Button"
import { FlexProps } from "../Flex";
import { InputProps } from "../Input";
import { LayoutElementType, LayoutProps } from "../Layout";

export interface ITheme {
  defaultProps?: {
    buttonProps?: ButtonProps<ButtonElementType>;
    inputProps?: InputProps;
    layoutProps?: LayoutProps<LayoutElementType>;
    flexProps?: FlexProps<LayoutElementType>;
  }
}