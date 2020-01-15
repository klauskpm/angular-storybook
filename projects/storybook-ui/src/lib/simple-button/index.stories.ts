import { SimpleButtonComponent } from './simple-button.component';
import { text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI / Button',
  component: SimpleButtonComponent,
  decorators: [
    moduleMetadata({declarations: [SimpleButtonComponent]})
  ],
};

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
