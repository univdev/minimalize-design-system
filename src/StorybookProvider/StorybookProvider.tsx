import { FC, ReactNode } from "react";
import { ThemeProvider } from "../Theme/ThemeProvider";
import '../Styles/index';

export interface StorybookProviderProps {
  children: ReactNode;
}

export const StorybookProvider: FC<StorybookProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  );
};
