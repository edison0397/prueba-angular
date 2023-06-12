import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoresModule } from './autores/autores.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AutoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
