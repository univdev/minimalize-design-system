import { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider, Theme } from "@emotion/react";

export interface ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme: Theme = {
  };

  return (
    <EmotionThemeProvider theme={theme}>
      { children }
    </EmotionThemeProvider>
  );
}
