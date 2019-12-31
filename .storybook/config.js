import { configure } from '@storybook/angular';

configure([
  require.context('../src', true, /\.stories\.[tj]s$/),
  require.context('../projects', true, /\.stories\.[tj]s$/)
], module);
