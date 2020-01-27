import { addDecorator, addParameters } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs";
import { setCompodocJson } from "@storybook/addon-docs/dist/frameworks/angular";

import docJson from '../documentation';

setCompodocJson(docJson);

addDecorator(withKnobs);

const contextPath = '!!raw-loader!../projects/storybook-ui/src/lib/design-system';

const createTokenFiles = (path, deep, filter) => {
  const requireContext = require.context(path, deep, filter);
  return requireContext
    .keys()
    .map(filename => ({ filename, content: requireContext(filename).default }));
};

const cssTokenFiles = createTokenFiles(contextPath, true, /.\.css$/);
const scssTokenFiles = createTokenFiles(contextPath, true, /.\.scss$/);
const lessTokenFiles = createTokenFiles(contextPath, true, /.\.less$/);
const svgIconTokenFiles = createTokenFiles(contextPath, true, /.\.svg$/);

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: 60
  },
  designToken: {
    files: {
      css: cssTokenFiles,
      scss: scssTokenFiles,
      less: lessTokenFiles,
      svgIcons: svgIconTokenFiles
    }
  },
});
