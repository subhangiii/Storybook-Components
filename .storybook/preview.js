import "../styles/globals.css";
import * as NextImage from "next/image";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { withTests } from "@storybook/addon-jest";
import results from "../.jest-test-results.json";
import { withPerformance } from "storybook-addon-performance";
import { withDesign } from "storybook-addon-designs";
import { glazeThemeLight, glazeThemeDark } from "./themes";
import { ThemeProvider } from "next-themes";

// Initialize MSW
initialize();

// Provide the Design addon, Performance addon, MSW addon, Jest, Custom decorator to enable next-themes addon decorators globally
export const decorators = [
  withDesign,
  withPerformance,
  mswDecorator,
  withTests({
    results,
  }),
  (Story) => {
    return (
      <ThemeProvider attribute="class" forcedTheme="light">
        <Story />
      </ThemeProvider>
    );
  },
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    light: glazeThemeLight,
    dark: glazeThemeDark,
    stylePreview: true,
  },
};
