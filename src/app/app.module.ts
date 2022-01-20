import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { ComponenteTresComponent } from './componente-tres/componente-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDosComponent,
    ComponenteTresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
