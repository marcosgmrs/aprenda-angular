import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-modulos',
  imports: [RouterLink],
  templateUrl: './modulos.html',
  styleUrl: './modulos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modulos {
  private cursoService = inject(CursoService);

  modulos = this.cursoService.getModulos();
  iniciantes = computed(() => this.modulos.filter(m => m.nivel === 'iniciante'));
  intermediarios = computed(() => this.modulos.filter(m => m.nivel === 'intermediario'));
}