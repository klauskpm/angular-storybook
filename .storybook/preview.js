import { addDecorator, addParameters } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs";
import { setCompodocJson } from "@storybook/addon-docs/dist/frameworks/angular";

import docJson from '../documentation';

setCompodocJson(docJson);

addDecorator(withKnobs);

addParameters({
  options: {
    showRoots: true,
  },
});
