/** @type { import('@storybook/react').Preview } */
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { StorybookProvider } from '../src/StorybookProvider';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    Provider: StorybookProvider,
  })
];

export default preview;
