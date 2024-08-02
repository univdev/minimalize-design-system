import { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Theme } from "./Theme";

export interface ThemeProviderProps {
  children?: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <EmotionThemeProvider theme={Theme}>
      { children }
    </EmotionThemeProvider>
  );
}
