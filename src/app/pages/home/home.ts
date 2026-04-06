import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CursoService } from '../../services/curso';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private cursoService = inject(CursoService);

  modulos = this.cursoService.getModulos();
  totalAulas = computed(() => this.modulos.reduce((total, m) => total + m.aulas.length, 0));
}