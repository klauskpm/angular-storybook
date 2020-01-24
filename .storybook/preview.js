import { addDecorator, addParameters } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);

addParameters({
  options: {
    showRoots: true,
  },
});
