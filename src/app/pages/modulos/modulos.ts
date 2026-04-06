import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CursoService, Modulo } from '../../services/curso';

@Component({
  selector: 'app-modulos',
  imports: [RouterLink],
  templateUrl: './modulos.html',
  styleUrl: './modulos.css'
})
export class Modulos {
  modulos: Modulo[]

  constructor(private cursoService: CursoService) {
    this.modulos = this.cursoService.getModulos()
  }

  get iniciantes() {
    return this.modulos.filter(m => m.nivel === 'iniciante')
  }

  get intermediarios() {
    return this.modulos.filter(m => m.nivel === 'intermediario')
  }
}