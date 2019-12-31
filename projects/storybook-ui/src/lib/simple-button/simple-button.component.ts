import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-simple-button',
  template: `
    <button>{{text}}</button>
  `,
  styles: [``]
})
export class SimpleButtonComponent {

  @Input() text = 'clique aqui';
}
