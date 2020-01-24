module.exports = {
  stories: [
    '../src/**/*.stories.(ts|js|mdx)',
    '../projects/**/*.stories.(ts|js|mdx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-actions'
  ]
};
