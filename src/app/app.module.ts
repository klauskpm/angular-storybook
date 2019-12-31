import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleButtonModule } from 'storybook-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
