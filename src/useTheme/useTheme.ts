import { useTheme as useEmotionTheme } from '@emotion/react';
import { ITheme } from '../Theme/Theme.types';

export const useTheme = () => {
  const theme = useEmotionTheme() as ITheme;

  if (theme?.themeType !== 'MDS') throw new Error('ThemeProvider is invalid.');

  return theme;
}
