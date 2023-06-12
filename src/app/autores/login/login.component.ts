import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string ='';
  password: string='';
  emailIncorrecto: boolean = false;
  mensaje: string = '';

  constructor() { }

  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.emailIncorrecto = true;
      this.mensaje = 'Inicio de sesion correcto';
      
    } else {
      this.emailIncorrecto = false;
      this.mensaje = 'Datos incorrectos';
    }
    
  }
  
}
