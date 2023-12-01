// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;
  loggedInEmail: string = '';

  onLoggedIn(isLoggedIn: boolean) {
    this.loggedIn = isLoggedIn;
    // Defina o e-mail apropriado ou recupere-o da lógica de autenticação
    this.loggedInEmail = 'usuario@teste.com';
  }
}
