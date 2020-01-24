import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-simple-button',
  template: `
    <button>{{text}}</button>
  `,
  styles: [``]
})
export class SimpleButtonComponent {

  /**
   * ViewChild que está vinculada a nada
   */
  @ViewChild('empty', { static: false })
  empty: TemplateRef<any>;

  /**
   * Output fake
   */
  @Output()
  clicked = new EventEmitter();

  /**
   * Input que define o texto apresentado no botão
   */
  @Input()
  text = 'clique aqui';

  /**
   * Método simples e público
   * @return void
   */
  public simpleMethod(): void {}

  /**
   * Método complexo e privado
   * @return string
   */
  private complexMethod(num1: number, num2: number): string {
    return '';
  }
}
