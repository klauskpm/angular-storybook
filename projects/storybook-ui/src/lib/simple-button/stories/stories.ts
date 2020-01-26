import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { SimpleButtonComponent } from '../simple-button.component';

export const withDefaultValues = () => ({
  component: SimpleButtonComponent
});

export const withText = () => {
  return {
    template: `
        <ui-simple-button
          [text]="text"
          (click)="click($event)"
        ></ui-simple-button>
    `,
    props: {
      text: text('Text', 'Ola'),
      click: action('Clicou')
    }
  };
};
