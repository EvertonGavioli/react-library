module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs/register',
  ],
  webpackFinal: (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (
        String(rule.test) ===
        String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // webpackFinal: (config) => {
  //   // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
  //   const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
  //   fileLoaderRule.exclude = /\.svg$/;

  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     enforce: 'pre',
  //     loader: require.resolve('@svgr/webpack'),
  //   });

  //   return config;
  // },
};
