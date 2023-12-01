// form-login.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  email: string = '';
  password: string = '';
  authenticated: boolean = false;

  @Output() loggedIn = new EventEmitter<boolean>();

  login() {
    // Simulação de lógica de autenticação
    if (this.email === 'usuario@teste.com' && this.password === 'senha123') {
      this.authenticated = true;
      this.loggedIn.emit(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
}
