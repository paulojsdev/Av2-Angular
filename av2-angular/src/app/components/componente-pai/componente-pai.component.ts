// src/app/componente-pai/componente-pai.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css'],
})
export class ComponentePaiComponent {
  listaItens: string[] = ['Pera', 'Uva', 'Maçã', 'Salada Mista'];
}
