module.exports = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-jest",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-addon-designs",
    "storybook-addon-performance/register",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  // https://github.com/storybookjs/storybook/issues/15336
  typescript: {
    reactDocgen: false,
  },

  // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated---static-dir-cli-flag
  staticDirs: ["../public"],
};
