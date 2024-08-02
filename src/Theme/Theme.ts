import { ButtonStyles } from "../Button/Button.styles";
import { ITheme } from "./Theme.types";

export const Theme: ITheme = {
  themeType: 'MDS',
  radius: 2,
  componentStylesVariants: {
    Button: ButtonStyles,
  },
  theme: {
    radius: (value) => `${Theme.radius * value}px`,
  }
};
