import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { ObrasFavoritasComponent } from './obras-favoritas/obras-favoritas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ListaAutoresComponent,
    ObrasFavoritasComponent
  ],
  exports: [
    LoginComponent,
    ListaAutoresComponent,
    ObrasFavoritasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AutoresModule { }
