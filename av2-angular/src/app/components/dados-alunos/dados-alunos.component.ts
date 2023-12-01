// dados-alunos.component.ts
import { Component, OnInit } from '@angular/core';
import { DadosAlunosService } from './dados-alunos.service';

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private dadosAlunosService: DadosAlunosService) {}

  ngOnInit(): void {
    this.dadosAlunosService.getAlunos().subscribe((data) => {
      this.alunos = data;
      this.calcularMediasGlobais();
    });
  }

  calcularMediasGlobais(): void {
    this.alunos.forEach((aluno) => {
      const notas = Object.values(aluno.rendimentoEscolar);
      const mediaGlobal = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
      aluno.mediaGlobal = mediaGlobal.toFixed(1);
    });
  }
}
