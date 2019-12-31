import { SimpleButtonComponent } from "./simple-button.component";

export default {
  title: 'UI | Button'
};

export const withDefaultValues = () => ({
  component: SimpleButtonComponent
});

export const withText = () => {

  return {
    component: SimpleButtonComponent,
    props: {
      text: 'Ola'
    }
  }
};
