import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CursoService, Modulo } from '../../services/curso';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  modulos: Modulo[]

  constructor(private cursoService: CursoService) {
    this.modulos = this.cursoService.getModulos()
  }

  get totalAulas(): number {
    return this.modulos.reduce((total, m) => total + m.aulas.length, 0)
  }
}