import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './simple-button.component';



@NgModule({
  declarations: [SimpleButtonComponent],
  exports: [SimpleButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SimpleButtonModule { }
