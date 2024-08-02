import { ButtonStyles } from "../Button/Button.styles";
import { TypographyStyles } from "../Typography/Typography.styles";
import { ITheme } from "./Theme.types";

export const Theme: ITheme = {
  themeType: 'MDS',
  radius: 2,
  componentStylesVariants: {
    Button: ButtonStyles,
    Typography: TypographyStyles,
  },
  theme: {
    radius: (value) => `${Theme.radius * value}px`,
  }
};
